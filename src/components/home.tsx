import React from "react";
import Typography from "@material-ui/core/Typography";
import { CSSProperties } from "@material-ui/styles";

export default function Home() {
    const bottomLeftAnchor: CSSProperties = {
        position: "relative",
        background: "white",
        left: 0,
        bottom: 0,
    }
    return(
        <div style={bottomLeftAnchor}>
            <Typography variant="body1">
                Displayed here is Perlin noise where the z-axis is time mapped to the characters " ", "0", and "1" 
                in order to produce an affect of this code morphing through time
            </Typography>
        </div>
    )
}