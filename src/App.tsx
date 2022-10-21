import './styles/main.css'
import logo from './assets/logo.png'
import play from './assets/play.png'
import Titulo from './components/Titulo'
import Subtitulo from './components/Subtitulo'
import Button from './components/Button'
import $ from 'jquery';

function App() {
  
  $(window).mousemove(function(event) {
    let coordenadas = $("#logo").offset();
    let sizew = $("#logo").width();
    let sizeh = $("#logo").height();

    let child = $("#logo").children();

    if(coordenadas && sizew && sizeh && event.pageX > coordenadas.left && event.pageX < coordenadas.left + sizew && event.pageY > coordenadas.top && event.pageY < coordenadas.top + sizeh)
    // tirando o teleporte
    child.css({
      "margin-left": -(event.pageX - (coordenadas.left+sizew/2))*0.05,
      "margin-top": -(event.pageY - (coordenadas.top + sizeh/2))*0.05
    });


  });

  return (
    <>
      <main className="h-screen bg-black bg-bola bg-center bg-no-repeat">
        <div className='h-3/4 flex flex-row justify-center items-center pt-16'>
           <div className='flex flex-col w-1/2 pl-52'>
            <Titulo text="Estudos de Dev"/>
            <Subtitulo text="Aprenda, evolua."/>
            <div className='flex justify-center pt-20'>
              <Button text="<code/>" icon={play}/>
            </div>
           </div>
           <div className='w-[40%] flex justify-center' id='logo'>
            <img src={logo} alt="logo" />
          </div>
          <div className='w-[10%]' />
        </div>
      </main>
    </>
  )
}

export default App
