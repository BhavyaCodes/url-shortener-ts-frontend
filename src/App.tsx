import React, { useContext } from "react";
import { Switch, BrowserRouter, Route } from "react-router-dom";
import Form from "./Form";
import Redirect from "./Redirect";

import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import { ThemeContext } from "./ThemeContext";

function App() {
  const paletteType = useContext(ThemeContext);

  const theme = createMuiTheme({
    palette: {
      type: paletteType,
    },
  });
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Switch>
          <Route path="/" exact render={() => <Form />} />
          <Route path="/:shortUrl" exact render={() => <Redirect />} />
          <Route render={() => <h1>404</h1>} />
        </Switch>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
