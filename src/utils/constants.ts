const publicInfo = {
  appName: "Xtremax App",
  // prettier-ignore
  description: 'Xtremax assignment test',
  version: "1.0.0",
  author: "Aswin Sahlan Himawan",
  website: "",
  email: "support@devstreetlab.my.id",
  baseURL:
    process.env.NODE_ENV === "development"
      ? "http://localhost:3000"
      : "https://xtremax-app.vercel.app",
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

const colors = {
  white_smoke: "#EFF2F5",
  gray_calm: "#80929A",
  gray_light: "#86989F",
  gray_light_med: "#697C7F",
  gray_dark: "#292C36",
  gray_dark_deep: "#252831",
  gray_darkness: "#1D1F26",
  green_leaves: "#91BF49",
};

const expanded_initial = {
  id: "d4bf6cbe-9700-488b-999c-c1f814057578",
  name: "Clarke Quay",
  lat: 1.290555,
  lng: 103.846188,
  address: "3 River Valley Rd, Singapore 179024",
  description:
    "Clarke Quay was named after Sir Andrew Clarke, Singapore's second Governor and Governor of the Straits Settlements from 1873 to 1875, who played a key role in positioning Singapore as the main port for the Malay states of Perak, Selangor and Sungei Ujong.",
  image: "/assets/images/detail/clarke-quay.jpg",
  website: "http://www.clarkequay.com.sg/",
};

const mapOptions = {
  theme: {
    light: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
    dark: "https://api.maptiler.com/maps/ch-swisstopo-lbm-dark/256/{z}/{x}/{y}.png?key=9o0JvckAGs897hIhLK7z",
  },
  contribution:
    '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
};

const constants = {
  publicInfo,
  assets,
  storageKey,
  static_messages,
  colors,
  mapOptions,
  expanded_initial,
};

export default constants;
