import React from "react";
import PropTypes from "prop-types";
import { formatPrice, calcDiscountedPrice } from "@/utils/helpers";
import Button from "@/components/base/Button";
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
  const cardCls = cn(
    "flex flex-col justify-around items-stretch gap-2",
    "rounded-lg bg-slate-50 p-4 text-slate-800 shadow-md hover:shadow-lg"
  );
  return (
    <div className={cardCls}>
      <img src={thumbnail} alt={title} className="h-48 mb-4 object-contain" />
      <p className="text-xs">{category}</p>
      <p className="text-lg font-bold tracking-tight leading-tight">{title}</p>
      <p className="text-md my-3 font-bold text-indigo-600 self-end">
        <span className="line-through text-sm text-slate-400 mr-4">
          {formatPrice(price)}
        </span>
        {calcDiscountedPrice(price, discountPercentage)}
      </p>
      <Button size="sm" className="self-center">
        Sepete Ekle
      </Button>
    </div>
  );
};

ProductCard.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  rating: PropTypes.number.isRequired,
  discountPercentage: PropTypes.number.isRequired,
  brand: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  thumbnail: PropTypes.string.isRequired,
  className: PropTypes.string,
};

export default ProductCard;
