import React from "react";

import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Grid from "@material-ui/core/Grid";
import { sizing } from '@material-ui/system';

export default function About() {

    return(
        <Grid 
        container
        spacing={3}
        direction="column"
        alignItems="center"
        justify="space-around"
        >
            <Card elevation={3}>
                <CardContent>
                    <Typography variant="h5">Howdy! I am Trevor Bolton</Typography>
                </CardContent>
            </Card>

            <Card elevation={3}>
                <CardContent>
                    <Typography variant="h5">
                        I am a computer science student at Texas A and M University in College Station, Texas.

                    </Typography>
                </CardContent>
            </Card>
        </Grid>
        
    )
}