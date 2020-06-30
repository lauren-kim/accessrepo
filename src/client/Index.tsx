import * as React from 'react';
import * as ReactDOM from 'react-dom';

import {
    BrowserRouter as Router,
    Route,
    Switch,
} from 'react-router-dom';

import {
    AppBar,
    Box,
    CssBaseline,
    Container,
    ThemeProvider,
    Toolbar,
} from '@material-ui/core';

import { MDXProvider } from '@mdx-js/react';
import commonMDXComponents from '../common/MDXComponents';

import { StoreProvider } from '../stores/AppStoreProvider';

import theme from './Theme'

import ToolbarButton from 'src/common/ToolbarButton';

import Home from '../pages/Home.mdx';
import Assignments from '../pages/Assignments.mdx';
import Calendar from '../pages/Calendar.mdx';

declare let module: any;

const createUi = () => {
    return (
        <StoreProvider>
            <ThemeProvider theme={theme}>
                <CssBaseline/>
                <MDXProvider components={commonMDXComponents}>
                    <Router>
                        <AppBar position="static">
                            <Container>
                                <Toolbar disableGutters>
                                    <Box display="flex" flexDirection="row" width="100%">
                                        <ToolbarButton to="/">CSE 510 - Advanced Topics in HCI - Winter 2020</ToolbarButton>
                                        <Box flexGrow={1} />
                                        <ToolbarButton to="/assignments">Assignments</ToolbarButton>
                                        <ToolbarButton to="/calendar">Calendar</ToolbarButton>
                                    </Box>
                                </Toolbar>
                            </Container>
                        </AppBar>
                        <Container>
                            { /* TODO React Router v6 for Routes Component */ }
                            <Switch>
                                <Route exact path="/">
                                    <Home />
                                </Route>
                                <Route path="/assignments">
                                    <Assignments />
                                </Route>
                                <Route path="/calendar">
                                    <Calendar />
                                </Route>
                            </Switch>
                        </Container>
                    </Router>
                </MDXProvider>
            </ThemeProvider>
        </StoreProvider>
    );
};

ReactDOM.render(createUi(), document.getElementById('root'));

if (module.hot) {
    module.hot.accept();
}
