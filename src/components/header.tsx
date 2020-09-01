import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { Tabs, Tab } from "@material-ui/core";

interface HeaderProps {
    pageNames: string[];
    selectedPage: number;
    onChange: Function;
}

export default function Header(props: HeaderProps) {

    const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
        
        props.onChange(newValue);
    };

    return (
        <div>
            <Toolbar>
                <Typography variant="h5">Trevor Bolton's Porfolio</Typography>
                <Tabs value={props.selectedPage} onChange={handleChange}>
                { props.pageNames.map( (pageName: string, index)=>
                    <Tab label={pageName} key={index}/>
                )}
                </Tabs>
            </Toolbar>
            
        </div>
    );
}
