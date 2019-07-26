import React from "react";

function Contact () {
    return (        
<div className="container">
      <header className="home-cta">
        <h1>
          Contact Us
        </h1>
      </header>
      <div>
      <p>Should you have any reason to contact us please do so through the options below</p>
      <ul>
        <li>Email: dontemailus@hotmail.com</li>
        <li>Phone: 1-800-don-tcall</li>
        <li>Fax: 1-800-don-tfax</li>
      </ul>
      <div>
      <div className="card">
  <img src="adrien.png" alt="Avatar" style={{width: "100%"}} ></img>
  <div className="card-container">
    <h4><b>John Doe</b></h4> 
    <p>Architect & Engineer</p> 
  </div>
</div>
      </div>
      </div>
      <div>Icons made by "https://www.flaticon.com/authors/freepik"</div>
    </div>
);
}

export default Contact;