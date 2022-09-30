import useStore from "@utils/useStore";
import SVGIcon from "src/assets/SVGIcon";

import BgWrapper from "./BgWrapper";

const AboutBackground = () => {
  const { menuActive } = useStore();

  return (
    <BgWrapper condition={menuActive === "About"}>
      <SVGIcon.About />
    </BgWrapper>
  );
};

export default AboutBackground;
