import react, { useState } from "react"
import imagem0 from "./assets/forca0.png"
import imagem1 from "./assets/forca1.png"
import imagem2 from "./assets/forca2.png"
import imagem3 from "./assets/forca3.png"
import imagem4 from "./assets/forca4.png"
import imagem5 from "./assets/forca5.png"
import imagem6 from "./assets/forca6.png"

import palavras from "./palavras"

import "./styles/reset.css"
import "./styles/style.css"

const images = [imagem0, imagem1, imagem2, imagem3, imagem4, imagem5, imagem6]
const alfabeto = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]

export default function App() {

    const [escolhePalavra, setEscolhePalavra] = react.useState([])
    const [letras, setLetras] = react.useState([])
    const [erros, setErros] = react.useState(0)
    const [forcas, setForcas] = react.useState(imagem0)
    const [inputed, setInputed] = useState("")

    // === LOGIC ===

    function palavraAleatoria() {
        const indiceAleatorio = removeSpecial(palavras[Math.floor(Math.random() * palavras.length)])
        const palavra = indiceAleatorio.split("")
        setEscolhePalavra(palavra)
    }
    
    console.log(escolhePalavra)

    function click(letra) {
        clicked(letra)
        defineErro(letra)
    }

    function clicked(letra) {
        const novasLetras = [...letras, letra]
        setLetras(novasLetras)
    }

    function defineErro(letra) {
        if (!escolhePalavra.includes(letra)) {
            const novoErro = erros + 1
            setErros(novoErro)
            setForcas(images[novoErro])
        }
    }

    function chutar(e) {
        e.preventDefault();
        if (inputed )
        console.log(inputed)
        recebeInputed()
        // setNewInputed("")
    }

    function removeSpecial(string) {
        string = string.toLowerCase();
        string = string.replace(new RegExp('[ÁÀÂÃ]', 'gi'), 'a');
        string = string.replace(new RegExp('[ÉÈÊ]', 'gi'), 'e');
        string = string.replace(new RegExp('[ÍÌÎ]', 'gi'), 'i');
        string = string.replace(new RegExp('[ÓÒÔÕ]', 'gi'), 'o');
        string = string.replace(new RegExp('[ÚÙÛ]', 'gi'), 'u');
        string = string.replace(new RegExp('[Ç]', 'gi'), 'c');
        return string;
    }

    // === UI ===
    
    return (
        <div className="body">
            <div className="gallow">
                <img src={forcas} alt="forca" />
                <button onClick={palavraAleatoria}>Escolher palavra</button>
                {escolhePalavra.map(l =>
                    <h1 className={erros < 6 ? "" : "errado"}>
                        {letras.includes(l) || erros === 6 ? l : "_"}
                    </h1>)}
            </div>
            <div className="alphabet">
                {alfabeto.map((letra) =>
                    <button key={letra} disabled={letras.includes(letra) || erros === 6} onClick={() => click(letra)}>{letra.toUpperCase()}</button>
                )}
            </div>
            <div className="guess">
                <div>Já sei a palavra!</div>
                <input 
                type="text"
                placeholder=""
                value={inputed}
                onChange={(e) => setInputed(e.target.value)}
                disabled={erros === 6}/>
                <button onClick={chutar}>Chutar</button>
            </div>
        </div>
    )
}