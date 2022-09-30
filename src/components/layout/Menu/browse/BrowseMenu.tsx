import useHandler from "@utils/useHandler";
import useStore from "@utils/useStore";
import { motion } from "framer-motion";
import { Fragment } from "react";
import { RiArrowDownSFill } from "react-icons/ri";

import CityName from "./CityName";

const BrowseMenu = () => {
  const { getCities, toggleStyle } = useHandler();
  const { expanded } = useStore();

  return (
    <Fragment>
      <form
        className={`flex-none h-[86px] mb-[9px] border-b border-gray_dark_deep custom-select`}
      >
        <label htmlFor="search">
          <select
            id="search"
            className={`w-full h-[41px] pl-[35.3px] border border-gray_dark_deep bg-transparent text-gray_calm font-robotoreg`}
          >
            <option value="">Filter by favorite</option>
            <option value="" disabled>
              Filter by name
            </option>
          </select>
        </label>
      </form>

      <motion.ul
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.25 }}
        className="flex-1 w-full overflow-y-scroll scrollbar-hide"
      >
        {getCities &&
          getCities.map((city) => (
            <motion.li
              key={city.id}
              className={`w-full min-h-[60px] flex items-center border-b border-gray_dark_deep text-white font-robotomed text-[16px] cursor-pointer duration-300 ${toggleStyle(
                {
                  condition: city.mostVisited !== undefined,
                  ifTrue: "flex-col",
                  ifFalse: "",
                }
              )}`}
            >
              {!city.mostVisited ? (
                <CityName city={city} />
              ) : (
                <Fragment>
                  <div
                    className={`flex items-center justify-between w-full pr-3 ${toggleStyle(
                      {
                        condition: expanded.id === city.id,
                        ifTrue: `bg-gray_darkness text-green_leaves`,
                        ifFalse: "hover:bg-gray-900/30",
                      }
                    )}`}
                  >
                    <CityName city={city} hasChild />

                    <RiArrowDownSFill
                      color="#A9ABAF"
                      className={`duration-300 text-2xl ${toggleStyle({
                        condition: expanded.id === city.id,
                        ifTrue: "rotate-180",
                        ifFalse: "",
                      })}`}
                    />
                  </div>

                  <motion.ul
                    initial={{ height: 0, zIndex: -10 }}
                    animate={{
                      height: expanded.id === city.id ? "max-content" : 0,
                      zIndex: expanded.id === city.id ? 1 : -10,
                    }}
                    className={`w-full pl-[54.4px] text-gray_calm font-robotoreg overflow-hidden`}
                  >
                    {city.mostVisited.map((location) => (
                      <li
                        key={location.id}
                        className="w-full h-[40px] flex items-center"
                      >
                        {location.name}
                      </li>
                    ))}
                  </motion.ul>
                </Fragment>
              )}
            </motion.li>
          ))}
      </motion.ul>
    </Fragment>
  );
};

export default BrowseMenu;
