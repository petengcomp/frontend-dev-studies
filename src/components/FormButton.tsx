interface Props{
    text: string;
    onClickFunc ?: () => void;
}
export default function formBox({text, onClickFunc}:Props){
    return (
        <button onClick={onClickFunc} className='w-full p-3 font-russ rounded-full text-4xl bg-gradient-to-r from-roxin via-roxinClaro to-roxin border-2 border-roxin text-white text-center'>{text}</button>
    )
}