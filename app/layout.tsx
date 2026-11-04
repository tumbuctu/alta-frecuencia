import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Alta Frecuencia | Fisioterapia y Entrenamiento Personal",
  description: "Fisioterapia, entrenamiento personal y readaptación deportiva en Murcia. Muévete, recupera y vuelve más fuerte.",
  icons: {
    icon: "/brand/imago.png",
    shortcut: "/brand/imago.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
