
import './App.css';
import Footer from './components/Footer.jsx';
import Home from './components/Home.jsx';
import Introducao from './components/Introducao.jsx';
import Projetos from './components/Projetos.jsx';
import Tecnologia from './components/tecnologia.jsx';
function App() {
  return (
    <div className="App">
      <Home/>
      <Introducao/>
      <Tecnologia />
      <Projetos/>
      <Footer/>
    </div>
  );
}

export default App;
