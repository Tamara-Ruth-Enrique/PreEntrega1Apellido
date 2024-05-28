
        // Función para calcular el promedio
        function calcularPromedio() {
            let totalNotas = 0;
            let cantidadNotas = 0;

            // Ciclo para recibir las notas hasta que se ingrese "fin"
            while (true) {
                let nota = prompt("Ingrese una nota (o escriba 'fin' para terminar):");

                // Verificar si se ingresó "fin"
                if (nota.toLowerCase() === "fin") {
                    break; // Salir del ciclo
                }

                // Convertir la nota a número
                nota = parseFloat(nota);

                // Verificar si la nota es válida (osea que no sea un texto )
                if (!isNaN(nota)) {
                    totalNotas += nota;
                    cantidadNotas++;
                } else {
                    alert("Por favor, ingrese una nota válida."); 
                }
            }

            // Calcular el promedio
            const promedio = totalNotas / cantidadNotas;

            // Mostrar el promedio en un alert
            alert(`El promedio de las ${cantidadNotas} notas ingresadas es: ${promedio.toFixed(2)}`);  // se utiliza tofixed para retornar un numero en decimales
        }

        // Llamar a la función para empezar el cálculo del promedio
        calcularPromedio();
