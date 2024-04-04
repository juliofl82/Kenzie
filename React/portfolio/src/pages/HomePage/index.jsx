import { Header } from "../../components/Header";
import { BannerSection } from "../../components/BannerSection";
import { AboutMe } from "../../components/AboutMe";
import { Projects } from "../../components/Projects";
import { Tecnologies } from "../../components/Tecnologies";
import { Footer } from "../../components/Footer";

export const HomePage = () => {
    return (
        <>
            <Header />
            <main>
                <BannerSection />
                <AboutMe />
                <Tecnologies />
                <Projects />                
                <Footer />
            </main>
        </>
    );
};