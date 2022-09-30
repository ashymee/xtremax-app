import useHandler from "@utils/useHandler";
import useStore from "@utils/useStore";
import { motion } from "framer-motion";
import { BsX } from "react-icons/bs";

const FAQ = () => {
  const { setFaqOpened, faqOpened } = useStore();
  const { toggleStyle } = useHandler();

  return (
    <motion.div
      transition={{ duration: 0.25 }}
      initial={{ scale: 0 }}
      animate={{
        scale: toggleStyle({
          condition: faqOpened,
          ifTrue: 1,
          ifFalse: 0,
        }),
      }}
      className="fixed top-0 bottom-0 left-0 right-0 p-10 bg-gray_dark_deep/50 backdrop-blur-sm flex flex-col z-[9999]"
    >
      <div className="flex flex-col px-5 space-y-10 w-full h-full">
        <div className="flex-none flex justify-between">
          <div className="font-bold text-3xl text-white">FAQ</div>
          <button
            aria-label="FAQ Close Button"
            className="bg-white rounded-full w-10 h-10 flex items-center justify-center"
            onClick={() => setFaqOpened(false)}
          >
            <BsX className="text-2xl" />
          </button>
        </div>

        <div className="flex-1 bg-gray_dark_deep rounded-2xl w-full h-max p-5 text-white flex flex-col space-y-10">
          <div className="flex flex-col"></div>
        </div>
      </div>
    </motion.div>
  );
};

export default FAQ;
