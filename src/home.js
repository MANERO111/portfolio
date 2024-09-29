import React, {useState ,  useEffect } from 'react'

function Homme() {
    var [chmsg, setchmsg] = useState("")
    useEffect(()=>{
        let msgs = "Web Full Stack Devlopper";
        let i = 0
        if (i < msgs.length) {
            setInterval(() => {
                setchmsg(msgs.substring(0, i))
                i++
            }, 100);
        }
    },[])
    return (
        <>
            <div className='nameprof' >
                <div className='namep'>
                    <h1>I'm AKIOUD AMJAD</h1>
                    <h2>{chmsg} <span>|</span></h2>
                    <a href='AKIOUD Amjad cv.pdf' target='_blank'>
                        <button className='downcv'>Downlowd cv</button>
                    </a>
                </div>
                <div className='profp'>
                    <img src='img/maneroPic1.jpeg' alt='profile' />
                    <div className='cercle c2' ></div>
                </div>
            </div>
        </>
    )
}

export default Homme
