/* eslint-disable react-hooks/exhaustive-deps */
import React, { Fragment, useEffect, useState } from "react";
import { Col, Row } from "reactstrap";
import {
  getUpdatedErrors,
  makeFieldstoUsed,
  updateFields,
} from "../../containers/DynamicForm/helper";
import { Formik, Form } from "formik";
import { useRef } from "react";
import FormFiled from "./FormField";

const FormFileds = ({ noOfUser, selectedAttributes, handSubmit }) => {
  const [fields, setFields] = useState([]);
  let localRef = useRef();

  useEffect(() => {
    const fields = makeFieldstoUsed(noOfUser, selectedAttributes, localRef);
    setFields(fields);
  }, [selectedAttributes, noOfUser]);

  const localHandleChange = (e, formId, fieldName) => {
    const updadatedFields = updateFields(fields, e, formId, fieldName);
    setFields(updadatedFields);
  };

  const parentClick = () => {
    let submitCheck = false;
    const errors = fields.map((field) => {
      const errorsCheck = getUpdatedErrors(field, selectedAttributes);
      return errorsCheck;
    });
    errors.forEach((error) => {
      if (error) {
        submitCheck = true;
      }
    });
    if (!submitCheck) {
      handSubmit(fields);
    }
  };
  return (
    <div style={{ margin: "40px" }}>
      {fields?.length > 0 &&
        fields.map((input) => (
          <Fragment key={input.formId}>
            <div className="title">{input.title}</div>
            <Formik
              innerRef={input.localRef}
              initialValues={input.values}
              validationSchema={input.schema}
              enableReinitialize
            >
              {({ errors, touched, handleChange }) => {
                return (
                  <Form>
                    <Row>
                      {input.attributeArr.map((field) => (
                        <Col key={field.fieldName} lg={6} className="field-col">
                          <FormFiled
                            errors={errors}
                            touched={touched}
                            handleChange={handleChange}
                            fieldName={field.fieldName}
                            localHandleChange={localHandleChange}
                            type={field.type}
                            label={field.label}
                            values={input.values}
                            formId={input.formId}
                          />
                        </Col>
                      ))}
                    </Row>
                  </Form>
                );
              }}
            </Formik>
          </Fragment>
        ))}
      {noOfUser > 0 && (
        <button type="submit" onClick={parentClick} className="btn">
          Create
        </button>
      )}
    </div>
  );
};
export default FormFileds;
