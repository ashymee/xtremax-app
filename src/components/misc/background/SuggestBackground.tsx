import useStore from "@utils/useStore";
import SVGIcon from "src/assets/SVGIcon";

import BgWrapper from "./BgWrapper";

const SuggestBackground = () => {
  const { menuActive } = useStore();

  return (
    <BgWrapper condition={menuActive === "Suggest Attraction"}>
      <SVGIcon.SuggestAttraction />
    </BgWrapper>
  );
};

export default SuggestBackground;
