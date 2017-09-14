export class VehiculoEntity {
  tipo: string;
  matricula: string;
  marca: string;
  modelo: string;
  version: string;
  combustible: string;
  codMotor: string;
  potencia: number;
  tipoPintura: string;
  codColor: string;
  fechaFab: string;
  fechaMatr: string;

  constructor() {
    this.tipo = '';
    this.matricula = '';
    this.marca = '';
    this.modelo = '';
    this.version = '';
    this.combustible = '';
    this.codMotor = '';
    this.potencia = -1;
    this.tipoPintura = '';
    this.codColor = '';
    this.fechaFab = '';
    this.fechaMatr = '';
  }
}
