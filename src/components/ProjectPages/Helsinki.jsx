import './Projects.css'
import BackBTN from '../Buttons/BackBTN'
import NextBTN from '../Buttons/NextBTN'
import Footer from '../Footer/Footer'
import { useEffect } from 'react';

export default function Helsinki() {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
  <>
    <div className='color-line'></div>
    <section id='projects'>
      <div className='project-header'>
        <BackBTN/>
        <h1>Helsinki</h1>
        <NextBTN/>

      </div>

      <div className="helsinki-desc">
        <img src="https://static.travelgay.com/media/67375/helsinki-cathedral-4189824-1920-e1598282435396.jpg" alt="" />
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

        <img className='smaller' src="https://static.travelgay.com/media/67375/helsinki-cathedral-4189824-1920-e1598282435396.jpg" alt="" />


      </div>

      <div className="helsinki-desc">
      <img className='smaller' src="https://static.travelgay.com/media/67375/helsinki-cathedral-4189824-1920-e1598282435396.jpg" alt="" />

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


    </section>
    <Footer/>  
  </>
)
}