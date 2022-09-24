import react from "react"
import imagem0 from "./assets/forca0.png"
// import imagem1 from "./assets/forca1.png"
// import imagem2 from "./assets/forca2.png"
// import imagem3 from "./assets/forca3.png"
// import imagem4 from "./assets/forca4.png"
// import imagem5 from "./assets/forca5.png"
// import imagem6 from "./assets/forca6.png"

import palavras from "./palavras"

import "./styles/reset.css"
import "./styles/style.css"

const alfabeto = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]

export default function App() {

    const [escolhePalavra, setEscolhePalavra] = react.useState("")

    // === LOGIC ===
    function palavraAleatoria() {
        const indiceAleatorio = Math.floor(Math.random() * palavras.length)
        const palavra = palavras[indiceAleatorio].split("")
        setEscolhePalavra(palavra)
       
    }
    console.log(escolhePalavra)


    // === UI ===
    return (
        <div className="body">
            <div className="gallow">
                <img src={imagem0} alt="forca"/>
                <button onClick={palavraAleatoria}>Escolher palavra</button>
                <h1 className=""></h1>
            </div>
            <div className="alphabet">

            </div>
            <div className="guess">

            </div>
        </div>
    )
}