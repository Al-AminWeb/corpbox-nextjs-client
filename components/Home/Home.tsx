import Hero from "./Hero/Hero";
import About from "./About/About";
import Services from "./services/Services";

export default function Home() {
    return (
        <div>
          <Hero/>
            <About/>
            <Services/>
        </div>
    );
}