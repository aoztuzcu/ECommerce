import { Outlet } from "react-router-dom";
import Header from "@/components/feature/Header";
import Footer from "@/components/feature/Footer";

const BaseLayout = ({ children }) => {
  return (
    <main className="flex flex-col min-h-screen justify-between">
      <Header />
      <Outlet />
      {children}
      <Footer />
    </main>
  );
};
export default BaseLayout;
