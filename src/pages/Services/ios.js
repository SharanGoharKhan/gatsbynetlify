import { Box, Container, Grid, Typography } from "@material-ui/core"
import React from "react"
import { Banner, BottomServices, ContactUs } from "../../components"
import Layout from "../../components/layout"
import IOSService from "../../images/ios.svg"
import D1 from "../../images/D1.svg"
import D2 from "../../images/D2.svg"
import "./styles.css"

export default function Ios() {
  return (
    <Layout>
      <Banner
        titleMain={"IOS"}
        titleSecondary={"DEVELOPEMENT"}
        subTitle={"We develop beautiful IOS apps with UX as a primary focus"}
        image={IOSService}
      />
      <div style={{ minHeight: "200vh", position: "relative" }}>
        <BottomServices />
        <div
          className="typos"
        >
          <Typography
            variant="h2"
            display="inline"
            className="brackets"
          >
            {"{"}
            <Typography
              variant="h4"
              display="inline"
              style={{
                color: "#000",
                fontWeight: "800",
                position: "absolute",
                top: 70,
                left: 40,
                WebkitTextStroke: "1px #179AFB",
                WebkitTextFillColor: "white",
              }}
            >
              {" "}
              IOS
            </Typography>

            <Typography
              variant="h4"
              display="inline"
              style={{ color: "#000", fontWeight: "800" }}
            >
              {" "}
              IOS DEVELOPEMENT
            </Typography>
            <Typography
              variant="h4"
              display="inline"
              style={{
                fontWeight: "800",
                position: "absolute",
                top: 0,
                right: 50,
                WebkitTextStroke: "1px black",
                WebkitTextFillColor: "white",
              }}
            >
              {" "}
              MEN
            </Typography>
            {"}"}
          </Typography>
        </div>
        <div>
          <Container>
            <Grid container>
              <Grid item xs={6}>
                <Box className="left-content">
                  <Box>
                    <Typography
                      variant="h6"
                      classsName="heading-ios"
                      style={{fontWeight:700}}
                    
                    >
                      Project Examination
                    </Typography>
                    <Typography
                      variant="caption"
                      className="subheading-ios"
                    >
                      True experts will never get to code right from the
                      beginning — any app needs a coherent outline on how to
                      move forward. In order to set objectives for the project
                      management roadmap, we gather and analyze project
                      requirements. This helps us get a clear
                    </Typography>
                  </Box>
                  <img src={D1} alt="d1" className="device-image" />
                </Box>
              </Grid>
            </Grid>
            <Grid container>
              <Grid item xs={6}></Grid>
              <Grid item xs={6}>
              <Box className="left-content">
                <img src={D2} alt="d1" className="device-image" />
                <Box>
                    <Typography
                      variant="h6"
                      classsName="heading-ios"
                      style={{fontWeight:700}}
                    
                    
                    >
                      Project Examination
                    </Typography>
                    <Typography
                      variant="caption"
                      className="subheading-ios"
                    >
                      True experts will never get to code right from the
                      beginning — any app needs a coherent outline on how to
                      move forward. In order to set objectives for the project
                      management roadmap, we gather and analyze project
                      requirements. This helps us get a clear
                    </Typography>
                  </Box>
                  </Box>
              </Grid>
            </Grid>
            <Grid container>
              <Grid item xs={6}>  
              <Box className="left-content">
                  <Box>
                    <Typography
                      variant="h6"
                      classsName="heading-ios"
                      style={{fontWeight:700}}
                    >
                      Project Examination
                    </Typography>
                    <Typography variant="caption" className="subheading-ios">
                      True experts will never get to code right from the
                      beginning — any app needs a coherent outline on how to
                      move forward. In order to set objectives for the project
                      management roadmap, we gather and analyze project
                      requirements. This helps us get a clear
                    </Typography>
                  </Box>
                  <img src={D1} alt="d1" className="device-image" />
                </Box>
          
              </Grid>
            </Grid>
            <Grid container>
              <Grid item xs={6}></Grid>
              <Grid item xs={6}>
              <Box className="left-content">
                <img src={D2} alt="d1" className="device-image" />
                <Box>
                    <Typography
                      variant="h6"
                      classsName="heading-ios"
                      style={{fontWeight:700}}
                    
                    
                    >
                      Project Examination
                    </Typography>
                    <Typography
                      variant="caption"
                      className="subheading-ios"
                    >
                      True experts will never get to code right from the
                      beginning — any app needs a coherent outline on how to
                      move forward. In order to set objectives for the project
                      management roadmap, we gather and analyze project
                      requirements. This helps us get a clear
                    </Typography>
                  </Box>
                  </Box>
              </Grid>
            </Grid>
            <Grid container>
              <Grid item xs={6}>  
              <Box className="left-content">
                  <Box>
                    <Typography
                      variant="h6"
                      classsName="heading-ios"
                      style={{fontWeight:700}}
                    >
                      Project Examination
                    </Typography>
                    <Typography variant="caption" className="subheading-ios">
                      True experts will never get to code right from the
                      beginning — any app needs a coherent outline on how to
                      move forward. In order to set objectives for the project
                      management roadmap, we gather and analyze project
                      requirements. This helps us get a clear
                    </Typography>
                  </Box>
                  <img src={D1} alt="d1" className="device-image" />
                </Box>
          
              </Grid>
            </Grid>
            <Grid container>
              <Grid item xs={6}></Grid>
              <Grid item xs={6}>
              <Box className="left-content">
                <img src={D2} alt="d1" className="device-image" />
                <Box>
                    <Typography
                      variant="h6"
                      classsName="heading-ios"
                      style={{fontWeight:700}}
                    
                    
                    >
                      Project Examination
                    </Typography>
                    <Typography
                      variant="caption"
                      className="subheading-ios"
                    >
                      True experts will never get to code right from the
                      beginning — any app needs a coherent outline on how to
                      move forward. In order to set objectives for the project
                      management roadmap, we gather and analyze project
                      requirements. This helps us get a clear
                    </Typography>
                  </Box>
                  </Box>
              </Grid>
            </Grid>
          </Container>
        </div>
      </div>
      <ContactUs />
    </Layout>
  )
}
