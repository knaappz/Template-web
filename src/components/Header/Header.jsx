import './Header.css'
import NavLinks from '../NavLinks/NavLinks'

export default function Header() {

  return (
    <>
      <div className='color-line'></div>
      <section id='header'>
      <div className='header-box'>
        <h3>Patrycja ignatowicz</h3>
        <NavLinks/>
      </div>
    </section>
    </>
    
    
  )
}
