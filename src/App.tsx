import './styles/main.css'
import logo from './assets/logo.png'
import play from './assets/play.png'
import Titulo from './components/Titulo'
import Subtitulo from './components/Subtitulo'
import Button from './components/Button'

function App() {
  return (
    <>
      <main className="h-screen bg-black bg-bola bg-center bg-no-repeat">
        <div className='h-3/4 flex flex-row justify-center items-center'>
           <div className='flex flex-col pr-24'>
            <Titulo text="Estudos de Dev"/>
            <Subtitulo text="Aprenda, evolua."/>
            <div className='flex justify-center pt-16'>
              <Button text="<code/>" icon={play}/>
            </div>
           </div>
          <img className='pl-10' src={logo} alt="" />
        </div>
      </main>
    </>
  )
}

export default App
