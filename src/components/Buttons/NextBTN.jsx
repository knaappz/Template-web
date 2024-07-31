import './Buttons.css';
import { useNavigate, useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


export default function NextBTN() {
  const navigate = useNavigate();
  const location = useLocation();

  const handleNextClick = () => {
    if (location.pathname === '/helsinki') {
      navigate('/ziola');
    } else if (location.pathname === '/ziola') {
      navigate('/helsinki');
    } else {
      navigate('/helsinki'); // Default navigation
    }
  };

  return (
    <section className='button-width'>
      <button className='backBTN' onClick={handleNextClick}>
        <h3>nastepny </h3>
        <FontAwesomeIcon icon="chevron-right" />
        </button> 
    </section>
  );
}
