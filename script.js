/** 
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
var filme = "Duna 2";
let film = 0;
var input = document.getElementById("filme")
film = input.value;
console.log(input)
//var valor = input.value;

switch(input){
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

//let teste = confirm("Você gosta de DUNA 2?")
//document.write("Resultado <br>", teste)

//Caixa de Texto

//let texto1 = prompt("Digite o nome do melhor filme já existente")
//document.write("O melhor filme é ", texto1)

//Incremento

let valor = 7;
console.log(valor)
valor = valor + 1
console.log(valor)

let varlor1 = 10;
console.log(varlor1)
varlor1++;
console.log(varlor1);
*/
/** 
//FOR
for(let i=0;i<10;i++){
   for(let i=0;i<10;i++){
    document.write("<br>Como escrito na profecia! <br>")
    document.write("Lisan Al-Gaib! <br>")
    const myImage = new Image(200, 150);
    myImage.src = "escrito.jpg";
    document.body.appendChild(myImage);

   }
   
}
//For
let filme = ["Duna", "Duna 2", "1917", "Oppenheimer"]
for(let i=0;i<filme.length;i++){
    console.log(filme[i])
}
for(let fil of filme){
    console.log(fil)

}


//While

let contador = 0;
while(contador<10){
    console.log("Contando" + contador)
    contador++;
}

//do While

let num =0;

do{
    console.log("Contar numéros", num)
    num++;
}while(num < 0)
*/

//Funções

function profecia(){
    for(let i=0;i<10;i++){
        for(let i=0;i<10;i++){
         document.write("<br>Como escrito na profecia! <br>")
         document.write("Lisan Al-Gaib! <br>")
         const myImage = new Image(200, 150);
         myImage.src = "escrito.jpg";
         document.body.appendChild(myImage);
     
        }
        
     }
}
profecia();