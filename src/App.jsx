import Header from './components/Header'
import Footer from './components/Footer'
import InformacoesPessoais from './components/InformacoesPessoais'
import Contato from './components/Contato'


function App() {

  return (
    <>
    <Header/>
    <div className='mainInfo'>
    <InformacoesPessoais/>
    <Contato/>
    </div>
    <Footer/>
    </>
  )
}

export default App