import type {
  IBiggerIcon,
  IDashboardTitle,
  IDetailToggled,
  IExpanded,
  IMenu,
} from "index";
import { create } from "zustand";

import constants from "./constants";

type StoreProps = {
  menuActive: IDashboardTitle | "";
  setMenuActive: (menuActive: IDashboardTitle | "") => void;

  menuData: IMenu[];
  setMenuData: (menuData: IMenu[]) => void;

  detailToggled: IDetailToggled;
  setDetailToggled: (detailToggled: IDetailToggled) => void;

  zoomDefault: number;
  setZoomDefault: (zoomDefault: number) => void;

  expanded: IExpanded;
  setExpanded: (expanded: IExpanded) => void;

  biggerIcon: IBiggerIcon;
  setBiggerIcon: (biggerIcon: IBiggerIcon) => void;

  settingsOpened: boolean;
  setSettingsOpened: (settingsOpened: boolean) => void;

  faqOpened: boolean;
  setFaqOpened: (faqOpened: boolean) => void;
};

const useStore = create<StoreProps>((set) => ({
  menuActive: "Browse",
  setMenuActive: (menuActive) => set((state) => ({ ...state, menuActive })),

  menuData: [],
  setMenuData: (menuData) => set((state) => ({ ...state, menuData })),

  detailToggled: false,
  setDetailToggled: (detailToggled) =>
    set((state) => ({ ...state, detailToggled })),

  zoomDefault: 15,
  setZoomDefault: (zoomDefault) => set((state) => ({ ...state, zoomDefault })),

  expanded: constants.expanded_initial,
  setExpanded: (expanded) => set((state) => ({ ...state, expanded })),

  biggerIcon: {
    event: "hover",
    toggled: false,
    id: "",
  },
  setBiggerIcon: (biggerIcon) => set((state) => ({ ...state, biggerIcon })),

  settingsOpened: false,
  setSettingsOpened: (settingsOpened) =>
    set((state) => ({ ...state, settingsOpened })),

  faqOpened: false,
  setFaqOpened: (faqOpened) => set((state) => ({ ...state, faqOpened })),
}));

export default useStore;
