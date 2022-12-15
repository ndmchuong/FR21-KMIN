import { useDispatch} from "react-redux";
import {
  decreaseQuantity,
  deleteFood,
  getNumberCart,
  increaseQuantity,
} from "../actions/actions";
import iconDelete from "../assets/icon/x-icon-delete.jpg";

export const CartFoodItem = (props) => {
  const dispatch = useDispatch();
  const item = props.item;
  return (
    <>
      <div key={item._id} className="container-cart-item">
        <img src={item.img} alt="" className="cart-item-img" />
        <h5 className="cart-item-name">{item.name}</h5>
        <div className="cart-item-quantity">
          <span className="quantity">{item.quantity}</span>
          <div className="gr-btn-quantity">
            <button
              onClick={() => {
                const actionIncrease = increaseQuantity(item);
                dispatch(actionIncrease);
              }}
            >
              +
            </button>
            <button
              onClick={() => {
                const actionDecrease = decreaseQuantity(item);
                dispatch(actionDecrease);
                const actionNumberCart = getNumberCart();
                dispatch(actionNumberCart);
              }}
            >
              -
            </button>
          </div>
        </div>
        <span className="cart-item-price">
          {`${Math.round(Number(item.price) * Number(item.quantity) * 100) / 100}`}$
        </span>
        <button className="btn-delete-food" onClick={() => {
          const actionDelete = deleteFood(item);
          dispatch(actionDelete);
          const actionNumberCart = getNumberCart();
          dispatch(actionNumberCart);
          }}>
            <img src={iconDelete} alt="" />
          </button>
      </div>
    </>
  );
};
