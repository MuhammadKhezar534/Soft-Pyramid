export const users = [
  { id: 1, name: "Alita", age: "19", checked: false },
  { id: 2, name: "Clare", age: "19", checked: false },
  { id: 3, name: "Sarah", age: "19", checked: false },
  { id: 4, name: "Lyelak", age: "19", checked: false },
  { id: 5, name: "Jenny", age: "19", checked: false },
];

export const selectedItems = (userList, check, userId) => {
  return userList.map((user) => {
    if (user.id === userId) {
      return {
        ...user,
        checked: check,
      };
    } else return user;
  });
};
