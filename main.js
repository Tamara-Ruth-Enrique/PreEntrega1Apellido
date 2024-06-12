
        function calcularPromedio(numeros) {
    const suma = numeros.reduce((acumulador, valorActual) => acumulador + valorActual, 0);
    return suma / numeros.length;
}

//objetos que tienen varios arrays de números
const datos = {
    matematicas: [8, 9, 6, 6, 7],
    fisica: [8, 7, 9, 6, 8],
    quimica: [7, 6, 6, 6, 7]
};

// Calculo de promedio de cada materia
function mostrarPromedios(datos) {
    for (let materia in datos) {
        const promedio = calcularPromedio(datos[materia]);
        console.log(`El promedio de ${materia} es ${promedio.toFixed(2)}`);
    }
}

// Llamar a la función para mostrar los promedios
mostrarPromedios(datos);
