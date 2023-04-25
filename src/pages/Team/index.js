import { Box, Container, Grid, Paper, Typography } from "@material-ui/core"
import React, { useEffect } from "react"
import { Banner, BottomServices, Typos } from "../../components"
import Layout from "../../components/layout"
import TeamBg from "../../images/team-bg.png"
import "./styles.css"
import LinkedInIcon from "@mui/icons-material/LinkedIn"
import GitHubIcon from "@mui/icons-material/GitHub"
import BlueCard from "../../images/strip-card-blue.png"
import PurpleCard from "../../images/strip-card.png"
import Behance from "../../images/behance.png"
import Aos from "aos"
import "aos/dist/aos.css"
import { teamData } from "../../utils/teamData"
import Seo from "../../components/seo"

export default function Team() {
  useEffect(() => {
    Aos.init({ duration: 1000, once: true })
  }, [])

  const FirstRowTeam = ({ teamMember1, teamMember2 }) => {
    return (
      <Grid container spacing={2}>
        <Grid item xs={6} md={4} align="center">
          <Paper
            className="image-container"
            data-aos="slide-up"
            data-aos-easing="ease-in-sine"
          >
            <img
              src={teamMember1.image}
              alt={teamMember1.name}
              className="team-image"
            />
            <Typography variant="h5" className="name">
              {teamMember1.name}
            </Typography>
            <Typography variant="h6" className="designation">
              {teamMember1.title}
            </Typography>
            <Box display={"flex"} justifyContent="center" alignItems={"center"}>
              <a href={teamMember1.linkedIn} target="_blank" rel="noreferrer">
                <LinkedInIcon className="icon-margin" />
              </a>
              {teamMember1.gitHub && (
                <a href={teamMember1.gitHub} target="_blank" rel="noreferrer">
                  <GitHubIcon />
                </a>
              )}
              {teamMember1.behance && (
                <a href={teamMember1.behance} target="_blank" rel="noreferrer">
                  <img
                    src={Behance}
                    alt={teamMember1.name}
                    style={{ width: 25, height: 25 }}
                  />
                </a>
              )}
            </Box>
          </Paper>
        </Grid>

        <Box
          component={Grid}
          item
          md={4}
          display={{ xs: "none", md: "block" }}
          align="center"
        >
          <Paper className="strip-container">
            <img src={BlueCard} alt={"team"} />
          </Paper>
        </Box>
        <Grid item xs={6} md={4} align="center">
          <Paper
            className="image-container"
            data-aos="slide-down"
            data-aos-easing="ease-in-sine"
          >
            <img
              src={teamMember2.image}
              alt={teamMember2.name}
              className="team-image"
            />
            <Typography variant="h5" className="name">
              {teamMember2.name}
            </Typography>
            <Typography variant="h6" className="designation">
              {teamMember2.title}
            </Typography>
            <Box>
              <a href={teamMember2.linkedIn} target="_blank" rel="noreferrer">
                <LinkedInIcon className="icon-margin" />
              </a>
              {teamMember2.gitHub && (
                <a href={teamMember2.gitHub} target="_blank" rel="noreferrer">
                  <GitHubIcon />
                </a>
              )}
              {teamMember2.behance && (
                <a href={teamMember2.behance} target="_blank" rel="noreferrer">
                  <img
                    src={Behance}
                    alt={teamMember2.name}
                    style={{ width: 25, height: 25 }}
                  />
                </a>
              )}
            </Box>
          </Paper>
        </Grid>
      </Grid>
    )
  }
  const SecondRowTeam = ({ teamMember }) => {
    return (
      <Grid
        container
        spacing={2}
        direction="row"
        justifyContent="center"
        alignItems="center"
      >
        <Box
          component={Grid}
          item
          md={4}
          display={{ xs: "none", md: "block" }}
          align="center"
        >
          <Paper className="strip-container">
            <img src={PurpleCard} alt={"team"} />
          </Paper>
        </Box>
        <Grid item xs={12} md={4} align="center">
          <Paper
            className="image-container"
            data-aos="zoom-out"
            data-aos-easing="ease-in-sine"
          >
            <img
              src={teamMember.image}
              alt={teamMember.name}
              className="team-image"
            />
            <Typography variant="h5" className="name">
              {teamMember.name}
            </Typography>
            <Typography variant="h6" className="designation">
              {teamMember.title}
            </Typography>
            <Box display={"flex"} justifyContent="center" alignItems={"center"}>
              <a href={teamMember.linkedIn} target="_blank" rel="noreferrer">
                <LinkedInIcon className="icon-margin" />
              </a>
              {teamMember.gitHub && (
                <a href={teamMember.gitHub} target="_blank" rel="noreferrer">
                  <GitHubIcon />
                </a>
              )}
              {teamMember.behance && (
                <a href={teamMember.behance} target="_blank" rel="noreferrer">
                  <img
                    src={Behance}
                    alt={teamMember.name}
                    style={{ width: 25, height: 25 }}
                  />
                </a>
              )}
            </Box>
          </Paper>
        </Grid>
        <Box
          component={Grid}
          item
          md={4}
          display={{ xs: "none", md: "block" }}
          align="center"
        >
          <Paper className="strip-container">
            <img src={PurpleCard} alt={"team"} />
          </Paper>
        </Box>
      </Grid>
    )
  }

  const teamMembers = []

  for (let index = 0; index < teamData.length; index++) {
    if (index % 3 === 0) {
      const nextTeamMember = teamData[index + 1] || ""
      if (nextTeamMember) {
        teamMembers.push(
          <FirstRowTeam
            key={index}
            teamMember1={teamData[index]}
            teamMember2={nextTeamMember}
          />
        )
      }
    }
    if (index % 3 === 2) {
      teamMembers.push(
        <SecondRowTeam key={index} teamMember={teamData[index]} />
      )
    }
  }

  return (
    <>
      <Seo title="Meet Our Talented Team" />
      <Layout>
        <Banner
          titleMain={"Meet Our Talented Team"}
          titleSecondary={"A Collective of Skilled Developers and Visionaries"}
          subTitle={
            "Our team consists of passionate and experienced professionals who strive to bring innovative software solutions to life. With a diverse skill set ranging from web and mobile app development to UI/UX design and project management, we're committed to delivering exceptional results that exceed client expectations. By fostering a collaborative environment and leveraging the latest technologies, our team is dedicated to driving growth and success for businesses across various industries."
          }
          image={false}
        />
        <div
          style={{
            position: "relative",
            backgroundImage: `url(${TeamBg})`,
          }}
          className="team-background"
        >
          <BottomServices />
          <Typos second="OUR TEAM " right={"4vmin"} />

          <Container
            style={{ marginTop: "2rem", marginBottom: "2rem" }}
            className="team"
          >
            {teamMembers}
          </Container>
        </div>
      </Layout>
    </>
  )
}
