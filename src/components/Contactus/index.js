import React from "react"
import {
  makeStyles,
  Grid,
  Typography,
  TextareaAutosize,
  Button,
  Box,
} from "@material-ui/core"
import CallIcon from "../../svg/callIcon"
import AddressIcon from "../../svg/addressIcon"
import EmailIcon from "../../svg/emailIcon"
import { colors } from "../../utils/colors"

const useStyles = makeStyles(theme => ({
  container: {
    background: `linear-gradient(to bottom, ${colors.primary} 0%, ${colors.purple} 100%)`,
    padding: theme.spacing(6),
    height: "fit-content",
    textAlign: "center",
  },
  textInput: {
    width: "100%",
    height: "7vmin",
    borderRadius: 2,
    color: colors.gray,
    borderWidth: 1,
    padding: 10,
    fontFamily: "Montserrat",
    fontWeight: "600",
    fontSize: "2vmin",
  },
  label: {
    textAlign: "left",
    fontFamily: "Poppins",
    color: colors.white,
    fontWeight: "600",
    fontSize: "2vmin",
  },
  heading: {
    fontWeight: 700,
    color: colors.white,
    fontSize: "5vmin",
    textAlign: "center",
    fontFamily: "Montserrat",
  },
  iconText: {
    fontSize: "2vmin",
    fontWeight: 600,
    color: colors.mediumGray,
    fontFamily: "Montserrat",
  },
  iconText2: {
    fontSize: "3vmin",
    fontWeight: 700,
    color: colors.white,
    fontFamily: "Montserrat",
  },
}))

const ContactUs = () => {
  const classes = useStyles()
  return (
    <div id="contact" className={classes.container}>
      <Grid
        container
        justify="center"
        direction="row"
        spacing={5}
        alignItems="center"
      >
        <Grid item xs={12}>
          <Typography className={classes.heading} variant="h3" gutterBottom>
            Let's Talk with us
          </Typography>
        </Grid>
        <Grid container justify="center" alignItems="center">
          <form
            style={{ width: "80%", textAlign: "center" }}
            name="contact"
            method="post"
            data-netlify="true"
            netlify-honeypot="bot-field"
          >
            <input type="hidden" name="form-name" value="contact" />
            <div style={{ textAlign: "center", width: "100%", margin: "auto" }}>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  marginBottom: 20,
                }}
              >
                <div style={{ width: "45%" }}>
                  <Typography className={classes.label}>Name</Typography>
                  <input
                    name="name"
                    type="text"
                    className={classes.textInput}
                    placeholder="Enter your name"
                  />
                </div>
                <div style={{ width: "45%" }}>
                  <Typography className={classes.label}>Email</Typography>
                  <input
                    name="email"
                    type="email"
                    className={classes.textInput}
                    placeholder="Enter your email"
                  />
                </div>
              </div>
              <Typography className={classes.label}>Message</Typography>
              <TextareaAutosize
                name="quote"
                style={{
                  width: "100%",
                  height: "20vh",
                  fontFamily: "Montserrat",
                  fontSize: "2vmin",
                  color: colors.gray,
                  fontWeight: "600",
                  borderRadius: "8px",
                  padding: 10,
                }}
                aria-label="empty textarea"
                placeholder="Message..."
              />
              <div style={{ textAlign: "right" }}>
                <Button
                  type="submit"
                  variant="contained"
                  size="large"
                  style={{
                    width: "160px",
                    color: colors.blue2,
                    marginTop: 20,
                    fontFamily: "Montserrat",
                    backgroundColor: colors.paleBlue,
                  }}
                >
                  <Typography
                    style={{
                      fontFamily: "Montserrat",
                      color: colors.white,
                      fontSize: "3vmin",
                      fontWeight: "600",
                    }}
                  >
                    Send
                  </Typography>
                </Button>
              </div>
            </div>
          </form>
        </Grid>
        <Grid item xs={12}>
          <Typography className={classes.heading} variant="h3" gutterBottom>
            Get in Touch
          </Typography>
        </Grid>
        <Grid style={{ textAlign: "center" }} item xs={6} sm={6} md={6} lg={4}>
          <Box
            style={{
              display: "block",
              textAlign: "center",
              alignItems: "center",
            }}
          >
            <CallIcon />
            <Box style={{ padding: "2vmin" }}>
              <Typography className={classes.iconText}>Phone Number</Typography>
              <Typography className={classes.iconText2}>
                (92) 3339461270
              </Typography>
            </Box>
          </Box>
        </Grid>
        <Grid style={{ textAlign: "center" }} item xs={6} sm={6} md={6} lg={4}>
          <Box
            style={{
              display: "block",
              textAlign: "center",
              alignItems: "center",
            }}
          >
            <EmailIcon />
            <Box style={{ textAlign: "center", padding: "2vmin" }}>
              <Typography className={classes.iconText}>Email</Typography>
              <Typography className={classes.iconText2}>
                sharan@ninjascode.com
              </Typography>
            </Box>
          </Box>
        </Grid>
        <Grid style={{ textAlign: "center" }} item xs={8} sm={6} md={6} lg={4}>
          <Box
            style={{
              display: "block",
              textAlign: "center",
              alignItems: "center",
            }}
          >
            <AddressIcon />
            <Box style={{ padding: "2vmin" }}>
              <Typography className={classes.iconText}>Map Street</Typography>
              <Typography className={classes.iconText2}>
                Islamabad, Pakistan
              </Typography>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </div>
  )
}

export default ContactUs
