import React, { useState } from "react";
import { LABEL_CLASSES } from "../../constant";
import "./style.css";

export const InputLabel = ({ name, label, className, ...rest }) => {
  const [labelState, setLabelState] = useState(LABEL_CLASSES.BEFORE);

  return (
    <div className="mb-3">
      <input
        type="text"
        className={`rounded w-100 form-input-field p-2 ${className}`}
        style={{ height: "3rem", borderColor: "rgb(105, 105, 105)" }}
        {...(name && { name })}
        onFocus={() => setLabelState(LABEL_CLASSES.AFTER)}
        onBlur={() => setLabelState(LABEL_CLASSES.BEFORE)}
        {...rest}
      />
      <label className={labelState}>{label}</label>
    </div>
  );
};
