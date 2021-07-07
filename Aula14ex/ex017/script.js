function calcular() {
    var txtn = document.getElementById('numero')
    var n = Number(numero.value)
    var result = document.getElementById('result')
    var tab = document.getElementById('seltab')
    var select = document.getElementById('select')
    var valor = select.options[select.selectedIndex].value

    if (txtn.value.length == 0) {
        alert('INSIRA UM NUMERO!!')
    } else {
        tab.innerHTML = ''
        switch (valor) {
            case 'adi':
                for (var c = 1; c <= 10; c++) {
                    let item = document.createElement('option')
                    item.text = `${n}+${c}=${n+c}`
                    tab.appendChild(item)

                }
                break
            case 'sub':
                for (var c = 1; c <= 10; c++) {
                    let item = document.createElement('option')
                    item.text = `${n}-${c}=${n-c}`
                    tab.appendChild(item)
                }
                break
            case 'mult':
                for (var c = 1; c <= 10; c++) {
                    let item = document.createElement('option')
                    item.text = `${n}*${c}=${n*c}`
                    tab.appendChild(item)
                }
                break
            case 'divi':
                for (var c = 1; c <= 10; c++) {
                    let item = document.createElement('option')
                    let divisao = n/c
                    item.text = `${n}/${c}=${divisao.toFixed(2)}`
                    tab.appendChild(item)
                }
                break
        }
    }
}