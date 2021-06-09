import React from 'react';
import { Typography, makeStyles, Paper, Grid } from '@material-ui/core';
import Artboard1 from "../../../images/artboard1.svg";
import Artboard2 from "../../../images/artboard2.svg";
import Artboard3 from "../../../images/artboard3.svg";
import Artboard4 from "../../../images/artboard4.svg";
import Artboard5 from "../../../images/artboard5.svg";
import Artboard6 from "../../../images/artboard6.svg";


const useStyles = makeStyles((theme) => ({
    divider: {
        backgroundColor: '#175CFF',
        margin: 'auto',
        marginTop: '40px',
        width: '74px',
        height: '2px'
    },
    root: {
        flexGrow: 1,
        marginTop: 20,
        textAlign: 'center',
        width: '70%',
        margin: 'auto',
        alignSelf: 'center',
    },
    paper: {
        padding: theme.spacing(2),
        elevation: 1,
        alignContent: 'center',
        color: theme.palette.text.secondary,
    },
}));

const Features = (props) => {
    const classes = useStyles();

    function FormRow(box1, box2, box3) {
        return (
            <React.Fragment>
                <Grid item direction="row" justify="center" alignItems="center" xs={12} md={4}>
                    <Paper className={classes.paper}>
                        <img alt={box1.title} src={box1.img} style={{ width: 50, height: 50 }} />
                        <Typography style={{ lineHeight: '50px', fontFamily: 'Montserrat', color: 'black', fontSize: '15px', fontWeight: '700' }}>{box1.title}</Typography>
                        <Typography style={{ color: '#625B5B', fontFamily: 'Montserrat', fontSize: '12px' }}>{box1.description}</Typography>
                    </Paper>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Paper className={classes.paper}>
                        <img alt={box2.title} src={box2.img} style={{ width: 50, height: 50 }} />
                        <Typography style={{ lineHeight: '50px', fontFamily: 'Montserrat', color: 'black', fontSize: '15px', fontWeight: '700' }}>{box2.title}</Typography>
                        <Typography style={{ color: '#625B5B', fontFamily: 'Montserrat', fontSize: '12px' }}>{box2.description}</Typography>
                    </Paper>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Paper className={classes.paper}>
                        <img alt={box3.title} src={box3.img} style={{ width: 50, height: 50 }} />
                        <Typography style={{ lineHeight: '50px', fontFamily: 'Montserrat', color: 'black', fontSize: '15px', fontWeight: '700' }}>{box3.title}</Typography>
                        <Typography style={{ color: '#625B5B', fontFamily: 'Montserrat', fontSize: '12px' }}>{box3.description}</Typography>
                    </Paper>
                </Grid>
            </React.Fragment>
        );
    }

    return (
        <>
            <div style={{ width: '100%', marginTop: 50, textAlign: 'center' }}>
                <Typography style={{ fontFamily: 'Montserrat', color: '#333333', letterSpacing: 2, lineHeight: '32px', fontSize: 16, textAlign: 'center' }}>Our Features</Typography>
                <Typography style={{ fontFamily: 'Montserrat', fontWeight: '700', lineHeight: '32px', fontSize: 25, textAlign: 'center' }}>Great Features Of Our App</Typography>

                <div className={classes.root}>
                    <Grid container direction="column" spacing={5} justify="center" alignItems="center" >
                        <Grid container direction="row" justify="center" alignItems="center" item xs={12} spacing={3}>
                            {FormRow({ title: 'User Friendly', description: 'Enatega Is Easy To Use With User Friendly Interface.', img: Artboard1 }, { title: 'Quick Update', description: 'Over the air updates has been integrated for quick updates', img: Artboard2 }, { title: 'High Performance', description: 'Highly performant with GrapQL integration', img: Artboard3 })}
                        </Grid>
                        <Grid style={{ marginTop: 20 }} container item xs={12} spacing={3}>
                            {FormRow({ title: '100% Secure', description: 'User data is encrypted with latest encryption technologies', img: Artboard4 }, { title: 'Unlimited Features', description: 'It is highly customizable with any feature that is required can be added on request', img: Artboard5 }, { title: 'Timely changes', description: 'Our highly skilled team works around the clock to work on your features', img: Artboard6 })}
                        </Grid>
                    </Grid>
                </div>
            </div>
        </>


    );
}

export default Features;

