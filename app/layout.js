import "./globals.css";

export const metadata = {
  title: "SHAVZTECH Solutions LLP",
  description: "Premium Digital Solutions Company",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}