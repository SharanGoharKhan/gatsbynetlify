import React, { useEffect } from "react"
import { Grid, Typography, useMediaQuery, useTheme,Box } from "@mui/material"
import BannerIcons from "../BannerIcons"
// import Particles from "react-tsparticles"
import Aos from "aos"
import "aos/dist/aos.css"
import { colors } from "../../utils/colors"
import Seo from "../../components/seo"

export default function Banner({ titleMain, titleSecondary, subTitle, image }) {
  useEffect(() => {
    Aos.init({ duration: 1000, once: true })
  }, [])
  const matches = useMediaQuery("(min-width:600px)")
  const theme = useTheme()
  const small = useMediaQuery(theme.breakpoints.down("sm"))

  const classes = {
    grid: {
      padding: "32px",
      position: "relative",
      zIndex: 99,
    },
    root: {
      padding: "10px",
    },
    title: {
      color: colors.white,
      fontWeight: 700,
      fontSize: "8.5vmin",
      fontFamily: "Montserrat",
      marginTop: "40px",
    },
    subtitle: {
      color: colors.white,
      fontWeight: 500,
      fontSize: "3vmin",
      lineHeight: "30px",
      fontFamily: "Montserrat",
      marginTop: "40px",
    },
    cardHeaderText: {
      fontWeight: 700,
      fontSize: "3vmin",
      fontFamily: "Montserrat",
    },
    boldText: {
      color: colors.white,
      fontWeight: 700,
      fontSize: "4vmin",
      fontFamily: "Montserrat",
    },
    number: {
      color: colors.white,
      padding: "8px",
      fontFamily: "Montserrat",
    },
    cardText: {
      textAlign: "initial",
      fontSize: "2.5vmin",
      fontFamily: "Montserrat",
    },
    logoContainer: {
      borderWidth: 1,
      borderStyle: "solid",
      width: "40px",
      height: "40px",
      borderColor: colors.white,
    },
    background: {
      background: `linear-gradient(to bottom, ${colors.primary} 0%, ${colors.purple} 100%)`,
      boxShadow: "0px 3px 2px rgb(206, 202, 202)",
      paddingBottom: "2rem",
      position: "relative",
      minHeight: "95vh",
      zIndex: 1,
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
    },
    bg: {
      position: "absolute",
      right: 0,
      top: 0,
      width: "100%",
      height: "100%",
      opacity: "0.4",
      zIndex: 2,
    },
    canvas: {
      position: "absolute !important",
      background: "red",
    },
  }

  return (
    <>
     <Seo
        title="Banner"
        description="Banner component"
      />
    <Box id="Home" sx={classes.background}>
      <ParticleContainer />
      <Grid
        container
        direction="row"
        alignItems="center"
        sx={classes.grid}
        spacing={0}
      >
        <Grid
          style={{
            textAlign: matches ? "start" : "center",
            order: small && 2,
          }}
          item
          xs={12}
          md={6}
          data-aos="zoom-out-left"
          data-aos-easing="ease-in-sine"
        >
          <Typography variant="h3" gutterBottom sx={classes.title}>
            {titleMain}
            <br />
            {titleSecondary}
          </Typography>
          <Typography variant="h3" gutterBottom sx={classes.subtitle}>
            {subTitle}
          </Typography>
          <BannerIcons />
        </Grid>
        {image && (
          <Grid
            style={{ textAlign: "center", order: small && 1 }}
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
                width: "60%",
                height: "auto",
                maxHeight: 500,
                marginTop: matches ? 0 : 10,
              }}
            />
          </Grid>
        )}
      </Grid>
    </Box>
    </>
  )
}

function ParticleContainer() {
  return null
  // <Particles
  //   id="particles"
  //   options={{
  //     background: {
  //       color: {
  //         value: "transparent",
  //       },
  //     },
  //     fpsLimit: 120,
  //     interactivity: {
  //       events: {
  //         onClick: {
  //           enable: true,
  //           mode: "push",
  //         },
  //         onHover: {
  //           enable: true,
  //           mode: "repulse",
  //         },
  //         resize: true,
  //       },
  //       modes: {
  //         bubble: {
  //           distance: 400,
  //           duration: 2,
  //           opacity: 0.8,
  //           size: 40,
  //         },
  //         push: {
  //           quantity: 4,
  //         },
  //         repulse: {
  //           distance: 100,
  //           duration: 0.4,
  //         },
  //       },
  //     },
  //     particles: {
  //       color: {
  //         value: colors.particleDots,
  //       },
  //       links: {
  //         color: colors.white,
  //         distance: 150,
  //         enable: true,
  //         opacity: 0.5,
  //         width: 1,
  //       },
  //       collisions: {
  //         enable: false,
  //       },
  //       move: {
  //         direction: "none",
  //         enable: true,
  //         outMode: "bounce",
  //         random: false,
  //         speed: 3,
  //         straight: false,
  //       },
  //       number: {
  //         density: {
  //           enable: true,
  //           area: 800,
  //         },
  //         value: 120,
  //       },
  //       opacity: {
  //         value: 0.5,
  //       },
  //       shape: {
  //         type: "circle",
  //       },
  //       size: {
  //         random: true,
  //         value: 5,
  //       },
  //     },
  //     detectRetina: true,
  //     style: {
  //       position: "absolute",
  //       height: "100%",
  //     },
  //   }}
  // />
}
