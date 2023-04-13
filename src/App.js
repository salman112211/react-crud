import React, {useState} from 'react';
import  './App.css';
import data from "./mock-data.json";
import {nanoid} from "nanoid";
import ReadOnlyRow from './component/ReadOnlyRow';
import EditAbleRow from './component/EditAbleRow';


const App = () =>{

  const [contacts, setContacts] =useState(data);

  const [addFormData, setFormData]= useState({
    fullName: "",
    Address:"",
    email:"",
    phoneNumber:"",


  });


  const [editContactId, setContactId]= useState(null);

  const handleAddContact = (event)=>{
   
   event.preventDefault();

   const feildName = event.target.getAttribute("name");
   const feildvalue= event.target.value;
   const newFormData={...addFormData};
   newFormData[feildName]= feildvalue;

   setFormData(newFormData);

  }


    const handleAddFormSubmit = (event)=>{

      event.preventDefault();
      const newcontact ={
        id: nanoid(),
        fullName: addFormData.fullName,
        address:addFormData.Address,
        phoneNumber:addFormData.phoneNumber,
        email:addFormData.email,
      }

      const newContacts=[...contacts, newcontact];
      setContacts(newContacts);
    }


    const handleEditClick =(event, contact)=>{
    event.preventDefault();
    setContactId(contact.id);
    }
  return(
    <>
    <div className='app-container'>
      <form>
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Address</th>
          <th>Phone Number</th>
          <th>Email</th>
          <th>Action</th>


        </tr>
      </thead>
      <tbody>

        {contacts.map((contact)=>
        <>
        { editContactId === contact.id ? <EditAbleRow/> : <ReadOnlyRow  contact={contact} handleEditClick={handleEditClick}/>}
    
   
   </>

        )}
       
      </tbody>
    </table>
    </form>
    <h2>Add a contact</h2>
    <form onSubmit={handleAddFormSubmit}>
      <input type='text' name="fullName"  required="required" placeholder='Enter a name..' onChange={handleAddContact}/>
      <input type='text' name="Address"  required="required" placeholder='Enter a address..' onChange={handleAddContact}/>
      <input type='email' name="email"  required="required" placeholder='Enter a email..' onChange={handleAddContact}/>
      <input type='text' name="phoneNumber"  required="required" placeholder='Enter a number..' onChange={handleAddContact}/>
      <button type="submit">Add</button>

    </form>
    </div>
    
    </>
  )
}


export default App;