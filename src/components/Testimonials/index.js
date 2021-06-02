import React, { useRef } from "react";
import { Divider, Button, Paper, Typography, Card, Box, useMediaQuery, CardActionArea, Avatar, CardActions, CardContent, CardMedia, makeStyles, Grid, GridList, GridListTile, IconButton, GridListTileBar } from '@material-ui/core';
import StarIcon from '@material-ui/icons/Star';
import profile from '../../images/profile.jpeg'
import DrawKitLogo from '../../images/DrawKit.png'
import video from '../../images/video.mp4'
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import KeyboardBackspaceIcon from '@material-ui/icons/KeyboardBackspace';
const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        overflow: 'hidden',
        marginTop: 40,
        height: 'fit-content',
        marginBottom: 100,
        backgroundColor: theme.palette.background.paper
    },
    gridList: {
        flexWrap: 'nowrap',
        // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
        transform: 'translateZ(0)',
    },
    titleText: {
        color: '#1E266D',
        fontWeight: 600,
        padding: 20
    },
    media: {
        height: 140,
    },
    large: {
        width: theme.spacing(10),
        height: theme.spacing(10),
    },
    BoxContainer: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        padding: '10%'
    },
    cardTitle: {
        color: '#1E266D'
    },
    cardSubTitle: {
        color: '#455880',
        letterSpacing: 1
    },
    divider: {
        margin: theme.spacing(5)
    },
    star: {
        color: '#FBC917'
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
}));

const tileData = [
    {
        img: 'https://images.unsplash.com/photo-1593642632559-0c6d3fc62b89?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80',
        title: 'Image1',
        author: 'author',
    },
    {
        img: 'https://images.unsplash.com/photo-1593642632559-0c6d3fc62b89?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80',
        title: 'Image2',
        author: 'author',
    },
    {
        img: 'https://images.unsplash.com/photo-1593642632559-0c6d3fc62b89?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80',
        title: 'Image3',
        author: 'author',
    },
    {
        img: 'https://images.unsplash.com/photo-1593642632559-0c6d3fc62b89?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80',
        title: 'Image4',
        author: 'author',
    }
];

const Testimonial = () => {
    const classes = useStyles();
    
    const ref = useRef([]);

    const matches = useMediaQuery('(min-width:800px)');

      function scroll(scrollOffset) {
        ref.current.scrollTo({
            left: ref.current.scrollLeft + scrollOffset,
            behavior: 'smooth'
        })
      };
    
    return (
        <Grid id="test" container justify="center" alignItems="center" style={{ textAlign: 'center',width:'100%',padding:10, marginTop: 30 }} spacing={3}>
            <Grid item xs={12} sm={12} md={4}>
                <Button variant="contained" size="large" style={{ color: '#3751FF', backgroundColor: '#F3F5FE' }}>
                    Testimonial
        </Button>
                <Typography className={classes.titleText} variant="h3" gutterBottom>
                    WHAT OUR CLIENTS TELL ABOUT US
      </Typography>
      {/* <Button variant="contained" size="large" onClick={()=>scroll(200)} >Right</Button> */}
      <IconButton onClick={()=>scroll(-400)}>
         <div style={{backgroundColor:'#fff',textAlign:'center',justifyContent:'center',alignItems:'center', width:'70px', height:'70px', borderRadius:'40px', boxShadow:'-10px 10px 20px #e6e5e3'}}>
            <KeyboardBackspaceIcon color="primary" style={{paddingTop:17}} fontSize="large" />
         </div>
     </IconButton>
      <IconButton onClick={()=>scroll(400)}>
         <div style={{backgroundColor:'#fff',textAlign:'center',justifyContent:'center',alignItems:'center', width:'70px', height:'70px', borderRadius:'40px', boxShadow:'-10px 10px 20px #e6e5e3'}}>
            <ArrowForwardIcon color="primary" style={{paddingTop:17}} fontSize="large" />
         </div>
     </IconButton>
   
            </Grid>
            <Grid item xs={12} sm={12} md={8}>
                <div className={classes.root}>
                    <GridList cellHeight={'auto'} className={classes.gridList} ref={ref} cols={matches ? 2.2 : 1.3}>
                        <GridListTile key={'image0'}>
                            <Card elevation={5} style={{ width: '90%' }}>
                                <CardActionArea>
                                    <CardContent>
                                        <CardMedia
                                            component='video'
                                            className={classes.media}
                                            image={video}
                                            autoPlay
                                            controls
                                            style={{ height: '195px' }}
                                        />
                                        <Divider className={classes.divider} variant="middle" />
                                        <Typography variant="body2" className={classes.cardSubTitle} color="textSecondary" component="p">
                                            Ninjas COde helped me very much by designing our app. And the whole process from the beginning of the first contact to the delivery of the final designs was really satisfying so I can recommend work together with Purrweb. I'm really happy with them!
                                        </Typography>
                                    </CardContent>
                                    <Box component="span" className={classes.BoxContainer} m={1}>
                                        <Box component="span" >
                                            <StarIcon className={classes.star} />
                                            <StarIcon className={classes.star} />
                                            <StarIcon className={classes.star} />
                                            <StarIcon className={classes.star} />
                                        </Box>
                                        <img src={DrawKitLogo} />
                                    </Box>
                                </CardActionArea>
                            </Card>
                        </GridListTile>
                        {tileData.map((tile, index1) => (
                            <GridListTile key={index1}>
                                <Card elevation={5} style={{ width: '90%' }}>
                                    <CardActionArea>
                                        <CardContent>
                                            <Box component="span" className={classes.BoxContainer} >
                                                <Avatar alt="Remy Sharp" src={profile} className={classes.large} />
                                                <Box component="span" m={1}>
                                                    <Typography gutterBottom variant="h5" className={classes.cardTitle} component="h2">
                                                        Bethany Morales
                                                     </Typography>
                                                    <Typography gutterBottom variant="body2" className={classes.cardSubTitle} component="p">
                                                        CEO, Sports web application
                                                    </Typography>
                                                </Box>
                                            </Box>
                                            <Divider className={classes.divider} variant="middle" />
                                            <Typography variant="body2" className={classes.cardSubTitle} color="textSecondary" component="p">
                                                Ninjas Code helped me very much by designing our app. And the whole process from the beginning of the first contact to the delivery of the final designs was really satisfying so I can recommend work together with Purrweb. I'm really happy with them!
                                            </Typography>
                                        </CardContent>
                                        <Box component="span" className={classes.BoxContainer} m={1}>
                                            <Box component="span" >
                                                <StarIcon className={classes.star} />
                                                <StarIcon className={classes.star} />
                                                <StarIcon className={classes.star} />
                                                <StarIcon className={classes.star} />
                                            </Box>
                                            <img src={DrawKitLogo} />
                                        </Box>
                                    </CardActionArea>
                                </Card>
                            </GridListTile>
                        ))}
                    </GridList>
                </div>
            </Grid>


        </Grid>
    );
}

export default Testimonial;