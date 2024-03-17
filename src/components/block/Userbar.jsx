import { useSelector, useDispatch } from "react-redux";
import { logout } from "@/store/authSlice";
import LinkBase from "@/components/base/LinkBase";

const Userbar = () => {
  const user = useSelector((state) => state.auth.user);
  const dispatch = useDispatch();

  const linkCls =
    "text-slate-50 hover:text-slate-300 transition duration-300 ease-in-out";

  return (
    <div className="flex gap-4">
      {user ? (
        <>
          <LinkBase tag="link" to="/cart" className={linkCls}>
            Sepetim
          </LinkBase>
          <LinkBase
            className={linkCls}
            tag="div"
            onClick={() => dispatch(logout())}
          >
            Çıkış Yap
          </LinkBase>
        </>
      ) : (
        <LinkBase className={linkCls} tag="link" to="/login">
          Giriş Yap
        </LinkBase>
      )}
    </div>
  );
};

export default Userbar;
