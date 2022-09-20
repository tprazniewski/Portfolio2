import React from 'react'
import '../stylesheets/footer.css'
import {FaFacebook, FaGithub, FaLinkedin, FaMailBulk} from 'react-icons/fa'
import {Link} from 'react-router-dom'

function Footer() {
  return (
    <div className='footer '>
        <img src='./footerBG.svg' alt='footerIMG'/>
        <div className='row justify-content-center footer-content'>
          <div className='col-md-6 '>
            <div>
              <p>Designed and Devoloped By</p>
              <hr/>
              <div className='d-flex justify-content-between'>
              <a href="https://github.com/tprazniewski"><FaGithub /></a>
              <a href="https://pl.linkedin.com/in/tomasz-pra%C5%BCniewski-62a7711a1"><FaLinkedin /></a>
              <a href="https://www.facebook.com/TomaszPrazniewki"><FaFacebook /></a>
              <a href="https://www.w3schools.com"><FaMailBulk /></a>            

              </div>
              <hr/>
              <br/>
              <p> Tomasz Prazniewski</p>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Footer