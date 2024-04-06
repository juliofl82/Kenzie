import { technologies } from "../../../data/technologies";
import { TecCard } from "./TecCard/TechCard";
import styles from "./style.module.css";

export const TechnologiesList = () => {
    return (
        <div className={styles.techGrid}>
            <div className={styles.h2container}>
                <h2 className="title2">Tecnologias</h2>
            </div>
            <div className={styles.listBox}>
                {technologies.map(technologie => (
                    <div key={technologie.name}>
                        <TecCard technologie={technologie} />
                    </div>
                ))}
            </div>
        </div>
    );
};
