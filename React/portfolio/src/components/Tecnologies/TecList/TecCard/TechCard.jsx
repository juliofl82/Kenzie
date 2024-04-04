import { technologies } from "../../../../data/technologies";

export const TecCard = ({technologie}) => {
    return(
        <>
        <img src={technologie.img} alt="Imagem" />
        <h3>{technologie.name}</h3>        
        </>
    )
}