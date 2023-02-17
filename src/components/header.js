import React from 'react';
function Header() {
    return(
        // <nav class="bg-dark navbar-dark navbar">
        <div>  
        <center>  <h1> <img src={require('../img/register_img.png')} alt="" width="200"/> </h1> </center>  
        <p align="right">  
            <a href = "http://www.google.com" target="_blank">Help </a>
        </p> 
        </div>
        // </nav>
    )
}
export default Header;