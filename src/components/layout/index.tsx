import type { BareComponent } from "index";
import type { FC } from "react";

import Footer from "./Footer";
import Header from "./Header";

const Wrapper: FC<BareComponent> = ({ children }) => {
  return (
    <div className="w-screen h-screen space-y-5">
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default Wrapper;
