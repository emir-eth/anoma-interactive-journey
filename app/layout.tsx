export const metadata = {
  title: "Anoma",
  description: "anoma",
  metadataBase: new URL("https://example.com"),
  icons: {
    icon: "/assets/anoma-logo.svg", // favicon
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="tr">
      <body>{children}</body>
    </html>
  );
}
