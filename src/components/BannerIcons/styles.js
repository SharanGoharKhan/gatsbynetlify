import { makeStyles } from "@material-ui/core"
import { colors } from "../../utils/colors"
const useStyles = makeStyles(theme => ({
  container: {
    display: "grid",
    gridTemplateColumns: "repeat(12, 1fr)",
    gridGap: theme.spacing(6),
  },
  logoContainer: {
    borderWidth: 1,
    borderStyle: "solid",
    width: "40px",
    height: "40px",
    borderColor: colors.white,
    margin: "auto",
    [theme.breakpoints.up("sm")]: {
      marginRight: 10,
      margin: 10,
    },
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
}))
export default useStyles
