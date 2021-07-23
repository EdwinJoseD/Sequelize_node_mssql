

export interface IUsuario{
    identificacion: string;
    primerApellido: string;
    segundoApellido: string;
    nombres: string;
    numeroFincas: number;
    telefono1: string;
    telefono2: string | null;
    correo: string;
    password: string;
    fechaIngreso: Date;
    foto: string;
}