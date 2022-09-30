import type { IDashboardTitle } from "index";
import type { FC } from "react";
import SVGIcon from "src/assets/SVGIcon";

type IconSwitcherProps = {
  type: IDashboardTitle;
  fill: string;
};

const IconSwitcher: FC<IconSwitcherProps> = ({ type, fill }) => {
  switch (type) {
    case "About":
      return <SVGIcon.About fill={fill} />;

    case "Blog":
      return <SVGIcon.Blog fill={fill} />;

    case "Browse":
      return <SVGIcon.Browse fill={fill} />;

    case "Videos":
      return <SVGIcon.Videos fill={fill} />;

    case "Suggest Attraction":
      return <SVGIcon.SuggestAttraction fill={fill} />;

    default:
      return null;
  }
};

export default IconSwitcher;
