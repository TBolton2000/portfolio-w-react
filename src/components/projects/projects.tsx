import React, { useState, useEffect } from "react";
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Grid from "@material-ui/core/Grid";
import { sizing } from '@material-ui/system';
import BootstrapContainerGrid from "../boostrapcontainergrid";
import BlogCard from "../blogcard";
import ProjectsData from "./projects.json";

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

    const projects = ProjectsData;

    const classes = useStyles();

    return(
        <BootstrapContainerGrid>
            <Grid 
            container
            className={classes.root}
            alignItems="center"
            justify="center"
            spacing={8}
            >
                {projects.map(({title, date, body, imageUrl, link, labels},index)=>
                <Grid item xs={12} md={6} key={index}>
                <BlogCard title={title} date={date} body={body} imageUrl={imageUrl} labels={labels} link={link} />
                </Grid>
                )
                }
            </Grid>
        </BootstrapContainerGrid>
        
    )
}