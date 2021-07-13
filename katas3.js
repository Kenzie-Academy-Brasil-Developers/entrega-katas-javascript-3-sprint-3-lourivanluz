const sampleArray = [469, 755, 244, 245, 758, 450, 302, 20, 712, 71, 456, 21, 398, 339, 882, 
    848, 179, 535, 940, 472];

    document.body.appendChild(document.createElement('header'))
    document.body.appendChild(document.createElement('main'))

function imprimirResposta(nomekata, resposta){

    let h1 = document.querySelector('header').appendChild(document.createElement('h1'))
    let p = document.querySelector('header').appendChild(document.createElement('p'))

    h1.innerHTML = ''+nomekata
    p.innerHTML = 'Resposta: '+ resposta
}

function contador(valorInit,valorEnd){
    let resposta = [];
    for ( let i = valorInit; i<=valorEnd; i++){
        resposta.push(i)
    }
    return resposta
}

 function Selecionacontador(valor1, valor2){

    if (valor1<valor2){

        return contador(valor1,valor2)
    }
    return invertArray(contador(valor2,valor1))
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

function invertArray(array){
    let resposta = []
    for (let i = array.length-1; i >= 0; i--){
        resposta.push(array[i])
    }
    return resposta
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
    // Exibir os números de 1 a 25: (1, 2, 3, …, 24, 25)
    imprimirResposta('kata1',(Selecionacontador(valorInit,valorEnd)))

}

function kata2(valorInit=25,valorEnd=1) {
    // Exibir os números de 25 a 1: (25, 24, 23, …, 2, 1)
    /* imprimirResposta('kata2',(invertArray(Selecionacontador(valorInit,valorEnd)))) */
    imprimirResposta('kata2',(Selecionacontador(valorInit,valorEnd)))
        
}

function kata3(valorInit=-1,valorEnd=-25) {
    //Exibir os números de -1 a -25: (-1, -2, -3, …, -24, -25)
    imprimirResposta('kata3',(Selecionacontador(valorInit,valorEnd)))
}

function kata4(valorInit=-25,valorEnd=-1) {
    //Exibir os números de -25 a -1: (-25, -24, -23, …, -2, -1)
    imprimirResposta('kata4',(Selecionacontador(valorInit,valorEnd)))

}

function kata5(valorInit=25,valorEnd=-25) {
    // Exibir os números ímpares de 25 a -25: (25, 23, 21, …, -23, -25)
    imprimirResposta('kata5',imparFilter(Selecionacontador(valorInit,valorEnd)))
}

function kata6(valorInit=1,valorEnd=100,div = 3) {
    // Exibir os números divisíveis por 3 até o 100: (3, 6, 9, …, 96, 99)
 
    imprimirResposta('kata6',arrayDivisivelPor((Selecionacontador(valorInit,valorEnd)),[div]))
    
}

function kata7(valorInit=100,valorEnd=1,divisor=[3,7]) {
    // Exibir os números divisíveis por 3 e os números divisíveis por 7 regressivamente a partir do 
    //100: (99, 98, 96, 93, 91, …, 14, 12, 9, 7, 6, 3)
    imprimirResposta('kata7',arrayDivisivelPor((Selecionacontador(valorInit,valorEnd)),divisor))
}

function kata8(valorInit=1,valorEnd=100,divisor=[3,7]) {
    // Exibir os números divisíveis por 3 e os números divisíveis por 7 regressivamente a partir do 
    //100: (99, 98, 96, 93, 91, …, 14, 12, 9, 7, 6, 3)
    imprimirResposta('kata8',arrayDivisivelPor((Selecionacontador(valorInit,valorEnd)),divisor))
}

function kata9(valorInit=1,valorEnd=100,divisor=[5]) {
    // Exibir os números ímpares divisíveis por 5 até o 100: (5, 15, 25, …, 85, 95)
    imprimirResposta('kata9',arrayDivisivelPor((Selecionacontador(valorInit,valorEnd)),divisor))

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


function estruturaDomBonus(pai='main',filha = 'div',classFilha = 'kataBonus1'){
    let elementoSelecionado = document.body.querySelector(pai)
    elementoSelecionado.appendChild(document.createElement(filha))
    let elementoMainChild  = document.querySelector(pai + '>' + filha + ':last-child')
    elementoMainChild.setAttribute('class',classFilha+" titulo")
}

const borderGreyBold = "border-bottom:4px solid rgb(68, 68, 68);"
const borderRedBold = "border-bottom:4px solid rgb(175, 4, 4);"


function kataBonus1(num=20) {
    // implemente o código do kata bonus 1 aqui
    estruturaDomBonus('main','div','kataBonus1')
    estruturaDomBonus('.kataBonus1','h1','tituloKatabonus1') 
    let titulo = document.querySelector('.tituloKatabonus1')
    titulo.innerHTML = "KataBonus1" 

     for (let i = 1; i<=num; i++){
        document.body.querySelector('main>div:last-child').appendChild(document.createElement('div'))
        
        let retangulo = document.body.querySelector('.kataBonus1 > :nth-child('+(i+1)+')')
        retangulo.setAttribute('style', 'width:100px; height:20px; background-color:grey; margin:5px 0 ;'+borderGreyBold)
    }

}

function kataBonus2(num=20) {
    // implemente o código do kata bonus 2 aqui
    estruturaDomBonus('main','div','kataBonus2')
    estruturaDomBonus('.kataBonus2','h1','tituloKatabonus2') 
    let titulo = document.querySelector('.tituloKatabonus2')
    titulo.innerHTML = "kataBonus2" 
    let largura = 105
    for (let i = 1; i<=num; i++){

        document.body.querySelector('main>div:last-child').appendChild(document.createElement('div'))
        let retangulo = document.body.querySelector('.kataBonus2 > :nth-child('+(i+1)+')')
        retangulo.setAttribute('style','width:'+largura+'px; height:'+20+'px;background-color:grey; margin:5px 0;' + borderGreyBold)
        largura += 5

    }
}

function kataBonus3(num=20, array=sampleArray) {

    estruturaDomBonus('main','div','kataBonus3')
    estruturaDomBonus('.kataBonus3','h1','tituloKatabonus3') 
    let titulo = document.querySelector('.tituloKatabonus3')
    titulo.innerHTML = "kataBonus3"

    for (let i = 1; i<=num; i++){
        document.body.querySelector('main>div:last-child').appendChild(document.createElement('div'))
        let retangulo = document.body.querySelector('.kataBonus3 > :nth-child('+(i+1)+')')

        retangulo.setAttribute('style', 'width:'+ array[(i-1)]+'px; height:20px; background-color:grey; margin:5px 0;'+ borderGreyBold)
        
    }
    // implemente o código do kata bonus 3 aqui
}

function kataBonus4(num=20, array=sampleArray) {
    // implemente o código do kata bonus 4 aqui
    estruturaDomBonus('main','div','kataBonus4')
    estruturaDomBonus('.kataBonus4','h1','tituloKatabonus4') 
    let titulo = document.querySelector('.tituloKatabonus4')
    titulo.innerHTML = "kataBonus4"

    for (let i = 1; i<=num; i++){
        document.body.querySelector('main>div:last-child').appendChild(document.createElement('div'))
        let retangulo = document.body.querySelector('.kataBonus4 > :nth-child('+(i+1)+')')
        let cor = "background-color:grey;"
        let border = borderGreyBold
        if(i%2===0){
            cor = "background-color:red;"
            border = borderRedBold
        }
        retangulo.setAttribute('style','height: 20px; margin-bottom: 5px; width:'+array[i-1]+'px;'+ cor + border)
    }
}

function kataBonus5(num=20, array=sampleArray) {
    // implemente o código do kata bonus 5 aqui
    estruturaDomBonus('main','div','kataBonus5')
    estruturaDomBonus('.kataBonus5','h1','tituloKatabonus5') 
    let titulo = document.querySelector('.tituloKatabonus5')
    titulo.innerHTML = "kataBonus5"

    for (let i = 1; i<=num; i++){
        document.body.querySelector('main>div:last-child').appendChild(document.createElement('div'))
        let retangulo = document.body.querySelector('.kataBonus5 > :nth-child('+(i+1)+')')
        let cor = "background-color:grey;"
        let border = borderGreyBold
        if(array[i-1]%2===0){
            cor = "background-color:red;"
            border = borderRedBold
        }
        retangulo.setAttribute('style','height: 20px; margin-bottom: 5px; width:'+array[i-1]+'px;'+ cor + border)

    }
}


kata1() 
kata2()
kata3()
kata4()
kata5()
kata6()
kata7()  
kata8() 
kata9()
kata10()
kata11()
kata12()
kata13()
kata14()
kata15()
kata16()
kata17()
kata18()
kataBonus1()
kataBonus2()
kataBonus3()
kataBonus4()
kataBonus5()