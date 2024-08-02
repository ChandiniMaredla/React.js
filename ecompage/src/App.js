import logo from './logo.svg';
import './App.css';
import Main from './Components/main.js'
import Images from './Components/images.js';
import Base from './Components/lower.js';
import Display from './Components/display.js';
import Footer from './Components/footer.js';
function App() {
  return (
    <div>
    <div className="App">
      <div>
     <Main head='Lets explore unique clothes' img='happy.webp' txt='image'></Main>
     
    <Images img1='amazon.png' img2='amazon.png' img3='amazon.png' img4='amazon.png' img5='amazon.png' img6='amazon.png'></Images>
    <Base pic1='add.jpg' pic2='istock.jpg' pic3='online.jpg'></Base></div>
    <div>
      <Display img1='shop.png'></Display>
    </div>
    
    </div>
    <Footer/></div>
  );
}

export default App;
