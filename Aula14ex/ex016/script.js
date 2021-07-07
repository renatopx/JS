function verificar() {
    var txtinicio = document.getElementById('inicio')
    var txtfim = document.getElementById('fim')
    var txtpasso = document.getElementById('passo')
    var res = document.getElementById('res')

    if (txtinicio.value.length == 0 || txtfim.value.length == 0 || txtpasso.value.length == 0) {
        alert('[ERRO] Faltam dados')
        //res.innerHTML = 'Impossível contar!'
    } else {
        res.innerHTML = `Contando... <br>`
        var inicio = Number(txtinicio.value)
        var fim = Number(txtfim.value)
        var passo = Number(txtpasso.value)
        if (passo <= 0) {
            alert('Passo Inválido! Será considerado PASSO 1')
            passo = 1
        }
        if (inicio < fim) {
            //Crescente
            for (let c = inicio; c <= fim; c += passo) {
                res.innerHTML += `${c} \u{1f449}`
            }
        } else {
            //Decrescente
            for (let c = inicio; c >= fim; c -= passo)
                res.innerHTML += `${c} \u{1f449}`
        }
        res.innerHTML += '\u{1f3c1}'
    }

}