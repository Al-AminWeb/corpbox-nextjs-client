import Hero from "./Hero/Hero";
import About from "./About/About";
import Services from "./services/Services";
import WorkProcess from "./WorkProcess/WorkProcess";
import Project from "./Project/Project";

export default function Home() {
    return (
        <div>
          <Hero/>
            <About/>
            <Services/>
            <WorkProcess/>
            <Project/>
        </div>
    );
}