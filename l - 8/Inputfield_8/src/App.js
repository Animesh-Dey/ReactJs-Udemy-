import React, { useState } from "react";
import AddUser from "./components/Users/AddUser";
import UsersLists from "./components/Users/UsersLists";

function App() {

  const [usersList,setUsersList] = useState([]);

  const addUserHandler=(uName,uAge)=>{
    setUsersList((prevUsersList)=>{
    return [...prevUsersList,{id:Math.random().toString(),name: uName,age:uAge}];
    });
  }


  return (
    <div>
      <AddUser onAddUser={addUserHandler} />
      <UsersLists users={usersList} />
    </div>
  );
}

export default App;
