// let li = document.createElement("li")
// let li2 = document.createElement("li")
// li.innerHTML = "valor1"
// li2.innerHTML= "valor2"
// document.getElementById("ul").appendChild(li)
// document.getElementById("ul").appendChild(li2)


let botao = document.querySelector("#adicionar")
botao.addEventListener ("click", function() {
    let valorinput = document.querySelector("#task")
    let valor= valorinput.value
    let li = document.createElement("li")
    li.innerHTML = (valor)
    document.getElementById("ul").appendChild(li)
})