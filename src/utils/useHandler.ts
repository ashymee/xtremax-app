import type { ICity, IDashboardTitle, IToggleStyle } from "index";
import { useMemo } from "react";

import useStore from "./useStore";

const useHandler = () => {
  const {
    setMenuActive,
    menuData,
    expanded,
    setExpanded,
    biggerIcon,
    setBiggerIcon,
    setZoomDefault,
  } = useStore();

  /* ------------------------------------------------------------------------ */

  /**
   * @description
   * to toggling menu when user clicked the title/icon on dashboard
   */
  const handleToggleMenu = (title: IDashboardTitle | "") => {
    /* 
    // if menuActive = title toggled the menu
    if (menuActive === "") {
      setMenuActive(title);
    } else {
      // switch list of menu for each main menu in dashboard
      menuActive === title ? setMenuActive("") : setMenuActive(title);
    }
    */
    setMenuActive(title);
  };

  /* ------------------------------------------------------------------------ */

  /**
   * @description
   * to toggling menu when user clicked the title/icon on dashboard
   */
  // const handleToggleExpanded = (name: string) => {
  //   // if menuActive = name toggled the menu
  //   if (expanded === "") {
  //     setExpanded(name);
  //   } else {
  //     // switch list of menu for each main menu in dashboard
  //     expanded === name ? setExpanded("") : setExpanded(name);
  //   }
  // };

  /* ------------------------------------------------------------------------ */

  /**
   * @description
   * to toggling style more easy
   */
  const toggleStyle = <T>({ condition, ifTrue, ifFalse }: IToggleStyle<T>) => {
    if (condition) return ifTrue;

    return ifFalse;
  };

  const getCities = useMemo(() => {
    const data = menuData.find((a) => a.title === "Browse");

    if (data) return data.cities;
    return null;
  }, [menuData]);

  // const handleMouseEnterIcon = () => {
  //   biggerIcon.event === "clicked" && biggerIcon.toggled
  //     ? setBiggerIcon({ ...biggerIcon })
  //     : setBiggerIcon({ event: "hover", toggled: true });
  // };

  // const handleMouseLeaveIcon = () => {
  //   if (biggerIcon.event === "hover" && biggerIcon.toggled)
  //     setBiggerIcon({ event: "", toggled: false });
  //   else if (biggerIcon.event === "clicked" && biggerIcon.toggled)
  //     setBiggerIcon({ ...biggerIcon });
  //   else setBiggerIcon({ event: "", toggled: false });
  // };

  const handleClickedIcon = (city: ICity) => {
    if (expanded.id === "") {
      setExpanded({ ...city });
      setBiggerIcon({
        id: city.id,
        event: "hover",
        toggled: true,
        detailIsShown: true,
      });
      setZoomDefault(17);
    } else {
      if (expanded.id === city.id) {
        if (biggerIcon.id === "") {
          setBiggerIcon({
            id: city.id,
            event: "clicked",
            toggled: true,
            detailIsShown: true,
          });
          setZoomDefault(17);
        } else {
          setBiggerIcon({
            id: "",
            event: "",
            toggled: false,
            detailIsShown: undefined,
          });
          setZoomDefault(15);
        }
      } else {
        setZoomDefault(17);
        setExpanded({ ...city });
        setBiggerIcon({
          id: city.id,
          event: "clicked",
          toggled: true,
          detailIsShown: true,
        });
      }
    }
  };

  return {
    handleToggleMenu,
    // handleToggleExpanded,
    toggleStyle,
    getCities,
    // handleMouseEnterIcon,
    // handleMouseLeaveIcon,
    handleClickedIcon,
  };
};

export default useHandler;
