export class ClienteEntity {

  numCli: number;
  codigo: number;
  grupo: string;
  nombre: string;
  apellidos: string;
  compania: string;
  tipoDoc: string;
  numDoc: string;
  direccion: string;
  codPostal: string;
  localidad: string;
  provincia: string;
  pais: string;
  telefono1: string;
  telefono2: string;
  fax: string;
  email: string;
  nota: string;
  numPol: string;
  tipoIva: string;
  iva: string;
  descuento: string;
  fechaPago: string;

  constructor() {
    this.numCli = -1;
    this.codigo = -1;
    this.grupo = '';
    this.nombre = '';
    this.apellidos = '';
    this.compania = '';
    this.tipoDoc = '';
    this.numDoc = '';
    this.direccion = '';
    this.codPostal = '';
    this.localidad = '';
    this.provincia = '';
    this.pais = '';
    this.telefono1 = '';
    this.telefono2 = '';
    this.fax = '';
    this.email = '';
    this.nota = '';
    this.numPol = '';
    this.tipoIva = '';
    this.iva = '';
    this.descuento = '';
    this.fechaPago = '';
  }

}
