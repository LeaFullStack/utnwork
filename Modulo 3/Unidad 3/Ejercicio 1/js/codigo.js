var metros;
metros=parseInt(prompt('Escriba la distancia en metros que debe recorrer',''));
if (metros>0 && metros<1001) {
    document.write(`El medio de transporte apropiado para esa distancia es <b>caminar</b>`);
}
else if (metros>1000 && metros<10001) {
    document.write(`El medio de transporte apropiado para esa distancia es <b>bicicleta</b>`);
}
else if (metros>10000 && metros<30001) {
    document.write(`El medio de transporte apropiado para esa distancia es <b>colectivo</b>`);
}
else if (metros>30000 && metros<100001) {
    document.write(`El medio de transporte apropiado para esa distancia es <b>auto</b>`);
}
else if (metros>100000) {
    document.write(`El medio de transporte apropiado para esa distancia es <b>avion</b>`);
}
else {
    document.write(`<b>El valor ingresado es incorrecto</b>`);
}