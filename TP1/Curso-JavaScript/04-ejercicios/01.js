function cualEsMayor(a, b) {
    if (a == b) {
        return "Los números son iguales.";
    } else if (a > b) {
        return a
    } else {
        return b
    }
}

let mayor = cualEsMayor(5, 11);

console.log(mayor);