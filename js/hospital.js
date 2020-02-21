'use strict';
export default class Hospital {
    constructor(nombre, direccion, doctores, citas) {
        this.nombre = nombre;
        this.direccion = direccion;
        this.doctores = [];
        this.citas = [];
    }

    registrarDoctor(doctor) {
        this.doctores.push(doctor);
    }

    registrarCita(cita) {
        this.citas.push(cita);
    }

    listarDoc() {
        this.doctores.forEach(i => {
            return(i.getPerfil(), '\n');
        });
    }

    listarCita() {
        this.citas.forEach(i => {
            return(i.getCita(), '\n');
        });
    }
}