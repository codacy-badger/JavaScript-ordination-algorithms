//*
  * 19-10-2018 V.1.0.0
  * Aun por modificar y optimizar. Está es la primera versión.
  *//
  function ordination_bubble( miArray, orden) {
  let l = miArray.length;
  let aux = 0;
  
  if (orden == 'ASC') {
    
    for (let x = 1; x < l; x++) {
      for (let k = 0; k < l; k++) {
        if (miArray[k] > miArray[k + 1]){
          aux = miArray[k];
          miArray[k] = miArray[k + 1];
          miArray[k + 1] = aux;
        }
      }
    }     
  } else {
    for (let x = 1; x < l; x++) {
      for (let k = 0; k < l; k++) {
        if (miArray[k] < miArray[k + 1]){
          aux = miArray[k];
          miArray[k] = miArray[k + 1];
          miArray[k + 1] = aux;
        }
      }
    }     
  }
  return miArray;
}
  
