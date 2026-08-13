const frases = [
  "Acredite em você e no seu potencial.",
  "Cada pequeno passo te aproxima do seu objetivo.",
  "Não desista: você está mais perto do que imagina.",
  "Transforme seus desafios em oportunidades.",
  "Você é capaz de coisas incríveis.",
  "Confie no processo e continue avançando.",
  "Erros são apenas degraus para o crescimento.",
  "Seu esforço de hoje constrói o seu amanhã.",
  "Tenha coragem para começar e persistência para continuar.",
  "Nunca subestime a força que existe dentro de você."
]

const fraseTexto = document.querySelector(".frase")
const btnFrase = document.querySelector(".btnFrase")

function mostrarFrase() {
    let indice = Math.floor(Math.random() * frases.length)
    fraseTexto.textContent = frases[indice]
}

btnFrase.addEventListener("click", function (){
    mostrarFrase()
})