import './Buttons.css'
import { useNavigate } from 'react-router-dom';

export default function BackBTN() {
  const navigate = useNavigate();
  const handleBoxClick = () => {
      navigate('/');
  };

  return (
    <section className='button-width'>
        <button className='backBTN' onClick={handleBoxClick}>Wstecz</button> 
    </section>
)
}