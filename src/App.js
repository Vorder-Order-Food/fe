import './App.css';
import {CssBaseline, ThemeProvider} from "@mui/material";
import darkTheme from "./Theme/DarkTheme";
import CustomerRoute from "./Routers/CustomerRoute";
import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {getUser} from "./component/State/Authentication/Action";

function App() {

    const dispatch = useDispatch()
    const jwt = localStorage.getItem("jwt")
    const {auth} = useSelector(store => store)

    useEffect(() => {
        dispatch(getUser(auth.jwt || jwt))
        console.log(auth)
    }, [auth.jwt]);

    return (
        <div>
            <ThemeProvider theme={darkTheme}>
                <CssBaseline/>
                <CustomerRoute />

            </ThemeProvider>
        </div>
    );
}

export default App;
