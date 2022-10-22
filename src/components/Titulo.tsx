interface Props{
    text: string;
    style?: string;
}

// style padrao = className="text-white text-6xl font-russ"

export default function titulo({text, style}:Props){
    return style? <h1 className= {style}>{text}</h1>:<h1 className="text-white text-6xl font-russ">{text}</h1>
}