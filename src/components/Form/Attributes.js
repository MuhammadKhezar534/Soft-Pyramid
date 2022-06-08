import React from "react";
import Checkbox from "../CheckBox";

const Attributes = ({ userAttributes, getSelectedAttributes }) => {
  return (
    <div className="attribute-container">
      <div className="user-attr-title">User Attributes</div>
      {userAttributes.map((attr) => (
        <div key={attr.title} className="attribute-list">
          <Checkbox
            checked={attr.checked}
            className="box-styles"
            setAllUserCheck={(check) => getSelectedAttributes(check, attr)}
          />
          <span>{attr.title}</span>
        </div>
      ))}
    </div>
  );
};

export default Attributes;
