import React, { useEffect, useState } from "react";
import axios from "axios";

function App() {

  const [users,setUsers]=useState([]);

  useEffect(()=>{

      axios.get("http://YOUR_BACKEND_IP/api/users")
      .then(res=>{
          setUsers(res.data);
      });

  },[]);

  return(

<div>

<h1>Employee List</h1>

<table border="1">

<tr>
<th>ID</th>
<th>Name</th>
<th>Email</th>
</tr>

{
users.map(user=>(

<tr key={user.id}>
<td>{user.id}</td>
<td>{user.name}</td>
<td>{user.email}</td>
</tr>

))
}

</table>

</div>

);

}

export default App;
