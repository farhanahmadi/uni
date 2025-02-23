import React from "react";

function TextFeild({ label, name, type, placeHolder, value, handler }) {
  return (
    <div>
      <label htmlFor={name} className="flex flex-col items-start">
        <span className="text-blue-500 text-lg font-bold mb-2">{label}</span>
        <input
          id={name}
          name={name}
          //   value={value}
          placeholder={placeHolder}
          type={type}
          className="form-input w-full rounded-lg bg-gray-200 focus:outline-none p-2"
        />
      </label>
    </div>
  );
}

export default TextFeild;
