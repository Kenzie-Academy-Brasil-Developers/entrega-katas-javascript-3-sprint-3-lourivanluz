const sampleArray = [469, 755, 244, 245, 758, 450, 302, 20, 712, 71, 456, 21, 398, 339, 882, 
    848, 179, 535, 940, 472];






function imprimirResposta(nomekata, resposta){
    const header = document.body.appendChild(document.createElement('header'))
    let h1 = document.querySelector('header').appendChild(document.createElement('h1'))
    const main = document.body.appendChild(document.createElement('main'))
    let p = document.querySelector('main').appendChild(document.createElement('p'))
    h1.innerHTML = ''+nomekata
    p.innerHTML = 'Resposta: '+ resposta
}

function loopadicição(valorInit,valorEnd){
    let resposta = [];
    for ( let i = valorInit; i<=valorEnd; i++){
        resposta.push(i)
    }
    return resposta
}


function loopsubtração(valorInit,valorEnd){
    let resposta = [];
    for ( let i = valorInit; i>=valorEnd; i--){
        resposta.push(i)
    }
    return resposta
}


function imparFilter(array){
    let resposta = [];
    for ( let i = 0; i<array.length; i++){
        if(array[i]%2!==0){
            resposta.push(array[i])
        }
    }
    return resposta
}


function escolheLoop(valor1, valor2){
    if (valor1<valor2){
        return loopadicição(valor1,valor2)
    } else{
        return loopsubtração(valor1,valor2)
    }
}



function procuraPor(numeros, numero){
    let tem = false
    for(let i = 0; i<numeros.length;i++){
        if (numeros[i]===numero){
            tem = true
        }
    }
    return tem
}

 
function arrayDivisivelPor(arrayNumeros,arrayDivisores){
    let resposta = []
    for(let i = 0; i<arrayNumeros.length;i++){
        
        for(let d = 0; d<arrayDivisores.length;d++){
            
            if(arrayNumeros[i]%arrayDivisores[d]===0){
                
                if(!procuraPor(resposta,arrayNumeros[i])){
                    
                    resposta.push(arrayNumeros[i])
                }
            }
        }
            
    }

    return resposta

}



function kata1(valorInit=1,valorEnd=25) {
    // implemente o código do kata 1 aqui
    imprimirResposta('kata1',loopadicição(valorInit,valorEnd))

}

function kata2(valorInit=25,valorEnd=1) {
    imprimirResposta('kata2',loopsubtração(valorInit,valorEnd))
}

function kata3(valorInit=-1,valorEnd=-25) {

    imprimirResposta('kata3',loopsubtração(valorInit,valorEnd))
}

function kata4(valorInit=-25,valorEnd=-1) {

    imprimirResposta('kata4',loopadicição(valorInit,valorEnd))

}

function kata5(valorInit=25,valorEnd=-25) {
    // Exibir os números ímpares de 25 a -25: (25, 23, 21, …, -23, -25)
    imprimirResposta('kata5',imparFilter(loopsubtração(valorInit,valorEnd)))
}

function kata6(valorInit=1,valorEnd=100,div = 3) {
    // Exibir os números divisíveis por 3 até o 100: (3, 6, 9, …, 96, 99)
 
    imprimirResposta('kata6',arrayDivisivelPor(loopadicição(valorInit,valorEnd),[div]))
    
}

function kata7(valorInit=100,valorEnd=1,divisor=[3,7]) {
    // Exibir os números divisíveis por 3 e os números divisíveis por 7 regressivamente a partir do 
    //100: (99, 98, 96, 93, 91, …, 14, 12, 9, 7, 6, 3)
    imprimirResposta('kata7',arrayDivisivelPor(loopsubtração(valorInit,valorEnd),divisor))
}

function kata8(valorInit=1,valorEnd=100,divisor=[3,7]) {
    // Exibir os números divisíveis por 3 e os números divisíveis por 7 regressivamente a partir do 
    //100: (99, 98, 96, 93, 91, …, 14, 12, 9, 7, 6, 3)
    imprimirResposta('kata8',arrayDivisivelPor(loopadicição(valorInit,valorEnd),divisor))
}

function kata9(valorInit=1,valorEnd=100,divisor=[5]) {
    // Exibir os números ímpares divisíveis por 5 até o 100: (5, 15, 25, …, 85, 95)
    imprimirResposta('kata9',arrayDivisivelPor(loopadicição(valorInit,valorEnd),divisor))

}

function kata10(num=20, array=sampleArray) {
    // Exibir os 20 elementos de sampleArray. (469, 755, 244, …, 940, 472)
    let resposta = []
    for(let i = 0; i<num;i++){
        resposta.push(array[i])
    }
    imprimirResposta('kata10',resposta)
}

function kata11(array=sampleArray,divisor=2) {
    // Exibir todos os números pares contidos em sampleArray. (244, 758, 450, …, 940, 472)
    imprimirResposta('kata11',arrayDivisivelPor(array,[divisor]))
}

function kata12(array = sampleArray) {
    imprimirResposta('kata12',imparFilter(array))
}

function kata13(array=sampleArray,divisor=8) {
    // Exibir os números divisíveis por 8 em sampleArray: (712, 456, …, 472)
    imprimirResposta('kata13',arrayDivisivelPor(array,[divisor]))
}

function kata14(array=sampleArray) {
    // Exibir o quadrado de cada elemento de sampleArray. (219961, 570025, …, 222784)
    let resposta = []
    for (let i = 0; i<array.length;i++){
        resposta.push(array[i]**2)
    }
    imprimirResposta('kata14',resposta)
}

function kata15(num=20) {
    // Exibir a soma de todos os números de 1 a 20.
    let resposta = 0
    for (let i = 1; i<=num; i++){
        resposta += i
    }
    imprimirResposta('kata15',resposta)

}

function kata16(array =sampleArray) {
    // Exibir a soma de todos os elementos de sampleArray.
    let resposta = 0
    for(let i = 0; i<array.length; i++){
        resposta+= array[i]
    }
    imprimirResposta('kata16',resposta)
}

function kata17(array = sampleArray) {
    // Exibir o menor elemento de sampleArray.
    let resposta = array[0]
    for (let i = 0; i < array.length; i++){
        if (resposta >=array[i]){
            resposta = array[i]
        }
    }
    imprimirResposta('kata17',resposta)
}

function kata18(array = sampleArray) {
    // Exibir o maior elemento de sampleArray.
    let resposta = array[0]
    for (let i = 0; i < array.length; i++){
        if (resposta <=array[i]){
            resposta = array[i]
        }
    }
    imprimirResposta('kata18',resposta)
}

/**
 * Daqui em diante são os bônus, por sua conta e risco
 */

function kataBonus1(num=20) {
    // implemente o código do kata bonus 1 aqui
    for (let i = 1; i<=num; i++){
        document.body.appendChild(document.createElement('div'))
        let elementoSelecionado = document.body.querySelector('body >:nth-child('+(i+1)+')')
        elementoSelecionado.classList.add('retangulo')
        elementoSelecionado.classList.add('colorGray')
    }

}

function kataBonus2(num=20) {
    // implemente o código do kata bonus 2 aqui
    for (let i = 1; i<=num; i++){
        document.body.appendChild(document.createElement('div'))
        let elementoSelecionado = document.body.querySelector('body >:nth-child('+(i+1)+')')
        if(i%2===0){
            elementoSelecionado.classList.add('retanguloMenor')
            elementoSelecionado.classList.add('colorGray')
        }else{
            elementoSelecionado.classList.add('retanguloMaior')
            elementoSelecionado.classList.add('colorGray')
        }
        
    }
}

function kataBonus3(num=20, array=sampleArray) {
    for (let i = 1; i<num; i++){
        document.body.appendChild(document.createElement('div'))
        let elementoSelecionado = document.body.querySelector('body >:nth-child('+(i+1)+')')
        elementoSelecionado.classList.add('outroRetangulo')
        elementoSelecionado.classList.add('colorGray')
        elementoSelecionado.setAttribute('width',''+array[(i-1)]+'px')
        
    }
    // implemente o código do kata bonus 3 aqui
}

function kataBonus4(num=20, array=sampleArray) {
    // implemente o código do kata bonus 4 aqui
    for (let i = 1; i<num; i++){
        document.body.appendChild(document.createElement('div'))
        let elementoSelecionado = document.body.querySelector('body >:nth-child('+(i+1)+')')
        elementoSelecionado.classList.add('outroRetangulo')
        elementoSelecionado.setAttribute('width',''+array[i-1]+'px')
        if(i%2===0){
            elementoSelecionado.classList.add('colorGray')
        }else{
            elementoSelecionado.classList.add('colorRed')
        }
    }
}

function kataBonus5(num=20, array=sampleArray) {
    // implemente o código do kata bonus 5 aqui
    for (let i = 1; i<num; i++){
        document.body.appendChild(document.createElement('div'))
        let elementoSelecionado = document.body.querySelector('body >:nth-child('+(i+1)+')')
        elementoSelecionado.classList.add('outroRetangulo')
        elementoSelecionado.setAttribute('width',''+array[i-1]+'px')
        if(array[i-1]%2===0){
            elementoSelecionado.classList.add('colorGray')
        }else{
            elementoSelecionado.classList.add('colorRed')
        }
    }
}


//kata1() 
//kata2()
//kata3()
//kata4()
//kata5()
//kata6()
//kata7()  
//kata8() 
//kata9()
//kata10()
//kata11()
//kata12()
//kata13()
//kata14()
//kata15()
//kata16()
//kata17()
//kata18()
//kataBonus1()
//kataBonus2()
//kataBonus3()
//kataBonus4()
//kataBonus5()