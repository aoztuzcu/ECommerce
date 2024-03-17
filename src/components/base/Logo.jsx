import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Logo = (props) => {
  return (
    <Link id="logo" to="/" className="text-2xl font-bold">
      SHOP
    </Link>
  );
};

Logo.propTypes = {};

export default Logo;
