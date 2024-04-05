import React from "react";
import Navbar from "@/components/block/Navbar";
import Searchbar from "@/components/block/Searchbar";
import Topbar from "@/components/block/Topbar";
import Logo from "@/components/base/Logo";
import Userbar from "@/components/block/Userbar";

const Header = () => {
  return (
    <header className="mb-4 sticky top-0 z-30">
      <Topbar />
      <section className="flex justify-center items-center gap-4 bg-primary py-4 relative z-20">
        <Logo />
        <Searchbar />
        <Userbar />
      </section>
      <Navbar />
    </header>
  );
};
Header.propTypes = {};
export default Header;
