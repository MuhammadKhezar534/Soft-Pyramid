import React, { Fragment } from "react";

import { Field, ErrorMessage } from "formik";

const FormFiled = ({
  errors,
  touched,
  label,
  fieldName,
  type,
  values,
  formId,
  localHandleChange,
}) => {
  return (
    <Fragment>
      <div className="label">{label}</div>
      <div>
        <Field
          className={`form-control ${
            errors[fieldName] && touched[fieldName] && "is-invalid"
          } field`}
          type={type}
          name={fieldName}
          value={values[fieldName]}
          onChange={(e) => localHandleChange(e.target.value, formId, fieldName)}
        />
        {errors[fieldName] && touched[fieldName] && (
          <ErrorMessage
            name={fieldName}
            component="div"
            style={{ color: "red", fontSize: "14px" }}
          />
        )}
      </div>
    </Fragment>
  );
};

export default FormFiled;
