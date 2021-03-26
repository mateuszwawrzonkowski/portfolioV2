import React from "react";

import { Route, Switch } from "react-router";
import { HashRouter as Router } from "react-router-dom";

import { ThemeProvider } from "styled-components";
import GlobalStyles from "theme/globalStyles";
import { theme } from "theme/mainTheme";

import Home from "pages/Home";
import About from "pages/About";
import Projects from "pages/Projects";
import Skills from "pages/Skills";
import Contact from "pages/Contact";
import NotFound from "pages/NotFound";

function App() {
  return (
    <>
      <GlobalStyles />
      <ThemeProvider theme={theme}>
        <Router>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/projects" component={Projects} />
            <Route path="/skills" component={Skills} />
            <Route path="/contact" component={Contact} />
            <Route path="*" component={NotFound} />
          </Switch>
        </Router>
      </ThemeProvider>
    </>
  );
}

export default App;
