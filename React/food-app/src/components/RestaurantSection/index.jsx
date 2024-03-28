import { RestaurantList } from "./RestaurantList";
import RestaurantIcon from "../../assets/RestaurantIcon.svg";
import styles from "../RestaurantSection/style.module.css";

export const RestaurantSection = () => {
    return (
        <section className= {`${styles.restaurantSection} section-green padding-section`}>
            <div className="container">
                <img src={RestaurantIcon} alt="Talher cruzado" />
            <h2 className="title md white">Restaurante famosos</h2>
            <RestaurantList />
            </div>            
        </section>
    ) 
}