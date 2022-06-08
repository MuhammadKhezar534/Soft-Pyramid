import React, { Fragment } from "react";
import "./index.css";
const DeletedBar = ({ countOfSelectedUser, setFilterUsers }) => {
  return (
    <Fragment>
      {countOfSelectedUser.length > 0 && (
        <div className="deleted-bar">
          <span>
            <img
              src="/assets/img/circle-with-check.png"
              className="white-tick"
              alt="white-tick"
            />
            {countOfSelectedUser.length} Group Selected
          </span>
          <button onClick={setFilterUsers}>DELETE</button>
        </div>
      )}
    </Fragment>
  );
};

export default DeletedBar;
