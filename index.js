/* EJERCICIO 1: */
console.log(
    "------------------------- EJERCICIO 1 ---------------------------------"
);
var cantidadDeGatos = 6;

for (let i = 1; i <= cantidadDeGatos; i++) {
    if (i % 3 === 2) {
        console.log(`Gato #${i}: 😸`);
    } else if (i % 3 === 1) {
        console.log(`Gato #${i}: 😺`);
    } else {
        console.log(`Gato #${i}: 😹`);
    }
}

/* EJERCICIO 2: */

console.log(
    "------------------------- EJERCICIO 2 ---------------------------------"
);

var cantidadDeGatos = 5;
var cantidadDePasos = 4;

for (let i = 1; i <= cantidadDeGatos; i++) {
    let gato = `Gato #${i}: 🐈 `;
    for (let j = 1; j <= cantidadDePasos; j++) {
        gato = gato.concat("🐾");
    }
    console.log(gato);
}

/* EJERCICIO 3: */

console.log(
    "------------------------- EJERCICIO 3 ---------------------------------"
);

var cantidadDeGatos = 10;
var cantidadDePasos = 4;

for (let i = 1; i <= cantidadDeGatos; i++) {
    let gato = `Gato #${i}: `;

    if (i % 2 === 0) {
        gato = gato.concat("🐈‍⬛");
    } else {
        gato = gato.concat("🐈");
    }

    gato = gato.concat(" "); // Dejo un espacio entre el gato y las patas

    for (let j = 1; j <= cantidadDePasos; j++) {
        gato = gato.concat("🐾");
    }
    console.log(gato);
}
