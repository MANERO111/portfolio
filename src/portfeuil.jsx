import { useEffect, useState } from 'react';
import About from './aboutme'
import Skills from './skills'
import Service from './service';
import Portfolio from './portf';
import Homme from './home'
import Contact from './contact';
import 'bootstrap/dist/css/bootstrap.min.css';
import './portfolio.css'

// https://usmanarif.netlify.app/dark#hero-section
// https://preview.themeforest.net/item/cvio-cv-resume-personal-portfolio-jekyll-theme/full_screen_preview/34060954
function App() {
    let [navclass, snavclass] = useState("")
    let [menuan, smenuan] = useState("")
    const Nav = () => {
        return (
            <nav className="nav">
                <div className='logo'>
                    <h1 className='amj-logo' >Amjad</h1>
                </div>
                <div onClick={hide} className={"menubtn " + menuan}><div></div></div>
                <div id='nav' className={"nav-a " + navclass}>
                    <a href='#h'>HOME</a>
                    <a href='#ab'>ABOUT</a>
                    <a href='#sk' >SKILLS</a>
                    <a href='#srv'>SERVICES</a>
                    <a href='#prf'>PORTFOLIO</a>
                    <a href='#cnt'>CONTACT</a>
                </div>
            </nav>
        )
    }
    const hide = () => {
        if (navclass === 'ii') {
            snavclass(navclass = "")
            smenuan(menuan = "afterclick")
        }
        else {
            snavclass("ii")
            smenuan("")
        }
    }
    useEffect(() => {
        const handlescreen = () => {
            if (window.screen.width < 900) {
                snavclass('ii')
            }
            else {
                snavclass("")
            }
        }
        window.addEventListener("resize", handlescreen)
    }, []);

    return (
        <>
            <div id='h' className="continer">
                <Nav />
                <div name="designes">
                    <div className='cercle c1'></div>
                    <div className='cercle cube1'></div>
                    <div className='cercle cube2'></div>
                    <div className='cube3'></div>
                </div>
                <Homme />
                <About />
                <Skills />
                <Service />
                <Portfolio />
                <Contact />
            </div>
        </>
        
    )
}

export default App;
