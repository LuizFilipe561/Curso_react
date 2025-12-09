import './App.css'
import HelloWorld from './components/HelloWorld.jsx'
import Frase from './components/Frase.jsx'
import SayMyName from './components/SayMyName.jsx'
import Pessoa from './components/Pessoa.jsx'


function App() {
  return (
  <div className='App'>
    <Frase />
    <HelloWorld />
    <SayMyName nome='Neymar' />
    <Pessoa nome='Neymar' idade ='20' profissao='best play soccer' foto='https//via.placeholder.com/150'/>
  </div>
  )
}


export default App
