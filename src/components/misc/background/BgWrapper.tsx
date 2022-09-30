import useHandler from "@utils/useHandler";
import useStore from "@utils/useStore";
import { motion } from "framer-motion";
import type { FC, ReactNode } from "react";

type BgWrapperProps = {
  condition?: boolean;
  children: ReactNode;
};

const BgWrapper: FC<BgWrapperProps> = ({ condition, children }) => {
  const { toggleStyle } = useHandler();
  const { menuActive } = useStore();

  return (
    <div className="w-full h-full flex items-center justify-center">
      <motion.div
        layout
        // transition={{ delay: 0.25 }}
        initial={{ scale: 0 }}
        animate={{
          scale: toggleStyle({
            condition:
              menuActive === "" || (condition !== undefined && condition),
            ifTrue: 1,
            ifFalse: 0,
          }),
        }}
        className="w-96 h-96 relative flex items-center justify-center opacity-10"
      >
        {children}
      </motion.div>
    </div>
  );
};

export default BgWrapper;
