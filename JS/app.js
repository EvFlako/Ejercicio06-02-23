const tarea = document.getElementById('tarea');
const lista = document.getElementById('listaTareas');


const tareasVarias = [];

function cargarTarea(){
    lista.textContent = "";
    tareasVarias.push(tarea.value);
    crear();
}


function crear() {
    tareasVarias.map(
    function agregar(t) {
        const cuerpoTarea = document.createElement ("div");
        const item = document.createElement('li');
        item.textContent = t;
        item.style = "list-style-type:none";
        tarea.value = '';
        const botonEliminar = document.createElement("button");
        cuerpoTarea.append(item,botonEliminar);
        lista.appendChild(cuerpoTarea);
        cuerpoTarea.style = "display:flex; justify-content:space-between; align-items: center;";
        cuerpoTarea.classList = "form-control";
        botonEliminar.classList = "btn btn-danger";
        botonEliminar.textContent = 'Eliminar';
        botonEliminar.onclick = ()=> eliminarTarea(tareasVarias.indexOf(t));
    }
 );
}

function eliminarTarea(indice) {
    tareasVarias.splice(indice, 1);
    console.log(tareasVarias);
    lista.innerHTML = "";
    crear();
};
