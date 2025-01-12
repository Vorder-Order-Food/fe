import {createContext, useState} from "react";

export const AppContext = createContext();

const AppContextProvider = (props) => {
    const currency = '$'

    const [jwt, setJwt] = useState(localStorage.getItem('jwt')
        ? localStorage.getItem('jwt') : '');

    const value = {
        currency, jwt
    }

    return(
        <AppContext.Provider value={value}>
            {props.children}
        </AppContext.Provider>
    )
}

export default AppContextProvider;
