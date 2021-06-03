import React from 'react';
import { Divider, Typography, makeStyles} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    divider: {
        backgroundColor: '#175CFF',
        margin: 'auto',
        marginTop: '20px',
        width: '74px',
        height: '3px'
    },
    root: {
        flexGrow: 1,
        backgroundColor: '#FAFBFF',
        height: 'fit-content',
        marginTop: theme.spacing(10),
        paddingTop:theme.spacing(5)
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

const Typographys = (props) => {
    const classes = useStyles();

    return (
        <>
            <div className={classes.root}>
                <Typography variant="h5" gutterBottom style={{ textAlign: 'center', lineHeight: '60   px', marginTop: 10, fontFamily: 'Montserrat', fontWeight: '700' }}>Typhography</Typography>
                <Typography variant="h5" gutterBottom style={{ textAlign: 'center', lineHeight: '20px', width: '50%', fontSize: 12, margin: 'auto', marginTop: 10, fontFamily: 'Montserrat', color: '#455880' }}>We picked up the modern and trendy fonts that goes well with the app.</Typography>
                <Divider className={classes.divider} />
                <Typography variant="h5" gutterBottom style={{ textAlign: 'center', lineHeight: '60px', width: '50%', margin: 'auto', marginTop: 10,fontWeight:'700', fontFamily: 'Montserrat', color: '#222222' }}>Poppins - <Typography style={{display:'inline',lineHeight: '60px',fontFamily: 'Montserrat',fontSize:22, color: '#222222'}}>Google Fonts</Typography></Typography>
                <Typography variant="h5" gutterBottom style={{ textAlign: 'center',letterSpacing:5,fontWeight: '700', lineHeight: '50px', width: '90%', margin: 'auto', marginTop: 10, fontFamily: 'Montserrat', color: '#222222' }}>A B C D E F G H I J K L M N O P Q R S T U V W X Y Z</Typography>
                <Typography variant="h5" gutterBottom style={{ textAlign: 'center',letterSpacing:5,fontWeight: '700', lineHeight: '50px', width: '90%', margin: 'auto', marginTop: 10, fontFamily: 'Montserrat', color: '#222222' }}>a b c d e f g h i j k l m n o p q r s t u v w x y z</Typography>
                <Typography variant="h5" gutterBottom style={{ textAlign: 'center',letterSpacing:5,fontWeight: '700', lineHeight: '50px', width: '90%', margin: 'auto', marginTop: 10, fontFamily: 'Montserrat', color: '#222222' }}>0 1 2 3 4 5 6 7 8 9</Typography>
            </div>
        </>


    );
}

export default Typographys;

