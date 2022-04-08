import { makeStyles } from "@material-ui/core"
import { colors } from "../../utils/colors"

const useStyles = makeStyles(theme => ({
  grid: {
    padding: theme.spacing(4),
    position: "relative",
    zIndex: 99,
  },
  root: {
    padding: 10,
  },
  title: {
    color: colors.white,
    fontWeight: 700,
    fontSize: "8.5vmin",
    fontFamily: "Montserrat",
    marginTop: 40,
  },
  subtitle: {
    color: colors.white,
    fontWeight: 500,
    fontSize: "3vmin",
    lineHeight: "30px",
    fontFamily: "Montserrat",
    marginTop: 40,
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
    padding: 8,
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
}))
export default useStyles
