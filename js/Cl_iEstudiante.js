export default class Cl_iEstudiante {
    leerCedula() {
        return prompt("Ingrese la cédula del estudiante");
    }
    leerNota1() {
        return prompt("Ingrese la nota 1");
    }
    leerNota2() {
        return prompt("Ingrese la nota 2");
    }
    leerNota3() {
        return prompt("Ingrese la nota 3");
    }
    reportarEstudiante(estud) {
        return `
        <br>Cédula: ${estud.cedula}
        <br>Nota 1: ${estud.nota1}
        <br>Nota 2: ${estud.nota2}
        <br>Nota 3: ${estud.nota3}
        <br>Nota Final: ${estud.notaFinal()}
        `;    
    }
}