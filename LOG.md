# Log of changes

19-10-2018 Added Bubble method.

22-10-2018 Updated Bubble method.

```javascript 
//*
  * Se decide separar en dos funciones distintas para mejorar el rendimiento del proceso.
  *//
function ordination_bubble( miArray, orden) {
  if (orden == 'ASC') {
  	miArray = ordination_bubbleASC(miArray);  
  } else {
    miArray = ordination_bubbleDES(miArray); 
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
```
