import { projects } from "../../../data/projects";
import { ProjectCard } from "./ProjectCard/ProjectCard";

export const ProjectsList = () => {
    return (
        <ul>
            {projects.map(project => (
                <ProjectCard key={project.name} project={project} />
            ))}
        </ul>
    );
};