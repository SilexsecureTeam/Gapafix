import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
// import AboutUs from "./About Us/page.js"
import Nav from "./Component/Header/Nav"
import Footer from "./Component/Footer/Footer";





export default function RootLayout({ children }) {
  return (
    <>
  <html lang="en" >
     <body >
        <Nav />
        {children}
        <Footer />
      </body>
    </html> 
    </>
        
    
  );
}
