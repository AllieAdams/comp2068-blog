import React from "react";

const cardStyle = {
  boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2)',
  transition: '0.3s',
  width: '30%',
  margin: '10px',
  marginLeft:  'auto',
  marginRight: 'auto'
}

const divSpace = {
  padding: '10px'
}


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
      
      <div>
      <div className="card" style={cardStyle}>
        <div style={divSpace}>
  <img src={require("./images/adrien.png")} alt="Adrien" style={{width: "100%"}} ></img>
  <div className="cardcontainer">
    <h4><b>Adrien French</b></h4> 
    <p>Programmer</p> 
    <ul>
        <li>Email: Adrien.French@myGeorgian.ca</li>
        <li>Phone: 1-800-adr-ienFl</li>
      </ul>
      </div>
  </div>
</div>
<div className="card" style={cardStyle}>
<div style={divSpace}>
  <img src={require("./images/allie.png")} alt="Allie" style={{width: "100%"}} ></img>
  <div className="cardcontainer">
    <h4><b>Allie Adams</b></h4> 
    <p>Programmer</p> 
    <ul>
        <li>Email: Allie.Adams@myGeorgian.ca</li>
        <li>Phone: 1-800-all-ieAA</li>
      </ul>
      </div>
  </div>
</div>
<div className="card" style={cardStyle}>
<div style={divSpace}>
  <img src={require("./images/bethany.png")} alt="Bethany" style={{width: "100%"}} ></img>
  <div className="cardcontainer">
    <h4><b>Bethany Belbin</b></h4> 
    <p>Programmer</p> 
    <ul>
        <li>Email: Bethany.Belbin@myGeorgian.ca</li>
        <li>Phone: 1-800-don-tcal</li>
      </ul>
      </div>
  </div>
</div>
      </div>
      </div>
      <div>Icons made by "https://www.flaticon.com/authors/freepik"</div>
    </div>
);
}

export default Contact;