import React from 'react'

function portfolio() {
  return (
    <>
        <div id='prf' className='portfolio-logo' >
            <span>PORTFOLIO</span>
        </div>
        <div className='portfolio-container'>
          <div>
                <a className="card" id='crd' href='https://movie-land-eight-jade.vercel.app/'>
                    <img src='img/movie_project.png' className='projects' alt='service-pic' />
                    <div className='card-body w-100 text-center'>
                      <h2>Movie website</h2>
                      <p>movie web site where you can search a movie or added to watched list or to watch list</p>
                    </div>
                </a>
                <a className="card" id='crd' href='https://translation-game-ashen.vercel.app/'>
                    <img src='img/traduction_project.png' className='projects' alt='service-pic' />
                    <div className='card-body w-100 text-center'>
                      <h2> Translation Game </h2>
                      <p>Interactive translation game to improve your vocabulary.</p>
                    </div>
                </a>
          </div>
          <div>
                <a className="card" id='crd' href='https://github.com/MANERO111/CRUDS'>
                    <img src='img/cruds_project.png' className='projects' alt='service-pic' />
                    <div className='card-body w-100 text-center'>
                      <h2>CRUDS</h2>
                      <p>CRUDS (Create, Read, Update, Delete , Search) represents the fundamental operations for managing data in applications</p>
                    </div>
                </a>
                <a className="card" id='crd' href='https://mdthrift-store.vercel.app/'>
                    <img src='img/mdThrift.png' className='projects' alt='service-pic' />
                    <div className='card-body w-100 text-center'>
                      <h2>Clothing Store</h2>
                      <p>online platform for buying and selling second-hand items at affordable prices.</p>
                    </div>
                </a>
          </div>

        </div>
    </>
  )
}

export default portfolio
