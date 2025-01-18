import './App.css';
import {CssBaseline, ThemeProvider} from "@mui/material";
import darkTheme from "./Theme/DarkTheme";
import CustomerRoute from "./Routers/CustomerRoute";
import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {getUser} from "./State/Authentication/Action";
import {findCart} from "./State/Cart/Action";
import Routers from "./Routers/Routers";

function App() {

    const dispatch = useDispatch()
    const token = localStorage.getItem("jwt")
    const {jwt} = useSelector((store) => store.auth)

    useEffect(() => {
        dispatch(getUser(jwt || token))
        dispatch(findCart(jwt || token))
    }, [jwt]);

    return (
        <div>
            <ThemeProvider theme={darkTheme}>
                <CssBaseline/>
                <Routers/>
                {/*<CustomerRoute/>*/}

            </ThemeProvider>
        </div>
    );
}

export default App;
