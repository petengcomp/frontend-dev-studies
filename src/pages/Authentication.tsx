import Titulo from '../components/Titulo'
import FormBox from '../components/InputFormBox';
import FormButton from '../components/FormButton';

import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';


function Authentication() {

  let navigate = useNavigate();
  const routeChange = () => {
    let path = `/content`;
    navigate(path, { replace: false });
  }


  useEffect(() => {
    let bg = document.getElementById("bg");
    setTimeout(function () {
      if (bg != null) {
        bg.style.marginLeft = "-20vw";
      }
    }, 500);
    let formDiv = document.getElementById("formDiv");
    setTimeout(function () {
      if (formDiv != null) {
        formDiv.style.opacity = "100%";
      }
    }, 750);
  }, []);

  return (
    <>
      <main className="h-screen w-screen bg-black absolute flex justify-end sc-1k:justify-center">
        <div className='w-screen h-screen bg-bola bg-contain bg-no-repeat absolute top-0 left-0 sc-1500:!-ml-[40vw] sc-1200:!-ml-[50vw] sc-1k:!ml-0 ' style={{ transition: "0.5s" }} id='bg' />
        <div className='w-[600px] h-screen flex justify-center items-center'>
          <div className='w-3/4 h-[90%] bg-white z-10 rounded-lg flex flex-col items-center justify-center opacity-0' style={{ transition: "0.5s" }} id='formDiv'>
            <Titulo text='Login' style="text-roxin text-6xl font-russ " />
            <div className='w-4/5 h-1 bg-roxin mt-3 rounded-full ' />
            <div className='h-2/3 w-4/5 mt-6' id='form'>
              <form action="" className='h-full mt-10'>
                <div className='flex flex-col items-center justify-evenly h-3/4'>
                  <section className='flex flex-col w-full justify-evenly h-3/5'>
                    <FormBox text='Email' type='email' />
                    <FormBox text='Password' type='password' />
                  </section>
                  <section className='mt-20 w-full h-1/6'>
                    <FormButton text="Entrar" onClickFunc={routeChange} />
                  </section>
                </div>
              </form>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}

export default Authentication