import { useDispatch} from "react-redux";
import { addCart, decreaseQuantity, getNumberCart, increaseQuantity } from "../actions/actions";

export const FoodItem = (props) => {
    const data = props.item;
    const quantity = props.quantityItem;
    const bgImg = {
        backgroundImage: `url(${data.img})`
    }
    const dispatch = useDispatch()
    return(
        <div className="card-food">
            <div className="food-img" style={bgImg}></div>
            <h3 className="food-name">{data.name}</h3>
            <p className="food-content">{data.description}</p>
            <span className="food-price">{`${data.price} $`}</span>
            <div className="food-order">
                { quantity > 0 ? (
                    <div className="gr-btn-quantity-food-order">
                        <button className="btn-decrease-quantity" onClick={() => {
                            const actionDecrease = decreaseQuantity(data);
                            dispatch(actionDecrease);
                            const actionNumberCart = getNumberCart();
                            dispatch(actionNumberCart);
                        }}>-</button>
                        <span>{quantity}</span>
                        <button className="btn-increase-quantity" onClick={() => {
                            const actionIncrease = increaseQuantity(data);
                            dispatch(actionIncrease)
                        }}>+</button>
                        
                    </div>
                ) : (
                    <button className="btn-food-order" onClick={() => {
                        const actionAddCart = addCart(data);
                        dispatch(actionAddCart);
                        const actionNumberCart = getNumberCart();
                        dispatch(actionNumberCart);
                    }}>Order</button>
                )}
            </div>
        </div>
    )
}