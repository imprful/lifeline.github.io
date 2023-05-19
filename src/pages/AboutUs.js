import praful from "./images/praful.jpg";
import mandar from "./images/mandar.jpg"
import prerana from "./images/prerana.jpg"
import vikram from "./images/vikram.jpg"
import logo from "./images/logo.jpg"
import "./css/AboutUs.css";
import React, { useState, useEffect } from "react";
export default function AboutUs() {
  useEffect(() => {
    setVisible(true);
  });
  const [visible, setVisible] = useState(false);
  return (
    <div>
        <header className="App-header">
        <br/>
        <img src={praful} className="App-logo" alt="logo" />
        <p>
          
          <br />
          <h3>"Praful Raju Vairagade"</h3>
          <h4>(Founder & CEO)</h4>
        </p>

        <br/>
        <img src={vikram} className="App-logo" alt="logo" />
        <p>
           
          <br />
          <h3>"Vikram Jadhav"</h3>
          <h4>(Co-Founder & CEO)</h4>
        </p>

        <br/>
        <img src={prerana} className="App-logo" alt="logo" />
        <p>
          
          <br />
          <h3>"Prerana Nagdewate"</h3>
          <h4>(Product Manager & CEO)</h4>
        </p>

        <br/>
        <img src={mandar} className="App-logo" alt="logo" />
        <p>
          
          <br />
          <h3>"Mandar Pande"</h3>
          <h4>(Chief technology officer & CEO)</h4>
        </p>

        <br/>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          
          <br />
          <h3>"Omkar Raut"</h3>
          <h4>(Chief marketing officer & CEO)</h4>
        </p>

        </header>
      
    </div>
  );
}
