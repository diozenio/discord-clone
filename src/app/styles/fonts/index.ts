import localFont from "next/font/local";

export const ggSans = localFont({
  src: [
    {
      path: "../../../../public/fonts/ggsans-Normal.woff2",
      weight: "400",
    },
    {
      path: "../../../../public/fonts/ggsans-NormalItalic.woff2",
      weight: "400",
      style: "italic",
    },
    {
      path: "../../../../public/fonts/ggsans-Medium.woff2",
      weight: "500",
    },
    {
      path: "../../../../public/fonts/ggsans-MediumItalic.woff2",
      weight: "500",
      style: "italic",
    },
    {
      path: "../../../../public/fonts/ggsans-Semibold.woff2",
      weight: "600",
    },
    {
      path: "../../../../public/fonts/ggsans-SemiboldItalic.woff2",
      weight: "600",
      style: "italic",
    },
    {
      path: "../../../../public/fonts/ggsans-Bold.woff2",
      weight: "700",
    },
    {
      path: "../../../../public/fonts/ggsans-BoldItalic.woff2",
      weight: "700",
      style: "italic",
    },
  ],
  variable: "--font-gg-sans",
});
