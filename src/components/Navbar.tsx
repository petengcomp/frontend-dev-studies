import { useScrollPosition } from '../hooks/useScrollPosition'
interface Props{
    
}

export default function formBox({}:Props){
    const scrollPosition = useScrollPosition();
    const sections = document.querySelectorAll("section");
    const navLiAnchors = document.querySelectorAll("ul li a");
    let current : string|null = "";
    sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        if (scrollPosition >= sectionTop ) {
            current = section.getAttribute("id");
        }
    });
    navLiAnchors.forEach((a) => {
        a.classList.remove("active");
        if (current && a.classList.contains(current)) {
            a.classList.add("active");
        }
    }); 


    return (
        <nav className="bg-rosinha px-2 sm:px-4 py-2.5 rounded dark:bg-gray-900 fixed top-0 z-10 w-screen font-russ">
            <div className="container flex flex-wrap justify-between items-center mx-auto">
                <div className="flex justify-center w-full md:block" id="navbar-default">
                    <ul className="flex flex-col justify-center p-4 mt-4 rounded-lg border md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                        <li>
                            <a href="#nlw" className="nlw block py-2 pr-4 pl-3 text-white bg-laranja rounded md:bg-transparent md:p-0 dark:text-white" aria-current="page">NLW's</a>
                        </li>
                        <li>
                            <a href="#youtube" className="youtube block py-2 pr-4 pl-3 text-gray-700 rounded md:hover:bg-transparent md:border-0 md:hover:text-laranja md:p-0">Youtube</a>
                        </li>
                        <li>
                            <a href="#videos-proprios" className="videos-proprios block py-2 pr-4 pl-3 text-gray-700 rounded md:hover:bg-transparent md:border-0 md:hover:text-laranja md:p-0">Vídeos próprios</a>
                        </li>
                        <li>
                            <a href="#slides" className="slides block py-2 pr-4 pl-3 text-gray-700 rounded md:hover:bg-transparent md:border-0 md:hover:text-laranja md:p-0">Slides</a>
                        </li>
                        <li>
                            <a href="#livros" className="livros block py-2 pr-4 pl-3 text-gray-700 rounded md:hover:bg-transparent md:border-0 md:hover:text-laranja md:p-0">Livros</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}