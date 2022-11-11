import React from "react";
import "./App.scss";
import Admin from "./pages/Admin";
import Home from "./pages/Home";
import Contact from "./pages/Contact";

function App(){
    return(
        <React.Fragment>
            <Admin></Admin>
            <Home></Home>
            <Contact></Contact>
        </React.Fragment>
    );
}

export default App;