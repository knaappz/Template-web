import './Header.css'
import NavLinks from '../Header/NavLinks/NavLinks'

export default function Header() {

  return (
    <>
      <div className='color-line'></div>
      <section id='header'>
      <div className='header-box'>
        <a href='/'><h3>Patrycja Ignatowicz</h3></a>
        <NavLinks/>
      </div>
    </section>
    </>
    
    
  )
}
