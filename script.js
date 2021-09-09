const button = document.querySelector("#button")
const res = document.querySelector("#result")


//números aleatórios

function dice(){
    return Math.floor(Math.random() * 6 + 1)

}

//contador de resultados

function rollDice(){

    count = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]

    for(let i=0 ; i<1000 ; i++){

        let sum = dice() + dice()
        count[sum-2]++
    }
    results()

}

//mostra na tela

function results(){

    for(let i=0 ; i<count.length; i++){

        const p = document.createElement("p")
        const div = document.createElement("div")
        const numeros = document.createTextNode((i+2) + ": "+ count[i])
        const grafico = document.createElement("p")
        
        grafico.classList.add("grafico")
        grafico.style.width = `${count[i] / 5}%`

        p.appendChild(numeros)
        div.appendChild(p)
        res.appendChild(div)
        div.appendChild(grafico)
    }
}

//botão

button.addEventListener("click", rollDice)