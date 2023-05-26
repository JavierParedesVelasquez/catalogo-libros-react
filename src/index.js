// Esta linea importa la biblioteca principal de React, a importar React, podemos utilizar los componentes y funcionalidades proporcionados por la biblioteca.
import React from "react";
// Esta linea importa react-dom, es una biblioteca complementaria que proporciona metodos especificos para interactuar con el DOM y renderizar los componentes de React en el navegador.
import { createRoot, render } from "react-dom/client";
// Importar estilos de index.css.
import "./index.css";
// Importar Imagenes de Catalogo.
// . el punto representa el directorio actual
import img1 from "./img/image1.png";
import img2 from "./img/image2.png";
import img3 from "./img/image3.png";
import img4 from "./img/image4.png";
import img5 from "./img/image5.png";
import img6 from "./img/image6.png";
import img7 from "./img/image7.png";
import img8 from "./img/image8.png";
import img9 from "./img/image9.png";
import img10 from "./img/image10.png";
import img11 from "./img/image11.png";
import img12 from "./img/image12.png";
import img13 from "./img/image13.png";
import img14 from "./img/image14.png";
import img15 from "./img/image15.png";

// Crear variables y asignarles un valor
let xtitulo = "HISTORIAS INTREPIDAS PARA CHICOS AUDACES";
// Creando array de libros (15)
let books = [
  {
    id: 1,
    nombre: "Tú y otros desastres naturales.",
    img: img1,
    categoria: "Novela literaria",
  },
  {
    id: 2,
    nombre: "Cuando no queden más estrellas que contar.",
    img: img2,
    categoria: "Novela Romantica",
  },
  {
    id: 3,
    nombre: "La fragilidad de un corazón bajo la lluvia.",
    img: img3,
    categoria: "Novela Romantica",
  },
  {
    id: 4,
    nombre: "Aristóteles y Dante se sumergen en las aguas del mundo.",
    img: img4,
    categoria: "Libros juveniles",
  },
  {
    id: 5,
    nombre: "Aristóteles y Dante descubren los secretos del universo.",
    img: img5,
    categoria: "Libros juveniles",
  },
  {
    id: 6,
    nombre: "El chico que dibujaba constelaciones.",
    img: img6,
    categoria: "Novelas",
  },
  {
    id: 7,
    nombre: "El mar de las almas.",
    img: img7,
    categoria: "Comics",
  },
  {
    id: 8,
    nombre: "ALBA (Atados I).",
    img: img8,
    categoria: "Libros Juveniles",
  },
  {
    id: 9,
    nombre: "Volver a empezar (It Starts with Us).",
    img: img9,
    categoria: "Novelas Romanticas",
  },
  {
    id: 10,
    nombre: "Aullidos de Carabar.",
    img: img10,
    categoria: "Libros de fantasia",
  },
  {
    id: 11,
    nombre: "Pangea.",
    img: img11,
    categoria: "Libros juveniles",
  },
  {
    id: 12,
    nombre: "Nosotros en la luna.",
    img: img12,
    categoria: "Novelas",
  },
  {
    id: 13,
    nombre: "Calcomanía.",
    img: img13,
    categoria: "Novela literaria",
  },
  {
    id: 14,
    nombre: "Romper el círculo.",
    img: img14,
    categoria: "Novela literaria",
  },
  {
    id: 15,
    nombre: "Trilogía Fuego 1. Ciudades de humo.",
    img: img15,
    categoria: "Libros juveniles",
  },
];

let contenidoPage = (
  <div className="book-catalog">
    {/* la variable xtitulo se utiliza como texto (llaves de interpolacion o llaves de insercion)*/}
    <h1 className="title_main">{xtitulo}</h1>
    {/* Seccion Libros */}
    <div className="book-grid">
      {/* Utilizamos metodo map en el array books, para Iterar sobre cada libro. */}
      {/* Esto vendria representar book: variable array / index: vendria a ser los elementos del array */}
      {books.map((book, index) => (
        // key se utiliza para ayudar a React a identificar de manera única los elementos de una lista generada dinámicamente.
        <div key={index} className='book-card'>
            <img src={book.img} alt={book.nombre}/>
            <h2 className='title_book-card'>{book.nombre}</h2>
            <p>{book.categoria}</p>
        </div>
      ))}
    </div>
  </div>
);
// Renderizar un componente JSX
// JSX es una combinaion de HTML y JS

let rootElement = document.getElementById("root");
let root = createRoot(rootElement);
root.render(contenidoPage);
