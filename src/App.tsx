import React, { useState } from "react";
import logo from "./logo.svg";
import theme from "./components/theme";
import Header from "./components/header";
import Home from "./components/home";
import About from "./components/about";
import { MuiThemeProvider as ThemeProvider } from "@material-ui/core/styles";

import "./App.css";
import BinarySketch from "./components/binarySketch";

function App() {
    const [darkState, setDarkState] = useState(true);
    const palletType = darkState ? "dark" : undefined;
    const pageNames = ["Home", "About", "Experiece", "Portfolio", "Contact", "Resume"]
    const [selectedPage, setSelectedPage] = useState(1);

    let selectedElement = ((selectedPage, pageNames) => {
        switch (pageNames[selectedPage]){
            case "Home":
                return <Home />;
            case "About":
                return <About />;
            case "Experience":
            case "Porfolio":
            case "Contact":
            case "Resume":
        };
    }) (selectedPage, pageNames);

    return (
    <ThemeProvider theme={theme}>
        <Header pageNames={pageNames} selectedPage={selectedPage} onChange={setSelectedPage}/>
        {selectedElement}
        <BinarySketch isHome={selectedPage === 0}></BinarySketch>
    </ThemeProvider>);
}

export default App;
