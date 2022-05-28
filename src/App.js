import './App.css';
import ImageSlider from './components/Slider';
// https://www.npmjs.com/package/slick-carousel
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src="" className="App-logo" alt="em Manutenção" />
        <h1>Escolha sua Landind Page</h1>
      </header>
      <ImageSlider />
    </div>
  );
}

export default App;
