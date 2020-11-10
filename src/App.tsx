import React from "react";
import { Switch, BrowserRouter, Route } from "react-router-dom";
import Form from "./Form";
import Redirect from "./Redirect";

import CssBaseline from "@material-ui/core/CssBaseline";

function App() {
  return (
    <BrowserRouter>
      <CssBaseline />
      <Switch>
        <Route path="/" exact render={() => <Form />} />
        <Route path="/:shortUrl" exact render={() => <Redirect />} />
        <Route render={() => <h1>404</h1>} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
