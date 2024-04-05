import React from "react";
import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import { formatPrice } from "@/utils/helpers";
import Counter from "@/components/block/Counter";

const CartTable = () => {
  const dispatch = useDispatch();
  const { products } = useSelector((state) => state.cart);

  const handleAddToCart = (product) => {
    dispatch(addItem(product));
  };
  const handleRemoveToCart = (id) => {
    dispatch(removeItem(id));
  };
  const handleClearItem = (id) => {
    dispatch(clearItem(id));
  };

  return (
    <table className="w-full md:col-span-3">
      <tbody>
        {products &&
          products.map((item) => {
            return (
              <tr key={item.id}>
                <td className="py-4 w-2/5">
                  <div className="flex items-center gap-4">
                    <img src={item.thumbnail} alt={item.title} width={120} />
                    <div> {item.title}</div>
                  </div>
                </td>

                <td className="px-4 w-1/5 text-right ">
                  <span className="line-through text-slate-500 text-sm mr-2">
                    {formatPrice(item.price)}
                  </span>
                  <span className=" w-1/5 text-green-900 text-sm">
                    {formatPrice(item.discountedPrice)}
                  </span>
                </td>
                <td className="w-1/5">
                  <Counter
                    quantity={item.quantity}
                    onIncrease={() => handleAddToCart(item)}
                    onDecrease={() => handleRemoveToCart(item.id)}
                    onClearItem={() => handleClearItem(item.id)}
                  />
                </td>
                <td className="text-right w-1/5 text-green-900 text-lg font-semibold">
                  {formatPrice(item.discountedPrice * item.quantity)}
                </td>
              </tr>
            );
          })}
      </tbody>
    </table>
  );
};

CartTable.propTypes = {};

export default CartTable;
