import React from "react";
import * as ReactDOM from "react-dom";
import { AsDiv } from "../stories/Base.stories";

describe("Thing", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<AsDiv />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
