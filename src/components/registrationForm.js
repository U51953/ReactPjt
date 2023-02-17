import React from 'react';
import './style.css'
function registrationForm() {
    return(
        <div className="container">  
            <label> Firstname </label>   
            <input type="text" name="firstname" placeholder= "Firstname" size="10" required />   
            <label> Middlename: </label>   
            <input type="text" name="middlename" placeholder="Middlename" size="10" required />   
            <label> Lastname: </label>    
            <input type="text" name="lastname" placeholder="Lastname" size="10"required />   
            <div>  
                <label>Gender : </label>
                <input type="radio" defaultValue="Male" name="gender" defaultChecked /> Male   
                <input type="radio" defaultValue="Female" name="gender"/> Female   
            </div>  
            <div>  
                <label>Course : </label>   
                <select>  
                    <option defaultValue="Course">Course</option>  
                    <option defaultValue="java">Java/J2EE</option>  
                    <option defaultValue="springboot">SpringBoot</option>  
                    <option defaultValue="react">ReactJS</option>  
                    <option defaultValue="gcp">GCP</option>  
                </select>  
            </div>  
            <label>Phone :  </label>  
            <input type="text" name="phone" placeholder="phone" size="10" required/>   
            Address :  
            <textarea cols="80" rows="5" placeholder="Address" required>  
            </textarea>  
            <label htmlFor="email"><b>Email</b></label>  
            <input type="text" placeholder="Enter Email" name="email" required/>  
            <fieldset>      
                <legend>Hobbies</legend>      
                <input type="checkbox" name="hobbies" defaultValue="Reading"/>Reading<br/>      
                <input type="checkbox" name="hobbies" defaultValue="Playing"/>Playing<br/>      
                <input type="checkbox" name="hobbies" defaultValue="Shopping"/>Shopping<br/>      
            </fieldset>
            
            
            <div className="txt-style">
                <button type="submit" className="registerbtn">Register</button>    
            </div>
        </div>

    );
}


export default registrationForm;