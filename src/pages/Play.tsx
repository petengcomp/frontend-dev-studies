import Titulo from "../components/Titulo";
import playL from "../assets/play2.svg";
import playR from "../assets/play3.svg";
import { useEffect, useState } from "react";
import Subtitulo from "../components/Subtitulo";
import { useNavigate } from "react-router-dom";

interface Props {

}

let i: number;
i=0;

function Play({}: Props){

    const [link, setLink] = useState <string>()

    let navigate = useNavigate();
    const goBack = () => {
      let path = `/content`;
      navigate(path);
    }
    
    useEffect(() => {
        i=0;
        setLink(links[i]);
        let page = document.getElementById("page");
        setTimeout(function() {  
            if (page != null) {
                page.style.opacity = "100%";
            }
        }, 200);
    }, []);

    const links  = ['https://drive.google.com/file/d/17mX-4_s8tNW4x1rlbyF1gjwG2dKSKA2R/preview',
                    'https://drive.google.com/file/d/1rQAqtInRjlu_gC--afj1aazwe5yp9ld5/preview',
                    'https://drive.google.com/file/d/1s3r1aly2aYjn3oPq12zWLkRHslqoc0_K/preview',
                    'https://drive.google.com/file/d/1YqiYUY31ga_vznwO3kVF4QQx4H9fYdTt/preview',
                    'https://drive.google.com/file/d/1AJcyUwdiGLgRJbxA1jhWozr6VX1sznvD/preview'];

    const titulo = "Aula "+(i+1)+" - Título do vídeo"

    return(
        <main id="page" className="h-screen w-screen bg-black flex flex-col opacity-5" style={{transition: "0.5s"}} >
            <section className="h-[15%] flex items-center justify-center">
                <section className="w-1/6 flex items-center justify-center">
                    <a onClick={goBack} className="cursor-pointer hover:opacity-70 transition-opacity"><Subtitulo text="Voltar"/></a>
                </section>
                <section className="w-2/3 flex justify-center items-center">
                    <Titulo text={titulo}/>
                </section>
                <section className="w-1/6 flex items-center justify-center"/>
            </section>
            <section className="h-[60%] bg-purple-500-800 border-t-laranja border-b-laranja border-t-2 border-b-2 flex">
                <div className="h-full w-1/6 flex items-center justify-center"><img className="hover:opacity-75 transition-opacity cursor-pointer" onClick={() => {if(i>0) i--; setLink(links[i])}} src={playL} alt="" /></div>
                <div className="h-full w-2/3 bg-gray-500 m-auto border-r-2 border-l-2 border-r-laranja border-l-laranja">
                <iframe src={link} className="w-full h-full" allow="autoplay"></iframe>
                </div>
                <div className="h-full w-1/6 flex items-center justify-center"><img className="hover:opacity-75 transition-opacity cursor-pointer" onClick={() => {if(i<4) i++; setLink(links[i])}} src={playR} alt="" /></div>
            </section>
            <section className="flex itemsn-center justify-center h-1/4 bg-retanguloPlay bg-cover bg-no-repeat">
                <div className="flex mt-20 justify-center">
                    <div className="flex items-center justify-center">
                        <div onClick={() => {
                                i=0;
                                setLink(links[i])
                            }
                            } className="bg-black w-[180px] h-[55px] rounded flex items-center justify-center cursor-pointer hover:opacity-70 transition-opacity">
                            <h2 className="font-russ text-white text-xl">Aula 1</h2>
                        </div>
                        <div className="w-20 h-5 bg-black bg-opacity-70"></div>
                        <div onClick={() => {
                                i=1;
                                setLink(links[i])
                            }
                            } className="bg-black w-[180px] h-[55px] rounded flex items-center justify-center cursor-pointer hover:opacity-70 transition-opacity">
                            <h2 className="font-russ text-white text-xl">Aula 2</h2>
                        </div>
                        <div className="w-[78px] h-[19px] bg-black bg-opacity-70"></div>
                        <div onClick={() => {
                                i=2;
                                setLink(links[i])
                            }
                            } className="bg-black w-[180px] h-[55px] rounded flex items-center justify-center cursor-pointer hover:opacity-70 transition-opacity">
                            <h2 className="font-russ text-white text-xl">Aula 3</h2>
                        </div>
                        <div className="w-[78px] h-[19px] bg-black bg-opacity-70"></div>
                        <div onClick={() => {
                                i=3;
                                setLink(links[i])
                            }
                            } className="bg-black w-[180px] h-[55px] rounded flex items-center justify-center cursor-pointer hover:opacity-70 transition-opacity">
                            <h2 className="font-russ text-white text-xl">Aula 4</h2>
                        </div>
                        <div className="w-[78px] h-[19px] bg-black bg-opacity-70"></div>
                        <div onClick={() => {
                                i=4;
                                setLink(links[i])
                            }
                            } className="bg-black w-[180px] h-[55px] rounded flex items-center justify-center cursor-pointer hover:opacity-70 transition-opacity">
                            <h2 className="font-russ text-white text-xl">Aula 5</h2>
                        </div>
                    </div>
                </div>
            </section>


        </main>
    )
}

export default Play;