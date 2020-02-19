import Nombre from './nombre.js';
import Fecha from './fecha.js';
import Time from './time.js';
import Paciente from './paciente.js';
import Doctor from './doctor.js'
export default class Cita{
    constructor(fecha,hora,doctor,paciente){
        this.fecha = fecha;
        this.hora = hora;
        this.doctor = doctor;
        this.paciente = paciente;
    }
    getCita(){
        return `${this.fecha.getFecha()},${this.hora.getFormato24()},Dr. ${this.doctor.getNombreCompleto()},${this.paciente.getNombreCompleto()}`;
    }
}
var cita = new Cita(new Fecha(2,2,2019),new Time(10,50),new Nombre('felipe','rodriguez','ontiveros'),new Nombre('DELTAX','rodriguez','ontiveros'));
console.log(cita.getCita());
