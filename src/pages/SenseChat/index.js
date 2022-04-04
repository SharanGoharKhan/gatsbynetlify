import React, { useEffect } from "react"
import { Typography } from "@material-ui/core"
import { ContactUs, Footer, TopBar } from "../../components"
import "./SenseChat.css"
import FormatQuoteIcon from "@material-ui/icons/FormatQuote"
import Introduction from "./component/Introduction"
import Problem from "./component/Problem"
import Approach from "./component/Approach"
import Solution from "./component/Solution"
import OutComeAndBenefits from "./component/OutCome"
import { StaticImage } from "gatsby-plugin-image"
import Seo from "../../components/seo"
import Chat from "../../images/enategaSenseChat.png"
const SenseChat = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <>
      <Seo title="Sense.chat" />
      <div className="senseHeader">
        <TopBar barColor="transparent" fontColor="#fff" />
        <Typography
          style={{
            fontWeight: "700",
            lineHeight: "60px",
            textAlign: "center",
            fontFamily: "Montserrat",
            fontSize: 30,
            color: "#fff",
          }}
        >
          A better messenger
        </Typography>
        <Typography
          style={{
            textAlign: "center",
            width: "40%",
            margin: "auto",
            marginBottom: 50,
            fontFamily: "Montserrat",
            color: "#fff",
          }}
        >
          A new messenger built to communicate, organize, and reward your
          communities and friends.
        </Typography>
        <div style={{ textAlign: "center", height: 200 }}>
          <img style={{ width: "53vmin", height: "70vmin" }} src={Chat} />
        </div>
      </div>
      <div style={{ textAlign: "center", marginTop: 250 }}>
        <FormatQuoteIcon style={{ color: "#5150A4", fontSize: 30 }} />
        <Typography
          style={{
            textAlign: "center",
            width: "40%",
            margin: "auto",
            marginBottom: 30,
            fontFamily: "Montserrat",
          }}
        >
          Ninjas Code has the best software developers I have worked with. They
          jump right into codebase without too much hand holding. They are
          responsive and professional. Having experience with multiple agencies.
          I can confidently say Ninjas Code are simply the best.
        </Typography>
        <Typography
          style={{
            textAlign: "center",
            width: "40%",
            margin: "auto",
            fontWeight: "600",
            fontFamily: "Poppins",
          }}
        >
          Crystal Rose
        </Typography>
        <Typography
          style={{
            textAlign: "center",
            width: "40%",
            fontSize: 12,
            opacity: 0.3,
            fontWeight: "600",
            margin: "auto",
            color: "black",
            fontFamily: "Poppins",
          }}
        >
          Founder at Sense Chat
        </Typography>
      </div>
      <Introduction />
      <Problem />
      <Approach />
      <Solution />
      <OutComeAndBenefits />
      <ContactUs />
      <Footer />
    </>
  )
}

export default SenseChat
