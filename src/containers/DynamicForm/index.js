import React, { useState } from "react";
import Attributes from "../../components/Form/Attributes";
import FormFileds from "../../components/Form/FormFileds";
import InputNoOfUsers from "../../components/Form/InputNoOfUsers";
import { selectedItems } from "../MultiSelect/helper";
import { parseUsers, userAttributes } from "./helper";

const DynamicForm = () => {
  const [noOfUser, setNumberOfUsers] = useState(0);
  const [attributeList, setAttributeList] = useState(userAttributes);
  const [selectedAttributes, setSelectedAttributes] = useState([]);

  const getNoOfUsers = (number) => {
    setNumberOfUsers(number);
  };

  const getSelectedAttributes = (check, attribute) => {
    const parseUserList = selectedItems(attributeList, check, attribute.id);
    setSelectedAttribute(check, attribute);
    setAttributeList(parseUserList);
  };

  const setSelectedAttribute = (check, attribute) => {
    if (check) {
      setSelectedAttributes((prev) => [...prev, attribute]);
    } else
      setSelectedAttributes((prev) => [
        ...prev.filter((attr) => attr.id !== attribute.id),
      ]);
  };

  const handSubmit = (fields) => {
    const finalUsers = parseUsers(fields);
    console.log("Users Data:", finalUsers);
  };

  return (
    <div style={{ margin: "90px 0" }}>
      <InputNoOfUsers setNumberOfUsers={getNoOfUsers} />
      {noOfUser > 0 && (
        <Attributes
          userAttributes={attributeList}
          getSelectedAttributes={getSelectedAttributes}
        />
      )}
      {selectedAttributes.length > 0 && (
        <FormFileds
          noOfUser={noOfUser}
          handSubmit={handSubmit}
          selectedAttributes={selectedAttributes}
        />
      )}
    </div>
  );
};

export default DynamicForm;
