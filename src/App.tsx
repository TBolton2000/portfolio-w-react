import React, { useState } from "react";
import logo from "./logo.svg";
import theme from "./components/theme";
import MyHeader from "./components/header";
import Home from "./components/home";
import About from "./components/about";
import { MuiThemeProvider as ThemeProvider } from "@material-ui/core/styles";
import styled from "styled-components";
import Layout, {
    getHeader,
    getContent,
    getFooter,
    Root,
} from "@mui-treasury/layout";
import Toolbar from "@material-ui/core/Toolbar";
import CssBaseline from "@material-ui/core/CssBaseline";

import "./App.css";
import BinarySketch from "./components/binarySketch";
import { Box, Container, Grid, IconButton } from "@material-ui/core";
import EmailIcon from "@material-ui/icons/Mail";
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import HomeIcon from '@material-ui/icons/Home';
import { CSSProperties } from "@material-ui/styles";

const Header = getHeader(styled);
const Content = getContent(styled);
const Footer = getFooter(styled);

const scheme = Layout();

scheme.configureHeader((builder) => {
    builder
        .create("appHeader")
        .registerConfig("xs", {
            position: "relative",
        })
        .registerConfig("md", {
            position: "sticky",
        });
});


function App() {
    const pageNames = ["Home", "About", "Experiece", "Portfolio", "Contact", "Resume"]
    const [selectedPage, setSelectedPage] = useState(0);

    const appBarStyle: CSSProperties = {
        background: "rgb(33, 150, 243)",
        color: "white",
    }

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
        <Root scheme={scheme}>
            <CssBaseline />
            <Header style={appBarStyle}>
                <MyHeader pageNames={pageNames} selectedPage={selectedPage} onChange={setSelectedPage}/>
            </Header>
            <Content>
                {selectedElement}
            </Content>
            <BinarySketch isHome={selectedPage === 0}></BinarySketch>
            <Footer>
                <Container>
                    <Grid container>
                        <Grid item>
                            <IconButton>
                                <EmailIcon />
                            </IconButton>
                        </Grid>
                        <Grid item>
                            <IconButton>
                                <GitHubIcon />
                            </IconButton>
                        </Grid>
                        <Grid item>
                            <IconButton>
                                <LinkedInIcon />
                            </IconButton>
                        </Grid>
                        <Grid item>
                            <IconButton>
                                <HomeIcon />
                            </IconButton>
                        </Grid>
                    </Grid>
                </Container>
            </Footer>
        </Root>);
    // <ThemeProvider theme={theme}>
    //     <Header pageNames={pageNames} selectedPage={selectedPage} onChange={setSelectedPage}/>
    //     {selectedElement}
    //     <BinarySketch isHome={selectedPage === 0}></BinarySketch>
    // </ThemeProvider>);
}

export default App;
