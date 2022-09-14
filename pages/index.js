import { Navbar } from "components";
import { About, Footer, Header, Skills, Work, Testimonial } from "container";
import generals from "../styles/General.module.scss";

export default function Home() {
  return (
    <div className={`${generals.app} `}>
      <Navbar />
      <Header />
      <About />
      <Work />
      <Skills />
      <Testimonial />
      <Footer />
    </div>
  );
}
