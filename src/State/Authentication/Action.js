import {
    ADD_TO_FAVORITE_FAILURE,
    ADD_TO_FAVORITE_REQUEST, ADD_TO_FAVORITE_SUCCESS, GET_USER_FAILURE,
    GET_USER_REQUEST, GET_USER_SUCCESS, LOGIN_FAILURE,
    LOGIN_REQUEST,
    LOGIN_SUCCESS, LOGOUT, REGISTER_FAILURE,
    REGISTER_REQUEST,
    REGISTER_SUCCESS
} from "./ActionType";
import axios from "axios";
import {api, API_URL} from "../../component/config/api";

export const registerUser=(reqData)=>async(dispatch)=>{
    dispatch({type:REGISTER_REQUEST})
    try {
        const {data} = await axios.post(`${API_URL}/identity/users/registration`, reqData.userData)
        // if(data.jwt){
        //     localStorage.setItem("jwt", data.jwt)
        // }
        //
        // if(data.role === "ADMIN"){
        //     reqData.navigate("/admin/restaurant")
        // } else {
        //     reqData.navigate("/")
        // }

        dispatch({type:REGISTER_SUCCESS, payload:data})

        console.log('register', data)

    }catch (e) {
        dispatch({type:REGISTER_FAILURE, payload: e})
        console.log(e)
    }
}

export const loginUser = (reqData) => async (dispatch) => {
    dispatch({ type: LOGIN_REQUEST });
    try {
        const { data } = await axios.post(`${API_URL}/identity/auth/token`, reqData.userData);

        if (data.result?.token) {
            localStorage.setItem("jwt", data.result.token);
        }

        // const roles = data.result?.roles || [];
        // if (roles.includes("ADMIN")) {
        //     reqData.navigate("/admin/restaurant");
        // } else {
        //     reqData.navigate("/");
        // }
        reqData.navigate("/")

        dispatch({ type: LOGIN_SUCCESS, payload: data.result?.token });

        console.log("login", data);
    } catch (e) {
        dispatch({ type: LOGIN_FAILURE, payload: e });
        console.log(e);
    }
};


export const getUser=(jwt)=>async(dispatch)=>{
    dispatch({type:GET_USER_REQUEST})
    try {
        const {data} = await api.get('/identity/users/get-user',{
            headers:{
                Authorization:`Bearer ${jwt}`
            }
        })

        dispatch({type:GET_USER_SUCCESS, payload:data.result})
        console.log('user', data)
    }catch (e) {
        dispatch({type:GET_USER_FAILURE, payload: e})

        console.log(e)
    }
}

export const addToFavorite=({jwt, restaurantId})=>async(dispatch)=>{
    dispatch({type:ADD_TO_FAVORITE_REQUEST})
    try {
        const {data} = await api.put(`/api/restaurants/${restaurantId}/add-favorites`,{},{
            headers:{
                Authorization:`Bearer ${jwt}`
            }
        })

        dispatch({type:ADD_TO_FAVORITE_SUCCESS, payload:data})
        console.log('favorite', data)

    }catch (e) {
        dispatch({type:ADD_TO_FAVORITE_FAILURE, payload: e})

        console.log(e)
    }
}


export const logout=()=>async(dispatch)=>{
    try {
        localStorage.clear()
        dispatch({type:LOGOUT})
    }catch (e) {
        console.log(e)
    }
}
