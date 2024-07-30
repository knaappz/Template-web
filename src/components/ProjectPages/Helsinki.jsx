import './Projects.css'
import { useNavigate } from 'react-router-dom';

export default function Helsinki() {
  const navigate = useNavigate();
  const handleBoxClick = () => {
      navigate('/');
  };

  return (
  <section id='main-container'>
    <h3 onClick={handleBoxClick} >Main</h3>
    <h1>Helsinki</h1>

  </section>  
)
}