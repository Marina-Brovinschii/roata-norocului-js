let options=[
    1000,
    null,
    "car",
    null,
    null,
    10000,
    null,
    null,
    null,
    100,
    null,
    "house"
]

let prix

function renderWheel() {
let html=``

    for (let i=0; i<options.length; i++) {
        let value = options[i];
    if (typeof value == 'number') {
        color = "white"
    }
    else if (typeof value == 'string') {
        color = "darkred"
    } else {
        value = `<img src="Pictogrammers-Material-Emoticon-sad-outline.svg"/>`
    }

        html += `<li style="transform:rotate(${i*30}deg);color:${color}">${value}</li>`
    }

    wheel.innerHTML=html
}

function rotateWheel() {
    result.innerHTML=``
    let turns = Math.random() * 10
    wheel.style = `transform:rotate(-${turns}turn)` 
    let remainder = turns - Math.floor(turns)
    let sector = Math.round(11.9*remainder)
    console.log(options[sector])

    if (options[sector]==null) {
         prix = "nothing"
    } else {
        prix = options[sector]
    }

    setTimeout(showResult, 5000)
}

function showResult() {
    showResult.innerHTML = `You won ${prix}`
}

renderWheel()