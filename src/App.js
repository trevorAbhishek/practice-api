import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import User from './components/User';
import AddUser from './components/AddUser';

const  App=()=> {
const [users, setUsers]=useState([]); 
useEffect(()=>{
 fetchData();

},[]);
const fetchData=async() =>{
  await fetch("https://jsonplaceholder.typicode.com/users")
  .then((res)=> res.json())
  .then((data)=>setUsers(data))
  .catch((err)=>{
    console.log(err)
  });
};

const onAdd= async(name,email)=>{
  await fetch("https://jsonplaceholder.typicode.com/users" ,{
  method:"POST",
  body:JSON.stringify({
    name:name,
    email:email
  }),
  headers:{
    "Content-type":"application/json; charset=UTF-8",
  },
})
.then((res)=> res.json())
  .then ((data)=>{
    setUsers((users)=>[...users,data]);
  })
  .catch((err)=>{
  console.log(err);
}) ;   
};
const onDelete = async (id) => {
  await fetch(`https://jsonplaceholder.typicode.com/users/${id}`, {
    method: "DELETE",
  })
    .then((res) => {
      if (res.status === 200) {
        setUsers(users.filter((user) => user.id !== id)); // Remove the deleted user
      } else {
        return;
      }
    })
    .catch((err) => {
      console.log(err);
    });
};

console.log(users)
  return (
    <div className="App">
      <h3>react crude using json placeholder</h3>
      <br/>
    <AddUser onAdd={onAdd}/>
   <div>{
    users.map((user)=>(
      <User id={user.id}key={user.id}name={user.name} email={user.email} onDelete={onDelete}/>

    ))}

   </div>
    </div>
  );
}

export default App;

