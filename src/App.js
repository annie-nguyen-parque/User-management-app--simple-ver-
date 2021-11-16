import React, { useState } from 'react';

import AddUser from './components/Users/AddUser'
import UserList from './components/Users/UserList';

function App() {

  const [userData, setUserData] = useState([]);

  function saveUserDataHandler(username, age) {
    setUserData((preData) => {
      return [
        {id: Math.random().toString(), username: username, age: age}, 
        ...preData
      ]
    })}

  return (
    <div>
      <AddUser onSaveUserData={saveUserDataHandler}/>
      <UserList data={userData} />
    </div>
  );
};

export default App;
