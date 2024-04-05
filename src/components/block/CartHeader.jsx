import React from "react";
import PropTypes from "prop-types";

const CartHeader = ({ totalQuantity }) => {
  return (
    <div>
      <h1>Sepetim</h1>
      {totalQuantity === 0 && (
        <p className="font-bold text-indigo-800 text-lg">Sepetiniz Boş</p>
      )}
    </div>
  );
};

CartHeader.propTypes = {
  totalQuantity: PropTypes.number,
};

export default CartHeader;
