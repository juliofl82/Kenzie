import { ProjectsList } from "./ProjectList";

export const Projects = () => {
    return(
        <section>
            <div className="container projects">
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