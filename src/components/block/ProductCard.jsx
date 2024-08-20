import React from "react";
import PropTypes from "prop-types";
import { formatPrice, calcDiscountedPrice, slugify } from "@/utils/helpers";
import { useDispatch, useSelector } from "react-redux";
import { addItem, removeItem, clearItem } from "@/store/cartSlice";
import Button from "@/components/base/Button";
import Counter from "@/components/block/Counter";
import LinkBase from "@/components/base/LinkBase";
import { toast } from "react-toastify";
import cn from "classnames";

const ProductCard = ({
  id,
  title,
  price,
  rating,
  discountPercentage,
  brand,
  category,
  thumbnail,
  className,
}) => {
  const dispatch = useDispatch();

  const cartItems = useSelector((state) => state.cart.products);
  const productInCart = cartItems.find((item) => item.id === id);

  const discountedPrice = calcDiscountedPrice(price, discountPercentage, "int");

  const handleAddToCart = () => {
    dispatch(
      addItem({
        id,
        title,
        price,
        discountedPrice,
        thumbnail,
        quantity: 1,
      })
    );
    toast.success(`${title} Sepete Eklendi`);
  };

  const handleRemoveToCart = () => {
    dispatch(removeItem(id));
    toast(`${title} Sepetten çıkarıldı`, { theme: "colored" });
  };

  const handeClearItem = () => {
    dispatch(clearItem(id));
  };

  const cardCls = cn(
    "flex flex-col justify-around items-stretch gap-2",
    "rounded-lg bg-slate-50 p-4 text-slate-800 shadow-md hover:shadow-lg"
  );
  return (
    <div className={cardCls}>
      <LinkBase tag="link" to={`/product/${slugify(title)}/${id}`}>
        <img src={thumbnail} alt={title} className="h-48 mb-4 object-contain" />
      </LinkBase>

      <LinkBase tag="link" to={`/category/${category}`}>
        <p className="text-xs">{category}</p>
      </LinkBase>
      <LinkBase tag="link" to={`/product/${slugify(title)}/${id}`}>
        <p className="text-lg font-bold tracking-tight leading-tight">
          {title}
        </p>
      </LinkBase>

      <p className="text-md my-3 font-bold text-indigo-600 self-end">
        <span className="line-through text-sm text-slate-400 mr-4">
          {formatPrice(price)}
        </span>
        {formatPrice(discountedPrice)}
      </p>
      {!productInCart ? (
        <Button size="sm" className="self-center" onClick={handleAddToCart}>
          Sepete Ekle
        </Button>
      ) : (
        <Counter
          quantity={productInCart.quantity}
          onIncrease={handleAddToCart}
          onDecrease={handleRemoveToCart}
          onClearItem={handeClearItem}
        />
      )}
    </div>
  );
};

ProductCard.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  rating: PropTypes.number.isRequired,
  discountPercentage: PropTypes.number.isRequired,
  brand: PropTypes.string, // isRequired işareti kaldırıldı
  category: PropTypes.string.isRequired,
  thumbnail: PropTypes.string.isRequired,
  className: PropTypes.string,
};

export default ProductCard;
