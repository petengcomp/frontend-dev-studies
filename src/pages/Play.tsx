import Titulo from "../components/Titulo";
import playL from "../assets/play2.svg";
import playR from "../assets/play3.svg";

interface Props {

}

function Play({}: Props){
    return(
        <main className="h-screen w-screen bg-black flex flex-col">
            <section className="h-[15%] flex items-center justify-center">
                <Titulo text="Aula 1 - Título da aula"/>
            </section>
            <section className="h-[60%] bg-purple-500-800 border-t-laranja border-b-laranja border-t-2 border-b-2 flex">
                <div className="h-full w-1/6 flex items-center justify-center"><img src={playL} alt="" /></div>
                <div className="h-full w-2/3 bg-gray-500 m-auto border-r-2 border-l-2 border-r-laranja border-l-laranja">
                    <iframe src="https://drive.google.com/file/d/1ahb6-kAgaKrPOA6XriTspQabxAm5DSIE/view?usp=sharing" frameBorder="0"></iframe>
                </div>
                <div className="h-full w-1/6 flex items-center justify-center"><img src={playR} alt="" /></div>
            </section>
            <section className="flex itemsn-center justify-center h-1/4 bg-retanguloPlay bg-cover bg-no-repeat">
                <div className="flex mt-20 justify-center">
                    <div className="flex items-center justify-center">
                        <div className="bg-black w-[180px] h-[70px] rounded flex items-center justify-center">
                            <h2 className="font-russ text-white text-xl">Aula 1</h2>
                        </div>
                        <div className="w-20 h-5 bg-black bg-opacity-70"></div>
                        <div className="bg-black w-[180px] h-[70px] rounded flex items-center justify-center">
                            <h2 className="font-russ text-white text-xl">Aula 2</h2>
                        </div>
                        <div className="w-[78px] h-[19px] bg-black bg-opacity-70"></div>
                        <div className="bg-black w-[180px] h-[70px] rounded flex items-center justify-center">
                            <h2 className="font-russ text-white text-xl">Aula 3</h2>
                        </div>
                        <div className="w-[78px] h-[19px] bg-black bg-opacity-70"></div>
                        <div className="bg-black w-[180px] h-[70px] rounded flex items-center justify-center">
                            <h2 className="font-russ text-white text-xl">Aula 4</h2>
                        </div>
                        <div className="w-[78px] h-[19px] bg-black bg-opacity-70"></div>
                        <div className="bg-black w-[180px] h-[70px] rounded flex items-center justify-center">
                            <h2 className="font-russ text-white text-xl">Aula 5</h2>
                        </div>
                    </div>
                </div>
            </section>


        </main>
    )
}

export default Play;