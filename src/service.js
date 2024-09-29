import React from 'react'

function Service() {
  return (
    <>
        <div id='srv'  className='service-logo'>
            <h1 className={window.scrollY > 1600 ? "animat" : "i"}>SERVICES</h1>
        </div>
        <div style={{fontWeight:"normal"}} className='services'>
            <div className='p1'>
                <div className={window.scrollY > 2000 ? "card toright" : "card i"} id='crd'>
                    <img src='img/frontend.png' className='card-img-top' alt='service-pic' />
                    <div className='card-body'>
                        <h3 className='card-title'>Front-end Development</h3>
                        <p className='card-text'>Creates visually appealing, user-friendly interfaces with HTML, CSS, Bootstrap and JavaScript/React js.</p>
                    </div>
                </div>
                <div className={window.scrollY > 2000 ? "card toright" : "card i"} id='crd'>
                    <img src='img/backend.jpg' className='card-img-top' alt='service-pic' />
                    <div className='card-body'>
                        <h3 className='card-title'>Back-end Development</h3>
                        <p className='card-text'>Develops scalable and secure server-side applications  Specialized in Node.js and Laravel</p>
                    </div>
                </div>
            </div>
            <div className='p1'>
                <div className={window.scrollY > 2000 ? "card toleft" : "card i"} id='crd'>
                    <img src='img/responsive.jpg' className='card-img-top' alt='service-pic' />
                    <div className='card-body'>
                        <h3 className='card-title'>Responsive Design</h3>
                        <p className='card-text'>Ensures cross-browser compatibility and mobile responsiveness for a consistent user experience.</p>
                    </div>
                </div>
                <div className={window.scrollY > 2000 ? "card toleft" : "card i"} id='crd'>
                    <img src='img/fullstack.jpg' className='card-img-top' alt='service-pic' />
                    <div className='card-body'>
                        <h3 className='card-title'>Full Stack Web Development</h3>
                        <p className='card-text'>Expert in building dynamic responsive web applications using React,Laravel,and Node.js.</p>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Service
