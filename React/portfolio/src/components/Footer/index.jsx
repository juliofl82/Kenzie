import SocialIcons from '../../assets/SocialIcons.svg'
import styles from "./style.module.css"
import {user} from "../../data/user"

export const Footer = () => {
    return (
        <footer >
            <div className={styles.containerFooter}>
                <div>
                    <h2 className='title2'>Contato</h2>
                    <div className={styles.imgSocial}>
                        <img src={SocialIcons} alt="Redes sociais" />
                    </div>
                </div>
                <div>
                    <p className='paragraph'>Todos os direitos reservados - {user}</p>
                </div>

            </div>
        </footer>
    );
};