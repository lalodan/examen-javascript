Array.prototype.myOwnReduce = function(callback, initialValue) {
    let acumulador = initialValue === undefined ? this[0] : initialValue;
    let startIndex = initialValue === undefined ? 1 : 0;

    for (let i = startIndex; i < this.length; i++) {
        acumulador = callback(this[i], acumulador);
    }

    return acumulador;
};

const array = [1, 2, 3, 4, 5];
const callback = (current, acumulador) => {
    acumulador += current;
    return acumulador;
};

console.log(array.myOwnReduce(callback));
