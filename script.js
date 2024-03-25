//Estrutura condicional Switch case

let opcao = 1;

switch(opcao){
    case 1:
        console.log("Primeira Opção");
        break;
    case 2:
        console.log("Segunda Opção");
        break;
    case 3:
        console.log("Terceira Opção");
        break;
    default:
        console.log("Opção Invalida")
        break;
}

console.log("O filme do ano de 2024 é...")
var filme = "Duna parte dois";
var input = document.querySelector("#filme")
var valor = input.value;

switch(valor){
    case filme:
        console.log("Duna parte dois");
        break;
    default:
        console.log("Opção Incorreta")
        break;
}


//Manipulação de Texto
let texto = "Duna 2 melhor filme"
//replace - troca trechos do texto
console.log(texto.replace("filme","obra de arte"))
//Texto maisculo
console.log(texto.toUpperCase())
//Definindo os numeros depois do ponto
let num = 123.3809234892375293598
console.log(num.toFixed(2))

console.log(num.toPrecision(2))

//Caixa de confirmação

let teste = confirm("Você gosta de DUNA 2?")
document.write("Resultado <br>", teste)

//Caixa de Texto

let texto1 = prompt("Digite o nome do melhor filme já existente")
document.write("O melhor filme é ", texto1)