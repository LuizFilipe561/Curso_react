import './App.css'
import HelloWorld from './components/HelloWorld.jsx/'
import Frase from './components/Frase.jsx/'
import SayMyName from './components/SayMyName.jsx/'
import Pessoa from './components/Pessoa.jsx/'
import List from './components/List.jsx/'
import Evento from './components/Evento.jsx/'
import Form from './components/Form.jsx/'

function App() {
  return (
    <div className='App'>
      <h1>Testing an event</h1>
      <Evento />
      <Form />
    </div>
  )
}

export default App