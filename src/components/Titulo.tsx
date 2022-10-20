interface Props{
    text: string;
}

export default function titulo({text}:Props){
    return <h1 className="text-white text-6xl font-russ">{text}</h1>
}