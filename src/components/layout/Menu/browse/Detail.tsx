import useHandler from "@utils/useHandler";
import useStore from "@utils/useStore";
import { motion } from "framer-motion";
import Image from "next/image";
import { FaGlobeAmericas, FaMapMarkerAlt } from "react-icons/fa";

const Detail = () => {
  const { biggerIcon, expanded } = useStore();
  const { toggleStyle } = useHandler();

  return (
    <motion.div
      transition={{
        delay: toggleStyle({
          condition: biggerIcon.detailIsShown !== undefined,
          ifTrue: 1,
          ifFalse: 0.25,
        }),
      }}
      initial={{ right: -450 }}
      animate={{
        right: toggleStyle({
          condition: biggerIcon.detailIsShown !== undefined,
          ifTrue: 0,
          ifFalse: -450,
        }),
      }}
      className="flex-none w-[350px] h-full bg-gray_darken flex flex-col text-white z-[9999999] fixed top-[125px] bottom-0"
      style={{
        boxShadow: "-10px 5px 10px #33333380",
      }}
    >
      {/* Image */}
      <div className="flex-none w-full h-[240px] relative">
        <Image
          alt={`Image ${expanded.name}`}
          src={expanded.image}
          layout="fill"
          priority
        />
      </div>

      {/* Title */}
      <div className="flex-none w-full h-[50px] flex items-center bg-sky_light pl-[35.1px]">
        <h1 className="font-myriadprosmbold text-[24px]">{expanded.name}</h1>
      </div>

      {/* Detail */}
      <div className="flex-1 px-[35.1px] pt-[26px] flex flex-col space-y-[43px]">
        {/* Description */}
        <p>{expanded.description}</p>

        {/* Address */}
        <div className="flex space-x-2 items-center">
          <FaMapMarkerAlt className="text-sky_light mb-auto mt-[5px]" />
          <p>{expanded.address}</p>
        </div>

        {/* Website */}
        <div className="flex space-x-2 items-center">
          <FaGlobeAmericas className="text-green_lime mb-auto mt-[5px]" />
          <p>{expanded.address}</p>
        </div>
      </div>
    </motion.div>
  );
};

export default Detail;
