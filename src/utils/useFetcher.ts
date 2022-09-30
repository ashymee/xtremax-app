import axios from "axios";
import { IMenu } from "index";
import { useCallback } from "react";

import useStore from "./useStore";

const useFetcher = () => {
  const { setMenuData } = useStore();

  const fetchMenu = useCallback(async () => {
    try {
      const response = await axios("/menu.json").then(
        ({ data }: { data: IMenu[] }) => data
      );
      response && setMenuData(response);
    } catch (error) {
      console.error(`Something went wrong: ${(error as Error).message}`);
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return {
    fetchMenu,
  };
};

export default useFetcher;
