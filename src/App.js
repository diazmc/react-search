import React, { useState, useEffect } from "react";
import Card from './Card';

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
    <div className="App">
    {users && 
      users.map(user => {
        return <Card key={user.id} user={user} />
      })
    }
    </div>
  );
}

export default App;
