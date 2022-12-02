import React from "react";
import * as classes from "./app-styles.module.css";

export const MyComponent = (props) => {
  return (
    <div className={classes.component}>
      <div className={classes.showMe}>Show me on outer component hover!</div>
    </div>
  );
};
