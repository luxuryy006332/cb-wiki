import './App.scss';
import Header from './components/Header/Header';
import NewsBlock from './components/NewsBlock/NewsBlock';
import pointerSvg from './img/pointer.svg';
import infoImg from './img/infoImg.jpg';
import Advantages from './components/Advantages/Advantages';
import vimal from './img/vimal.jpg';

function App() {
  return (
    <div>
      <div className="container">
        <Header items={['Магазин', 'Инструкции', 'О нас']} />

        <section>
          <div className="moreDetails"></div>
        </section>
        {/* <section>
          <div className="news">
            <div className="main__news">
              <div className='news__title'>
                <h1>Конкурс! “Квест-Хакатон”</h1>
                <div className='pointer'>
                  <a href="learnMore">
                    <span className='learnMore'>Подробнее</span>
                    <img src={pointerSvg} alt="pointer" />
                  </a>

                </div>
              </div>
            </div>

            <div className="secondary__news">

              <NewsBlock />
              <NewsBlock />
              <NewsBlock />
            </div>


          </div>
        </section>
      </div>




      <section className='about'>
        
        <div className="container">

          <div className="info">
            <div className="aboutCompany">
              <div>
                <h2>О компании </h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et tortor ut sem pretium luctus. Morbi feugiat tellus id vulputate mattis. Aenean consequat magna a efficitur tristique. Suspendisse mauris nibh, porttitor vitae dolor ut, molestie volutpat mi. Suspendisse. Suspendisse mauris nibh, porttitor vitae dolor ut</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et tortor ut sem pretium luctus. Morbi feugiat tellus id vulputate mattis. Aenean consequat magna a efficitur tristique. Suspendisse mauris nibh, porttitor vitae dolor ut, molestie volutpat mi. Suspendisse </p>
              </div>
            </div>


            <div className="info__img">
              <img src={infoImg} alt="infoImg" />

            </div>
          </div>

        </div>


      </section>


      <section>
        <div className="container">
          <div className="advantages">

            <Advantages quantity="2" info="Года на рынке" />
            <Advantages quantity="200" info="Сотрудников" />
            <Advantages quantity="8" info="Отделов" />
            <Advantages quantity="1000+" info="Учеников" />

          </div>
        </div>
      </section>
      <section>
        <div className="container">
          <div className="weDo">
            <div className="weDo__items">
              <h2>Чем мы занимаемся</h2>

              <div className="tripleInfo">

                <div className="weDo__info">
                  <h4>Lorem ipsum</h4>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et tortor ut sem pretium luctus. Morbi feugiat tellus id vulputate mattis. Aenean consequat magna a efficitur tristique. Suspendisse mauris nibh, porttitor vitae dolor ut.</p>
                </div>

                <div className="weDo__info">
                  <h4>Lorem ipsum</h4>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et tortor ut sem pretium luctus. Morbi feugiat tellus id vulputate mattis. Aenean consequat magna a efficitur tristique. Suspendisse mauris nibh, porttitor vitae dolor ut.</p>
                </div>

                <div className="weDo__info">
                  <h4>Lorem ipsum</h4>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et tortor ut sem pretium luctus. Morbi feugiat tellus id vulputate mattis. Aenean consequat magna a efficitur tristique. Suspendisse mauris nibh, porttitor vitae dolor ut.</p>
                </div>

              </div>

            </div>
            <div className="weDo__img">
              <img src={vimal} alt="vimal" />
            </div>
          </div>

        </div>
      </section> */}
      </div>
    </div>



  );
}

export default App;
