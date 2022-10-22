interface Props{
    text: string;
    icon: string;
    onClickFunc: () => void;
}

export default function button({text, icon, onClickFunc}:Props){
    return (
        // send to authentication component when clicks on button
        <button onClick={onClickFunc} className="w-44 h-48 rounded-xl bg-rosinha items-center shadow-playButton">
            <img className="m-auto pb-2 w-24" src={icon} alt="play button" />
            <h1 className='text-white font-russ text-3xl font-medium'>{text}</h1>
        </button>
    )
}