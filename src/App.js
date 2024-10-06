import './App.css';
import Form from './components/Form.jsx';
import Footer from './components/Footer.jsx';
import Header from './components/Header.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';

function App() {
  return (
    <div className="App">
      <Header/>
      <Form />
      <Footer/>
    </div>
  );
}

export default App;
