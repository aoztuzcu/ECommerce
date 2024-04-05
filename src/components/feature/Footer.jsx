import React from "react";
import { navbarItems, socialItems, topBarItems } from "@/utils/constants";
import { Link } from "react-router-dom";

const Footer = () => {
  const ulCls = "flex items-center gap-4";
  const linkCls =
    "text-slate-50 hover:text-slate-300 transition duration-300 ease-in-out";

  return (
    <footer className="bg-primary-dark py-10 mt-2">
      <div className="container">
        <section className="flex items-center justify-between gap-6 flex-col">
          <ul className={ulCls}>
            {topBarItems.map((item, index) => (
              <li key={index}>
                <Link className={linkCls} to={item.to}>
                  {item.text}
                </Link>
              </li>
            ))}
          </ul>
          <ul className={ulCls}>
            {navbarItems.map((item, index) => (
              <li key={index}>
                <Link className={linkCls} to={item.to}>
                  {item.text}
                </Link>
              </li>
            ))}
          </ul>
          <ul className={ulCls}>
            {socialItems.map((item, index) => (
              <li key={index}>
                <Link className={linkCls} to={item.to}>
                  {item.text}
                </Link>
              </li>
            ))}
          </ul>
        </section>
        <p className="py-4 text-center text-slate-400">
          &copy; 2024 All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
