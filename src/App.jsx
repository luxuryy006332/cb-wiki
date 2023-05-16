import './App.scss';
import Header from './components/Header/Header';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Ribbon from './components/Ribbon/Ribbon';
import Store from './components/Store/Store';
import Instruction from './components/Instruction/Instruction';
import AboutWe from './components/AboutWe/AboutWe';

function App() {
  return (
    <div>
      <BrowserRouter>
      <div className="container">
        <Header items={['Лента', 'Магазин', 'Инструкции', 'О нас']} />

        <Routes>
          <Route path="/ribbon" element={<Ribbon />} />
          <Route path="/store" element={<Store />} />
          <Route path="/instruction" element={<Instruction />} />
          <Route path="/aboutWe" element={<AboutWe />} />
        </Routes>
        
      </div>

      </BrowserRouter>
    </div>



  );
}

export default App;
