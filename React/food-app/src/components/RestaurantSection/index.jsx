import { RestaurantList } from "./RestaurantList"
import RestaurantIcon from "../../assets/RestaurantIcon.svg"

export const RestaurantSection = () => {
    return (
        <section className="section-green padding-section">
            <div className="container">
                <img src={RestaurantIcon} alt="Talher cruzado" />
            <h2 className="title md white">Restaurante famosos</h2>
            <RestaurantList />
            </div>            
        </section>
    ) 
}