import React from 'react'

function portfolio() {
  return (
    <>
        <div id='prf' className='portfolio-logo' >
            <span className={window.scrollY > 3000 ? "toleft" : "i"}>PORT</span><span className={window.scrollY > 3000 ? "toright" : "i"}>FOLIO</span>
        </div>
        <div className='portfolio-container'>
            <h1>Comming Soon !....</h1>
        </div>
    </>
  )
}

export default portfolio
