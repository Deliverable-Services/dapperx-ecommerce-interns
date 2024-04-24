import Navbar from "@/components/Navbar/Navbar";
import "@/styles/globals.css";
import Footer from "@/components/Footer";
export default function App({ Component, pageProps }) {
  return <div className="w-full">
    <Navbar/>
    <Component {...pageProps}/>
    <Footer/>
    </div>;
}
