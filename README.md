# Entrega: Katas de JavaScript 3

## Visão Geral

Para começar, acesse [este link](https://gitlab.com/kenzie-academy-brasil/se/fe/getting-started-with-javascript/s_js-katas-3), faça o fork e clone o repo. Depois preencha os arquivos `index.html` e `katas3.js` de acordo com o que se pede.

Você irá criar uma única página web com um cabeçalho identificado para cada kata seguido de sua solução. Nesses katas, em vez de usar `console.log()` ou `document.write()`, você **precisa** inserir seus resultados no HTML usando os métodos `document.createElement()` e `node.appendChild()`.

A maneira mais fácil de começar é copiando o arquivo de exemplo da **Mini-Aula: Inserindo novos elementos em uma Página**. Você pode copiar e colar o código que está incorporado na aula.

Você pode continuar adicionando cada novo kata no final da página.

## Katas 

Antes de começar a desenvolver suas funções de resolução dos Katas, crie a função **"showResults"** seguindo os seguintes passos:

1. Essa função deve receber um valor como parâmetro.  
2. Essa função deve mostrar no DOM o valor recebido.  
3. Essa função deve ser chamada dentro de todas as outras funções.  


**Nesse katas nós não vamos utilizar métodos de iteração de array (forEach, map, filter, reduce, sort...) e nem (math min, math max), vamos utilizar apenas estruturas de repetição como (while, for ou do while).**

**Suas funções devem utilizar return para retornar os resultados solicitados**

1.  Exibir os números de 1 a 25: _(1, 2, 3, …, 24, 25)_
2.  Exibir os números de 25 a 1: _(25, 24, 23, …, 2, 1)_
3.  Exibir os números de -1 a -25: _(-1, -2, -3, …, -24, -25)_
4.  Exibir os números de -25 a -1: _(-25, -24, -23, …, -2, -1)_
5.  Exibir os números ímpares de 25 a -25: _(25, 23, 21, …, -23, -25)_
6.  Exibir os números divisíveis por 3 até o 100: _(3, 6, 9, …, 96, 99)_
7.  Exibir os números divisíveis por 7 até o 100: _(7, 14, 21, …, 91, 98)_
8.  Exibir os números divisíveis por 3 e os números divisíveis por 7 regressivamente a partir do 100: _(99, 98, 96, 93, 91, …, 14, 12, 9, 7, 6, 3)_
9.  Exibir os números ímpares divisíveis por 5 até o 100: _(5, 15, 25, …, 85, 95)_
10. Exibir os 20 elementos de sampleArray. _(469, 755, 244, …, 940, 472)_
11. Exibir todos os números pares contidos em sampleArray. _(244, 758, 450, …, 940, 472)_
12. Exibir todos os números ímpares contidos em sampleArray. _(469, 755, 245, …, 179, 535)_
13. Exibir os números divisíveis por 8 em sampleArray: _(712, 456, …, 472)_
14. Exibir o quadrado de cada elemento de sampleArray. _(219961, 570025, …, 222784)_
15. Exibir a soma de todos os números de 1 a 20.
16. Exibir a soma de todos os elementos de sampleArray.
17. Exibir o menor elemento de sampleArray.
18. Exibir o maior elemento de sampleArray.

### Desafio Extra:

Certo, até aqui você exercitou a sua lógica. Agora vamos exercitar a famosa __leitura de documentação__. Devemos ter o MDN como nosso melhor amigo na nossa jornada de desenvolvedores! Então o desafio aqui é criar __NOVAS FUNÇÕES__ e utilizar [Métodos de Array](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array).

__IMPORTANTE__: Não modifique as funções feitas sem métodos de Array. Se quiser cumprir este __desafio extra__, faça __novas funçẽs__

Leia os métodos, ache o que melhor se encaixa na sua solução e implemente!

### Avançando...

*Estes problemas envolvem o uso de estilização CSS, e exigem um certo conhecimento de CSS para serem completados. Iremos cobrir isso mais adiante, mas sinta-se a vontade para fazer uma pesquisa por conta própria se quiser ganhar alguns pontos extras!*

1. Exibir 20 retângulos cinza sólido, cada um com 20px de altura e 100px de largura.
2. Exibir 20 retângulos cinza sólido, cada um com 20px de altura e larguras variando uniformemente de 105px a 200px, com o intervalo de 5px entre cada retangulo.
3. Exibir 20 retângulos cinza sólido, cada um com 20px de altura e com larguras em pixels determinadas pelos 20 elementos do sampleArray.
4. Como no Item #3, mas alternando cores para que retângulo sim, retângulo não seja vermelho.
5. Como no Item #3, mas pinte os retângulos de largura par de vermelho.

### Envio

Faça o push do código para o seu repositório GitHub e implemente-o GitHub pages. No Canvas, por favor, envie sua url do GitHub Pages: (ex: https://nomedeusuario.github.io/s\_js-katas-3) e envie o link do seu repositório nos comentários. Após ser a correção, seu projeto deverá ficar privado.

