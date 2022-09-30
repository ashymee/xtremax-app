import "@styles/globals.css";

import constants from "@utils/constants";
import axios from "axios";
import { AnimatePresence } from "framer-motion";
import type { AppProps } from "next/app";

axios.defaults.baseURL = `${constants.publicInfo.baseURL}/assets/data`;

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <AnimatePresence initial>
      <Component {...pageProps} />
    </AnimatePresence>
  );
};

export default MyApp;
