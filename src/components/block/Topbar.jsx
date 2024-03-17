import React from "react";
import { Link } from "react-router-dom";
import { socialItems, topBarItems } from "@/utils/constants";

const Topbar = () => {
  const linkItemCls = "hover:text-slate-50 ";

  return (
    <div className="relative z-20 py-2 bg-primary-dark">
      <div className="container">
        <ul className="flex justify-end gap-4 text-slate-300 text-xs">
          {topBarItems.map((item, index) => (
            <li key={index}>
              <Link to={item.to} className={linkItemCls}>
                {item.text}
              </Link>
            </li>
          ))}
          <li className="mx-6 border-r border-slate-50" />
          {socialItems.map((item, index) => (
            <li key={index}>
              <Link to={item.to} className={linkItemCls}>
                {item.text}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Topbar;
