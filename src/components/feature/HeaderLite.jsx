import React from "react";

import Logo from "@/components/base/Logo";

const HeaderLite = () => {
  return (
    <header className="mb-4 sticky top-0">
      <div className="flex justify-center items-center bg-primary-dark py-4">
        <Logo />
      </div>
    </header>
  );
};

export default HeaderLite;
