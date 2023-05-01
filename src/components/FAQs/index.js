import {
  Typography,
  List,
  ListItem,
  ListItemText,
  Grid,
  Collapse,
} from "@mui/material"
import ExpandLessIcon from "@mui/icons-material/ExpandLess"
import ExpandMoreIcon from "@mui/icons-material/ExpandMore"
import React from "react"
import { colors } from "../../utils/colors"

const questions = [
  {
    title: "How should I budget my idea?",
    subtitle:
      "Our recommended starting budget is $5000. We value your time and resources and strive to deliver an MVP within a month.",
  },
  {
    title: "How long will it take to build my idea?",
    subtitle:
      "For most projects, our timeline is usually between 2 weeks to a month. However, for projects that require additional features and customizations, the timeline may vary. Contact us with your idea so we can create an organic timeline for your project.",
  },
  {
    title: "What happens once the project is completed?",
    subtitle:
      "When it comes to MVP development, a project is never completed. In other words, there’s always room for improvement. There’s always changes and fixes that can be made after deployment. We’ll still be there to provide feedback and assist with any changes that you would want to make.",
  },
  {
    title: "What do I need to get started?",
    subtitle:
      "Rest assured that we won't require any fancy documentation from you. We'll schedule an interview with you and discuss your idea thoroughly. Once we have gathered all the necessary information, we will handle the documentation of all the requirements in a proper and organized manner on your behalf.",
  },
  {
    title: "Will you sign an NDA?",
    subtitle:
      "Yes, we have no issues with signing an NDA. Your confidentiality is very important to us.",
  },
  {
    title: "Do you provide marketing services?",
    subtitle:
      "We are specialists in rapid MVP development, and as a company we believe that our focus should be on delivering the best possible MVP for our clients, which is why we would recommend an external marketing specialist for your needs.",
  },
]

const FAQ = () => {
  const [open, setOpen] = React.useState([
    false,
    false,
    false,
    false,
    false,
    false,
  ])
  const handleClick = index => {
    let tempOpen = [...open]
    tempOpen[index] = !open[index]
    setOpen(tempOpen)
  }

  const classes = {
    container: {
      backgroundColor: colors.darkPurple,
      margin: "2rem",
      border: `2px solid ${colors.primary}`,
      padding: "1.8rem",
      display: "flex",
      justifyContent: "space-between",
      flexDirection: "column",
    },
    button: {
      marginTop: 48,
      backgroundColor: colors.blue2,
      borderRadius: 10,
      height: 60,
    },
    nested: {
      paddingLeft: 32,
    },
    ListText: {
      fontWeight: 500,
      color: colors.mediumGray,
      fontSize: "3.5vmin",
      fontFamily: "Montserrat",
      lineHeight: "5vmin",
    },
    listSubText: {
      color: colors.gray,
      fontSize: "2vmin",
      fontWeight: 400,
      letterSpacing: 0.5,
      textAlign: "left",
      fontFamily: "Montserrat",
      lineHeight: "4vmin",
    },
  }

  return (
    <>
      {questions.map((item, index) => {
        return (
          <Grid item xs={12} sm={6}>
            <List
              component="nav"
              aria-labelledby="nested-list-subheader"
              sx={classes.container}
            >
              <ListItem button onClick={() => handleClick(index)} disableRipple>
                <ListItemText>
                  <Typography style={{ color: "white" }}>
                    {item.title}
                  </Typography>
                </ListItemText>
                {open[index] ? (
                  <ExpandLessIcon style={{ color: "white" }} />
                ) : (
                  <ExpandMoreIcon style={{ color: "white" }} />
                )}
              </ListItem>
              <Collapse in={open[index]} timeout="auto" unmountOnExit>
                <ListItemText>
                  <Typography
                    sx={classes.listSubText}
                    variant="h3"
                    gutterBottom
                  >
                    {item.subtitle}
                  </Typography>
                </ListItemText>
              </Collapse>
            </List>
          </Grid>
        )
      })}
    </>
  )
}

export default FAQ
