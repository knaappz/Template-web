import './MainContainer.css'
import About from './About'
import Portfolio from './Portfolio'
import Contact from './Contact'

export default function MainContainer() {

  return (
  <section id='main-container'>
    <Portfolio/>
    <About/> 
    <Contact/> 
  </section>  
)
}