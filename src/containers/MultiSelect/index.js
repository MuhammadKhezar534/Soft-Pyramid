/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import DeletedBar from "../../components/TableRows/DeletedBar";
import TableRows from "../../components/TableRows";
import { selectedItems, users } from "./helper";

const MultiSelect = () => {
  const [userList, setUserList] = useState(users);
  const [allCheck, setAllCheck] = useState(false);
  const [countOfSelectedUser, setCheckedCount] = useState(0);

  useEffect(() => {
    getCheckUserList();
  }, [userList]);

  const setAllUserCheck = (check) => {
    setAllCheck(check);
    setAllUserChecked(check);
  };

  const setAllUserChecked = (check) => {
    setUserList((prev) => [
      ...prev.map((user) => {
        return {
          ...user,
          checked: check,
        };
      }),
    ]);
  };

  const getSelectedUsers = (check, userId) => {
    const parseUserList = selectedItems(userList, check, userId);
    setUserList(parseUserList);
  };

  const getCheckUserList = () => {
    let checkedUserCount = [];
    userList.forEach((user) => {
      if (user.checked) {
        checkedUserCount.push(user.id);
      }
    });
    checkedUserCount.length <= 0 && setAllCheck(false);
    setCheckedCount(checkedUserCount);
  };

  const setFilterUsers = () => {
    const filterUsers = userList.filter((user) => {
      return !user.checked;
    });
    const deletedUsers = userList.filter((user) => {
      return user.checked;
    });
    console.log("Deleted Users List:", deletedUsers);
    setUserList(filterUsers);
  };

  console.log("Selected user ids:", countOfSelectedUser);

  return (
    <div style={{ marginTop: "10%" }}>
      <DeletedBar
        countOfSelectedUser={countOfSelectedUser}
        setFilterUsers={setFilterUsers}
      />
      <TableRows
        users={userList}
        allCheck={allCheck}
        setAllUserCheck={setAllUserCheck}
        getSelectedUsers={getSelectedUsers}
      />
    </div>
  );
};

export default MultiSelect;
