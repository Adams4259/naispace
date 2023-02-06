import logo from './logo.svg';
import './App.css';
import Title from './components/Title/Title';
import POPOSList from './components/POPOSList/POPOSList';
import POPOSSpace from './components/POPOSSpace/POPOSSpace';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Title />
      <img src ={logo} width={100} height={100}/>
      <POPOSList />
      <POPOSSpace />
      <Footer />
    </div>
  );
}

export default App;
