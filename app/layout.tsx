import Header from "@/components/Header";
import "./globals.css";

export const metadata = {
  title: "Voila",
  description: "Your One Stop Shop!",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main>{children}</main>
      </body>
    </html>
  );
}
