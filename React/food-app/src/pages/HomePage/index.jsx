import { AboutSection } from "../../components/AboutSection"
import { BannerSection } from "../../components/BannerSection"
import { Footer } from "../../components/Footer"
import { FormSection } from "../../components/FormSection"
import { RestaurantSection } from "../../components/RestaurantSection"
import { Header } from "../../components/Header"


export const HomePage = () => {
    return (
        <>
            <Header />
            <main>
                <BannerSection />
                <RestaurantSection />
                <AboutSection />
                <FormSection />
            </main>
            <Footer />
        </>
    )
}