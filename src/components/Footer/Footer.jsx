import './Footer.css'
import NavLinks from '../NavLinks/NavLinks'

export default function Footer() {

  return (
    <section id='footer'>
        <div className="footer-box">
          <a href="#header"><h3 className='section-title'>Patrycja Ignatowicz</h3></a>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet numquam, nobis vero odit corrupti ab voluptates commodi qui non fugiat repudiandae facilis sit optio! Repellendus, sunt. Odio sunt a dolorem!</p>
          <NavLinks/>
        </div>
    </section> 
    
  )
}
