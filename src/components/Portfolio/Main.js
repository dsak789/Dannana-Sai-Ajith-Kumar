import React from 'react'
import '../css/Main.css'
import intropic from '../profilepic.jpg'

const Main = () => {
  return (
    <div className='profile-main'>
        <div className='intro'>
            <div className='welcome-note'>
               <h2>I'm<h1> Dannana Sai Ajith Kumar</h1></h2> 
                <p>Im a   
                    Developer
                    Freelancer
                    Coder
                    Hacker 
                    Gamer
                    Creator
                    Desinger
                </p>
                <div className='welcome-button-div'>
                    <button>Resume</button>
                    <button> Contact</button>
                </div>
            </div>
            <div className='intro-profile-pic'>
                <img src={intropic} height={200} width={200}/>
            </div>
        </div>
        <div className='projects'>
            <div className='project1'>
                    <h3>Project1</h3>
                <div className='thumbnail'>
                    <img src={intropic}  height={300} width={200}/>
                    <h4 className='description'>
                        <button >Live</button>
                        <button >Git</button>
                    </h4>
                </div>
            </div>
            
           

        </div>
    </div>
  )
}

export default Main