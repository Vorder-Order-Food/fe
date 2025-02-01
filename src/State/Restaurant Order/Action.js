import {api} from "../../component/config/api";
import {
    GET_RESTAURANT_ORDER_FAILURE,
    GET_RESTAURANT_ORDER_REQUEST, GET_RESTAURANT_ORDER_SUCCESS,
    UPDATE_ORDER_STATUS_FAILURE,
    UPDATE_ORDER_STATUS_REQUEST,
    UPDATE_ORDER_STATUS_SUCCESS
} from "./ActionType";


export const updateOrderStatus = ({orderId, orderStatus, jwt}) => {
    return async (dispatch) => {
        dispatch({type: UPDATE_ORDER_STATUS_REQUEST});
        try{
            const res = await api.put(`/order/admin/order/${orderId}/${orderStatus}`, {} ,{
                headers: {
                    Authorization: `Bearer ${jwt}`
                }
            })

            const updatedOrder = res.data
            console.log('update order', updatedOrder)
            dispatch({type: UPDATE_ORDER_STATUS_SUCCESS, payload: updatedOrder})

        }catch (e) {
            dispatch({type: UPDATE_ORDER_STATUS_FAILURE, payload: e})
        }
    }
}


export const fetchRestaurantOrder = ({orderStatus, jwt}) => {
    return async (dispatch) => {
        dispatch({type: GET_RESTAURANT_ORDER_REQUEST});
        try{
            const { data } = await api.get(`/order/admin/orders`,{
                params: {order_status: orderStatus},
                headers: {
                    Authorization: `Bearer ${jwt}`
                }
            })
            const orders = data;
            console.log('restaurant order', orders)
            dispatch({type: GET_RESTAURANT_ORDER_SUCCESS, payload: orders})

        }catch (e) {
            dispatch({type: GET_RESTAURANT_ORDER_FAILURE, payload: e})
        }
    }
}

