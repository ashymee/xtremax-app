import FAQ from "@components/misc/FAQ";
import SEO from "@components/misc/SEO";
import Settings from "@components/misc/Settings";
import constants from "@utils/constants";
import useStore from "@utils/useStore";
import type { BareComponent } from "index";
import type { FC } from "react";

import Dashboard from "./Dashboard";
import Menu from "./Menu";
import Navbar from "./Navbar";

const MainContent: FC<BareComponent> = ({ children }) => {
  const { menuActive } = useStore();

  return (
    <div className="w-screen h-screen">
      <SEO
        pageTitle={menuActive === "" ? "Home" : menuActive}
        description={constants.publicInfo.description}
      />

      <Settings />

      <FAQ />

      <div className="flex w-full h-full">
        <aside className="flex-none w-max flex">
          <Dashboard />

          <Menu />
        </aside>

        <div className="flex-1 w-full h-full flex flex-col">
          <Navbar />

          {children}
        </div>
      </div>
    </div>
  );
};

export default MainContent;
