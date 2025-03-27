import Image from "next/image";
import Banner from "@/components/Banner";
import About from "@/components/About";
import Services from "@/components/Services";
import Mission from "@/components/Mission";

export default function Home() {
  return (
    <main>
      <Banner />
      <About />
      <Mission />
      <Services />
    </main>
  );
};