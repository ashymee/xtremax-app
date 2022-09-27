const publicInfo = {
  appName: "NEXT APP",
  // prettier-ignore
  description: '',
  version: "1.0.0",
  author: "Aswin Sahlan Himawan",
  website: "",
  email: "support@devstreetlab.my.id",
};

const assets = {
  author:
    "https://htpqxbnegiziuzrzrgbl.supabase.co/storage/v1/object/public/avatars/ash_memoji.png",
  logoSVGpath: "/assets/icons/safari-pinned-tab.svg",
  icon36Path: "/assets/icons/icon-36x36.png",
  icon48Path: "/assets/icons/icon-48x48.png",
  icon57Path: "/assets/icons/icon-57x57.png",
  icon72Path: "/assets/icons/icon-72x72.png",
  icon76Path: "/assets/icons/icon-76x76.png",
  icon96Path: "/assets/icons/icon-96x96.png",
  icon114Path: "/assets/icons/icon-114x114.png",
  icon120Path: "/assets/icons/icon-120x120.png",
  icon128Path: "/assets/icons/icon-128x128.png",
  icon144Path: "/assets/icons/icon-144x144.png",
  icon152Path: "/assets/icons/icon-152x152.png",
  icon167Path: "/assets/icons/icon-167x167.png",
  icon180Path: "/assets/icons/icon-180x180.png",
  icon192Path: "/assets/icons/icon-192x192.png",
  icon256Path: "/assets/icons/icon-256x256.png",
  icon512Path: "/assets/icons/icon-512x512.png",
  iconSafariPinTabPath: "/assets/icons/safari-pinned-tab.svg",
  iconMaskable: "/assets/icons/maskable_512.jpg",
  faviconPath: "/favicon.ico",
  faviconOfflinePath: "/favicon_offline.ico",
  browserConfig: "/assets/feeds/browserconfig.xml",
  manifest: "/manifest.json",
};

const storageKey = {
  theme: publicInfo.appName + ".theme",
};

const static_messages = {
  error: {},
  success: {},
  info: {},
};

const constants = {
  publicInfo,
  assets,
  storageKey,
  static_messages,
};

export default constants;
