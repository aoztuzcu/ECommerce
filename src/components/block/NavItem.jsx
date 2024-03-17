import { Link } from "react-router-dom";
import cn from "classnames";

const NavItem = ({ to, children, onMouseEnter }) => {
  const cls = cn(
    "px-4 py-2 text-slate-50  border-b-2 border-transparent",
    "hover:text-slate-300 hover:border-slate-300",
    "transition duration-300 ease-in-out"
  );

  return (
    <li className="text-md my-1" onMouseEnter={onMouseEnter}>
      <Link to={to} className={cls}>
        {children}
      </Link>
    </li>
  );
};
export default NavItem;
