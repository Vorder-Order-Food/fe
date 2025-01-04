import './App.css';
import Navbar from "./component/Navbar";
import {CssBaseline, ThemeProvider} from "@mui/material";
import darkTheme from "./Theme/DarkTheme";

function App() {
    return (
        <div>
            <ThemeProvider theme={darkTheme}>
                <CssBaseline/>
                <Navbar/>

            </ThemeProvider>
        </div>
    );
}

export default App;
