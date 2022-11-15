import { useSelector } from "react-redux";
import { dataFood } from "../data/data"
import { FoodItem } from "./FoodItem";

export const FoodContainer = (props) => {
    const data = dataFood;
    const listFood = props.listFood;
    const quantityTotal = useSelector(state => state.cartFood.quantityTotal);
    return(
        <section className="explore-food">
            <h2 className="food-title">{data.title}</h2>
            <p className="food-description">{data.desc}</p>
            <div className="container-list-food">
                { listFood.map((item, index) => 
                 <FoodItem key={item._id} item={item} quantityItem = {quantityTotal[index].quantity}/>
                )}
            </div>
        </section>
    )
}