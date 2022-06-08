import React from "react";
import { Col, FormGroup, Label, Input } from "reactstrap";
import "./index.css";

const InputNoOfUsers = ({ setNumberOfUsers }) => {
  return (
    <FormGroup row className="no-of-user-input">
      <Label sm={2}>No. of Users</Label>
      <Col sm={10}>
        <Input
          type="number"
          placeholder="Enter number of users"
          onChange={(e) => setNumberOfUsers(e.target.value)}
        />
      </Col>
    </FormGroup>
  );
};

export default InputNoOfUsers;
