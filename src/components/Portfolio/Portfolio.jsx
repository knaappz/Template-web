import './Portfolio.css';
import { NavigationHelper } from '../NavigationHelper/NavigationHelper';

export default function Portfolio() {
    const { handleHelsinki, handleZiola } = NavigationHelper();

    const handleError = (event) => {
        event.target.src = '../../../assets/fallback.jpg'; // Path to your fallback image
    };

    return (
      <section id='portfolio'>
          <div className="projects">
          <h2 className="section-title">Moje projekty</h2>

                <section className='box-row'>
                    <div to='/helsinki' className="box" onClick={handleHelsinki}>
                        <img src="../../../assets/helsinki/model1.jpg" alt="" />
                        <h3>Helsinki</h3>
                    </div>
                    <div className="box" onClick={handleZiola}>
                        <img src="obraz" />
                        <h3>Ziola</h3>
                    </div>
                    <div className="box">
                    <img src="obraz"  />
                    <h3>Nazwa projektu 3</h3>
                    
                    </div>
                    <div className="box">
                    <img src="obraz"  />
                    <h3>Nazwa projektu 4</h3>
                    </div>
                </section>
          </div>
      </section> 
  )
  }