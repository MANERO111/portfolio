
const About = () => {
    return (
    <>
        <div id='ab' className='about' style={{ background: 'black' }}>
            <div className='pic'>
                <img src='img/mPic.jpg' alt='pic' />
            </div>

            <div  id='aboutme' name="aboutme">
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