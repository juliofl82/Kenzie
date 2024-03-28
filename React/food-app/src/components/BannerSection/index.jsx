import BannerFood from "../../assets/BannerFood.png";
import styles from "../BannerSection/style.module.css";

export const BannerSection = () => {
    return (
        <section className= {`${styles.bannerSection} section-padding`}>
            <div className="container ">
                <div className={styles.flexBox}>
                    <div>
                        <h1 className="title lg black">Descubra o melhor <span className="title orange">aplicativo de comida</span> </h1>
                        <p className="paragraph black center">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin maximus tempor ullamcorper. Vivamus porta lorem eu quam ultricies, non imperdiet erat elementum.</p>
                        <a href="#" className="btn orange">Saiba mais</a>
                    </div>
                    <img src={BannerFood} alt="Imagem dos alimentos." />
                </div>
            </div>

        </section>
    )
}