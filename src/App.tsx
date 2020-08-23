import React, { useState } from "react";
import logo from "./logo.svg";
import theme from "./components/theme";
import MyHeader from "./components/header";
import Home from "./components/home";
import About from "./components/about";
import Projects from "./components/projects";
import Resume from "./components/resume";
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
    const pageNames = ["Home", "About", "Projects", "Resume"]
    const [selectedPage, setSelectedPage] = useState(0);

    const appBarStyle: CSSProperties = {
        background: "rgb(33, 150, 243)",
        color: "white",
    };

    const pageWrap: CSSProperties = {
        position: "relative",
        minHeight: "100vh"
    };

    const contentWrap: CSSProperties = {
        paddingBottom: "48px",
        minHeight: "100vh",
    };

    let selectedElement = ((selectedPage, pageNames) => {
        switch (pageNames[selectedPage]){
            case "Home":
                return <Home />;
            case "About":
                return <About />;
            case "Projects":
                return <Projects />;
            case "Resume":
                return <Resume />
        };
    }) (selectedPage, pageNames);

    return (
        <Root scheme={scheme}>
            <BinarySketch isHome={selectedPage === 0}></BinarySketch>
            <CssBaseline />
            <div style={pageWrap}>
            <div style={contentWrap}>
            <Header style={appBarStyle}>
                <MyHeader pageNames={pageNames} selectedPage={selectedPage} onChange={setSelectedPage}/>
            </Header>
            <Content>
                {selectedElement}
            </Content>
            </div>
            <Footer>
                <Grid container alignContent="center" justify="center">
                    <Grid item>
                        <IconButton href="mailto:TBolton2000@aol.com">
                            <EmailIcon />
                        </IconButton>
                    </Grid>
                    <Grid item>
                        <IconButton href="https://github.com/TBolton2000">
                            <GitHubIcon />
                        </IconButton>
                    </Grid>
                    <Grid item>
                        <IconButton href="https://www.linkedin.com/in/trevor-bolton-428158192/">
                            <LinkedInIcon />
                        </IconButton>
                    </Grid>
                    <Grid item>
                        <IconButton onClick={()=>{setSelectedPage(0);}}>
                            <HomeIcon/>
                        </IconButton>
                    </Grid>
                </Grid>
            </Footer>
            </div>
        </Root>);
    // <ThemeProvider theme={theme}>
    //     <Header pageNames={pageNames} selectedPage={selectedPage} onChange={setSelectedPage}/>
    //     {selectedElement}
    //     <BinarySketch isHome={selectedPage === 0}></BinarySketch>
    // </ThemeProvider>);
}

export default App;
