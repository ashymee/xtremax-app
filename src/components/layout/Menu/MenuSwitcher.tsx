import useStore from "@utils/useStore";

import BrowseMenu from "./browse/BrowseMenu";

const MenuSwitcher = () => {
  const { menuActive } = useStore();

  switch (menuActive) {
    case "About":
      return <div className="text-white uppercase text-center">About</div>;
    case "Blog":
      return <div className="text-white uppercase text-center">Blog</div>;
    case "Browse":
      return <BrowseMenu />;
    case "Suggest Attraction":
      return (
        <div className="text-white uppercase text-center">
          Suggest Attraction
        </div>
      );
    case "Videos":
      return <div className="text-white uppercase text-center">Videos</div>;
    default:
      return null;
  }
};

export default MenuSwitcher;
