import { useEffect, useState } from "react"

const About = () => {
    let [aboutclass,saboutclass]=useState("i")
    useEffect(()=>{
        function handle(){
            if( window.scrollY > 400){
                saboutclass("aboutme animat")
            }
            else{
                saboutclass("i")
            }
        }
        window.addEventListener("scroll",handle)
    },[])
    return (
    <>
        <div id='ab' className='about' style={{ background: 'black' }}>
            <div className='pic'>
                <img src='img/maneroPic.jpeg' alt='pic' />
            </div>

            <div className={aboutclass} id='aboutme' name="aboutme">
                <div>
                    <h1>About me</h1>
                    <h3 className='description-aboutme'>
                        Hi, I'm Amjad, a Web Developer in Morocco.<br />
                        I craft awesome website with different languages <br /> turning concepts into standout online experiences.
                    </h3>
                    <div id='sk' className='social'>
                        <a target="_blank" href='https://facebook.com/manero.gfe.7'> </a>
                        <a href='mailto:akioudamjadfone2@gmail.com'> </a>
                        <a target="_blank" href='https://linkedin.com/in/akioud-amjad-417197297' > </a>
                        <a target="_blank" href='https://github.com/MANERO111' > </a>
                    </div>
                </div>
            </div>
        </div>
    </>
    )
}
export default About;