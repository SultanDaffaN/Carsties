import { getCurrentUser } from "./auctions/authAction";
import "./globals.css";
import Navbar from "./nav/Navbar";
import SignalRProvider from "./providers/SignalRProvider";
import ToasterProvider from "./providers/ToasterProvider";

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const user = await getCurrentUser();
  const notifyUrl = process.env.NOTIFY_URL;

  return (
    <html lang="en">
      <body>
        <ToasterProvider />
        <Navbar />
        <main className="container mx-auto px-5 pt-10">
          <SignalRProvider user={user} notifyUrl={notifyUrl!}>
            {children}
          </SignalRProvider>
        </main>
      </body>
    </html>
  );
}
