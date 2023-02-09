const tarea = document.getElementById('tarea');
const lista = document.getElementById('listaTareas');


function cargarTarea(){
 const item = document.createElement('li');
 item.textContent = tarea.value;
 lista.appendChild(item);
 tarea.value = '';
}

