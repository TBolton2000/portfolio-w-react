import React from "react";
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Grid from "@material-ui/core/Grid";
import { sizing } from '@material-ui/system';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    paper: {
      height: 140,
      width: 100,
    },
    control: {
      padding: theme.spacing(2),
    },
  }),
);

export default function About() {

    const classes = useStyles();

    return(
        <Grid 
        container
        className={classes.root}
        alignItems="center"
        justify="center"
        >
            <Grid item xs={8}>
            <Card elevation={3}>
                <CardContent>
                    <Typography variant="h5">Howdy! I am Trevor Bolton</Typography>
                </CardContent>
            </Card>
            </Grid>
            <Grid item xs={8}>
            <Card elevation={3}>
                <CardContent>
                    <Typography variant="h5">
                        I am a computer science student at Texas A and M University in College Station, Texas.

                    </Typography>
                </CardContent>
            </Card>
            </Grid>
        </Grid>
        
    )
}