import React from 'react'
import { Card, CardHeader, CardContent, CardMedia, CardActions, Typography, IconButton } from '@material-ui/core'
import Profile from '../../images/profile.jpeg'
// import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import "./styles.css"

export default function ServicesCard() {
  return (
    <Card style={{maxWidth:'375px'}} className="service-card">
      <CardMedia
        component="img"
        className="service-card-image"
        image={Profile}
        alt="Tech"
      />
      <CardContent>
      <Typography variant="body1" color="text.secondary">
         IOS DEVELOPEMENT
        </Typography>
        <Typography variant="body2" color="text.secondary">
          This impressive paella is a perfect party dish and a fun meal to cook
          together with your guests. Add 1 cup of frozen peas along with the mussels,
          if you like.
        </Typography>
      </CardContent>
      {/* <CardActions disableSpacing>      
            <ArrowForwardIcon />
        </CardActions> */}
    </Card>
  );
}