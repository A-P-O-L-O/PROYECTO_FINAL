export type IMoto = {
  marca: string;
  modelo: string;
  año: number;
  cilindrada: number;  // cc
  color: string;
  tipo: "deportiva" | "naked" | "touring" | "cruiser" | "adventure" | "scooter" | "custom" | "classic";
  potencia: number;    // HP
  peso: number;       // kg
  transmision: "manual" | "automática";
  precio: number;      // USD
  disponible: boolean;
  combustible: "gasolina" | "eléctrico" | "híbrido";
  autonomia?: number;   // km, opcional (relevante para eléctricos)
  consumo: number;     // litros/100km
  sistemaFrenos: string;
  capacidadTanque: number;  // litros
  numeroMarchas: number;
  alturaAsiento: number;    // cm
  fechaIngreso: Date;
  descripcion?: string;
  imagenUrl?: string;
}
