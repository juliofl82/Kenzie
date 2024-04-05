import BannerImg from "../../assets/banner-img.png";
import styles from "./style.module.css";

export const BannerSection = () => {
    return (
        <section className={styles.bannerBox}>
            <div className="container bannerSection">
                <div className={styles.perfil}>
                    <p className="paragraph">Júlio Figueiredo Lamounier</p>
                    <div className={styles.boxH2}>
                        <h2 className="title2">Bem vindo ao meu portfólio</h2>
                    </div>
                    
                    <p className="paragraph">Uma frase interessante sobre mim</p>                    
                    <button type="button" className="btn btn_font">Saiba mais</button>                   
                    
                </div>
                <div className={styles.imgGrid}>
                    <img src={BannerImg} alt="Imagem de Computador" />
                </div>                
            </div>            
        </section>
    );
};