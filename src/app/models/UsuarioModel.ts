export class UsuarioModel {
  constructor(
    public nombre: string,
    public email: string,
    public password: string,
    public img?: string,
    public role?: string,
    public _id?: string
  ) { }
}
