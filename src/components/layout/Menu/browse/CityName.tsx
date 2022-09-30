import useHandler from "@utils/useHandler";
import useStore from "@utils/useStore";
import { ICity } from "index";
import type { FC } from "react";

type CityNameProps = {
  city: ICity;
  hasChild?: boolean;
};

const CityName: FC<CityNameProps> = ({ city, hasChild }) => {
  const { expanded, biggerIcon } = useStore();
  const { toggleStyle, handleClickedIcon } = useHandler();

  return (
    <span
      className={`w-full h-[40px] pl-[35.3px] flex items-center ${
        hasChild ? "mr-3" : ""
      } ${toggleStyle({
        condition:
          expanded.id === city.id &&
          biggerIcon.id === city.id &&
          biggerIcon.event === "clicked",
        ifTrue: `bg-gray_darkness text-green_leaves`,
        ifFalse: "hover:bg-gray-900/30",
      })}`}
      onClick={() => handleClickedIcon(city)}
    >
      {city.name}
    </span>
  );
};

export default CityName;
