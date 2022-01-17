import React from 'react';
import './terms.css';
import Button from './Button';

function Terms() {
    return(
        <div className="column middle">
        <div>
          <h4>APPLICATION FORM</h4>
          <h2>  Terms and Conditions</h2>
         
        </div>
        <div>
            <label htmlFor="gender"></label>
            <label className="container"><h4>I understand and agree that I should use the same email id throughout the program
                and during a term, for enrolling to a course and paying the fees.Assignments submitted using any other email id
                will not be taken into consideration towards final consolidated score and certification.The responsibility of the 
                email id being valid until the course run is over is mine.
            </h4>
                <input type="checkbox" defaultChecked="checked"/>
                <span className="checkmark"></span>
              </label>
              
              <label className="container"><h4>I hereby declare that I have carefully read the instructions and all the particulars
                  stated in this application form are true and correct to the best of my knowledge and belief.If the information
                  provided is found false/incorrect, I shall abide by any action and/or decision taken by IIT Madras, which may even 
                  be cancellation or withdrawal of the diploma/degree certificates awarded.
              </h4>
                <input type="checkbox"/>
                <span className="checkmark"></span>
              </label>
              
              <label className="container"><h4>I understand and agree that disciplinary action may be initiated against me if I indulge in any
                  Academic Malpractices and/or Non-Academic Malpractices while I am enrolled in the program.
              </h4>
                <input type="checkbox"/>
                <span className="checkmark"></span>
              </label>

              <Button link={"payment"}/>

              
              


        </div>
        {/* <Buttone link={'payment'}/> */}
        </div>
    
    )
}

export default Terms;