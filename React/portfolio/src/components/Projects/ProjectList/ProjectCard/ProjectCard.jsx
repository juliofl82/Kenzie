import { projects } from "../../../../data/projects";
import Vector from "../../../../assets/Vector.svg";

export const ProjectCard = ({ project }) => {
    return (
        <>
            <div>
                <li>
                    <h2>{project.name}</h2>
                    <p>{project.description}</p>
                    <p>Saiba mais</p>
                </li>
            </div>
            <div>
                <img src={Vector} alt="Imagem vetor" />
            </div>
        </>
    );
};