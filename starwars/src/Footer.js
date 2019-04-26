import React from 'react'
import lambdaLogo from './lambda-logo.png';
import redux from './Redux.png';

export default function Footer() {
  return (
    <footer>
       <figure>
            <div>
                <p>Built with: </p>
                <img src={redux} />
            </div>

            <div>
                <p>Project of: </p>
                <a href='http://www.lambdaschool.com' target="_blank"> <img className='lambda' src={lambdaLogo} /></a>
            </div>
       </figure>
        
        
      
    </footer>
  )
}
