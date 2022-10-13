import { Navbar } from "components";
import { About, Footer, Header, Skills, Work, Testimonial } from "container";
import Head from "next/head";
import generals from "../styles/General.module.scss";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Prophet Ogwuche</title>
      </Head>

      <div className={`${generals.app} `}>
        <Navbar />
        <Header />
        <About />
        <Work />
        <Skills />
        <Testimonial />
        <Footer />
      </div>
    </div>
  );
}
