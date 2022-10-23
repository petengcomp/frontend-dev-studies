import { ImgHTMLAttributes } from "react";
import Titulo from "./Titulo";

interface Props {
    title: string;
    description: string;
    stack: string;
    thumbnailPath: string;
}

export default function formBox({title, description, stack, thumbnailPath}:Props){
    return (
        <div className="flex justify-between mx-[150px] mt-20">
            <div className="h-[371px]">
                <img src="./src/assets/caixa.svg" alt="caixa onde vai a imagem" />
                <a href=""><img className="relative z-1 -top-[340px] left-0.5 w-[495px] h-[310px]" src={thumbnailPath} alt="nlw" /></a>
            </div>
            <div className="flex flex-col gap-6 items-center justify-center w-[450px]">
                <Titulo text={title} style={'text-rosinha text-6xl font-russ'} />
                <p className="text-white font-sasita text-justify text-2xl">{description}</p>
                <p className="text-white font-russ text-2xl"><span className="text-[#6E0484]">Stack:</span> {stack}</p>
            </div>
        </div>
    )
}