import React from 'react'
import '../stylesheets/carousl.css'
import {FaPython, FaJava, FaJsSquare, FaReact} from 'react-icons/fa'
import {SiRubyonrails, SiMysql} from 'react-icons/si'
import {DiRuby, DiNodejs} from 'react-icons/di'

function Carouse() {
  return (
    <div>
        <div className='carousel-parent position-relative' style={{ backgroundImage: `url(./bg.svg)` }}> 
            <h1 className='position-absolute text-center top-0 start-0 end-0 mt-5'> Technologies </h1>
            <div className='gallery'>
                <span style={{'--i':1}}>
                    <FaReact color='cyan'/>
                </span>
                <span style={{'--i':2}}>
                    <DiRuby color='red'/>
                </span>
                <span style={{'--i':3}}>
                    <FaJava color='orange'/>
                </span>
                <span style={{'--i':4}}>
                    <SiRubyonrails color = 'purple'/>
                </span>
                <span style={{'--i':5}}>
                    <FaJsSquare color='yellow'/>
                </span>
                <span style={{'--i':6}}>
                    <FaPython color = 'blue'/>
                </span>
                <span style={{'--i':7}}>
                    <DiNodejs color='green'/>
                </span>
                <span style={{'--i':8}}>
                    <SiMysql/>
                </span>
            </div>
        </div>
    </div>
  )
}

export default Carouse