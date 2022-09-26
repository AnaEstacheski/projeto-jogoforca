import react from "react"
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
    const [palavraEscondida, setPalavraEscondida] = react.useState([])
    const [letras, setLetras] = react.useState([])
    const [erros, setErros] = react.useState(0)
    const [forcas, setForcas] = react.useState(imagem0)

    // === LOGIC ===

    function palavraAleatoria() {
        const indiceAleatorio = removeSpecial(palavras[Math.floor(Math.random() * palavras.length)])
        const palavra = indiceAleatorio.split("")
        setEscolhePalavra(palavra)
        // let p = []
        // palavra.map(() => p.push("_"))
        // setPalavraEscondida(p)
        // console.log(p)
    }
    
    console.log(escolhePalavra)

    function click(letra, erros) {
        clicked(letra)
        console.log('foi')
        defineErro(letra)
        console.log('foi aqui')
        contaErros()
        console.log('aqui de novo')
    }

    function clicked(letra) {
        setLetras([...letras, letra])
        
    }

    function defineErro(letra) {
        if (escolhePalavra.includes(letra)) {
            console.log('show')
        } else {
            setErros(erros + 1)
        } 
    }

    function contaErros() {
        if (erros === 0) {
            setForcas(imagem0)
        } else if (erros === 1) {
            setForcas(imagem1)
        } else if (erros === 2) {
            setForcas(imagem2)
        } else if (erros === 3) {
            setForcas(imagem3)
        } else if (erros === 4) {
            setForcas(imagem4)
        } else if (erros === 5) {
            setForcas(imagem5)
        } else {
            setForcas(imagem6)
        }
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
                    <h1 className="">
                        {letras.includes(l) ? l : "_"}
                    </h1>)}
            </div>
            <div className="alphabet">
                {alfabeto.map((letra, index) =>
                    <button key={letra} disabled={letras.includes(letra)} onClick={() => click(letra)}>{letra.toUpperCase()}</button>
                )}
            </div>
            <div className="guess">
                <div>Já sei a palavra!</div>
                <input />
                <button>Chutar</button>
            </div>
        </div>
    )
}