import { projects } from "../../../../data/projects"

export const ProjectCard = ({ project }) => {
    return (
        <li>
            <h2>{project.name}</h2>
            <p>{project.description}</p>
        </li>
    );
};