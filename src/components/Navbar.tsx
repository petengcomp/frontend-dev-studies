interface Props{
    
}

export default function formBox({}:Props){
    return (
        <nav className="bg-rosinha px-2 sm:px-4 py-2.5 rounded dark:bg-gray-900 fixed top-0 z-10 w-screen font-russ">
            <div className="container flex flex-wrap justify-between items-center mx-auto">
                <div className="flex justify-center w-full md:block" id="navbar-default">
                    <ul className="flex flex-col justify-center p-4 mt-4 rounded-lg border md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                        <li>
                            <a href="#nlw" className="block py-2 pr-4 pl-3 text-white bg-laranja rounded md:bg-transparent md:text-laranja md:p-0 dark:text-white" aria-current="page">NLW's</a>
                        </li>
                        <li>
                            <a href="#youtube" className="block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-laranja md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Youtube</a>
                        </li>
                        <li>
                            <a href="#videos-proprios" className="block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-laranja md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Vídeos próprios</a>
                        </li>
                        <li>
                            <a href="#slides" className="block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-laranja md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Slides</a>
                        </li>
                        <li>
                            <a href="#livros" className="block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-laranja md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Livros</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}