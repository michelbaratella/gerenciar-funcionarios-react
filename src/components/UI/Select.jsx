import React from "react";
import { classes } from "../../util/sharedStyles";

export default function Select({ label, values, ...props }) {
  return (
    <p className="flex flex-col gap-1 my-4">
      <label className="text-sm text-left" htmlFor={props.id}>
        {label}
      </label>
      <select className={classes} name={props.name}>
        {values &&
          values.map((val) => (
            <option key={val} value={val}>
              {val}
            </option>
          ))}
      </select>
    </p>
  );
}
