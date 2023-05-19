import praful from "./images/praful.jpg";
import "./css/ContactUs.css";
import React, { useState, useEffect } from "react";
export default function ContactUs() {
  useEffect(() => {
    setVisible(true);
  });
  const [visible, setVisible] = useState(false);
  return (
    <div>
        <header className="App-header">
        <br/>
        
        <p>
          <h1>Contact Us</h1>
          <br />
          <h3>"Praful Raju Vairagade"</h3>
          <h4>(Founder & CEO)</h4>
          <h5>Mobile:- 07038562238</h5>
          <h6>E-mail:- lifeline.impraful@gmail.com</h6>

        </p>

       
        <p>
           
          <br />
          <h3>"Vikram Jadhav"</h3>
          <h4>(Co-Founder & CEO)</h4>
          <h5>Mobile:- 07776969804</h5>
          <h6>E-mail:- lifeline.imvikram@gmail.com</h6>
        </p>

       
        <p>
          
          <br />
          <h3>"Prerana Nagdewate"</h3>
          <h4>(Product Manager & CEO)</h4>
          <h5>Mobile:- 09765911317</h5>
          <h6>E-mail:- lifeline.imprerna@gmail.com</h6>
        </p>

        
        <p>
          
          <br />
          <h3>"Mandar Pande"</h3>
          <h4>(Chief technology officer & CEO)</h4>
          <h5>Mobile:- 08999794013</h5>
          <h6>E-mail:- lifeline.immandar@gmail.com</h6>
        </p>

        <p>
          
          <br />
          <h3>"Omkar Raut"</h3>
          <h4>(Chief marketing officer & CEO)</h4>
          <h5>Mobile:- 09762214179</h5>
          <h6>E-mail:- lifeline.imomkar@gmail.com</h6>
        </p>

        </header>
      
    </div>
  );
}
