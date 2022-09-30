import type { FC } from "react";
import SVGIcon from "src/assets/SVGIcon";

type MarkerSmallProps = {
  title: string;
};

const MarkerSmall: FC<MarkerSmallProps> = ({ title }) => {
  return (
    <div className="w-[154px] h-[71px] absolute bottom-0 -left-[16px]">
      <SVGIcon.MarkerSmallIcon />

      <span className="absolute top-[8px] left-[19px] w-max px-2 text-white font-myriadprosmbold text-[12px] bg-gray_dark h-[28px] flex items-center">
        {title}
      </span>
    </div>
  );
};

export default MarkerSmall;
