import React from "react";
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Grid from "@material-ui/core/Grid";
import { sizing } from '@material-ui/system';
import BootstrapContainerGrid from "./boostrapcontainergrid";

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
    imgResponsive: {
        width: "100%",
        height: "auto",
    }
  }),
);

export default function Projects() {

    const classes = useStyles();

    return(
        <BootstrapContainerGrid>
            <Grid 
            container
            className={classes.root}
            alignItems="center"
            justify="center"
            spacing={2}
            >
                <Grid item xs={12}>
                <Card elevation={3}>
                    <CardContent>
                        Cards containing project details downloaded from github.io page
                    </CardContent>
                </Card>
                </Grid>
            </Grid>
        </BootstrapContainerGrid>
        
    )
}