import BoxContent from "../components/BoxContent";
import Navbar from "../components/Navbar";
import Titulo from "../components/Titulo";
import Ignite from "../assets/nlw_esports.png";

export default function Content() {
    return (
        <>
            <div className="bg-black h-full w-screen">
                <Navbar />
                <section id="nlw" className="mt-12 mx-10 pt-12">
                    <Titulo text="NLW's"/>

                    <BoxContent 
                        title="Ignite" 
                        description="Cada vez mais tenho a sensação de incertezas e inseguranças e tento me manter firme apesar disso. Algumas coisas parecem dar certo e maioria não, tipo você."
                        stack="Node, React, React Native"
                        thumbnailPath='./src/assets/nlw_Esports.png'
                    />

                    <BoxContent 
                        title="Together" 
                        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut mattis tortor ut turpis auctor consequat. Ut vel orci in ligula hendrerit volutpat."
                        stack="Java criminoso"
                        thumbnailPath='./src/assets/together.jpg'
                    />
                </section>
                <section id="youtube"></section>
                <section id="videos-proprios"></section>
                <section id="slides"></section>
                <section id="livros"></section>
            </div>
        </>
    )
}