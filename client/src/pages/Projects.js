import React from 'react'
import Header from '../components/Header'
import '../stylesheets/projects.css'
import {MdOutlineLaptopChromebook} from 'react-icons/md'

function Projects() {
  return (
    <div>
      <Header/>
      <div className='container projects-intro'>
        <div className='row flex-with-center mt-5'>
          <div className='col-md-6 n-box1 p-3' >
            <div>
              <h1> Projects</h1>
              <p>"No Matter What People Tell You, Words And Ideas Can Change The World." – Robin Williams</p>
              <button className='primary-button'> Get Started</button>
            </div>
          </div>
          <div className='col-md-6 position-relative' >
            <img src='./blob.svg' alt='imaggeeee' height="600" className="w-400"/>
            <MdOutlineLaptopChromebook color='white' size='200' className='position-absolute top-50 start-50 translate-middle'/>
          </div>
        </div>
      </div>
      <div className='container projects-list'>
        <h3> Take a look of my projects</h3>
        <hr/>
      </div>
    </div>

  )
}

export default Projects