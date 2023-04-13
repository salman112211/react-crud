import React from 'react';


const EditAbleRow = () =>{

    return(
       
        <tr>
            <td>
      <input type="text" 
      required="required" 
     placeholder='Enter a name' 
        name="fullName"/> 
      </td>
            <td>
                
            <input type="text" 
            required="required" 
            placeholder='Enter a address' 
            name="Address"/> 
            </td>
            <td>
                <input type="text" 
                required="required" 
                placeholder='Enter a email' 
                name="email"/> 
            </td>
            <td>
                 <input type="text" 
                 required="required" 
                 placeholder='Enter a phn' 
                 name="phoneNumber"/> 
            </td>


        </tr>
        
    );
}

export default EditAbleRow;