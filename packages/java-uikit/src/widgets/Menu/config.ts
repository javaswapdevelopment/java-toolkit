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
    label: "Trade",
    icon: "TradeIcon",
    items: [
      {
        label: "Exchange",
        href: "https://exchange.javaswap.io",
      },
      {
        label: "Liquidity",
        href: "https://exchange.javaswap.io/#/pool",
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
    label: "Lottery",
    icon: "TicketIcon",
    href: "/lottery",
  },
  {
    label: "NFT",
    icon: "NftIcon",
    href: "/nft",
  },
  {
    label: "Team Battle",
    icon: "TeamBattleIcon",
    href: "/competition",
    status: status.SOON,
  },
  {
    label: "Profile & Teams",
    icon: "GroupsIcon",
    status: status.LIVE,
    items: [
      {
        label: "Leaderboard",
        href: "/teams",
        status: status.NEW,
      },
      {
        label: "YourProfile",
        href: "/",
      },
    ],
    calloutClass: "rainbow",
  },
  {
    label: "Info",
    icon: "InfoIcon",
    items: [
      {
        label: "Overview",
        href: "https://javaswap.info",
      },
      {
        label: "Tokens",
        href: "https://javaswap.info/tokens",
      },
      {
        label: "Pairs",
        href: "https://javaswap.info/pairs",
      },
      {
        label: "Accounts",
        href: "https://javaswap.info/accounts",
      },
    ],
  },
  {
    label: "IFO",
    icon: "IfoIcon",
    items: [
      {
        label: "Next",
        href: "/ifo",
      },
      {
        label: "History",
        href: "/ifo/history",
      },
    ],
  },
  {
    label: "More",
    icon: "MoreIcon",
    items: [
      {
        label: "Voting",
        href: "https://voting.javaswap.io",
      },
      {
        label: "Github",
        href: "https://github.com/javaswapdevelopment",
      },
      {
        label: "Docs",
        href: "https://docs.javaswap.io",
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
