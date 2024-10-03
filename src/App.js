import './App.css';
import Imgagem from './img/Logo-SECAD.svg';
import { Img, Footer, P } from "./styles"
import Form from './components/Form.jsx';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'



function App() {
  return (
    <div className="App">
      <Img src={Imgagem} alt='logo-imagem' />
      < Form />
      <Footer>
        <P>© Sercretaria de Administração - SECAD 2024</P>
      </Footer>

    </div>
  );
}

export default App;
