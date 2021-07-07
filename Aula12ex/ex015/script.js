function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var formAno = document.getElementById('txtano')
    var res = document.getElementById('res')

    if(formAno.value.length == 0 || formAno.value > ano){
        alert(`[ERRO] Verifique os dados e tente novamente!`)
    }else{
        var formsex = document.getElementsByName('radsex')
        var idade = ano - Number(formAno.value)
     //   res.innerHTML = `Idade calculada: ${idade}`
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id','foto')

        if (formsex[0].checked){
            genero = 'Homem'
            if(idade >= 0 && idade < 10){
                //criança
                img.setAttribute('src', 'bebe-m.png')
            }else if(idade < 21){
                //jovem
                img.setAttribute('src', 'jovem-m.png')
            }else if(idade < 50){
                //adulto
                img.setAttribute('src', 'adulto-m.png')
            }else if(idade > 50){
                //idoso
                img.setAttribute('src', 'idoso-m.png')
            }
        }else if(formsex[1].checked){
            genero = 'Mulher'
            if(idade >= 0 && idade < 10){
                //criança
                img.setAttribute('src', 'bebe-f.png')
            }else if(idade < 21){
                //jovem
                img.setAttribute('src', 'jovem-f.png')
            }else if(idade < 50){
                //adulto
                img.setAttribute('src', 'adulto-f.png')
            }else if(idade > 50){
                //idoso
                img.setAttribute('src', 'idoso-f.png')
            }
        }
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    }
    
}