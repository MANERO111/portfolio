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

var navcontrole = { H: "", A: "", sk: "", s: "", p: "", c: "" }
function App() {
    let [navcolor, setnavcolor] = useState(navcontrole)
    let [navclass, snavclass] = useState("")
    let [menuan, smenuan] = useState("")
    const Nav = () => {
        return (
            <nav className="nav">
                <div className='logo'>
                    <img src='img/maneroLogo.png' alt='maneroLogo' />
                </div>
                <div onClick={hide} className={"menubtn " + menuan}><div></div></div>
                <div id='nav' className={"nav-a " + navclass}>
                    <a href='#h' className={navcolor.H}>HOME</a>
                    <a href='#ab' className={navcolor.A}>ABOUT</a>
                    <a href='#sk' className={navcolor.sk}>SKILLS</a>
                    <a href='#srv' className={navcolor.s}>SERVICES</a>
                    <a href='#prf' className={navcolor.p}>PORTFOLIO</a>
                    <a href='#cnt' className={navcolor.c}>CONTACT</a>
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
            if (window.screen.width < 800) {
                snavclass('ii')
            }
            else {
                snavclass("")
            }
        }
        window.addEventListener("resize", handlescreen)
    }, []);
    useEffect(() => {
        setnavcolor((prev) => ({ ...prev, H: 'curp' }));
        const handleScroll = () => {
            if (window.scrollY > 400) {
                setnavcolor(navcontrole)
                setnavcolor((p) => ({ ...p, A: 'curp' }));
                if (window.scrollY > 880) {
                    setnavcolor(navcontrole)
                    setnavcolor((p) => ({ ...p, sk: 'curp' }));
                    if (window.scrollY > 1600) {
                        setnavcolor(navcontrole)
                        setnavcolor((p) => ({ ...p, s: 'curp' }));
                        if (window.scrollY > 3000) {
                            setnavcolor(navcontrole)
                            setnavcolor((p) => ({ ...p, p: "curp" }))
                            if (window.scrollY > 4000) {
                                setnavcolor(navcontrole)
                                setnavcolor((p) => ({ ...p, c: "curp" }))
                            }
                        }
                    }
                }
            } else {
                setnavcolor(navcontrole)
                setnavcolor((prev) => ({ ...prev, H: 'curp' }));
            }
        };
        window.addEventListener('scroll', handleScroll);
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
                    <div id='cube4'></div>
                    <div id='cube5'></div>
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
