import './Portfolio.css';
import { useNavigate } from 'react-router-dom';

export default function Portfolio() {
    const navigate = useNavigate();
    const handleHelsinki = () => {
        navigate('/helsinki');
    };
    const handleZiola = () => {
        navigate('/ziola');
    };

    return (
      <section id='portfolio'>
          <div className="projects">
          <h2 className="section-title">Moje projekty</h2>

                <section className='box-row'>
                    <div to='/helsinki' className="box" onClick={handleHelsinki}>
                        <img src="https://cdn.discordapp.com/attachments/1198369639051305064/1210194853632278588/Image14_000.png?ex=66a82d89&is=66a6dc09&hm=0fb75db28064e3877bc0839e1fd5ff6c186a3ebdb23676e09c9c35c33e7820f3&" alt="" />
                        <h3>Helsinki</h3>
                    </div>
                    <div className="box" onClick={handleZiola}>
                        <img src="https://cdn.discordapp.com/attachments/1198369639051305064/1210194853632278588/Image14_000.png?ex=66a82d89&is=66a6dc09&hm=0fb75db28064e3877bc0839e1fd5ff6c186a3ebdb23676e09c9c35c33e7820f3&" alt="" />
                        <h3>Ziola</h3>
                    </div>
                    <div className="box">
                        <img src="https://cdn.discordapp.com/attachments/1198369639051305064/1210194853632278588/Image14_000.png?ex=66a82d89&is=66a6dc09&hm=0fb75db28064e3877bc0839e1fd5ff6c186a3ebdb23676e09c9c35c33e7820f3&" alt="" />
                        <h3>Nazwa projektu 3</h3>
                    
                    </div>
                    <div className="box">
                        <img src="https://cdn.discordapp.com/attachments/1198369639051305064/1210194853632278588/Image14_000.png?ex=66a82d89&is=66a6dc09&hm=0fb75db28064e3877bc0839e1fd5ff6c186a3ebdb23676e09c9c35c33e7820f3&" alt="" />
                        <h3>Nazwa projektu 4</h3>
                    </div>
                </section>
          </div>
      </section> 
  )
  }