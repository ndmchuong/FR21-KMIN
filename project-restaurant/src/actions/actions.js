import axios from "axios";

export const GET_ALL_FOOD = "GET_ALL_FOOD";
export const GET_NUMBER_CART = "GET_NUMBER_CART";
export const INCREASE_QUANTITY = "INCREASE_QUANTITY";
export const DECREASE_QUANTITY = "DECREASE_QUANTITY";
export const ADD_CART = "ADD_CART";
export const UPDATE_CART = "UPDATE_CART";
export const DELETE_FOOD = "DELETE_FOOD";
export const actFetchFoodRequest = () => {
    return async dispatch => {
        const response = await axios.get('https://fe21-db.herokuapp.com/restaurant');
        dispatch(GetAllFood(response.data))
    }       
}
export function GetAllFood(payload){
    return{
        type:'GET_ALL_FOOD',
        payload
    }
}
export const getNumberCart = () => {
    return{
        type: 'GET_NUMBER_CART'
    }
}
export const addCart = (payload) => {
    return {
        type: 'ADD_CART',
        payload
    }
}
export const increaseQuantity = (payload) => {
    return {
        type: 'INCREASE_QUANTITY',
        payload
    }
}
export const decreaseQuantity = (payload) => {
    return {
        type: 'DECREASE_QUANTITY',
        payload
    }
}
export const deleteFood = (payload) => {
    return {
        type: 'DELETE_FOOD',
        payload
    }
}
