import "@styles/globals.css";

import axios from "axios";
import { AnimatePresence } from "framer-motion";
import type { AppProps } from "next/app";

axios.defaults.baseURL = "http://localhost:3000/assets/data";

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <AnimatePresence initial>
      <Component {...pageProps} />
    </AnimatePresence>
  );
};

export default MyApp;
