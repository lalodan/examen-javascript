function comprimirCadena(str) {
    if (!str) return "Campo vacío";

    let resultado = "";
    let contador = 1;
    let actual = str[0];

    for (let i = 1; i < str.length; i++) {
        if (str[i] === actual) {
            contador++;
        } else {
            resultado += actual + "-" + contador + "-";
            actual = str[i];
            contador = 1;
        }
    }

    resultado += actual + "-" + contador;

    return resultado;
}

console.log(comprimirCadena('Queso'));  
console.log(comprimirCadena('GG'));       
console.log(comprimirCadena('5517453637'));          
console.log(comprimirCadena(''));             
console.log(comprimirCadena('aaabbaa'));      
