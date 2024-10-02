import './App.css';
import Imgagem from './img/Logo-SECAD.svg';
import {Img} from "./styles"
import Form from './components/Form';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'


function App() {
  return (
    <div className="App">
      <Img src={Imgagem} alt='logo-imagem' ></Img>
      < Form/>
      
    </div>
  );
}

export default App;
