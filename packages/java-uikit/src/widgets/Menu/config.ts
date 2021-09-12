import { LinkStatus } from "./types";

export const status = {
  LIVE: <LinkStatus>{
    text: "LIVE",
    color: "failure",
  },
  SOON: <LinkStatus>{
    text: "SOON",
    color: "warning",
  },
  NEW: <LinkStatus>{
    text: "NEW",
    color: "success",
  },
};

export const links = [
  {
    label: "Home",
    icon: "HomeIcon",
    href: "/",
  },
  {
    label: "Swap",
    icon: "TradeIcon",
    items: [
      {
        label: "Trade",
        href: "https://exchange.javaswap.finance",
        icon: "TradeIcon"
      },
      {
        label: "Bridge",
        href: "https://exchange.javaswap.finance/#/pool",
        icon: "BridgeIcon"
      },
    ],
  },
  {
    label: "Farms",
    icon: "FarmIcon",
    href: "/farms",
    status: status.LIVE,
  },
  {
    label: "Pools",
    icon: "PoolIcon",
    href: "/syrup",
  },
  {
    label: "Games",
    icon: "GamesIcon",
    items: [
      {
        label: "JavaBid",
        href: "/ifo",
        icon: "JavaBidIcon",
      },
      {
        label: "Lucky Lotto",
        href: "/ifo/history",
        icon: "LottoIcon",
      },
      {
        label: "Flip Coin",
        href: "/ifo/history",
        icon: "FlipIcon",
      },
    ],
  },
  {
    label: "Referrals",
    icon: "ReferralIcon",
    href: "/referral",
  },
  {
    label: "NFT",
    icon: "NftIcon",
    href: "/nft",
  },
  {
    label: "IFO",
    icon: "IfoIcon",
    href: "/ifo",
  },
  {
    label: "Analytics",
    icon: "AnalyticIcon",
    href: "/info",
  },
  {
    label: "Audits",
    icon: "AuditsIcon",
    href: "/audits",
  },
  {
    label: "More",
    icon: "MoreIcon",
    items: [
      {
        label: "Voting",
        href: "https://voting.javaswap.finance",
      },
      {
        label: "Github",
        href: "https://github.com/javaswapdevelopment",
      },
      {
        label: "Docs",
        href: "https://docs.javaswap.finance",
      },
      {
        label: "Blog",
        href: "https://javaswap.medium.com",
      },
    ],
  },
];

export const socials = [
  {
    label: "Telegram",
    icon: "TelegramIcon",
    items: [
      {
        label: "English",
        href: "https://t.me/javaswap",
      },
      {
        label: "Bahasa Indonesia",
        href: "https://t.me/JavaSwapIndonesia",
      },
      {
        label: "中文",
        href: "https://t.me/JavaSwap_CN",
      },
      {
        label: "Tiếng Việt",
        href: "https://t.me/JavaSwapVN",
      },
      {
        label: "Italiano",
        href: "https://t.me/javaswap_ita",
      },
      {
        label: "русский",
        href: "https://t.me/javaswap_ru",
      },
      {
        label: "Türkiye",
        href: "https://t.me/javaswapturkiye",
      },
      {
        label: "Português",
        href: "https://t.me/JavaSwapPortuguese",
      },
      {
        label: "Español",
        href: "https://t.me/JavaswapEs",
      },
      {
        label: "日本語",
        href: "https://t.me/javaswapjp",
      },
      {
        label: "Français",
        href: "https://t.me/javaswapfr",
      },
      {
        label: "Announcements",
        href: "https://t.me/JavaSwapAnn",
      },
      {
        label: "Whale Alert",
        href: "https://t.me/JavaSwapWhales",
      },
    ],
  },
  {
    label: "Twitter",
    icon: "TwitterIcon",
    href: "https://twitter.com/javaswap",
  },
];

export const MENU_HEIGHT = 64;
export const MENU_ENTRY_HEIGHT = 48;
export const SIDEBAR_WIDTH_FULL = 240;
export const SIDEBAR_WIDTH_REDUCED = 56;
