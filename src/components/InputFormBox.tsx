interface Props{
    text: string;
    type: string;
}

export default function formBox({text, type}:Props){
    return (
        <div>
            <h3 className="font-russ text-roxin ml-5">{text}</h3>
            <input type={type} className='w-full bg-cinza border-2 border-roxin rounded-full text-roxin text-xl text-center p-3'/>
        </div>
    )
}