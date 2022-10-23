interface Props{

}

export default function formBox({}:Props){
    return (
        <div>
            <nav className="text-black bg-[#CEAFC9] h-12 flex items-center justify-center fixed top-0 z-10 w-screen">
                <ul className="flex gap-20 font-russ">
                    <li><a className="border-b-2 border-black" href="#nlw">NLW's</a></li>
                    <li><a href="#youtube">Youtube</a></li>
                    <li><a href="#videos-proprios">Vídeos próprios</a></li>
                    <li><a href="#slides">Slides</a></li>
                    <li><a href="#livros">Livros</a></li>
                </ul>
            </nav>
        </div>
    )
}