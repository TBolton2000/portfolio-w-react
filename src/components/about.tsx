import React from "react";

import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Grid from "@material-ui/core/Grid";

export default function About() {

    return(
        <Grid 
        container
        spacing={0}
        direction="column"
        alignItems="center"
        justify="center"
        style={{ minHeight: '100vh' }} >
            <Card elevation={3}>
                <CardContent>
                    <Typography variant="h5">Howdy! I am Trevor Bolton</Typography>
                </CardContent>
            </Card>
        </Grid>
    )
}