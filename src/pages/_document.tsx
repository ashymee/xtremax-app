// import * as PusherPushNotifications from '@pusher/push-notifications-web';

import constants from "@utils/constants";
import type { DocumentContext } from "next/document";
import Document, { Head, Html, Main, NextScript } from "next/document";

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html data-theme="dark" lang="en">
        <Head>
          <meta
            name="application-name"
            content={constants.publicInfo.appName}
          />
          <meta
            name="theme-color"
            media="(prefers-color-scheme: light)"
            content="white"
          />
          <meta
            name="theme-color"
            media="(prefers-color-scheme: dark)"
            content="black"
          />
          <meta name="apple-mobile-web-app-capable" content="yes" />
          <meta
            name="apple-mobile-web-app-status-bar-style"
            content="default"
          />
          <meta
            name="apple-mobile-web-app-title"
            content={constants.publicInfo.appName}
          />
          <meta name="description" content={constants.publicInfo.description} />
          <meta name="format-detection" content="telephone=no" />
          <meta name="mobile-web-app-capable" content="yes" />
          <meta
            name="msapplication-config"
            content={constants.assets.browserConfig}
          />
          <meta name="msapplication-TileColor" content="#2B5797" />
          <meta name="msapplication-tap-highlight" content="no" />
          <meta name="theme-color" content="#001B42" />
          <meta name="twitter:card" content="summary" />
          <meta name="twitter:url" content={constants.publicInfo.website} />
          <meta name="twitter:title" content={constants.publicInfo.appName} />
          <meta
            name="twitter:description"
            content={constants.publicInfo.description}
          />
          <meta name="twitter:image" content={constants.assets.icon192Path} />
          <meta name="twitter:creator" content={constants.publicInfo.author} />

          <meta property="og:type" content="website" />
          <meta property="og:title" content={constants.publicInfo.appName} />
          <meta
            property="og:description"
            content={constants.publicInfo.description}
          />
          <meta
            property="og:site_name"
            content={constants.publicInfo.appName}
          />
          <meta property="og:url" content={constants.publicInfo.website} />
          <meta property="og:image" content={constants.assets.icon192Path} />

          <link
            rel="apple-touch-icon"
            sizes="128x128"
            href={constants.assets.icon128Path}
          />
          <link
            rel="apple-touch-icon"
            sizes="152x152"
            href={constants.assets.icon152Path}
          />
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href={constants.assets.icon180Path}
          />
          <link
            rel="apple-touch-icon"
            sizes="167x167"
            href={constants.assets.icon167Path}
          />
          <link
            rel="mask-icon"
            href={constants.assets.iconSafariPinTabPath}
            color="#5bbad5"
          />
          <link rel="icon" href={constants.assets.faviconPath} />
          <link rel="manifest" href={constants.assets.manifest} />

          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Montserrat:wght@100&family=Roboto:wght@100&display=swap"
            rel="stylesheet"
          />
        </Head>

        <body className="scrollbar-hide">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
