import './Buttons.css'
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


export default function BackBTN() {
  const navigate = useNavigate();
  const handleBoxClick = () => {
      navigate('/');
  };

  return (
    <section className='button-width'>
        <button className='backBTN' onClick={handleBoxClick}>
            <FontAwesomeIcon icon="fa-solid fa-chevron-left" />
            <h3>Wstecz</h3>
        </button> 
    </section>
)
}