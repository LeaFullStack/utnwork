var i;
var mayor=0;
var arreglo=[0];
var cantidad;
cantidad=parseInt(prompt(`Ingrese la cantidad de números a comparar`,``));
for (i=0;i<cantidad;i++) {
    arreglo[i]=parseInt(prompt(`Ingrese el número ${i+1} de ${cantidad}`,``));
    if (arreglo[i]>mayor) {
        mayor=arreglo[i];
    }
}
document.write (`Los números ingresados son: `);
for (i=0;i<cantidad;i++) {
    document.write (`${arreglo[i]} `);
}
document.write (`<br/>El número mayor es: ${mayor}`);