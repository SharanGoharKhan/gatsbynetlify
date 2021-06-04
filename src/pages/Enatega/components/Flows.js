import React from 'react';
import { Typography, makeStyles, Grid } from '@material-ui/core';
import ios1 from "../../../images/ios1.svg";
import ios2 from "../../../images/ios2.png";
import ios3 from "../../../images/ios3.png";
import ios4 from "../../../images/ios4.png";
import ios5 from "../../../images/ios5.png";
import ios6 from "../../../images/ios6.png";
import ios7 from "../../../images/ios7.png";
import ios8 from "../../../images/ios8.png";
import ios9 from "../../../images/ios9.png";
import ios10 from "../../../images/ios10.png";
import ios11 from "../../../images/ios11.png";
import ios12 from "../../../images/ios12.png";
import ios13 from "../../../images/ios13.png";
import ios14 from "../../../images/ios14.png";
import ios15 from "../../../images/ios15.png";
import ios16 from "../../../images/ios16.png";

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
        // paddingTop:theme.spacing(3)
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
                    <Typography variant="h5" gutterBottom style={{ textAlign: 'center', fontSize: '2vmin', letterSpacing: 1, lineHeight: '90px', marginTop: 10, fontFamily: 'Montserrat', fontWeight: '700' }}>On Boarding & Registration</Typography>
                    <Grid container justify="center" alignItems="center" spacing={10}>
                        <Grid item xs={12} lg={3}>
                            <img alt="Enatega App" style={{ border: '1px solid #EBE8E8',  borderRadius: 20, padding: 10, width:'30vmin' }} src={ios1} />
                        </Grid>
                        <Grid item xs={12} lg={3}>
                            <img alt="Enatega App" style={{ border: '1px solid #EBE8E8', borderRadius: 20, padding: 10, width:'30vmin' }} src={ios2} />
                        </Grid>
                        <Grid item xs={12} lg={3}>
                            <img alt="Enatega App" style={{ border: '1px solid #EBE8E8', borderRadius: 20, padding: 10, width:'30vmin' }} src={ios3} />
                        </Grid>
                        <Grid item xs={12} lg={3}>
                            <img alt="Enatega App" style={{ border: '1px solid #EBE8E8', borderRadius: 20, padding: 10, width:'30vmin' }} src={ios4} />
                        </Grid>
                    </Grid>
                </div>
                <div className={classes.images1}>
                    <Typography variant="h5" gutterBottom style={{ textAlign: 'center', fontSize: 15, letterSpacing: 1, lineHeight: '90px', marginTop: 10, fontFamily: 'Montserrat', fontWeight: '700' }}>On Boarding & Registration</Typography>
                    <Grid container spacing={10}>
                        <Grid item xs={12} lg={3}>
                            <img alt="Enatega App" style={{ border: '1px solid #EBE8E8', borderRadius: 20, padding: 10, width:'30vmin' }} src={ios5} />
                        </Grid>
                        <Grid item xs={12} lg={3}>
                            <img alt="Enatega App" style={{ border: '1px solid #EBE8E8', borderRadius: 20, padding: 10, width:'30vmin' }} src={ios6} />
                        </Grid>
                        <Grid item xs={12} lg={3}>
                            <img alt="Enatega App" style={{ border: '1px solid #EBE8E8', borderRadius: 20, padding: 10, width:'30vmin' }} src={ios7} />
                        </Grid>
                        <Grid item xs={12} lg={3}>
                            <img alt="Enatega App" style={{ border: '1px solid #EBE8E8', borderRadius: 20, padding: 10, width:'30vmin' }} src={ios8} />
                        </Grid>
                    </Grid>
                </div>
                <div className={classes.images1}>
                    <Typography variant="h5" gutterBottom style={{ textAlign: 'center', fontSize: 15, letterSpacing: 1, lineHeight: '90px', marginTop: 10, fontFamily: 'Montserrat', fontWeight: '700' }}>On Boarding & Registration</Typography>
                    <Grid container spacing={10}>
                        <Grid item xs={12} lg={3}>
                            <img alt="Enatega App" style={{ border: '1px solid #EBE8E8', borderRadius: 20, padding: 10, width:'30vmin' }} src={ios9} />
                        </Grid>
                        <Grid item xs={12} lg={3}>
                            <img alt="Enatega App" style={{ border: '1px solid #EBE8E8', borderRadius: 20, padding: 10, width:'30vmin' }} src={ios10} />
                        </Grid>
                        <Grid item xs={12} lg={3}>
                            <img alt="Enatega App" style={{ border: '1px solid #EBE8E8', borderRadius: 20, padding: 10, width:'30vmin' }} src={ios11} />
                        </Grid>
                        <Grid item xs={12} lg={3}>
                            <img alt="Enatega App" style={{ border: '1px solid #EBE8E8', borderRadius: 20, padding: 10, width:'30vmin' }} src={ios12} />
                        </Grid>
                    </Grid>
                </div>
                <div className={classes.images1}>
                    <Typography variant="h5" gutterBottom style={{ textAlign: 'center', fontSize: 15, letterSpacing: 1, lineHeight: '90px', marginTop: 10, fontFamily: 'Montserrat', fontWeight: '700' }}>On Boarding & Registration</Typography>
                    <Grid container spacing={10}>
                        <Grid item xs={12} lg={3}>
                            <img alt="Enatega App" style={{ border: '1px solid #EBE8E8', borderRadius: 20, padding: 10, width:'30vmin' }} src={ios13} />
                        </Grid>
                        <Grid item xs={12} lg={3}>
                            <img alt="Enatega App" style={{ border: '1px solid #EBE8E8', borderRadius: 20, padding: 10, width:'30vmin' }} src={ios14} />
                        </Grid>
                        <Grid item xs={12} lg={3}>
                            <img alt="Enatega App" style={{ border: '1px solid #EBE8E8', borderRadius: 20, padding: 10, width:'30vmin' }} src={ios15} />
                        </Grid>
                        <Grid item xs={12} lg={3}>
                            <img alt="Enatega App" style={{ border: '1px solid #EBE8E8', borderRadius: 20, padding: 10, width:'30vmin' }} src={ios16} />
                        </Grid>
                    </Grid>
                </div>
            </div>
        </>


    );
}

export default Flow;

