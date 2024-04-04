import { technologies } from "../../../data/technologies";
import { TecCard } from "./TecCard/TechCard";

export const TechnologiesList = () => {
    return (
        <div>
            {technologies.map(technologie => (
                // Certifique-se de que cada TecCard está dentro de um div se isso for necessário para sua estilização ou estrutura de layout
                <div key={technologie.name}>
                    <TecCard technologie={technologie} />
                </div>
            ))}
        </div>
    );
};
