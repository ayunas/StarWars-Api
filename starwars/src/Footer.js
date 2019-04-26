import React from 'react'
import lambdaLogo from './lambda-logo.png';
import redux from './Redux.png';

export default function Footer() {
  return (
    <footer>
       <figure>
            <div>
                <figcaption>Built with: </figcaption>
                <img src={redux} />
            </div>

            <div>
                <figcaption>Project of: </figcaption>
                <a href='http://www.lambdaschool.com' target="_blank"> <img src={lambdaLogo} /></a>
            </div>
       </figure>
        
        
      
    </footer>
  )
}
