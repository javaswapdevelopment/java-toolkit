import { Language } from "../LangSelector/types";
import { FooterLinkType } from "./types";

export const footerLinks: FooterLinkType[] = [
  {
    label: "About",
    items: [
      {
        label: "Contact",
        href: "https://javaswap.gitbook.io/javaswap/social-media-and-contact",
      },
      {
        label: "Blog",
        href: "https://javaswapofficial.medium.com/",
      },
      {
        label: "Community",
        href: "https://t.me/JavaSwapOfficialCommunity",
      },
      {
        label: "JAVA",
        href: "https://javaswap.gitbook.io/javaswap/javanomics",
      },
      {
        label: "—",
      },
      {
        label: "Bit2win Partner",
        href: "https://bit2win.io/",
        isHighlighted: true,
      },
    ],
  },
  {
    label: "Help",
    items: [
      {
        label: "Customer",
        href: "https://t.me/JavaSwap_Official",
      },
      {
        label: "Troubleshooting",
        href: "https://t.me/JavaSwap_Official",
      },
      {
        label: "Guides",
        href: "https://javaswap.gitbook.io/javaswap/getting-started",
      },
    ],
  },
  {
    label: "Developers",
    items: [
      {
        label: "Github",
        href: "https://github.com/javaswapdevelopment",
      },
      {
        label: "Documentation",
        href: "https://javaswap.gitbook.io/javaswap",
      },
      {
        label: "Bug Bounty",
        href: "https://t.me/JavaSwapOfficialCommunity",
      },
      {
        label: "RugDog",
        href: "https://rugdoc.io/project/javaswap-v2/",
      },
      {
        label: "Careers",
        href: "https://javaswap.gitbook.io/javaswap/social-media-and-contact/hiring",
      },
    ],
  },
];

export const socials = [
  {
    label: "Twitter",
    icon: "Twitter",
    href: "https://twitter.com/Javaswap_",
  },
  {
    label: "Telegram",
    icon: "Telegram",
    items: [
      {
        label: "English",
        href: "https://t.me/JavaSwap_Official",
      },
      {
        label: "Community",
        href: "https://t.me/JavaSwapOfficialCommunity"
      }
    ],
  },
  {
    label: "Reddit",
    icon: "Reddit",
    href: "https://www.reddit.com/user/javaswap_Official",
  },
  {
    label: "Github",
    icon: "Github",
    href: "https://github.com/javaswapdevelopment",
  },
  {
    label: "Discord",
    icon: "Discord",
    href: "https://discord.gg/49F8G3VhHp ",
  },
];

export const langs: Language[] = [...Array(20)].map((_, i) => ({
  code: `en${i}`,
  language: `English${i}`,
  locale: `Locale${i}`,
}));
