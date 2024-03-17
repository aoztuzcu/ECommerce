import Proptypes from "prop-types";
import { createElement } from "react";
import { Link } from "react-router-dom";
import cn from "classnames";

const LinkBase = ({ tag, className, ...props }) => {
  const hasHref = props.href;
  let element = tag;
  const cls = cn(className, { "cursor-pointer": tag === "div" });

  switch (tag) {
    case "link":
      element = Link;
      break;
    case hasHref:
      element = "a";
      break;
    default:
      break;
  }

  return createElement(element, { ...props, className: cls });
};
LinkBase.defaultProps = {
  tag: "div",
};
LinkBase.Proptypes = {
  tag: Proptypes.oneOf(["a", "div", "span", "button", "link"]),
  classNames: Proptypes.string,
  href: Proptypes.string,
};
export default LinkBase;
