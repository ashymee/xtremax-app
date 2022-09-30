import constants from "@utils/constants";
import useHandler from "@utils/useHandler";
import useStore from "@utils/useStore";
import { motion } from "framer-motion";
import SVGIcon from "src/assets/SVGIcon";

const Navbar = () => {
  const {
    expanded,
    biggerIcon,
    zoomDefault,
    setBiggerIcon,
    setZoomDefault,
    setSettingsOpened,
    setFaqOpened,
  } = useStore();
  const { toggleStyle } = useHandler();

  const detailIsShown =
    expanded.id === biggerIcon.id &&
    biggerIcon.detailIsShown !== undefined &&
    zoomDefault === 17;

  return (
    <nav
      className={`flex-none w-full h-[125px] bg-white_smoke pl-[49.4px] pr-[55px] flex items-center justify-between`}
    >
      <h1 className={`uppercase text-2xl font-robotoblack text-gray_dark`}>
        top-rated tourist attractions in singapore
      </h1>

      <div className="flex items-center justify-center h-max">
        <button
          aria-label="Settings Toggle Button"
          className="w-[33.34px] h-[33.34px] mr-[20px]"
          onClick={() => setSettingsOpened(true)}
        >
          <SVGIcon.Gear fill={constants.colors.gray_light_med} />
        </button>
        <button
          aria-label="FAQ Toggle Button"
          className="w-[33.34px] h-[33.34px] mr-[20px]"
          onClick={() => setFaqOpened(true)}
        >
          <SVGIcon.Question fill={constants.colors.gray_light_med} />
        </button>
        <motion.button
          aria-label="Detail Close Button"
          transition={{ duration: 0.25 }}
          initial={{ opacity: 0, scale: 0 }}
          animate={{
            opacity: toggleStyle({
              condition: detailIsShown,
              ifTrue: 1,
              ifFalse: 0,
            }),
            scale: toggleStyle({
              condition: detailIsShown,
              ifTrue: 1,
              ifFalse: 0,
            }),
          }}
          className="w-[33.34px] h-[33.34px] mr-[20px]"
          onClick={() => {
            setBiggerIcon({
              id: "",
              event: "",
              toggled: false,
              detailIsShown: undefined,
            });
            setZoomDefault(15);
          }}
        >
          <SVGIcon.Close fill={constants.colors.gray_light_med} />
        </motion.button>
      </div>
    </nav>
  );
};

export default Navbar;
