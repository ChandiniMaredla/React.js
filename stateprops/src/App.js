import logo from './logo.svg';
import './App.css';
import React from './'
import State from './Components/state';
import Counter from './Components/counter';
import User from './Components/alldatatypes';
import Bgchange from './Components/bgchange';
import Onclick from './Components/oonclick';
import Inputfun from './Components/input';
import Props from './Components/props';
import Count from './Components/count';
import Islogged from './Components/isloggedin';
function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
   <div>  <State/></div> 
   <div><Count val='decrement'></Count></div>
  <div><Counter/></div>
  <div><User/></div>
  <div><Bgchange/></div>
  <div><Onclick/></div>
  <div><Inputfun/></div>
  <div className='props'><Props head='Shoes' img='shoes.jpeg' txt='shoes'/>
  <Props head='Watch' img='Untitled.jpeg' txt='watches'/>
  </div>
<Islogged/>
    </div>
  );
}


export default App;
