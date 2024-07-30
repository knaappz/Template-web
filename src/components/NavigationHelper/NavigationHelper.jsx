import { useNavigate } from 'react-router-dom';

export const NavigationHelper = () => {
  const navigate = useNavigate();

  const handleHelsinki = () => {
    navigate('/helsinki');
  };

  const handleZiola = () => {
    navigate('/ziola');
  };

  return {
    handleHelsinki,
    handleZiola,
  };
};
