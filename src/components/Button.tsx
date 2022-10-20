import Titulo from './Titulo'


interface Props{
    text: string;
    icon: string;
}

export default function button({text, icon}:Props){
    return (
        <button className="w-44 h-48 rounded-xl bg-rosinha items-center">
            <img className="m-auto pb-2 w-24" src={icon} alt="play button" />
            <h1 className='text-white font-russ text-3xl font-medium'>{text}</h1>
        </button>
    )
}