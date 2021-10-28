//import { filterData } from './data.js';

//import data from './data/ghibli/ghibli.js';

/*-- Evento para flechas del carrusel--*/
const fila = document.querySelector('.contenedorCarrusel');

const flechaIzquierda = document.getElementById('flechaIzquierda');
flechaIzquierda.addEventListener('click', ()=>{
  fila.scrollLeft -= fila.offsetWidth;
});

const flechaDerecha = document.getElementById('flechaDerecha');
flechaDerecha.addEventListener('click', ()=>{
  fila.scrollLeft += fila.offsetWidth;
});

//console.log(filterData, data);
