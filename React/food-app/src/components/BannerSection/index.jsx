import BannerFood from "../../assets/BannerFood.png"

export const BannerSection = () => {
    return (
        <section className="section-padding">
            <div className="container ">
                <div>
                    <h1 className="title lg black">Descubra o melhor <span className="title orange">aplicativo de comida</span> </h1>
                    <p className="paragraph black center">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin maximus tempor ullamcorper. Vivamus porta lorem eu quam ultricies, non imperdiet erat elementum.</p>
                    <a href="#" className="btn orange">Saiba mais</a>
                </div>
                <img src={BannerFood} alt="Imagem dos alimentos." />
            </div>
        </section>
    )
}