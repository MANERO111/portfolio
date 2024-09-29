import React from 'react'
import { useState,useEffect } from 'react'
function Skills() {
    useEffect(()=>{
        function handle(){
            if( window.scrollY > 880){
            }
        }
        window.addEventListener("scroll",handle)
    },[])
  return (
    <>
                <h1 id='sk' className='skills-title'>MY SKILLS</h1>
                <div className='myskills'>
                    <div>
                        <div id='skill'>
                            <img src="img/html.png" alt='' className='html' />
                            <h4>HTML 5</h4>
                        </div>
                        <div id='skill'>
                            <img src="img/css.png" alt='' className='css' />
                            <h4> CSS 3</h4>
                        </div>
                        <div id='skill'>
                            <img src="img/JavaScript.png" alt='' className='js' />
                            <h4>JavaScript</h4>
                        </div>
                    </div>
                    <div>
                        <div id='skill'>
                            <img src='img/bootsrap.png' alt='' className='bootstrap' />
                            <h4>Bootstrap</h4>
                        </div>
                        <div id='skill'>
                            <img src='img/React.png' alt='' className='react' />
                            <h4>React Js</h4>
                        </div>
                        <div id='skill'>
                            <img src='img/laaravel.png' alt='' className='laravel' />
                            <h4>Laravel</h4>
                        </div>

                    </div>
                </div> 
    </>
  )
}

export default Skills
