import Navbar from "@/components/Navbar";
import "@/styles/globals.css";
import Footer from "@/components/Footer";
export default function App({ Component, pageProps }) {
  return <div className="bg-[#EDEEF1]">
    {/* <Navbar/> */}
      <Component {...pageProps} />
    {/* <Footer/> */}
    </div>;
}
