import Fecha from "./js/fecha.js";
import Tiempo from "./js/time.js";
import Nombre from "./js/nombre.js";
import Doctor from "./js/doctor.js";
import Paciente from "./js/paciente.js";
import Cita from "./js/cita.js";
import Hospital from "./js/hospital.js";

var time = new Tiempo(14, 56);
var fecha = new Fecha(10, 2, 2001);
var nombre = new Nombre('felipe', 'rodriguez', 'ontiveros');
var nombre2 = new Nombre('deltax', 'rodriguez', 'ontiveros');
var doctor = new Doctor(nombre,'cirujano pediatra',3121775682,123456789);
var paciente = new Paciente(nombre, fecha, 3121775682);
var cita =new Cita(fecha, time, nombre2, nombre2);
var hospital = new Hospital('hola','calle 123');

console.log(
    time.getFormato12(),
    time.getFormato24()
);

console.log(
    fecha.getAno(),
    fecha.getMeses(),
    fecha.getSemanas(),
    fecha.getDias(),
    fecha.getFecha(),
    fecha.getDiaFecha(),
);
console.log(
    nombre.getNombreCompleto(),
    nombre.getApellidoNombre(),
    nombre.getIniciales(),
);
console.log(
    doctor.getPerfil()
);
console.log(
    paciente.getPerfil()
);
console.log(
    cita.getCita()
);
console.log(
    hospital.registrarDoctor(doctor),
    hospital.registrarCita(cita),
    hospital.listarDoc(),
    hospital.listarCita()
);



