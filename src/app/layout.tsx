import "./globals.css";
import type { Metadata } from "next";
import { ggSans } from "./styles/fonts";

export const metadata: Metadata = {
  title: "DISCORD | Seu Lugar para Papear e Ficar De Boa",
  description:
    "O Discord é o jeito mais fácil de se comunicar por voz, vídeo e texto. Converse, curta e fique perto de seus amigos e comunidades.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${ggSans.variable} font-sans`}>{children}</body>
    </html>
  );
}
