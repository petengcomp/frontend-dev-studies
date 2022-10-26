import NlwBoxContent from "../components/NlwBoxContent";
import Navbar from "../components/Navbar";
import Titulo from "../components/Titulo";
import Divider from "../components/Divider";
import YtBoxContent from "../components/YtBoxContent";
import { useEffect } from "react";
import { motion } from "framer-motion";
import '../styles/NavBar.css' 

export default function Content() {

    useEffect(() => {
        let page = document.getElementById("page");
        setTimeout(function() {  
            if (page != null) {
                page.style.opacity = "100%";
            }
        }, 200);
    }, []);

    return (
        <div style={{transition: "0.5s"}} id='page' className="bg-black h-full w-screen opacity-5">
            <Navbar />
            <section id="nlw" className="my-12 mx-10 pt-12 overflow-hidden">
                <Titulo text="NLW's"/>
                <NlwBoxContent
                    title="Ignite"
                    description="Cada vez mais tenho a sensação de incertezas e inseguranças e tento me manter firme apesar disso. Algumas coisas parecem dar certo e maioria não, tipo você."
                    stack="Node, React, React Native"
                    thumbnailPath='./src/assets/nlw_Esports.png'
                />
                <NlwBoxContent
                    title="Together"
                    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut mattis tortor ut turpis auctor consequat. Ut vel orci in ligula hendrerit volutpat."
                    stack="Java criminoso"
                    thumbnailPath='./src/assets/together.jpg'
                />
            </section>
            <Divider />
            <section id="youtube" className="mt-12 mx-10 pt-12 overflow-hidden">
                <Titulo text="Youtube"/>
                <div className="flex justify-between mx-[150px]">
                    <YtBoxContent
                        title="HTML, CSS e Bootstrap"
                        canal="Micheli Brito"
                        thumbnailPath="./src/assets/micheli.png"
                        link="https://youtube.com/playlist?list=PL8iIphQOyG-Cv3auRYoZtbvzJJrsvdMy-"
                    />
                    <YtBoxContent
                        title="HTML, CSS e Bootstrap"
                        canal="Micheli Brito"
                        thumbnailPath="./src/assets/micheli.png"
                        link="https://youtube.com/playlist?list=PL8iIphQOyG-Cv3auRYoZtbvzJJrsvdMy-"
                    />
                    <YtBoxContent
                        title="HTML, CSS e Bootstrap"
                        canal="Micheli Brito"
                        thumbnailPath="./src/assets/micheli.png"
                        link="https://youtube.com/playlist?list=PL8iIphQOyG-Cv3auRYoZtbvzJJrsvdMy-"
                    />
                </div>
            </section>
            <section id="videos-proprios"></section>
            <section id="slides"></section>
            <section id="livros"></section>
        </div>
    )
}