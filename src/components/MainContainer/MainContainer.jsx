import './MainContainer.css'
import About from './About'
import Contact from './Contact'
import Portfolio from '../Portfolio/Portfolio'

export default function MainContainer() {

  return (
  <section id='main-container'>
    <About/>
    <Portfolio/>
    <Contact/> 
  </section>  
)
}