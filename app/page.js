import Start from "@/app/components/Start";
import Info from "@/app/components/Info";
import Navbar from "@/app/components/Navbar";
import Features from "@/app/components/Features";
import Story from "./components/Story";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="relative min-h-screen w-screen overflow-x-hidden">
      <Navbar />
      <Start />
      <Info />
      <Features />
      <Story />
      <Contact />
      <Footer />
    </main>
  );
}
