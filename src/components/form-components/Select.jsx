import React from "react";

export default function Select({ title, options, label, ...props }) {
  return (
    <p className="border-solid m-1 rounded p-1 shadow flex justify-between">
      <label className="text-stone-500">{title}</label>
      <select {...props}>
        {options.map((obj) => (
          <option key={obj.id}>{obj[label]}</option>
        ))}
      </select>
    </p>
  );
}
