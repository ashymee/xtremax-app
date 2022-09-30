import IconSwitcher from "@components/misc/IconSwitcher";
import constants from "@utils/constants";
import useFetcher from "@utils/useFetcher";
import useHandler from "@utils/useHandler";
import useStore from "@utils/useStore";
import { motion } from "framer-motion";
import { useEffect } from "react";

const Dashboard = () => {
  const { menuData, menuActive } = useStore();
  const { fetchMenu } = useFetcher();
  const { handleToggleMenu, toggleStyle } = useHandler();

  useEffect(() => {
    // fetch only when menuData is empty
    menuData.length < 1 && fetchMenu();
  }, [fetchMenu, menuData.length]);

  return (
    <div className="dashboard__container">
      {menuData.map((item, index) => (
        <motion.div
          whileTap={{ scale: 0.8 }}
          key={index}
          className={`dashboard__item ${toggleStyle({
            condition: menuActive === item.title,
            ifTrue: "active",
            ifFalse: "disabled",
          })}`}
          onClick={() => handleToggleMenu(item.title)}
        >
          <div className="dashboard__child">
            <div className="w-11 h-11 relative p-[3px]">
              <IconSwitcher
                type={item.title}
                fill={toggleStyle({
                  condition: menuActive === item.title,
                  ifTrue: "#FFF",
                  ifFalse: constants.colors.gray_light,
                })}
              />
            </div>
            <span>{item.title}</span>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default Dashboard;
