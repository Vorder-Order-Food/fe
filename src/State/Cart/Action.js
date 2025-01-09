import {api} from "../../component/config/api";
import {
    ADD_ITEM_TO_CART_CART_FAILURE,
    ADD_ITEM_TO_CART_CART_REQUEST,
    ADD_ITEM_TO_CART_CART_SUCCESS, CLEAR_CART_FAILURE, CLEAR_CART_REQUEST, CLEAR_CART_SUCCESS,
    FIND_CART_FAILURE,
    FIND_CART_REQUEST,
    FIND_CART_SUCCESS,
    GET_ALL_CART_ITEMS_FAILURE,
    GET_ALL_CART_ITEMS_REQUEST,
    GET_ALL_CART_ITEMS_SUCCESS, REMOVE_CART_ITEM_FAILURE,
    REMOVE_CART_ITEM_REQUEST, REMOVE_CART_ITEM_SUCCESS,
    UPDATE_CART_ITEM_FAILURE,
    UPDATE_CART_ITEM_REQUEST,
    UPDATE_CART_ITEM_SUCCESS
} from "./ActionType";

export const findCart = (token) => {
    return async (dispatch) => {
        dispatch({type: FIND_CART_REQUEST});
        try{
            const res = await api.get("/api/cart" ,{
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })

            console.log('find cart', res.data)
            dispatch({type: FIND_CART_SUCCESS, payload: res.data})

        }catch (e) {
            dispatch({type: FIND_CART_FAILURE, payload: e})
        }
    }
}


export const getAllCartItems = (reqData) => {
    return async (dispatch) => {
        dispatch({type: GET_ALL_CART_ITEMS_REQUEST});
        try{
            const res = await api.get(`/api/carts/${reqData.cartId}/items` ,{
                headers: {
                    Authorization: `Bearer ${reqData.token}`
                }
            })

            console.log('get all cart item', res.data)
            dispatch({type: GET_ALL_CART_ITEMS_SUCCESS, payload: res.data})

        }catch (e) {
            dispatch({type: GET_ALL_CART_ITEMS_FAILURE, payload: e})
        }
    }
}

export const addItemToCart = (reqData) => {
    return async (dispatch) => {
        dispatch({type: ADD_ITEM_TO_CART_CART_REQUEST});
        try{
            const {data} = await api.put("/api/cart/add", reqData.cartItem ,{
                headers: {
                    Authorization: `Bearer ${reqData.token}`
                }
            })

            console.log('add item to cart', data)
            dispatch({type: ADD_ITEM_TO_CART_CART_SUCCESS, payload: data})

        }catch (e) {
            dispatch({type: ADD_ITEM_TO_CART_CART_FAILURE, payload: e.message})
        }
    }
}


export const updateCartItem = (reqData) => {
    return async (dispatch) => {
        dispatch({type: UPDATE_CART_ITEM_REQUEST});
        try{
            const {data} = await api.put("/api/cart-item/update", reqData.data ,{
                headers: {
                    Authorization: `Bearer ${reqData.jwt}`
                }
            })

            console.log('update item to cart', data)
            dispatch({type: UPDATE_CART_ITEM_SUCCESS, payload: data})

        }catch (e) {
            dispatch({type: UPDATE_CART_ITEM_FAILURE, payload: e.message})
        }
    }
}

export const removeCartItem = ({cartItemId, jwt}) => {
    return async (dispatch) => {
        dispatch({type: REMOVE_CART_ITEM_REQUEST});
        try{
            const {data} = await api.delete(`/api/cart-item/${cartItemId}/remove`, {
                headers: {
                    Authorization: `Bearer ${jwt}`
                }
            })

            console.log('remove item to cart', data)
            dispatch({type: REMOVE_CART_ITEM_SUCCESS, payload: cartItemId})

        }catch (e) {
            dispatch({type: REMOVE_CART_ITEM_FAILURE, payload: e.message})
        }
    }
}

export const clearCart = () => {
    return async (dispatch) => {
        dispatch({type: CLEAR_CART_REQUEST});
        try{
            const {data} = await api.put(`/api/cart/clear`, {},{
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("jwt")}`
                }
            })

            console.log('clear cart', data)
            dispatch({type: CLEAR_CART_SUCCESS, payload: data})

        }catch (e) {
            dispatch({type: CLEAR_CART_FAILURE, payload: e.message})
        }
    }
}
