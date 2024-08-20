import Header from './components/Header';
import Footer from './components/Footer';
import InformacoesPessoais from './components/InformacoesPessoais';
import Contato from './components/Contato';
import Logo from './assets/vite.svg';
import {Outlet} from 'react-router-dom';


function App() {

  return (
    <>
    <Header/>
    <Outlet/>
    <div className='mainInfo'>
    </div>
    <Footer/>
    </>
  )
}

export default App