//funcao sao blocos de codigo que podem ser reutilizado em qualquwe parte do codigo

function nomeDaFuncao () {
    console.log("Ola mundo");
}
//chamando a função 
nomeDaFuncao();

// funcao por parametros

function soma (a,b) {
    console.log( a * b);
    return a * b // 
}

soma (2 , 3);

// funcao de retorno
function soma (a,b) {
   return a + b 
}

let resultado = somar(5,3)
console.log(resultado);

//funcoes anonimas 
const multiplicar = function(a, b) {
    return a * b;
}



console.log(multiplicar(4,2));

// funcao de seta (arrow functions)

const dividir = (a,b) => a / b;
console.log (dividir(8,2))