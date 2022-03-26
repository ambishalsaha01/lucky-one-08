import logo from './logo.svg';
import './App.css';
import Shop from './components/Shop/Shop';
import Header from './components/Header/Header';
import Qustion from './components/Qustion/Qustion';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Shop></Shop>
      <Qustion></Qustion>
    </div>
  );
}

export default App;
