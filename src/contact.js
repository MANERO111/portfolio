import React from 'react'
import MapContainer from './map';
function Contact() {
    return (
        <>
            <div id='cnt' className='contact-logo'>
                <h1 className={window.scrollY > 4000 ? "animat" : "i"}>CONTACT</h1>
            </div>
            <div className='contact-container'>
                <h2>Feel free to Contact me <br />I will get back to you as soon as possible</h2>
                <div className='contact-container-2'>
                    <div className='form'>
                        <h1>Get In Touch</h1>
                        <input className={window.scrollY > 4150 ? "toleft" : "i"} placeholder='Enter your Name' ></input><br />
                        <input className={window.scrollY > 4150 ? "toright" : "i"} placeholder='Enter your Email'></input><br />
                        <input className={window.scrollY > 4150 ? "toleft" : "i"} placeholder='Subject'></input><br />
                        <textarea className={window.scrollY > 4150 ? "toright" : "i"} placeholder='Enter your message'></textarea>
                        <button>Send Message</button>
                    </div>
                    <div className='map'>
                        <MapContainer className='MapContainer' />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Contact
