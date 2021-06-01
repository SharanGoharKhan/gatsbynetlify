const { createMuiTheme } = require("@material-ui/core");

const theme = createMuiTheme({
    typography: {
        fontFamily: 'Nunito Sans, Roboto, sans-serif'
   
    },
    palette: {
      primary: {
        main: '#D70F64',
        light: "#fff",
        dark: '#000',
        contrastText: '#fff'
      },
      secondary: {
        main: '#FAFAFA',
        light: '#333333',
        dark: '#949393',
        contrastText: '#fff'
      }
    },
  });

  export default theme;