import React from 'react'
import "../css/contact.css"

function Contact() {
    function handleFormSubmit(formData) {
        console.log(formData.entries());
        let fortInputData = Object.fromEntries(formData.entries()); // data for send backEnd
        // console.log(fortInputData);
    }
    return (
        <div className='form-container'>
            <form className='form' action={handleFormSubmit}  >
                <h2 >Contact Us</h2>
                <input className='input' type="text" name="userName" placeholder="Enter your name" required />
                <input className='input' type="text" name="gmail" placeholder="Enter your Gmail" required />
                <textarea className='input' name="message" placeholder="Enter your" rows="4" required></textarea>
                <button className='input' type="submit" >Submit</button>
            </form>
        </div>
    )
}

export default Contact