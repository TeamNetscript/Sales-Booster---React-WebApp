import React, { useState } from 'react';

function Form() {
  const [yourName, setYourName] = useState('')  
  const [websiteAddress, setWebsiteAddress] = useState('')  
  const [whatsappNumber, setWhatsappNumber] = useState('')  
  const [age, setAge] = useState('') 
  const [email, setEmail] = useState('') 
  const [message, setMessage] = useState('') 

  return (
    <div className="FormMain" id="Form">
      <div className="c ontainer">
        <div className="Form_info">
          <div className="Formleft">
            <form>
              <div className="Formleft_flex">
                <label>
                  <input placeholder="Your Name" onChange={(e) => setYourName(e.target.value)} />
                </label>
                <label>
                  <input placeholder="Website Address" onChange={(e) => setWebsiteAddress(e.target.value)} />
                </label>
              </div>
              <div className="Formleft_flex">
                <label>
                  <input placeholder="Whatsapp Number" onChange={(e) => setWhatsappNumber(e.target.value)} />
                </label>
                <label>
                  <input placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
                </label>
              </div> 
              <label>
                <textarea placeholder="Message" onChange={(e) => setMessage(e.target.value)} />
              </label>
              <button type="submit">Submit</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Form;