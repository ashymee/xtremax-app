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
  id: "941e11cb-8910-4839-96cc-ca3b08ef643f",
  lat: 1.28692,
  lng: 103.85457,
  name: "Merlion",
  address: "1 Fullerton Road One Fullerton, Merlion Park, Singapore, SG 049213",
  description:
    "The Merlion is the official mascot of Singapore. It is depicted as a mythical creature with the head of a lion and the body of a fish. Being of prominent symbolic nature to Singapore and Singaporeans in general, it is widely used to represent both the city state and its people in sports teams, advertising, branding, tourism and as a national personification.",
  image: "/assets/images/detail/merlion.jpg",
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
