import {
  Typography,
  makeStyles,
  List,
  ListItem,
  ListItemText,
  Grid,
} from "@material-ui/core"
import Collapse from "@material-ui/core/Collapse"
import ExpandLess from "@material-ui/icons/ExpandLess"
import ExpandMore from "@material-ui/icons/ExpandMore"
import React from "react"
import { colors } from "../../utils/colors"

const useStyles = makeStyles(theme => ({
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
    marginTop: theme.spacing(6),
    backgroundColor: colors.blue2,
    borderRadius: 10,
    height: 60,
  },
  nested: {
    paddingLeft: theme.spacing(4),
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
}))

const questions = [
  {
    title: "Estimated budget of your idea?",
    subtitle:
      "We value your time & budget we iterate fast this is the reason that we give ourself a very short timeline of just one month. Within that budget and timeline you get flexibility for marketing.",
  },
  {
    title: "How long does it take to execute your idea?",
    subtitle:
      "We already have designed, developed solution. So your idea is going to be customizations which takes roughly one month.",
  },
  {
    title: "What happens after the project is completed?",
    subtitle:
      "After you launch your product you can ask for feedback, our team is always going to be available to you to make any changes that you want to make. A project can never be complete because it will always require changes from constant feedback loop.",
  },
  {
    title: "What is needed to get started?",
    subtitle:
      "No fancy documentation or white paper is required. We will conduct an interview and go through your idea. All requirements will be documented in a proper way by us.",
  },
  {
    title: "Will you sign NDA?",
    subtitle: "No problem.",
  },
  {
    title: "Do you provide marketing services?",
    subtitle:
      "UI/UX, Web, Mobile development and QA management. We do not strive for average results so it is better to find marketing expert.",
  },
]

const FAQ = () => {
  const classes = useStyles()
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

  return (
    <>
      {questions.map((item, index) => {
        return (
          <Grid item sm={6}>
            <List
              component="nav"
              aria-labelledby="nested-list-subheader"
              className={classes.container}
            >
              <ListItem button onClick={() => handleClick(index)} disableRipple>
                <ListItemText>
                  <Typography style={{ color: "white" }}>
                    {item.title}
                  </Typography>
                </ListItemText>
                {open[index] ? (
                  <ExpandLess style={{ color: "white" }} />
                ) : (
                  <ExpandMore style={{ color: "white" }} />
                )}
              </ListItem>
              <Collapse in={open[index]} timeout="auto" unmountOnExit>
                <ListItemText>
                  <Typography
                    className={classes.listSubText}
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
