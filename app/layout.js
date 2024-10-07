import "./globals.css";
import Navbar from "@/components/Navbar";

export const metadata = {
  title: "Tanias Cleaning Crew",
  description: "Cleaning Service Company",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="rajdhani-light ">
        <Navbar/>
        {children}
      </body>
    </html>
  );
}
