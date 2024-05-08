// export interface Pagina {
//     mensaje: string;
//     object:  Usuario[];
// }

export interface Usuario {
    persona:       Persona;
    sessiones:     any[];
    rol_usuarios:  any[];
    userName:      string;
    password:      string;
    mail:          string;
    sessionActive: string;
    idUsuario:     number;
    status:        string;
}

export interface Persona {
    idPersona:       number;
    nombre:          string;
    apellido:        string;
    fechaNacimiento: Date;
    identificacion:  string;
}
