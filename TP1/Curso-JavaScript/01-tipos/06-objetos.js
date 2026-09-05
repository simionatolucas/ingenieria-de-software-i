// personaje de TV
let nombre = "Tanjiro";
let anime  = "Demon Slayer";
let edad = 17;

let personaje = {
    nombre: "Tanjiro",
    anime: "Demon Slayer",
    edad: 17, 
};

console.log(personaje);
console.log(personaje.nombre);
console.log(personaje['anime']);

personaje.edad = 21;

let llave = 'edad';
personaje[llave] = 18;

delete personaje.anime;

console.log(personaje);