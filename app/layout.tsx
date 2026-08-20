import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Alta Frecuencia | Fisioterapia y Entrenamiento Personal",
  description: "Fisioterapia, entrenamiento personal y recuperación activa. Recupera, entrena y vuelve más fuerte con un plan hecho para ti.",
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
