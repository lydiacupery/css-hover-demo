import React from "react";
import clsx from "clsx";
import * as classes from "./app-styles.module.css";
import { MyComponent } from "./MyComponent";

export const WrapperComponent = (props) => {
  return (
    <div className={clsx(classes.outerComponent, "outerComponent")}>
      <MyComponent />
    </div>
  );
};
