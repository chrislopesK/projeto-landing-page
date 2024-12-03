var SetaEsquerda = window.document.getElementById("SetaEsquerda")
var Bruna = window.document.getElementById("Bruna")
var Leonardo = window.document.getElementById("Leonardo")
var Samantha = window.document.getElementById("Samantha")
var SetaDireita = window.document.getElementById("SetaDireita")

function RolarParaDireita(){
    SetaDireita.style = "display:none"
    Samantha.style = "display:flex"
    Bruna.style = "display:none"
    Leonardo.style = "display:flex"
    SetaEsquerda.style = "display:flex; margin-top:300%"
}
function RolarParaEsquerda(){
    SetaDireita.style = "display:flex"
    Samantha.style = "display:none"
    Bruna.style = "display:flex"
    Leonardo.style = "display:flex"
    SetaEsquerda.style = "display:none; margin-top:300%"}