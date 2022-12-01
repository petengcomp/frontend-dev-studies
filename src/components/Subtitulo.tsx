interface Props{
    text: string;
    style?: string;
}

export default function subtitulo({text, style}:Props){
    return style? <h1 className={style}>{text}</h1> : <h1 className="text-rosinha text-4xl font-russ">{text}</h1> 
}