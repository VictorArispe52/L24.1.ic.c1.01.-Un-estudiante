/**
 * Se tienen los siguientes datos de un estudiante:
 * cedula, nota1, nota2, nota3
 * Se desa conocer la nota final del estudiante, 
 * que es la suma de las notas anteriores.
 * El programa debe reportar la cedula, cada nota y la nota final.
 */

import Cl_estudiante from "./Cl_estudiante.js"
import Cl_iEstudiante from "./Cl_iEstudiante.js"

let iEstud = new Cl_iEstudiante,
    c = iEstud.leerCedula(),
    n1 = iEstud.leerNota1(),
    n2 = iEstud.leerNota2(),
    n3 = iEstud.leerNota3(),
    estud = new Cl_estudiante(c, n1, n2, n3),
    salida = document.getElementById("salida")

salida.innerHTML = iEstud.reportarEstudiante(estud)

alert('presione una tecla')

estud.nota1 = '20'

salida.innerHTML += iEstud.reportarEstudiante(estud)
