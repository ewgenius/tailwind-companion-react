import * as React from "react";
import { addDecorator } from "@storybook/react";
import "./index.css";

addDecorator(storyFn => <div className="p-4">{storyFn()}</div>);
