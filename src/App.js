import './css/App.css';
import ImageSlider from './components/Slider';
// https://www.npmjs.com/package/slick-carousel
function App() {
  return (
    <div className="Container mt-5 carousel">
      <h1 className='slider-title'>Escolha sua Landind Page</h1>
      <ImageSlider />
    </div>
  );
}

export default App;
