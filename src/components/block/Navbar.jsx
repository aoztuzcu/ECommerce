import { useState, useEffect } from "react";
import NavItem from "./NavItem";
import { getCategories } from "@/utils/request";
import { unSlugify } from "@/utils/helpers";
import { Link } from "react-router-dom";
import cn from "classnames";
import { navbarItems } from "@/utils/constants";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getCategories().then((data) => {
      setCategories(data);
    });
  }, []);

  const subNavCls = cn(
    "absolute left-0 top-0 z-10 w-full bg-slate-50 p-6 shadow-xl",
    "opacity-0 -translate-y-full transition-all will-change-auto duration-500 ease-in-out",
    { "opacity-100 translate-y-0 top-14": isOpen }
  );

  const subNavItemCls = cn(
    "block border-b border-transparent p-2 text-slate-500",
    "hover:border-slate-400 hover:text-slate-900",
    "transition duration-300 ease-in-out"
  );

  return (
    <nav className="relative">
      <div className="relative z-20 bg-primary-dark">
        <ul className="flex items-center justify-center gap-4 py-3">
          <NavItem to="/" onMouseEnter={() => setIsOpen(true)}>
            Kategoriler
          </NavItem>
          {navbarItems.map((item, index) => (
            <NavItem key={index} to={item.to}>
              {item.text}
            </NavItem>
          ))}
        </ul>
      </div>

      <div className={subNavCls} onMouseLeave={() => setIsOpen(false)}>
        <ul className="max-w-3xl mx-auto flex justify-center items-center flex-wrap gap-x-4 py-4">
          {categories.map((cat, index) => {
            // Kategorinin bir nesne olup olmadığını kontrol edin ve uygun özelliği render edin
            if (typeof cat === "object" && cat !== null) {
              const { slug, name, url } = cat; // Nesneden gerekli özellikleri alın
              const to = `/category/${slug}`; // slug veya uygun bir özellik kullanarak yol oluşturun
              return (
                <li key={index}>
                  <Link to={to} className={subNavItemCls}>
                    {unSlugify(slug) || name}{" "}
                    {/* Nesnenin uygun özelliğini render edin */}
                  </Link>
                </li>
              );
            } else {
              console.error(
                `Category at index ${index} is not an object:`,
                cat
              );
              return null; // Nesne olmayan kategorileri atlayın
            }
          })}
        </ul>
      </div>
    </nav>
  );
};
export default Navbar;
