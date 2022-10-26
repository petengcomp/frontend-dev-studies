import Titulo from "./Titulo";

interface Props {
    title: string;
    canal: string;
    thumbnailPath: string;
    link: string;
}


function YtBoxContent({title, canal, thumbnailPath, link}: Props) {
    return (
        <div className="flex flex-col gap-8 text-center mt-20 w-1/4">
            <Titulo text={title} style={'text-rosinha text-3xl font-russ'} />
            <div className="h-[266px]">
                <img src="./src/assets/caixa.svg" alt="caixa onde vai a imagem" />
                <a href={link} target="_blank"><img className="relative z-1 -top-[198px] left-0.5 w-[284px] h-[182px] overflow-hidden" src={thumbnailPath} alt="nlw" /></a>
            </div>
            <p className="text-white font-sasita text-2xl">{canal}</p>
        </div>
    )
}

export default YtBoxContent;