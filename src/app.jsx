import { useState } from 'preact/hooks'
import preactLogo from './assets/preact.svg'
import viteLogo from '/vite.svg'
import './app.css'

export function App() {
  const [count, setCount] = useState(0)

  return (
    <main>

    <section className='inner-section-container'>
    <section className='about-me-container'>
        <div className='main-photo-container'>
          <div className='photo-container'>
              <img src="https://avatars.githubusercontent.com/u/62045105?v=4" alt="" className='photo' />
          </div>
        </div>
        <div className='my-name-container'>
          <p className='my-name'>
            Santiago Jama
          </p>
        </div>
      </section>


      <section className='description-container'>
        <p className='description'>
            Hello, I'm Santiago. I'm  a software developer.
        </p>
        <p className='find-me'>
           You can find me on: 
        </p>

        <div className='social-main-container'>
          <div className='social-container'>
            <a href="https://www.linkedin.com/in/santiago-jama/">
<img  className= 'social' src='data:image/png;base64,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'/> 

            </a>
          </div>
          <div className='social-container'><a href="https://github.com/SantiagoJama"><img className= 'social' src='https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/GitHub_Invertocat_Logo.svg/800px-GitHub_Invertocat_Logo.svg.png'></img></a></div>
        </div>
      </section>
      <section className='myskills-container'>
        <h1 className='main-title'>My skills:</h1>
        <br />
        <div className='skills-main-container'>
          <div className='skills-container'><img className='skill' src='https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/768px-JavaScript-logo.png'></img></div>
          <div className='skills-container'><img className='skill' src="https://w7.pngwing.com/pngs/915/519/png-transparent-typescript-hd-logo.png" alt="" /></div>
          <div className='skills-container'><img className='skill' src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png" alt="" /></div>
          <div className='skills-container'><img className='skill' src="https://miro.medium.com/v2/resize:fit:374/1*Yhe1R94CIotr2se7Wf6TQQ.png" alt="" /></div>
          <div className='skills-container'><img className='skill' src="data:image/png;base64,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" alt="" /></div>
          <div className='skills-container'><img className='skill' src='https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/2048px-Angular_full_color_logo.svg.png'></img></div>
        </div>
      </section>
      <footer>
        <p>
          Disclaimer: <br />
          This site is not responsive
        </p>

      </footer>
    </section>
      
    </main>
  )
}
