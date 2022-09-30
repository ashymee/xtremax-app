import useHandler from "@utils/useHandler";
import useStore from "@utils/useStore";
import { motion } from "framer-motion";
import { BareComponent } from "index";
import { FC } from "react";

import MenuSwitcher from "./MenuSwitcher";

const Menu: FC<BareComponent> = () => {
  const { menuActive } = useStore();
  const { toggleStyle } = useHandler();

  return (
    <motion.div
      transition={{ duration: 0.25 }}
      initial={{ width: 0, paddingLeft: 0, paddingRight: 0 }}
      animate={{
        width: toggleStyle({
          condition: menuActive === "",
          ifTrue: 0,
          ifFalse: 350,
        }),
        paddingLeft: toggleStyle({
          condition: menuActive === "",
          ifTrue: 0,
          ifFalse: 25,
        }),
        paddingRight: toggleStyle({
          condition: menuActive === "",
          ifTrue: 0,
          ifFalse: 25,
        }),
      }}
      className={`h-full bg-gray_dark z-50 py-[40px]`}
      style={{
        boxShadow: "10px 0 10px #ccc",
      }}
    >
      <motion.div
        layout
        initial={{ opacity: 0 }}
        animate={{
          opacity: toggleStyle({
            condition: menuActive === "",
            ifTrue: "0",
            ifFalse: "1",
          }),
        }}
        transition={{ duration: 0.1 }}
        className="flex flex-col w-full h-full overflow-hidden"
      >
        <MenuSwitcher />
      </motion.div>
    </motion.div>
  );
};

export default Menu;
