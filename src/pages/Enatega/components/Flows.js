import React from 'react';
import { Typography, makeStyles, Grid } from '@material-ui/core';
import {StaticImage} from 'gatsby-plugin-image'
import Number1 from '../../../svg/01'
import Number2 from '../../../svg/02'
import Number3 from '../../../svg/03'
import Number4 from '../../../svg/04'

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
        backgroundColor: '#FAFBFF',
        height: 'fit-content',
        marginTop: theme.spacing(10),
    },
    images1: {
        width: '75%',
        margin: 'auto',
        alignSelf:'center',
        textAlign:'center',
        marginTop: theme.spacing(5)
    },
}));

const Flow = (props) => {
    const classes = useStyles();

    return (
        <>
            <div className={classes.root}>
                <Typography variant="h5" gutterBottom style={{ textAlign: 'center',margin:'auto', lineHeight: '60   px', marginTop: 10, fontSize:'4vmin', fontFamily: 'Montserrat',width:'90%', fontWeight: '700' }}>Offers all necessary screens to build a Multi Vendor Restaurant App   </Typography>
                <Typography variant="h5" gutterBottom style={{ textAlign: 'center', lineHeight: '20px', width: '50%', fontSize: '2vmin', margin: 'auto', marginTop: 10, fontFamily: 'Montserrat', color: '#333333' }}>Fully functional product available with all necessary screens required for creating restaurant apps, easy to customize as per user requirement.  </Typography>

                <div className={classes.images1}>
                    <div style={{display:'flex', justifyContent:'center', alignItems:'center'}}>
                   <Number1 />
                    <Typography variant="h5"  style={{ textAlign: 'center',marginLeft:'1vmin', fontSize: '3vmin', letterSpacing: 1, lineHeight: '90px', marginTop: 10, fontFamily: 'Montserrat', fontWeight:'bolder' }}>On Boarding & Registration</Typography>
                    </div>
                    <Grid container justify="center" alignItems="center" spacing={10}>
                        <Grid item xs={12} lg={3}>
                            <StaticImage alt="Enatega App" style={{ border: '1px solid #EBE8E8',  borderRadius: 20, padding: 10, width:'30vmin' }} src="../../../images/ios1.png" />
                        </Grid>
                        <Grid item xs={12} lg={3}>
                            <StaticImage alt="Enatega App" style={{ border: '1px solid #EBE8E8', borderRadius: 20, padding: 10, width:'30vmin' }} src="../../../images/ios2.png" />
                        </Grid>
                        <Grid item xs={12} lg={3}>
                            <StaticImage alt="Enatega App" style={{ border: '1px solid #EBE8E8', borderRadius: 20, padding: 10, width:'30vmin' }} src="../../../images/ios3.png" />
                        </Grid>
                        <Grid item xs={12} lg={3}>
                            <StaticImage alt="Enatega App" style={{ border: '1px solid #EBE8E8', borderRadius: 20, padding: 10, width:'30vmin' }} src="../../../images/ios4.png" />
                        </Grid>
                    </Grid>
                </div>
                <div className={classes.images1}>
                <div style={{display:'flex', justifyContent:'center', alignItems:'center'}}>
                    <Number2 />
                    <Typography variant="h5" gutterBottom style={{ textAlign: 'center',marginLeft:'1vmin', fontSize: '3vmin', letterSpacing: 1, lineHeight: '90px', marginTop: 10, fontFamily: 'Montserrat', fontWeight: 'bolder' }}>Browse or Search Restaurant</Typography>
                    </div>
                    <Grid container spacing={10}>
                        <Grid item xs={12} lg={3}>
                            <StaticImage alt="Enatega App" style={{ border: '1px solid #EBE8E8', borderRadius: 20, padding: 10, width:'30vmin' }} src="../../../images/ios5.png" />
                        </Grid>
                        <Grid item xs={12} lg={3}>
                            <StaticImage alt="Enatega App" style={{ border: '1px solid #EBE8E8', borderRadius: 20, padding: 10, width:'30vmin' }} src="../../../images/ios6.png" />
                        </Grid>
                        <Grid item xs={12} lg={3}>
                            <StaticImage alt="Enatega App" style={{ border: '1px solid #EBE8E8', borderRadius: 20, padding: 10, width:'30vmin' }} src="../../../images/ios7.png" />
                        </Grid>
                        <Grid item xs={12} lg={3}>
                            <StaticImage alt="Enatega App" style={{ border: '1px solid #EBE8E8', borderRadius: 20, padding: 10, width:'30vmin' }} src="../../../images/ios8.png" />
                        </Grid>
                    </Grid>
                </div>
                <div className={classes.images1}>
                <div style={{display:'flex', justifyContent:'center', alignItems:'center'}}>
                   <Number3 />
                    <Typography variant="h5" gutterBottom style={{ textAlign: 'center', fontSize: '3vmin',marginLeft:'1vmin', letterSpacing: 1, lineHeight: '90px', marginTop: 10, fontFamily: 'Montserrat', fontWeight: 'bolder' }}>Checkout Flow</Typography>
                    </div>
                    <Grid container spacing={10}>
                        <Grid item xs={12} lg={3}>
                            <StaticImage alt="Enatega App" style={{ border: '1px solid #EBE8E8', borderRadius: 20, padding: 10, width:'30vmin' }} src="../../../images/ios9.png" />
                        </Grid>
                        <Grid item xs={12} lg={3}>
                            <StaticImage alt="Enatega App" style={{ border: '1px solid #EBE8E8', borderRadius: 20, padding: 10, width:'30vmin' }} src="../../../images/ios10.png" />
                        </Grid>
                        <Grid item xs={12} lg={3}>
                            <StaticImage alt="Enatega App" style={{ border: '1px solid #EBE8E8', borderRadius: 20, padding: 10, width:'30vmin' }} src="../../../images/ios11.png" />
                        </Grid>
                        <Grid item xs={12} lg={3}>
                            <StaticImage alt="Enatega App" style={{ border: '1px solid #EBE8E8', borderRadius: 20, padding: 10, width:'30vmin' }} src="../../../images/ios12.png" />
                        </Grid>
                    </Grid>
                </div>
                <div className={classes.images1}>
                <div style={{display:'flex', justifyContent:'center', alignItems:'center'}}>
                    <Number4 />
                    <Typography variant="h5" gutterBottom style={{ textAlign: 'center', fontSize: '3vmin',marginLeft:'1vmin', letterSpacing: 1, lineHeight: '90px', marginTop: 10, fontFamily: 'Montserrat', fontWeight: 'bolder' }}>Orders</Typography>
                    </div>
                    <Grid container spacing={10}>
                        <Grid item xs={12} lg={3}>
                            <StaticImage alt="Enatega App" style={{ border: '1px solid #EBE8E8', borderRadius: 20, padding: 10, width:'30vmin' }} src="../../../images/ios13.png" />
                        </Grid>
                        <Grid item xs={12} lg={3}>
                            <StaticImage alt="Enatega App" style={{ border: '1px solid #EBE8E8', borderRadius: 20, padding: 10, width:'30vmin' }} src="../../../images/ios14.png" />
                        </Grid>
                        <Grid item xs={12} lg={3}>
                            <StaticImage alt="Enatega App" style={{ border: '1px solid #EBE8E8', borderRadius: 20, padding: 10, width:'30vmin' }} src="../../../images/ios15.png" />
                        </Grid>
                        <Grid item xs={12} lg={3}>
                            <StaticImage alt="Enatega App" style={{ border: '1px solid #EBE8E8', borderRadius: 20, padding: 10, width:'30vmin' }} src="../../../images/ios16.png" />
                        </Grid>
                    </Grid>
                </div>
            </div>
        </>


    );
}

export default Flow;

