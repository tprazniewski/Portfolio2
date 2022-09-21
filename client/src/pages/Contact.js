import React from 'react'
import Header from '../components/Header'
import '../stylesheets/contacts.css'

function Contact() {
  return (
    <div>
      <Header/>
      <div className='container contact mt-5'>
        <div className='row pt-5'>

          <div className='col-md-6 p-5'>
            <img src='./contact.svg' alt='img'/>
          </div>

          <div className='col-md-6'>
            <div className='contact-form m-2 p-5 n-box1'>
              <h3> Contact Me</h3>
              <input type="text" className='form-control' placeholder='name'/>
              <input type="text" className='form-control' placeholder='name'/>
              <textarea className='form-control' rows={3} defaultValue={""}/>
              <button className='primary-button '>Submit</button>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Contact