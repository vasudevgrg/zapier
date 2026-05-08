import StateProvider from "../components/StateProvider";
import "./globals.css";


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <StateProvider>{children}</StateProvider>
        
      </body>
    </html>
  );
}
