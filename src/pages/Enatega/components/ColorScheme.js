import React from 'react';
import { Divider, Typography, makeStyles, Grid } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    divider: {
        backgroundColor: '#175CFF',
        margin: 'auto',
        marginTop: '20px',
        width: '74px',
        height: '3px',
        marginBottom: '20px'
    },
    container: {
        display: 'grid',
        gridTemplateColumns: 'repeat(12, 1fr)',
        gridGap: theme.spacing(4),
    },
    root: {
        flexGrow: 1,
        height: 'fit-content',
        marginTop: theme.spacing(10),
        paddingTop: theme.spacing(5)
    },
    images1: {
        width: '80%',
        margin: 'auto',
        marginTop: theme.spacing(5)
    },
    paper: {
        padding: theme.spacing(2),
        elevation: 1,
        height: 150,
        width: 250,
        alignContent: 'center',
        color: theme.palette.text.secondary,
    },
}));

const ColorScheme = (props) => {
    const classes = useStyles();

    return (
        <>
            <div className={classes.root}>
                <Typography variant="h5" gutterBottom style={{ textAlign: 'center', lineHeight: '60   px', marginTop: 10, fontFamily: 'Montserrat', fontWeight: '700' }}>Color Scheme</Typography>
                <Typography variant="h5" gutterBottom style={{ textAlign: 'center', lineHeight: '20px', width: '50%', fontSize: 12, margin: 'auto', marginTop: 10, fontFamily: 'Montserrat', color: '#455880' }}>Colors are picked carefully to match the asthetic of the App Design</Typography>
                <Divider className={classes.divider} />
                <Grid container style={{ width: '80%', margin: 'auto' }} direction="row" spacing={4} alignItems="center" justify="center" >
                    <Grid item xs={12} md={3} >
                        <div style={{ textAlign: 'center', margin: 'auto', backgroundColor: '#6FCF96', marginTop: 20, width: 190, height: 185, borderRadius: '50% 49% 66% 29% / 47% 30% 71% 59%' }}>

                        </div>
                    </Grid>
                    <Grid item xs={12} md={3} >
                        <div style={{ textAlign: 'center', justifyContent: 'center', margin: 'auto', backgroundColor: '#3D3D3D', marginTop: 20, width: 190, height: 185, borderRadius: '27% 74% 58% 50% / 60% 76% 30% 55%' }}>

                        </div>
                    </Grid>
                    <Grid item xs={12} md={3}>
                        <div style={{ textAlign: 'center', margin: 'auto', backgroundColor: '#FDE758', marginTop: 20, width: 190, height: 185, borderRadius: '61% 76% 32% 100% / 100% 29% 100% 47%' }}>

                        </div>
                    </Grid>
                </Grid>

            </div>
        </>


    );
}

export default ColorScheme;

