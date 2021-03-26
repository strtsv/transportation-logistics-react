import React from "react";
import { Route, Switch } from "react-router-dom";

import Home from "./pages/Home";

function App() {
  return (
    <Switch>
      <Route exact path="/index.html" component={Home} />
      <Route exact path="/" component={Home} />
    </Switch>
  );
}

export default App;
