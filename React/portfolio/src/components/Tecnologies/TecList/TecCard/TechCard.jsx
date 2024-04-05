import { technologies } from "../../../../data/technologies";
import styles from "./style.module.css";

export const TecCard = ({ technologie }) => {
    return (
        <>
            <div className={styles.TechBox}>
                <img src={technologie.img} alt="Imagem" />
                <h3>{technologie.name}</h3>
            </div>
        </>
    )
}