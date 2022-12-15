import { Link } from "react-router-dom"
import { CartFoodItem } from "./CartFoodItem"
import arrow from "../assets/icon/arrow.png"
import { useDispatch, useSelector } from "react-redux"
import { getNumberCart, orderFood } from "../actions/actions"

export const ShoppingCart = () => {
    const numberCart = useSelector(state => state.cartFood.numberCart);
    const cartFood = useSelector(state => state.cartFood.CartFood);
    const dispatch = useDispatch();
    const handleCalcTotalBill = () => {
        let total = 0;
        const listPrice = cartFood.map((item) => {
            return Number(Number(item.price) * Number(item.quantity))
        });
        listPrice.forEach((item) => total += item);
        return total
    }
    const totalBill = handleCalcTotalBill();
    return(
        <section className="container-cart">
            <div className="cart-info">
                <Link to="/" className="link-back-shop">
                    <img src={arrow} alt="" />
                    Shopping Continue
                </Link>
                <div className="container-cart-title-desc">
                    <h4>Shopping cart</h4>
                    <span>You have {numberCart} item in your cart</span>
                </div>
                { cartFood.map((item) => 
                    <CartFoodItem key={item._id} item={item}/>
                )}
                
            </div>
            <div className="cart-payment">
                <h4 className="total-bill">Total bill: 
                    <span>{` ${totalBill}$`}</span>
                </h4>
                <button onClick={() => {
                    const actionOrder = orderFood(cartFood);
                    dispatch(actionOrder);
                    const actionNumberCart = getNumberCart();
                    dispatch(actionNumberCart);
                }}>Order</button>
            </div>
        </section>
    )
}