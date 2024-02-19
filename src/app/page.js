import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Mainpage from './Mainpage'
import { UserButton } from "@clerk/nextjs";

export default function Home() {
  return (
    <div className="bg-gradient-to-r from-[#6CE262] to-[#235C64]">
    <Navbar/>
    <Mainpage/>
    <Footer/>
    </div>
  );
}
