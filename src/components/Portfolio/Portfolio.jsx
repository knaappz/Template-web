import './Portfolio.css';
import { NavigationHelper } from '../NavigationHelper/NavigationHelper';

export default function Portfolio() {
    const { handleHelsinki, handleZiola } = NavigationHelper();

    return (
      <section id='portfolio'>
          <div className="projects">
          <h2 className="section-title">Moje projekty</h2>

                <section className='box-row'>
                    <div className="box-pair">
                        <div to='/helsinki' className="box" onClick={handleHelsinki}>
                            <img src="../../../assets/helsinki/model1.jpg" alt="" />
                            <h3>Helsinki</h3>
                        </div>
                        <div className="box" onClick={handleZiola}>
                            <h3>Ziola</h3>
                        </div>
                    </div>

                    <div className="box-pair">
                        <div className="box">
                            <h3>Nazwa projektu 3</h3>
                        
                        </div>
                        <div className="box">
                            <h3>Nazwa projektu 4</h3>
                        </div>
                    </div>
                </section>
          </div>
      </section> 
  )
  }