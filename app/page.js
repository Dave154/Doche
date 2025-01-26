import About from "@/components/about";
import Footer from "@/components/footer";
import Hero from "@/components/hero";
import Slides from "@/components/slides";
import Image from "next/image";

export default function Home() {
  return (
    <main className="font-montserrat"> 
       <Hero/>
       <About/>
       <Slides/>
       <Footer/>
    </main>
  );
}
