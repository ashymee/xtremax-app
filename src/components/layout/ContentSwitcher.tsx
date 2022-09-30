import Background from "@components/misc/background";
import useStore from "@utils/useStore";
import dynamic from "next/dynamic";

import Detail from "./Menu/browse/Detail";

const Map = dynamic(() => import("@components/misc/Map"), {
  ssr: false,
});

const ContentSwitcher = () => {
  const { menuActive } = useStore();

  switch (menuActive) {
    case "About":
      return <Background.About />;
    case "Blog":
      return <Background.Blog />;
    case "Browse":
      return (
        <div className="flex-1 w-full h-full flex">
          <Map />
          <Detail />
        </div>
      );
    case "Suggest Attraction":
      return <Background.Suggest />;
    case "Videos":
      return <Background.Videos />;
    default:
      return <Background.Singapore />;
  }
};

export default ContentSwitcher;
