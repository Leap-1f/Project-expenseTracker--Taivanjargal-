import React from "react";

const Input = ({ addClass, placeholder, type, text, value, onChange }) => {
  return (
    <div>
      <input
        value={value}
        type={type}
        placeholder={placeholder}
        className={`input input-bordered bg-gray-100 border-1 border-base-300 ${addClass}`}
        onChange={onChange}
      />

      {text && <p className="input-hint">{text}</p>}
    </div>
  );
};

export default Input;
