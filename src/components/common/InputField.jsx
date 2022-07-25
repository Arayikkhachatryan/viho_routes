import React from "react";

export const InputField = ({
  type,
  label,
  name,
  value,
  changeValue,
  placeholder,
  icon,
  divName,
}) => {
  return (
    <>
      {label && (
        <label htmlFor={name} className="group-heading">
          {label}
        </label>
      )}

      <div className={divName}>
        <span className="user-icon">{icon}</span>
        <input
          type={type}
          id={name}
          value={value}
          onChange={(e) => changeValue(e.target.value, name)}
          placeholder={placeholder}
        />
      </div>
    </>
  );
};
