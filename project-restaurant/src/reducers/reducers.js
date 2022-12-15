import { combineReducers } from "redux";
import { ADD_CART, DECREASE_QUANTITY, DELETE_FOOD, GET_ALL_FOOD, GET_NUMBER_CART, INCREASE_QUANTITY, ORDER_FOOD } from "../actions/actions";

const initFood = {
    numberCart: 0,
    CartFood: [],
    listFood: [],
    quantityTotal: []
}
const cartFood = (state = initFood, action) => {
    switch (action.type) {
        case GET_ALL_FOOD:
            const listQuantityTotal = action.payload.map((item) =>({
                id: item._id,
                quantity: 0
            }))
            return {
                ...state,
                listFood: action.payload,
                quantityTotal: listQuantityTotal
            }
        case GET_NUMBER_CART:
            const listCartNew = state.CartFood.filter((value) => value.quantity !== 0);
            const numberCart = listCartNew.length;
            return {
                ...state,
                numberCart: numberCart,
                CartFood: listCartNew
            }
        case ADD_CART:
            const quantityTotalAfterAdd = state.quantityTotal.map((item) => {
                if (item.id === action.payload._id) {
                    return {
                        id: item.id,
                        quantity: item.quantity + 1
                    }
                }
                else {
                    return item
                }
            });
            const quantityAfterAdd = quantityTotalAfterAdd.filter((value) => value.id === action.payload._id);
            let cartFoodItem = {
                _id: action.payload._id,
                img: action.payload.img,
                name: action.payload.name,
                price: action.payload.price,
                quantity: quantityAfterAdd[0].quantity
            }
            state.CartFood.push(cartFoodItem);  
            return {
                ...state,
                quantityTotal: quantityTotalAfterAdd
            } 
        case INCREASE_QUANTITY:
            const quantityTotalAfterIncrease = state.quantityTotal.map((item) => {
                if (item.id === action.payload._id) {
                    return {
                        id: item.id,
                        quantity: item.quantity + 1
                    }
                }
                else {
                    return item
                }
            });
            const cartFoodAfterIncrease = state.CartFood.map((item) => {
                if (item._id === action.payload._id) {
                    return {
                        _id: action.payload._id,
                        img: action.payload.img,
                        name: action.payload.name,
                        price: action.payload.price,
                        quantity: item.quantity + 1
                    }
                }
                else {
                    return item
                }
            });
            return{
                ...state,
                quantityTotal: quantityTotalAfterIncrease,
                CartFood: cartFoodAfterIncrease
            }
        case DECREASE_QUANTITY:
            const quantityTotalAfterDecrease = state.quantityTotal.map((item) => {
                if ((item.id === action.payload._id) && (item.quantity > 0)) {
                    return {
                        id: item.id,
                        quantity: item.quantity - 1
                    }
                }
                else {
                    return item
                }
            });
            const cartFoodAfterDecrease = state.CartFood.map((item) => {
                if ((item._id === action.payload._id) && (item.quantity > 0)) {
                    return {
                        _id: action.payload._id,
                        img: action.payload.img,
                        name: action.payload.name,
                        price: action.payload.price,
                        quantity: item.quantity - 1
                    }
                }
                else {
                    return item
                }
            });
            return{
                ...state,
                quantityTotal: quantityTotalAfterDecrease,
                CartFood: cartFoodAfterDecrease
            }
        case DELETE_FOOD: 
            const quantityTotalAfterDelete = state.quantityTotal.map((item) => {
                if (item.id === action.payload._id) {
                    return {
                        id: item.id,
                        quantity: 0
                    }
                }
                else {
                    return item
                }
            });
            const cartFoodAfterDelete = state.CartFood.map((item) => {
                if (item._id === action.payload._id) {
                    return {
                        _id: action.payload._id,
                        img: action.payload.img,
                        name: action.payload.name,
                        price: action.payload.price,
                        quantity: 0
                    }
                }
                else {
                    return item
                }
            });
            return{
                ...state,
                quantityTotal: quantityTotalAfterDelete,
                CartFood: cartFoodAfterDelete
            }
        case ORDER_FOOD: 
            console.log(action.payload);
            const newListQuantityTotal = state.listFood.map((item) =>({
                id: item._id,
                quantity: 0
            }));
            return{
                ...state,
                CartFood: [],
                quantityTotal: newListQuantityTotal
            }
        default:
            return state
            break;
    }
}
export const rootReducer = combineReducers({
    cartFood: cartFood
})