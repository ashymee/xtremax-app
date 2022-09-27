import constants from "@utils/constants";
import type { SEOProps } from "index";
import Head from "next/head";
import type { FC } from "react";

const SEO: FC<SEOProps> = ({ pageTitle, description }) => {
  return (
    <Head>
      <title>{`${constants.publicInfo.appName} | ${pageTitle}`}</title>
      <meta name="description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={constants.publicInfo.appName} />
      <meta property="og:description" content={description} />
      <meta property="og:site_name" content={pageTitle} />
      <meta property="twitter:card" content="summary" />
      {/* <meta property="twitter:creator" content={social.twitter} /> */}
      <meta property="twitter:title" content={constants.publicInfo.appName} />
      <meta property="twitter:description" content={description} />
      <meta name="apple-mobile-web-app-title" content={description} />

      {/* <meta name='twitter:url' content='https://yourdomain.com' /> */}
      {/* <meta name='twitter:image' content='https://yourdomain.com/icons/android-chrome-192x192.png' /> */}
      {/* <meta property='og:url' content='https://yourdomain.com' /> */}
      {/* <meta property='og:image' content='https://yourdomain.com/icons/apple-touch-icon.png' /> */}
    </Head>
  );
};

export default SEO;
