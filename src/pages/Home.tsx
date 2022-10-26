import '../styles/main.css'
import '../styles/Home.css'
import { useNavigate } from "react-router-dom";
import Button from "../components/Button";
import Subtitulo from "../components/Subtitulo";
import Titulo from "../components/Titulo";
import logo from '../assets/logo.png';
import play from '../assets/play.png';
import $ from 'jquery';

function Home() {
    let navigate = useNavigate();
    const routeChange = () => {
      let path = `/authentication`;
      navigate(path);
    }

    $(window).on("mousemove",function(event) {
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

    $(document).ready(function() {
      $("button").on("click", function(event) {
        let logo = $("#logo").children();
        let bg = $("#bg");
        let content = bg.children();
        logo.fadeOut(250, "linear");
        content.fadeOut(250, "linear");
        setTimeout(function() {
          routeChange();
        },250);
      });
    });

    return (
      <>
        <main className="h-screen w-screen bg-black">
          <div className="w-screen h-screen bg-bola bg-center bg-no-repeat" id='bg'>
          <div className='h-3/4 flex flex-row justify-center items-center pt-16'>
              <div className='flex flex-col w-1/2 pl-[13%]'>
              <Titulo text="Estudos de Dev"/>
              <Subtitulo text="Aprenda, evolua."/>
              <div className='flex justify-center pt-20 select-none'>
                <Button text="<code/>" icon={play}/>
              </div>
              </div>
              <div className='w-[35%] flex justify-center select-none' id='logo'>
              <img src={logo} className="avatar" alt="logo" />
            </div>
            <div className='w-[15%]' />
          </div>
          </div>
        </main>
      </>
    )
}

export default Home;