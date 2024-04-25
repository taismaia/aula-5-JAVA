// let soma = 0
// let maior = Number.NEGATIVE_INFINITY
// let menor = Number.POSITIVE_INFINITY

// for (let i = 1; i<=5; i++){
//     const numero = Number(prompt("Digite um número: "))
//     soma += numero
//     if(numero > maior){
//         maior = numero
//     }
//     if(numero < menor){
//         menor = numero
//     }
// }
// const media = soma / 5

// console.log(`A soma dos números: ${soma}`);
// console.log(`A média dos números: ${media}`);
// console.log(`O maior número: ${maior}`);
// console.log(`O menor número: ${menor}`);




// const palavra = prompt("Digite uma palavra: ")
// let contador_vogal = 0
// let contador_consoante = 0 
// const vogais = "aeiouáàâäéèíóôõúü"
// const consoantes = "bcdfghjklmnpqrstvwyxz"

// for(let letra_da_vez of palavra.toLowerCase()){
//     if(vogais.includes(letra_da_vez)){
//         contador_vogal ++
//     }else if(consoantes.includes(letra_da_vez)){
//         contador_consoante ++ 
//     }
// }

// console.log(`Total de caracteres ${palavra.length}`)
// console.log(`Total de vogais ${contador_vogal}`)
// console.log(`Total de consoantes ${contador_consoante}`)




// ARRAYS
// // const nome = "João"
// // const idade = 30
// // const altura = 1.85
// // const casado = true

// const pessoa = ["João", 30, 1.85, true]
// const numeros = [2,6,10,25,3,8]
// const frutas = ["Abacaxi", "Melancia", "Uva"]
// const habilitados = [true,false,false,true,true]

// console.log(pessoa)
// console.log(numeros)
// console.log(frutas)
// console.log(habilitados)
// console.log(frutas[1])

// frutas[0] = "Laranja"
// console.log(frutas)



// ADICIONANDO ITENS
// const frutas = ["Abacaxi", "Melancia", "Uva"]

// console.log("Primeira versão",frutas)

// frutas.push("Limão") //ADICIONA NO FINAL DA LISTA
// frutas.unshift("Laranja") // ADICIONA NO COMEÇO DA LISTA

// console.log("Segunda versão", frutas)



// REMOVENDO ITENS
// const frutas = ["Abacaxi", "Melancia", "Uva", "Acerola", "Maça"]

// console.log("Primeira versão",frutas)

// frutas.pop() //REMOVE O ULTIMO ITEM
// frutas.shift() //REMOVE O PRIMEIRO ITEM

// console.log("Segunda versão", frutas)


// const frutas = ["Abacaxi", "Melancia", "Uva", "Acerola", "Maça"]

// console.log("Primeira versão",frutas)

// frutas.splice(2,0, "Laranja", "Limão")

// console.log("Segunda versão", frutas)



const nomes = ["João", "Maria", "Pedro", "Ana", "Abel"]
nomes.sort()
nomes.push("Amanda")
nomes.shift("João")
nomes.unshift("Raimundo")
nomes.splice(2,2, "Taís", "Victória")
nomes.splice(1,1)

console.log(nomes)