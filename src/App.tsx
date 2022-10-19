import './styles/main.css'
import logo from './assets/logo.png'
import Titulo from './components/Titulo'
import Subtitulo from './components/Subtitulo'

function App() {
  return (
    <>
      <main className="h-screen bg-black bg-bola bg-center bg-no-repeat">
        <div className='flex flex-row justify-center'>
          <div>
            <div className='flex flex-col'>
              <Titulo text="Estudos de Dev"/>
              <Subtitulo text="Aprenda, evolua."/>
              <button></button>
            </div>
          </div>
          <img src={logo} alt="" />
        </div>
      </main>
    </>
  )
}

export default App
