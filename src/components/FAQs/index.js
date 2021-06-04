
import { Divider, Typography, makeStyles, Paper, Button, List, ListItem, ListItemText } from '@material-ui/core';
import Collapse from '@material-ui/core/Collapse';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import React from 'react';

const useStyles = makeStyles((theme) => ({
  heading: {
    color: '#3751FF',
    marginBottom: 20,
    fontWeight: '700',
    fontSize: '2.7vmin',
    letterSpacing: 1,
    backgroundColor: '#F3F5FE',
    fontFamily: 'Montserrat'
  },
  subHeading: {
    fontWeight: 700,
    fontSize: '6vmin',
    width: '100%',
    margin: 'auto',
    fontFamily: 'Montserrat'
  },
  divider: {
    backgroundColor: '#175CFF',
    margin: 'auto',
    marginTop: '40px',
    width: '74px',
    height: '2px'
  },
  paper: {
    padding: theme.spacing(4),
    color: theme.palette.text.secondary,
    width: '60%',
    margin: 'auto',
    marginTop: theme.spacing(3),
    // boxShadow:'5px 5px 5px 2px #F3F5FE',

  },
  button: {
    marginTop: theme.spacing(6),
    backgroundColor: '#3751FF',
    borderRadius: 10,
    height: 60

  },
  nested: {
    paddingLeft: theme.spacing(4),
  },
  ListText: {
    fontWeight: 500,
    color: '#222222',
    fontSize: '3.5vmin',
    fontFamily: 'Montserrat',
    lineHeight: '5vmin'
  },
  listSubText: {
    color: '#838383',
    fontSize: '2vmin',
    fontWeight: 400,
    letterSpacing: 0.5,
    textAlign: 'left',
    fontFamily: 'Montserrat',
    lineHeight: '4vmin'
  }

}));

const questions = [
  {
    title: 'Estimated budget of your idea?',
    subtitle: 'We value your time & budget we iterate fast this is the reason that we give ourself a very short timeline of just one month. Within that budget and timeline you get flexibility for marketing.'
  },
  {
    title: 'How long does it take to execute your idea?',
    subtitle: 'We already have designed, developed solution. So your idea is going to be customizations which takes roughly one month.'
  },
  {
    title: 'What happens after the project is completed?',
    subtitle: 'After you launch your product you can ask for feedback, our team is always going to be available to you to make any changes that you want to make. A project can never be complete because it will always require changes from constant feedback loop.'
  },
  {
    title: 'What is needed to get started?',
    subtitle: 'No fancy documentation or white paper is required. We will conduct an interview and go through your idea. All requirements will be documented in a proper way by us.'
  },
  {
    title: 'Will you sign NDA?',
    subtitle: 'No problem.'
  },
  {
    title: 'Do you provide marketing services?',
    subtitle: 'UI/UX, Web, Mobile development and QA management. We do not strive for average results so it is better to find marketing expert.'
  }
]

const FAQ = () => {
  const classes = useStyles();

  const [open, setOpen] = React.useState([false, false, false]);

  const handleClick = (index) => {
    // console.log('handle', index)
    let tempOpen = [...open];
    tempOpen[index] = !open[index]
    console.log('temp', tempOpen)
    setOpen(tempOpen);
  };


  return (
    <div id="faq" style={{ justifyContent: 'center', marginTop: 50, padding: 10, alignItems: 'center', textAlign: 'center' }}>
      <Button variant="contained" size="large" className={classes.heading}>
        Frequently Asked Questions
      </Button>
      <Typography className={classes.subHeading} variant="h3" gutterBottom>
        What People Frequently Asked to us
      </Typography>
      <Divider className={classes.divider} />
      {
        questions.map((item, index) => {
          return (
            <Paper className={classes.paper} key={index} >
              <List
                component="nav"
                aria-labelledby="nested-list-subheader"
              >
                <ListItem button onClick={() => handleClick(index)}>
                  <ListItemText>
                    <Typography className={classes.ListText} variant="h3" gutterBottom>
                      {item.title}
                    </Typography>
                  </ListItemText>
                  {open[index] ? <ExpandLess color="black" /> : <ExpandMore />}
                </ListItem>
                <Collapse in={open[index]} timeout="auto" unmountOnExit>
                  <ListItemText>
                    <Typography className={classes.listSubText} variant="h3" gutterBottom>
                      {item.subtitle}
                    </Typography>
                  </ListItemText>
                </Collapse>
              </List>
            </Paper>
          )
        })
      }

    </div>

  );
}

export default FAQ;