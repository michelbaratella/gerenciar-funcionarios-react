import React from "react";

export default function Input({ label, id, textarea, ...props }) {
  return (
    <>
      {label && (
        <label htmlFor={id} className="text-stone-800 flex-shrink-0">
          {label}
        </label>
      )}
      {textarea ? (
        <textarea
          className="border-1 border-solid rounded border-stone-400 flex-grow w-0"
          id={id}
          name={id}
          autoComplete="off"
          {...props}
        ></textarea>
      ) : (
        <input
          className="border-1 border-solid rounded border-stone-400 flex-grow w-0"
          type="text"
          id={id}
          name={id}
          autoComplete="off"
          {...props}
        />
      )}
    </>
  );
}
