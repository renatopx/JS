let num = document.getElementById('txtnumero')
let lista = document.getElementById('select')
let res = document.getElementById('result')
let valores = []

function isNumero(n) {
    if (Number(n) >= 1 && Number(n) <= 100) {
        return true
    } else {
        return false
    }
}

function inLista(n, l) {
    if (l.indexOf(Number(n)) != -1) {
        return true
    } else {
        return false
    }
}

function adicionar() {
    if (isNumero(num.value) && !inLista(num.value, valores)) {
        let item = document.createElement('option')
        valores.push(Number(num.value))
        item.text = `Valor ${num.value} adicionado.`
        lista.appendChild(item)
        res.innerHTML = ''
    } else {
        alert('Insira um valor válido ou já encontrado lista')

    }
    num.value = ''
    num.focus()
}

function finalizar() {
    if (valores.length == 0){
        alert('Adicione valores antes de finalizar!')
    } else{
        let tot = valores.length
        let maior = valores[0]
        let menor = valores[0]
        let soma = 0
        let media = 0

        for (let pos in valores){
            soma += valores[pos]
            if (valores[pos] > maior)
                maior = valores[pos]
            if (valores[pos] < menor)
                menor = valores[pos]
            
        }
        media = soma/tot
        res.innerHTML = ''
        res.innerHTML += `<p> Ao todo, temos ${tot} numeros cadastrados.</p>`
        res.innerHTML += `<p> O maior valor informado é ${maior}.</p>`
        res.innerHTML += `<p> O menor valor informado é ${menor}.</p>`
        res.innerHTML += `<p> Somando todos os valores temos ${soma}.</p>`
        res.innerHTML += `<p> A média dos valores digitados é ${media.toFixed(2)}.</p>`
    }
}