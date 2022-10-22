interface Props{
    text: string;
}
export default function formBox({text}:Props){
    return (
        <button className='w-full p-3 font-russ rounded-full text-4xl bg-gradient-to-r from-roxin via-roxinClaro to-roxin border-2 border-roxin text-white text-center'>{text}</button>
    )
}