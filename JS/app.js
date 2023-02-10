const tarea = document.getElementById('tarea');
const lista = document.getElementById('listaTareas');


function cargarTarea(){
    const cuerpoTarea = document.createElement ("div");
 const item = document.createElement('li');
 item.textContent = tarea.value;
 item.style = "list-style-type:none";
 tarea.value = '';
 const botonEliminar = document.createElement("button");
 cuerpoTarea.append(item,botonEliminar);
 lista.appendChild(cuerpoTarea);
 cuerpoTarea.style = "display:flex;justify-content:space-between"
}

