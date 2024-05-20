//Crear los selectores

const ISBN = document.querySelector("#ISBN");
//const year = document.querySelector("#year");
const title = document.querySelector("#title");
const author = document.querySelector("#author");
const category = document.querySelector("#category");
const edition = document.querySelector("#edition");
const resultado = document.querySelector("#resultado");

//crear estructura para guardar los datos de la busqueda

const datosBusqueda = {
    ISBN: '',
    year:'',
    title: '',
    author:'',
    category: '',
    edition: '',
}

//crear eventos

//cargar la bd de los libros

document.addEventListener("DOMContentLoaded",() =>{
    mostrarLibros(books);
})

ISBN.addEventListener("input", e =>{
    datosBusqueda.ISBN = e.target.value;
    filtrarLibros();
})
/*year.addEventListener("input", e =>{
    datosBusqueda.year = e.target.year;
    filtrarLibros();
})*/
title.addEventListener("input", e =>{
    datosBusqueda.title = e.target.value;
    filtrarLibros();
})
author.addEventListener("input", e =>{
    datosBusqueda.author = e.target.value;
    filtrarLibros();
})
category.addEventListener("input", e =>{
    datosBusqueda.category = e.target.value;
    filtrarLibros();
})
edition.addEventListener("input", e =>{
    datosBusqueda.edition = e.target.value;
    filtrarLibros();
})

function mostrarLibros(books){
    limpiarHTML();
    //construir el HTML para colocar el listado de los libros que tengo en
    books.forEach(book => {
        const libroHTML = document.createElement('p');
        const {ISBN, title, author, edition, year, category} = book //destructuring
        libroHTML.innerHTML = `
            <p>${title} - ${author} - ${year} - Edición: ${edition} - ISBN: ${ISBN} - Categoría: ${category}</p>
        `;
        resultado.appendChild(libroHTML);
    })
}
function limpiarHTML(){
    while(resultado.firstChild){ 
        resultado.removeChild(resultado.firstChild)
    }
}
function filtrarLibros(){
    const resultado2 = books.filter(filtrarISBN).filter(filtrarTitle).filter(filtrarAuthor).filter(filtrarEdition).filter(filtrarCategory)
    console.log(resultado2)
    if (resultado2.length){
         mostrarLibros(resultado2);
    }else{
         noResultado();
    }
 }
function noResultado(){
    limpiarHTML();
    const noResultado = document.createElement("div");
    noResultado.classList.add("alerta", "error");
    noResultado.appendChild(document.createTextNode("No hay resultados para su busqueda"))
    resultado.appendChild(noResultado);
}
function filtrarISBN(book){
    if(datosBusqueda.ISBN){
        console.log("tiene datos")
        return book.ISBN === datosBusqueda.ISBN
    }
    return book;
}
function filtrarTitle(book){
    if(datosBusqueda.title){
        console.log("tiene datos")
        return book.title === datosBusqueda.title
    }
    return book;
}
function filtrarAuthor(book){
    if(datosBusqueda.author){
        console.log("tiene datos")
        return book.author === datosBusqueda.author
    }
    return book;
}
function filtrarEdition(book){
    if(datosBusqueda.edition){
        console.log("tiene datos")
        return book.edition === datosBusqueda.edition
    }
    return book;
}
/*function filtrarYear(book){
    if(datosBusqueda.year){
        console.log("tiene datos")
        return book.year === datosBusqueda.year
    }
    return book;
}*/
function filtrarCategory(book){
    if(datosBusqueda.category){
        console.log("tiene datos")
        return book.category === datosBusqueda.category
    }
    return book;
}