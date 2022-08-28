var i;
var mayor=0;
const arreglo=[100,500,750,700,300];
const cantidad=5;
for (i=0;i<cantidad;i++) {
    if (arreglo[i]>mayor) {
        mayor=arreglo[i];
    }
}
document.write (`Los números ingresados son: `);
for (i=0;i<cantidad;i++) {
    document.write (`${arreglo[i]} `);
}
document.write (`<br/>El número mayor es: ${mayor}`);