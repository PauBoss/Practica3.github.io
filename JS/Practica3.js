/**
* A continuación, creo la función listaOrdenada, que se encargará de mostrar
* la lista ordenada en caso de que el usuario quiera.
**/
function listaOrdenada(list){
    
    let ul = document.getElementById(list);    
    let lista = ul.getElementsByTagName("li");

    let arrayCanciones = Array.from(lista);
    arrayCanciones.sort((a, b) => a.textContent.localeCompare(b.textContent))
    .forEach(li => ul.appendChild(li));
   
}


/**
* Ahora, creo la función mensajeConfirmacion, que se encargará de preguntar al usuario 
* y mostrar la lista ordenada o no, dependiendo de su elección. 
**/
function mensajeConfirmacion(){

    var mensaje;
    var opcion = confirm("Quieres la pagina ordenada alfabeticamente?");

    if (opcion == true) {

        mensaje = listaOrdenada("componentes");
        alert("De acuerdo, la lista SI va a ser ordenada alfabeticamente.");
        
	} 

	else {
	    
		alert("De acuerdo, la lista NO va a ser ordenada alfabeticamente.");

	}

}

/**
* Por último, la función mostrar, mostrará al usuario la funcion 
* mensajeConfirmación tras pasar 3 segundos.
**/
function mostrar(){

	setTimeout("mensajeConfirmacion()", 3000);

}

mostrar();


