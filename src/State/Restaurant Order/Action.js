import {api} from "../../component/config/api";
import {
    GET_RESTAURANT_ORDER_REQUEST,
    UPDATE_ORDER_STATUS_FAILURE,
    UPDATE_ORDER_STATUS_REQUEST,
    UPDATE_ORDER_STATUS_SUCCESS
} from "./ActionType";


export const updateOrderStatus = ({orderId, orderStatus, jwt}) => {
    return async (dispatch) => {
        dispatch({type: UPDATE_ORDER_STATUS_REQUEST});
        try{
            const res = await api.put(`/api/admin/orders/${orderId}/${orderStatus}`, {} ,{
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


export const fetchRestaurantOrder = ({restaurantId, orderStatus, jwt}) => {
    return async (dispatch) => {
        dispatch({type: GET_RESTAURANT_ORDER_REQUEST});
        try{
            const { data } = await api.get(`/api/admin/order/restaurant/${restaurantId}`,{
                params: {order_status: orderStatus},
                headers: {
                    Authorization: `Bearer ${jwt}`
                }
            })
            const orders = data;
            console.log('restaurant order', orders)
            dispatch({type: GET_RESTAURANT_ORDER_REQUEST, payload: orders})

        }catch (e) {
            dispatch({type: GET_RESTAURANT_ORDER_REQUEST, payload: e})
        }
    }
}

