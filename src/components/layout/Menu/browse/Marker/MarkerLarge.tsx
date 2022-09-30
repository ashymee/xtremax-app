import type { FC } from "react";
import SVGIcon from "src/assets/SVGIcon";

type MarkerLargeProps = {
  title: string;
  address: string;
};

const MarkerLarge: FC<MarkerLargeProps> = ({ title, address }) => {
  return (
    <div className="w-max h-[172px] absolute bottom-0 -left-[48px]">
      <SVGIcon.MarkerLargeIcon />

      <div className="absolute top-2 left-10 pt-2 right-1 h-[88px] text-white text-left overflow-hidden">
        <div className="font-myriadprosmbold text-[20px] leading-5 mb-2">
          {title}
        </div>

        <div className="font-myriadproreg text-[14px] leading-4">{address}</div>
      </div>
    </div>
  );
};

export default MarkerLarge;
