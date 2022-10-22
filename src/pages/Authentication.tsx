import Titulo from '../components/Titulo'
import $ from 'jquery'
import { useEffect } from 'react';


function Authentication() {
  
  useEffect(() => {
    let bg = document.getElementById("bg");
    setTimeout(function() { 
      if(bg!=null){
        bg.style.marginLeft = "-80vh";
      }
    }, 500);
    let formDiv = document.getElementById("formDiv");
    setTimeout(function() {  
      if(formDiv!=null){
        formDiv.style.opacity = "100%";
      }
    }, 750);
  }, []);

  return (
    <>
      <main className="h-screen w-screen bg-black absolute">
        <div className='h-screen w-screen bg-bola bg-center bg-no-repeat absolute top-0 left-0 ' style={{transition: "0.5s"}} id='bg'/>
        <div className='w-2/5 h-screen flex float-right justify-center items-center'>
          <div className='w-3/4 h-[90%] bg-white rounded-lg flex flex-col items-center justify-center opacity-0' style={{transition: "0.5s"}} id='formDiv'>
              <Titulo text='Login' style="text-roxin text-6xl font-russ "/>
              <div className='w-4/5 h-1 bg-roxin mt-3'/>
              <div className='h-2/3 w-4/5 mt-6 bg-slate-400' id='form'>
                  {/* TODO */}
              </div>
          </div>
        </div>
      </main>
    </>
  )
}

export default Authentication