import CartGuard from "@/hoc/CartGuard";
import BaseLayout from "./BaseLayout";

const CartLayout = ({ children }) => {
  return (
    <BaseLayout>
      <CartGuard>{children}</CartGuard>
    </BaseLayout>
  );
};
export default CartLayout;
