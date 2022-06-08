import React from "react";
import { FormGroup, Input } from "reactstrap";
import "./index.css";

const Checkbox = ({ setAllUserCheck, checked = false }) => {
  return (
    <FormGroup check className="checkbox">
      <Input
        type="checkbox"
        checked={checked}
        onChange={(e) => setAllUserCheck(e.target.checked)}
      />
    </FormGroup>
  );
};

export default Checkbox;
