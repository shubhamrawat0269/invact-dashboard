import React from "react";
import "assets/css/App.css";
import theme from "theme/theme";
import ReactDOM from "react-dom";
import AdminLayout from "layouts/admin";
import { ChakraProvider } from "@chakra-ui/react";
import { ThemeEditorProvider } from "@hypertheme-editor/chakra-ui";
import { HashRouter, Route, Switch, Redirect } from "react-router-dom";

ReactDOM.render(
  <ChakraProvider theme={theme}>
    <React.StrictMode>
      <ThemeEditorProvider>
        <HashRouter>
          <Switch>
            <Route path="/" component={AdminLayout} />
            <Redirect from="/" to="/" />
          </Switch>
        </HashRouter>
      </ThemeEditorProvider>
    </React.StrictMode>
  </ChakraProvider>,
  document.getElementById("root")
);
