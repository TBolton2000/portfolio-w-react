import React from "react";
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

import { Document, Page } from 'react-pdf';
import { SizeMe } from 'react-sizeme';

import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
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

export default function Resume() {

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
                        <Grid container justify="center" alignItems="center">
                            <Grid item xs={12} md={12}>
                                
                                <SizeMe>
                                {({size})=><Document file="https://tbolton2000.github.io/static/resume.pdf">
                                    <Page pageNumber={1} width={size.width ? size.width : 1}/>
                                </Document>}
                                </SizeMe>
                            </Grid>
                        </Grid>
                    </CardContent>
                    <CardActions>
                        <Button fullWidth={true} target="_blank" href="https://tbolton2000.github.io/static/resume.pdf">Download</Button>
                    </CardActions>
                </Card>
                </Grid>
            </Grid>
        </BootstrapContainerGrid>
        
    )
}