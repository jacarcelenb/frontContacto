export class Contacto {
    id?: number;
    nombres: string;
    telefono: string;
    correo: string;

    constructor(nombres: string, telefono: string, correo: string ){
        this.nombres = nombres;
        this.telefono = telefono;
        this.correo = correo;
    }
}