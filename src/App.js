import logo from './logo.svg';
import './App.css';
import Title from './components/Title/Title';

function App() {
  return (
    <div className="App">
      <Title />
      <img src ={logo} width={100} height={100}/>
    </div>
  );
}

export default App;
