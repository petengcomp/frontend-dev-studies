import Titulo from "../components/Titulo";
import playL from "../assets/play2.svg";
import playR from "../assets/play3.svg";
import playRect from "../assets/retanguloPlay.svg"

function Play(){
    return(
        <>
            <main className="h-screen w-screen bg-black flex flex-col">
                <section className="h-[15%] flex items-center justify-center">
                    <Titulo text="Aula 1 - Título da aula"/>
                </section>
                <section className="h-[60%] bg-purple-500-800 border-t-laranja border-b-laranja border-t-2 border-b-2 flex">
                    <div className="h-full w-1/6 flex items-center justify-center"><img src={playL} alt="" /></div>
                    <div className="h-full w-2/3 bg-gray-500 m-auto border-r-2 border-l-2 border-r-laranja border-l-laranja"></div>
                    <div className="h-full w-1/6 flex items-center justify-center"><img src={playR} alt="" /></div>
                </section>
                <section className="h-1/4 bg-retanguloPlay bg-cover bg-no-repeat"></section>
            </main>
        </>
    )
}

export default Play;