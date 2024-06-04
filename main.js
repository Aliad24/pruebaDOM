// acceder a los nodos
// nodo body
const bodyfondo = document.body;
// tres nodos con los id de fondo1, fondo2 y fondo3
const circulo_fondo1 = document.getElementById("fondo01");
const circulo_fondo2 = document.getElementById("fondo02");
const circulo_fondo3 = document.getElementById("fondo03");

// crear un objeto que ha cada fondo se le asigna un estilo de backgroundImage con una url diferente
const fondos = {
    fondo1: "url(https://images.unsplash.com/photo-1686922187671-510b88dfc927?q=80&w=2187&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)",
    fondo2: "url(https://images.unsplash.com/photo-1651234131825-5b415e44411e?q=80&w=2185&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)",
    fondo3: "url(https://images.unsplash.com/photo-1714379267239-c858288f4dfe?q=80&w=2179&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)"
};

// utilizar el eventlistener para que al hacer click en el circulo_fondo1 se cambie el fondo del body, los tres circulos, al hacer clic en cada uno de ellos se cambia el fondo del body, de cada uno diferente asignado, clic individuales
circulo_fondo1.addEventListener("click", function() {
    bodyfondo.style.backgroundImage = fondos.fondo1;
});

circulo_fondo2.addEventListener("click", function() {
    bodyfondo.style.backgroundImage = fondos.fondo2;
});

circulo_fondo3.addEventListener("click", function() {
    bodyfondo.style.backgroundImage = fondos.fondo3;
});
