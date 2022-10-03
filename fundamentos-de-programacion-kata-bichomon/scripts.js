// 1. Cambia el título "Generation 1 Pokémon" por "Generasión 1 Pokimon".

const title = document.getElementById("gen-1");

title.innerText = "Generasión 1 Pokimon";

// 2. Cambia el color de fondo de la primera generación de Pokimon.

const fondoGen1 = document.getElementsByClassName(
  "infocard-list infocard-list-pkmn-lg"
);

fondoGen1[0].style.background = "black";

// 3. Imprime por consola la URL de la página.

console.log(document.URL)

// 4. Imprime por consola el dominio de la página.

console.log(document.domain)

// 5. Imprime todos los nodos de imagen.

console.log(document.querySelectorAll("img"));
console.log(document.getElementsByTagName("img"));

// 6. Sustituye el atributo "src" de todas las imágenes 
// por este "https://media.giphy.com/media/2v170e71aanfi/giphy.gif"

const source = document.querySelectorAll("img");

for (const img of source) {
  img.setAttribute(
    "src",
    "https://media.giphy.com/media/2v170e71aanfi/giphy.gif"
  );
}
