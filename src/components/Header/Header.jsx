import './Header.css'
import NavLinks from '../NavLinks/NavLinks'

export default function Header() {

  return (
    <section id='header'>
        <div className='color-line'></div>

      <div className='header-box'>
        <h1>WEBNAME</h1>
        <NavLinks/>
      </div>
    </section>
    
  )
}
