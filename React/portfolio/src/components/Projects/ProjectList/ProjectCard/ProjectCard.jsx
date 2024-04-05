import { projects } from "../../../../data/projects";
import Vector from "../../../../assets/Vector.svg";
import styles from "./styles.module.css";

export const ProjectCard = ({ project }) => {
    return (        
            <div className={styles.cardBox}>
                <div>
                    <li className={styles.liBox}>
                        <h2>{project.name}</h2>
                        <p className={styles.p}>{project.description}</p>
                        <p className={`link ${styles.saibaMais}`}>Saiba mais</p>
                    </li>
                </div>
                <div className={styles.imgBox}>
                    <img className={styles.imgVector} src={Vector} alt="Imagem vetor" />
                </div>
            </div>        
    );
};