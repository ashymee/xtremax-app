import useStore from "@utils/useStore";
import SVGIcon from "src/assets/SVGIcon";

import BgWrapper from "./BgWrapper";

const BlogBackground = () => {
  const { menuActive } = useStore();

  return (
    <BgWrapper condition={menuActive === "Blog"}>
      <SVGIcon.Blog />
    </BgWrapper>
  );
};

export default BlogBackground;
