import useStore from "@utils/useStore";
import SVGIcon from "src/assets/SVGIcon";

import BgWrapper from "./BgWrapper";

const VideosBackground = () => {
  const { menuActive } = useStore();

  return (
    <BgWrapper condition={menuActive === "Videos"}>
      <SVGIcon.Videos />
    </BgWrapper>
  );
};

export default VideosBackground;
