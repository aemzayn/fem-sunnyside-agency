import dynamic from "next/dynamic";
import Head from "next/head";

const Navbar = dynamic(() => import("../components/Navbar"));
const Hero = dynamic(() => import("../components/Hero"));
const About = dynamic(() => import("../components/About"));
const Projects = dynamic(() => import("../components/Projects"));
const Testimonies = dynamic(() => import("../components/Testimonies"));
const Gallery = dynamic(() => import("../components/Gallery"));
const Footer = dynamic(() => import("../components/Footer"));

export default function Home() {
  return (
    <div>
      <Head>
        <title>Sunnyside</title>
        <link
          rel="shortcut icon"
          href="/favicon-32x32.png"
          type="image/x-icon"
        />
      </Head>
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Testimonies />
      <Gallery />
      <Footer />
    </div>
  );
}
