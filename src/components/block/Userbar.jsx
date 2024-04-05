import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "@/store/authSlice";
import LinkBase from "@/components/base/LinkBase";
import { clearCart } from "@/store/cartSlice";

const Userbar = () => {
  const user = useSelector((state) => state.auth.user);
  const totalQuantity = useSelector((state) => state.cart.totalQuantity);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const linkCls =
    "text-slate-50 hover:text-slate-300 transition duration-300 ease-in-out relative";

  const handleLogout = () => {
    dispatch(logout());
    dispatch(clearCart());
    navigate("/");
  };

  return (
    <div className="flex gap-10">
      <LinkBase tag="link" to="/cart" className={linkCls}>
        Sepetim
        {totalQuantity > 0 && (
          <span className="rounded-full absolute bg-primary-dark text-white px-2 py-1 text-xs font-bold right-0 translate-x-full">
            {totalQuantity}
          </span>
        )}
      </LinkBase>
      {user ? (
        <LinkBase className={linkCls} tag="div" onClick={handleLogout}>
          Çıkış Yap
        </LinkBase>
      ) : (
        <LinkBase className={linkCls} tag="link" to="/login">
          Giriş Yap
        </LinkBase>
      )}
    </div>
  );
};

export default Userbar;
