import React from "react";
const AddUser =({onAdd})=> {
    const handleOnSubmit=(e)=>{
        e.preventDefault();
        onAdd(e.target.name.value,e.target.email.value);
        console.log(e.target.name.value,e.target.email.value);
        e.target.name.value="";
        e.target.email.value="";
       
    }
return(

    <div>
        <form  onSubmit={handleOnSubmit}>
            <h3>add user</h3>
            <input placeholder="name" name="name" required/>
            <input placeholder="email" name="email" required/>
            <button onSubmit={handleOnSubmit}> add</button>
            <hr/>
            
        </form>


    </div>
);

};
export default AddUser;