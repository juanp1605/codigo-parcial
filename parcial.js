function sumaDivisores(numero) {
    let suma = 0;
    for (let i = 1; i <= Math.floor(numero / 2); i++) {
        if (numero % i === 0) {
            suma += i;
        }
    }
    return suma;
}

function sonAmigos(num1, num2) {
    const sumaDivNum1 = sumaDivisores(num1);
    const sumaDivNum2 = sumaDivisores(num2);

    if (sumaDivNum1 === num2 && sumaDivNum2 === num1) {
        return true;
    } else {
        return false;
    }
}

var num1 = parseInt(prompt("ingresa el numero que desees"));
var num2 = parseInt(prompt("ingresa el numero que desees"));

if (sonAmigos(num1, num2)) {
    console.log(num1 + ' y ' + num2 + ' son números amigos.');
    alert(num1 + ' y ' + num2 + ' son números amigos.')
} else {
    console.log(num1 + ' y ' + num2 + ' no son números amigos.');
    alert(num1 + ' y ' + num2 + ' no son números amigos.')
}

// INTEGRANTE : JUAN PABLO GIRALDO MOSQUERA 
