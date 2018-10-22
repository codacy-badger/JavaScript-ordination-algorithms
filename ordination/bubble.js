//*
  * 22-10-2018 Version 1.0.1
  * Aun por modificar y optimizar. Está es la primera versión.
  *//

//*
  * Se decide separar en dos funciones distintas para mejorar el rendimiento del proceso.
  *//
function ordination_bubble( miArray, orden = 0) {
	let ok = true;
	if ( !Array.isArray( miArray ) ){
		console.error('El parametro pasado no es del tipo array.');
		ok = false;
	}else{
		miArray.forEach( function( element ){
			if ( !Number.isFinite( element ) ){
				console.error('Valor no valido:' + element);
				ok = false;
			}
		});
	}
	if ( ok ){
		if (orden == 'DES') {
  			miArray = ordination_bubbleDES(miArray);  
  		} else  {
   			 miArray = ordination_bubbleASC(miArray); 
 		}	
	}
  
  return miArray;
}
//*
  * Ordenación mediante el metodo de la burbuja de forma desdendente.
  *//
function ordination_bubbleDES(miArray){
	let l = miArray.length;
 	let aux = 0;
	for (let x = 1; x < l; x++) {
      for (let k = 0; k < l; k++) {
        if (miArray[k] < miArray[k + 1]){
          aux = miArray[k];
          miArray[k] = miArray[k + 1];
          miArray[k + 1] = aux;
        }
      }
    }   
	return miArray;
}

//*
  * Ordenación mediante el metodo de la burbuja de forma ascendente.
  *//
function ordination_bubbleASC(miArray){
	let l = miArray.length;
 	let aux = 0;
	for (let x = 1; x < l; x++) {
      for (let k = 0; k < l; k++) {
        if (miArray[k] > miArray[k + 1]){
          aux = miArray[k];
          miArray[k] = miArray[k + 1];
          miArray[k + 1] = aux;
        }
      }
    }   
	return miArray;
}
