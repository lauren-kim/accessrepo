import { createMuiTheme } from "@material-ui/core";

const theme = createMuiTheme({
    // A purple and green taken from the DUB branding
    palette: {
        primary: {
            // light: calculated
            main: '#E0AFAF',
            // dark: calculated
            // contrastText: calculated
        },
        secondary: {
            // light: calculated
            main: '#4cdc31',
            // dark: calculated
            // contrastText: calculated
        },
    },
});

export default theme;