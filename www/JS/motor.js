var digitado
var login
var proprietarionome

function carregar() {
    alert("Ola mundo")
}

localStorage.setItem("EFQ-8H67", "Paulo Eduardo Silva Montier")
localStorage.setItem("FAC-1723, José Carlos")
localStorage.setItem("EGT-3614", "Felipe Canarozzo")
localStorage.setItem("DGJ-7567", "Graciente Henrique")

function exibir() {
    var exibir
    var digitado
    digitado = document.getElementById('coletortexto').value
    exibir = localStorage.getItem(digitado)
    alert(exibir)
}

function cadastrar() {
   placa = document.getElementById('login').value
   proprietarionome = document.getElementById('senha').value
   localStorage.setItem(placa, proprietarionome)
alert("CADASTROU!")
alert(localStorage.getItem(placa))
}

