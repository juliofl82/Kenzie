import BannerImg from "../../assets/banner-img.png";

export const BannerSection = () => {
    return (
        <section>
            <div className="container bannerSection">
                <div>
                    <p className="paragraph">Júlio Figueiredo Lamounier</p>
                    <h2 className="title2">Bem vindo ao meu portfólio</h2>
                    <p className="paragraph">Uma frase interessante sobre mim</p>
                    <button type="button" className="btn">Saiba mais</button>
                </div>
                <div>
                    <img src={BannerImg} alt="Imagem de Computador" />
                </div>                
            </div>            
        </section>
    );
};