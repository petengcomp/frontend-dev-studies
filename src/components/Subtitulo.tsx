interface Props{
    text: string;
}

export default function subtitulo({text}:Props){
    return <h1 className="text-rosinha text-4xl font-russ">{text}</h1>
}