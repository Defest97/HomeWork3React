import React, { useState } from "react";

const UserItem = ({ user, sel, isSelected }) => {
  return (
    <div className={isSelected ? "selected" : ""}>
      Name:{user.name},SurName:{user.surName}
      <button onClick={() => sel(user)}>Click</button>
    </div>
  );
};

const UserList = ({ users }) => {
  const [selectedUser, setSelectedUser] = useState(null);
  const handleUserClick = (user) => {
    if (selectedUser === user) setSelectedUser(null);
    else setSelectedUser(user);
  };
  return (
    <>
      {users.map((item, index) => (
        <UserItem
          key={index}
          user={item}
          sel={handleUserClick}
          isSelected={selectedUser === item}
        />
      ))}{" "}
    </>
  );
};

export default function App() {
  return (
    <div className="App">
      <UserList users={usersList} />
    </div>
  );
}
let usersList = [
  { name: "Ivan", surName: "Plias" },
  { name: "Ivan1", surName: "Plias1" }
];
