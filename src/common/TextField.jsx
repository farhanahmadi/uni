import React from "react";

function TextField({ label, name, type, placeHolder, value, price, handler }) {
  return (
    <div>
      <label htmlFor={name} className="flex flex-col items-start">
        <span className="text-blue-500 text-xl font-bold mb-2">{label}</span>
        <input
          id={name}
          name={name}
          value={value}
          placeholder={placeHolder}
          type={type}
          className="form-input w-full rounded-lg bg-gray-50 focus:outline-none p-2 shadow shadow-gray-100 border-0 focus:border focus:border-blue-500"
          style={{ border: "1px solid rgb(217 217 217)" }}
          onChange={handler}
        />
      </label>
    </div>
  );
}

export default TextField;
