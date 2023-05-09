import './App.scss';
import Header from './components/Header/Header';
import NewsBlock from './components/NewsBlock/NewsBlock';
import pointerSvg from './img/pointer.svg';
import infoImg from './img/infoImg.jpg';

function App() {
  return (
    <div>
      <div className="container">
        <Header />
        <section>
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

      <section>
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
      </section>
      <section>
        <div className="container">
          <div className="advantages"></div>
        </div>
      </section>
    </div>



  );
}

export default App;
