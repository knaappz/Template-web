import './Projects.css'
import { useEffect } from 'react';
import ProjectHeader from './ProjectHeader';

export default function Helsinki() {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
  <>
    <div className='color-line'></div>
    <section id='projects' className="fade-in">
      <ProjectHeader projectName="Helsinki"/>

      <div className="helsinki-desc">
        <img src="../../../assets/helsinki/model1.jpg" alt="" />
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
          Modi eius voluptates eaque dolorum itaque tempora quod, laboriosam a quae nemo corporis accusantium fuga minima iusto quia? 
          Voluptates eligendi nulla perferendis!Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
          Modi eius voluptates eaque dolorum itaque tempora quod, laboriosam a quae nemo corporis accusantium fuga minima iusto quia? 
          Voluptates eligendi nulla perferendis!Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
          Modi eius voluptates eaque dolorum itaque tempora quod, laboriosam a quae nemo corporis accusantium fuga minima iusto quia? 
          Voluptates eligendi nulla perferendis!Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
          Modi eius voluptates eaque dolorum itaque tempora quod, laboriosam a quae nemo corporis accusantium fuga minima iusto quia? 
          Voluptates eligendi nulla perferendis!Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
          Modi eius voluptates eaque dolorum itaque tempora quod, laboriosam a quae nemo corporis accusantium fuga minima iusto quia? 
          Voluptates eligendi nulla perferendis!
        </p>

      </div>
      <div className="helsinki-desc">
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
          Modi eius voluptates eaque dolorum itaque tempora quod, laboriosam a quae nemo corporis accusantium fuga minima iusto quia? 
          Voluptates eligendi nulla perferendis!Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
          Modi eius voluptates eaque dolorum itaque tempora quod, laboriosam a quae nemo corporis accusantium fuga minima iusto quia? 
          Voluptates eligendi nulla perferendis!Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
          Modi eius voluptates eaque dolorum itaque tempora quod, laboriosam a quae nemo corporis accusantium fuga minima iusto quia? 
          Voluptates eligendi nulla perferendis!Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
          Modi eius voluptates eaque dolorum itaque tempora quod, laboriosam a quae nemo corporis accusantium fuga minima iusto quia? 
          Voluptates eligendi nulla perferendis!Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
          Modi eius voluptates eaque dolorum itaque tempora quod, laboriosam a quae nemo corporis accusantium fuga minima iusto quia? 
          Voluptates eligendi nulla perferendis!
        </p>

        <img className='smaller' src="../../../assets/helsinki/model2.jpg" alt="" />


      </div>

      <div className="helsinki-desc">
      <img className='smaller' src="../../../assets/helsinki/model3.jpg" alt="" />

        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
          Modi eius voluptates eaque dolorum itaque tempora quod, laboriosam a quae nemo corporis accusantium fuga minima iusto quia? 
          Voluptates eligendi nulla perferendis!Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
          Modi eius voluptates eaque dolorum itaque tempora quod, laboriosam a quae nemo corporis accusantium fuga minima iusto quia? 
          Voluptates eligendi nulla perferendis!Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
          Modi eius voluptates eaque dolorum itaque tempora quod, laboriosam a quae nemo corporis accusantium fuga minima iusto quia? 
          Voluptates eligendi nulla perferendis!Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
          Modi eius voluptates eaque dolorum itaque tempora quod, laboriosam a quae nemo corporis accusantium fuga minima iusto quia? 
          Voluptates eligendi nulla perferendis!Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
          Modi eius voluptates eaque dolorum itaque tempora quod, laboriosam a quae nemo corporis accusantium fuga minima iusto quia? 
          Voluptates eligendi nulla perferendis!
        </p>



      </div>

      <div className="separator"></div>
    </section>
  </>
)
}