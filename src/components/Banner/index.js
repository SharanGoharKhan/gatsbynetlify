import React, { useEffect } from "react"
import { Grid, Typography, useMediaQuery } from "@material-ui/core"
import useStyles from "./styles"
import BannerIcons from "../BannerIcons"
import backgroundWeb from "../../images/bg.svg"
import Particles from "react-tsparticles"
import Aos from "aos"
import "aos/dist/aos.css"

export default function Banner({ titleMain, titleSecondary, subTitle, image }) {
  useEffect(() => {
    Aos.init({ duration: 1000, once: true })
  }, [])

  const classes = useStyles()
  const matches = useMediaQuery("(min-width:600px)")
  return (
    <div id="Home" className={classes.background}>
      {/* <img src={backgroundWeb} alt="service" className={classes.bg} /> */}
      <Particles
        id="particles"
        options={{
          background: {
            color: {
              value: "transparent",
            },
          },
          fpsLimit: 120,
          interactivity: {
            events: {
              onClick: {
                enable: true,
                mode: "push",
              },
              onHover: {
                enable: true,
                mode: "repulse",
              },
              resize: true,
            },
            modes: {
              bubble: {
                distance: 400,
                duration: 2,
                opacity: 0.8,
                size: 40,
              },
              push: {
                quantity: 4,
              },
              repulse: {
                distance: 100,
                duration: 0.4,
              },
            },
          },
          particles: {
            color: {
              value: "#00BFFF",
            },
            links: {
              color: "#ffffff",
              distance: 150,
              enable: true,
              opacity: 0.5,
              width: 1,
            },
            collisions: {
              enable: false,
            },
            move: {
              direction: "none",
              enable: true,
              outMode: "bounce",
              random: false,
              speed: 3,
              straight: false,
            },
            number: {
              density: {
                enable: true,
                area: 800,
              },
              value: 120,
            },
            opacity: {
              value: 0.5,
            },
            shape: {
              type: "circle",
            },
            size: {
              random: true,
              value: 5,
            },
          },
          detectRetina: true,
          style: {
            position: "absolute",
            height: "100%",
          },
        }}
      />
      <Grid
        container
        direction="row"
        alignItems="center"
        className={classes.grid}
        spacing={0}
      >
        <Grid
          style={{ textAlign: matches ? "start" : "center" }}
          item
          xs={12}
          md={6}
          data-aos="zoom-out-left"
          data-aos-easing="ease-in-sine"
        >
          <Typography variant="h3" gutterBottom className={classes.title}>
            {titleMain}
            <br />
            {titleSecondary}
          </Typography>
          <Typography variant="h3" gutterBottom className={classes.subtitle}>
            {subTitle}
          </Typography>
          <BannerIcons />
        </Grid>
        {image && (
          <Grid
            style={{ textAlign: matches ? "end" : "center" }}
            item
            xs={12}
            md={6}
          >
            <img
              src={image}
              data-aos="zoom-out-right"
              data-aos-easing="ease-in-sine"
              alt="services"
              style={{
                width: "100%",
                height: "auto",
                maxHeight: 500,
                marginTop: matches ? 0 : 10,
              }}
            />
          </Grid>
        )}
      </Grid>
    </div>
  )
}
