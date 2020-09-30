
export class PropiedadModel {

  constructor(
    public titulo: string,
    public direccion: string,
    public ciudad: string,
    public pais: string,
    public habitaciones: number,
    public banios: number,
    public _id?: string,
    public fotografia?: string,
    public precio?: number,
    public calificacion?: number,
    public reviewCount?: number,
    public usuario?: Usuario,
    public updated_at?: string) { }
}

interface Usuario {
  _id: string;
  nombre: string;
  email: string;
}
