
import './App.css';
import Home from './components/Home.jsx';
import Introducao from './components/Introducao.jsx';
import Tecnologia from './components/tecnologia.jsx';
function App() {
  return (
    <div className="App">
      <Home/>
      <Introducao></Introducao>
      <Tecnologia />
    </div>
  );
}

export default App;
