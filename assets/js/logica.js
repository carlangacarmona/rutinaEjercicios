// Array de ejercicios disponibles
const ejercicios = ["sentadilla", "banco", "peso muerto", "prensa"];

// Generador de rutina de ejercicios
function* generadorRutina(semanas, dias) {
    let diaContador = 1;

    for (let i = 1; i <= semanas; i++) {
        for (let j = 0; j < dias; j++) {
            const ejercicio = ejercicios[diaContador % ejercicios.length];
            yield `Día ${diaContador}: ${ejercicio}`; // Pausar aquí y devolver el ejercicio
            diaContador++;
        }
    }
}

// Manejador del botón para generar la rutina
document.getElementById('btnGenerar').addEventListener('click', () => {
    const semanas = parseInt(document.getElementById('semanas').value);
    const dias = parseInt(document.getElementById('dias').value);

    if (isNaN(semanas) || isNaN(dias) || semanas <= 0 || dias <= 0) {
        alert('Por favor, ingresa valores válidos.');
    } else {
        console.clear(); // Limpiar consola para evitar confusión
        console.log(`Semanas: ${semanas}`);
        console.log(`Días: ${dias}`);

        // Iniciar el generador
        const rutina = generadorRutina(semanas, dias);
        let resultado = rutina.next();

        // Iterar sobre los resultados del generador hasta que esté completo
        while (!resultado.done) {
            console.log(resultado.value); // Mostrar en consola el ejercicio del día
            resultado = rutina.next(); // Pasar al siguiente ejercicio
        }
    }
});
