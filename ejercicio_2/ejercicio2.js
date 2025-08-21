function contarDiferencias(str1, str2) {
    let cantidadDeDiferencias = 0;

    if (str1.length !== str2.length) {
        cantidadDeDiferencias += Math.abs(str1.length - str2.length);
    }

    for (let i = 0; i < str1.length; i++) {
        if (str1[i] !== str2[i]) {
            cantidadDeDiferencias++;
        }
    }
   return cantidadDeDiferencias;
}


console.log(contarDiferencias("hola", "hola"));  

console.log(contarDiferencias("cola", "loca"));    

console.log(contarDiferencias("carro", "correr")); 

console.log(contarDiferencias("hola", "holaa"));  
console.log(contarDiferencias("abc", "abcde"));  
