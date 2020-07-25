import "react-app-polyfill/ie11";
import * as React from "react";
import * as ReactDOM from "react-dom";
import "./index.css";
import {
  Button,
  ThemeProvider,
  defaultTheme,
  Card,
  Typography,
  Theme,
  ThemeComponent,
} from "../src";

const theme: Theme = {
  ...defaultTheme,
  presets: {
    ...defaultTheme.presets,
    [ThemeComponent.Button]: {
      ...defaultTheme.presets[ThemeComponent.Button],
      inverted:
        "h-20 w-20 rounded-full text-white bg-black hover:bg-gray-800 active:bg-gray-700 focus:outline-none focus:shadow-outline",
    },
    [ThemeComponent.Typography]: {
      default: "",
      header: "text-3xl font-bold",
      secondary: "text-sm text-gray-400",
    },
  },
};

const WeeklyChart = () => (
  <div className="flex flex-row justify-between mt-2">
    {[0, 1, 2, 3, 4, 5, 6].map(i => {
      const value = Math.floor(Math.random() * 32);
      return (
        <div
          key={i}
          className="bg-gray-200 rounded-sm overflow-hidden"
          style={{ minHeight: 32 }}
        >
          <div
            className="bg-orange-400 rounded-sm"
            style={{
              marginTop: value,
              height: 32 - value,
              width: 12,
            }}
          />
        </div>
      );
    })}
  </div>
);

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <div className="container mx-auto min-h-screen max-w-md pt-2 px-2 flex flex-col">
        <div className="flex flex-row">
          <div className="flex flex-col mr-2 flex-grow">
            <Card classNames={["mb-2", "flex-grow"]}>
              <Typography>Card balance</Typography>
              <Typography variant="header">123,45 $</Typography>
              <Typography variant="secondary">Available 876,55</Typography>
            </Card>
            <Card classNames={["flex-grow"]}>
              <Typography>Week activity</Typography>
              <WeeklyChart />
            </Card>
          </div>

          <Card classNames={["flex-grow", "flex", "flex-col"]}>
            <Typography>Payment Due in</Typography>
            <Typography variant="header">6 Days</Typography>
            <Button variant="inverted">Pay</Button>
          </Card>
        </div>
      </div>
    </ThemeProvider>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
