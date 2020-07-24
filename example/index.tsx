import "react-app-polyfill/ie11";
import * as React from "react";
import * as ReactDOM from "react-dom";
import "./index.css";
import { Button, ThemeContext, defaultTheme } from "../src";

const theme = {
  ...defaultTheme,
};

const App = () => {
  return (
    <ThemeContext.Provider value={theme}>
      <div className="container mx-auto">
        <h1 className="text-lg">Example</h1>
        <Button>test</Button>
      </div>
    </ThemeContext.Provider>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
