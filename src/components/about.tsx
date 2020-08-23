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

export default function About() {

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
                        <Grid container>
                            <Grid item xs={12} md={5}>
                                <img alt={"An image of Trevor Bolton sitting on the San Antonio River Walk"} src={process.env.PUBLIC_URL + "/static/TrevorPicture.JPG"} className={classes.imgResponsive} style={{borderRadius: "3%"}}></img>
                            </Grid>
                            <Grid item xs={12} md={7} style={{padding: "3%"}}>
                                <Typography variant="h5">Howdy! I am Trevor Bolton</Typography>
                                <Typography variant="body1">
                                    { "I am a senior honors Computer Science student at Texas A&M University in College Station, Texas. \
                                    I enjoy learning new things and helping others further their education. I have been a personal tutor for engineering students \
                                    at Texas A&M for two years and enjoy watching and helping others succeed! I am currently seeking an internship in software engineering for \
                                    Summer 2021. Please take a look at my work and contact me for further information." }
                                    <br /><br />
                                    {"I am interested in emerging technologies and how they can be applied to enhance others' lives. I am currently studying machine \
                                    learning and virtual reality and hope to work on projects related to this in the near future. If you would like to collaborate \
                                    on a project, please email me. "}
                                </Typography>
                            </Grid>
                        </Grid>
                        
                    </CardContent>
                </Card>
                </Grid>
            </Grid>
        </BootstrapContainerGrid>
        
    )
}