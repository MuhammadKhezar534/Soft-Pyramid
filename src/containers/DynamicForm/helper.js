import * as Yup from "yup";
import React from "react";

export const userAttributes = [
  {
    id: 1,
    title: "ID",
    type: "number",
    checked: false,
  },
  {
    id: 2,
    title: "Name",
    type: "text",
    checked: false,
  },
  {
    id: 3,
    title: "Email",
    type: "email",
    checked: false,
  },
  {
    id: 4,
    title: "Age",
    type: "number",
    checked: false,
  },
  {
    id: 5,
    title: "Password",
    type: "password",
    checked: false,
  },
];

export const makeFieldstoUsed = (noOfUser, attributes) => {
  let upperArray = [];
  for (let i = 0; i < noOfUser; i++) {
    const localRef = React.createRef();

    upperArray.push({
      formId: i,
      localRef,
      title: `User ${i + 1}`,
      values: getValues(attributes),
      schema: validationSchema(),
      attributeArr: getParseAttributes(attributes),
    });
  }

  return upperArray;
};

const getParseAttributes = (attributes) => {
  return attributes.map((attribute) => {
    return {
      fieldName: attribute.title,
      label: attribute.title,
      type: attribute.type,
    };
  });
};

export const getValues = (attributes) => {
  let obj = {};
  attributes.forEach((attr) => {
    obj[attr.title] = "";
  });
  return obj;
};

const validationSchema = () => {
  const validationSchema = Yup.object().shape({
    ID: Yup.number().required("ID is required"),
    Age: Yup.string().required("Age is requied"),
    Email: Yup.string().email("Email is invalid").required("Email is required"),
    Name: Yup.string().required("Name is required"),
    Password: Yup.string().required("Password is required"),
  });
  return validationSchema;
};

export const updateFields = (fields, e, formId, fieldName) => {
  const parse = fields.map((field) => {
    if (field.formId === formId) {
      return {
        ...field,
        values: { ...field.values, [fieldName]: e },
      };
    } else return field;
  });

  return parse;
};

export const getUpdatedErrors = (field, selectedAttributes) => {
  field.localRef.current.submitForm();
  let localObj = field.localRef.current.errors;
  let obj2 = {};
  selectedAttributes.forEach((attr) => {
    if (localObj[attr.title]) {
      obj2[attr.title] = localObj[attr.title];
    }
  });
  let errorsCheck = true;

  if (Object.keys(field.localRef.current.errors).length > 0) {
    if (!Object.keys(obj2).length) {
      errorsCheck = false;
    } else {
      errorsCheck = true;
    }
  }
  return errorsCheck;
};

export const parseUsers = (users) => {
  return users.map((user) => {
    return {
      id: user.formId,
      ...user.values,
    };
  });
};
