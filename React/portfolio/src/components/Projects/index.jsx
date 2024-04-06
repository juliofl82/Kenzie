import { ProjectsList } from "./ProjectList";
import styles from "./style.module.css";


export const Projects = () => {
    return(
        <section>
            <div className={styles.containerProjects}>
                <div>
                    <h2 className="title2">Projetos</h2>
                </div>
                <div>
                    < ProjectsList/>
                </div>                
            </div>            
        </section>        
    );
};