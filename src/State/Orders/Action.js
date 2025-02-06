import {api} from "../../component/config/api";
import {
    CREATE_ORDER_FAILURE,
    CREATE_ORDER_REQUEST,
    CREATE_ORDER_SUCCESS, CREATE_PAYMENT_LINK, GET_USER_ORDERS_FAILURE,
    GET_USER_ORDERS_REQUEST,
    GET_USER_ORDERS_SUCCESS
} from "./ActionType";


export const createPaymentLink = (reqData) => {
    return async (dispatch) => {
        dispatch({type: CREATE_PAYMENT_LINK});
        try {
            const {data} = await api.get(`/api/vn-pay`, {
                headers: {
                    Authorization: `Bearer ${reqData.jwt}`
                }
            })

            if(data.payment_url){
                window.location.href = data.payment_url;
            }
            console.log('payment link', data)
            dispatch({type: CREATE_PAYMENT_LINK, payload: data})

        } catch (e) {
            dispatch({type: CREATE_PAYMENT_LINK, payload: e})
        }
    }
}

export const createOrder =  (reqData) => {
    return async (dispatch) => {
        dispatch({type: CREATE_ORDER_REQUEST});
        try {
            const {data} = await api.post(`/order/create`, reqData, {
                headers: {
                    Authorization: `Bearer ${reqData.jwt}`
                }
            })

            if(data.payment_url){
                window.location.href = data.payment_url;
            }
            console.log('create order', data)
            dispatch({type: CREATE_ORDER_SUCCESS, payload: data})

        } catch (e) {
            dispatch({type: CREATE_ORDER_FAILURE, payload: e})
            if (e.response) {
                console.error("API Error Response:", e.response.data);
                return Promise.reject(new Error(e.response.data.message || "Something went wrong"));
            } else {
                return Promise.reject(new Error("Server is not responding"));
            }
        }
    }
}

export const getUserOrders = (jwt) => {
    return async (dispatch) => {
        dispatch({type: GET_USER_ORDERS_REQUEST});
        try {
            const {data} = await api.get("/order/user",  {
                headers: {
                    Authorization: `Bearer ${jwt}`
                }
            })

            console.log('user order', data)
            dispatch({type: GET_USER_ORDERS_SUCCESS, payload: data})

        } catch (e) {
            dispatch({type: GET_USER_ORDERS_FAILURE , payload: e})
        }
    }
}
