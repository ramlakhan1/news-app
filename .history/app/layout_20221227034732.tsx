import "../styles/globals.css";
import Header from "./Header";
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <head />
      <body className="bg-gray-100 dark:bg-zinc-900 transition-all du">
        <Header />
        <div>{children}</div>
      </body>
    </html>
  );
}
