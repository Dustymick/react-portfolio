import React, {useState} from "react";
import Tweet from "./components/tweet/index"


function App() {
  const [users, setUsers] = useState([
    {name: "Ed", message: "Hello There"}, 
    {name: "John", message: "Have a good day"},
    {name: "Dustin", message: "Goodbye"},
  ]);

  return (
    <div className="app">
      <main>
        {users.map(user =>(
          <Tweet name={user.name} message={user.message} likes={user.likes}/>
        ))} 
      </main>
    </div>
  );
}

export default App;