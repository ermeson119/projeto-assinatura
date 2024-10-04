import './App.css';
import Imagagem from './img/Logo-SECAD.png';
import { Img, Header, Nav, Footer, P, A } from "./styles";
import Form from './components/Form.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';

function App() {
  return (
    <div className="App">
      <Header>
        <Img src={Imagagem}/>
        <Nav>
          <A href='#text-formulario'>Formulário</A>
          <A href='#tabela'>Registro do dia</A>
          <A href='#tabela'>Historico de Registro</A>
        </Nav>
      </Header>

      <Form />

      <Footer>
        <P>© Secretaria de Administração - SECAD 2024</P>
      </Footer>
    </div>
  );
}

export default App;
