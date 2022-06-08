import React from "react";
import Checkbox from "./Checkbox";
import "./index.css";

const TableRows = ({
  users = [],
  setAllUserCheck,
  getSelectedUsers,
  allCheck,
}) => {
  return (
    <table className="table-rows">
      <thead>
        <tr>
          <th className="th1">
            <Checkbox setAllUserCheck={setAllUserCheck} checked={allCheck} />
          </th>
          <th className="th2">
            <span>
              Name
              <img
                src="/assets/img/down-arrow.png"
                alt="down-arrow"
                className="down-arrow"
              />
            </span>
          </th>
          <th className="th2 text-align">Description</th>
        </tr>
      </thead>
      <tbody>
        {users &&
          users.map((user) => (
            <tr key={user.id}>
              <td className="th1">
                <Checkbox
                  setAllUserCheck={(check) => getSelectedUsers(check, user.id)}
                  checked={user.checked}
                />
              </td>
              <td className="th2 text-align">{user.name}</td>
              <td className="th2 text-align">{user.age}</td>
            </tr>
          ))}
      </tbody>
    </table>
  );
};

export default TableRows;
