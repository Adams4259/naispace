import logo from './logo.svg';
import './App.css';
import Title from './components/Title/Title';
import NaPOPOSList from './components/NapopsList.js/NapopsLIst';
import POPOSSpace from './POPOSSpace/POPOSSpace';

function App() {
  return (
    <div className="App">
      <Title />
      <img src ={logo} width={100} height={100}/>
      <NaPOPOSList />
      <POPOSSpace />
    </div>
  );
}

export default App;
