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
    label: "Presale",
    icon: "PresaleIcon",
    href: "https://presale.javaswap.io/",
  },
  {
    label: "Swap",
    icon: "TradeIcon",
    items: [
      {
        label: "Trade",
        href: "https://exchange.javaswap.io",
        icon: "TradeIcon"
      },
      {
        label: "Bridge",
        href: "https://exchange.javaswap.io/#/pool",
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
        href: "/javabid",
        icon: "JavaBidIcon",
      },
      {
        label: "Lucky Lotto",
        href: "/lotto",
        icon: "LottoIcon",
      },
      {
        label: "Flip Coin",
        href: "/flip",
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
        href: "https://voting.javaswap.io",
      },
      {
        label: "Github",
        href: "https://github.com/javaswapdevelopment",
      },
      {
        label: "Docs",
        href: "https://javaswap.gitbook.io/javaswap/",
      },
      {
        label: "Blog",
        href: "https://javaswapofficial.medium.com/",
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
        href: "https://t.me/JavaSwap_Official",
      },
    ],
  },
  {
    label: "Twitter",
    icon: "TwitterIcon",
    href: "https://twitter.com/Javaswap_",
  },
  {
    label: "Medium",
    icon: "MediumIcon",
    href: "https://javaswapofficial.medium.com/",
  },
];

export const MENU_HEIGHT = 64;
export const MENU_ENTRY_HEIGHT = 48;
export const SIDEBAR_WIDTH_FULL = 240;
export const SIDEBAR_WIDTH_REDUCED = 56;
