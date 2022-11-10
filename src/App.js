import React, { useState, useEffect } from "react";
import Search from "./Search";

function App() {

  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => {
        if(!response.ok) {
          throw new Error(`Response status: ${response.status}`)
        }
        return response.json();
      })
      .then(users => {
        setUsers(users);
      })
      .catch(err => console.log(err.message));
  },[])

  return (
    <div className="tc ma0 pa4 min-vh-100">
      {users && 
        <Search users={users}/>
      }
    </div>
  );
}

export default App;
