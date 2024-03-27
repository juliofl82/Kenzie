import MobileIcon from "../../assets/MobileIcon.svg";

export const AboutSection = () => {
    return (
        <section className="section-padding">
            <div className="container">
                <div>
                    <img src={MobileIcon} alt="Icone Mobile" />
                    <h2 className="title lg black">Sobre o <span className="title orange">aplicativo</span></h2>
                </div>
                <p className="paragraph black">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin maximus tempor ullamcorper. Vivamus porta lorem eu quam ultricies, non imperdiet erat elementum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin maximus tempor ullamcorper. Vivamus porta lorem eu quam ultricies, non imperdiet erat elementum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin maximus tempor ullamcorper. Vivamus porta lorem eu quam ultricies, non imperdiet erat elementum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin maximus tempor ullamcorper. Vivamus porta lorem eu quam ultricies, non imperdiet erat elementum.</p>
            </div>
        </section>
    )
}