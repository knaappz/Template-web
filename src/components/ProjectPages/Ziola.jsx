import './Projects.css'
import { useEffect } from 'react';
import ProjectHeader from './ProjectHeader';

export default function Ziola() {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
  <>
    <div className='color-line'></div>
    <section id='projects' className="fade-in">
    <ProjectHeader projectName={"Zioła"}/>

    <div className="helsinki-desc">
        <img src="https://centinal.kr/wp-content/uploads/2023/03/banner-1-1.jpg" alt="" />
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

        <img src="https://centinal.kr/wp-content/uploads/2023/03/banner-1-1.jpg" alt="" />


      </div>

      <div className="helsinki-desc">
      <img src="https://centinal.kr/wp-content/uploads/2023/03/banner-1-1.jpg" alt="" />

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