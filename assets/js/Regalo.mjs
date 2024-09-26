class Regalo {
  constructor(ancho, largo, alto) {
    this.ancho = ancho;
    this.largo = largo;
    this.alto = alto;
  }

  calcularPapel() {
    let lado1 = this.largo * this.ancho;
    let lado2 = this.ancho * this.alto;
    let lado3 = this.alto * this.largo;
    let ladoMenor = Math.min(lado1, lado2, lado3);
    const areaSuperficie = 2 * lado1 + 2 * lado2 + 2 * lado3;
    const papel = areaSuperficie + ladoMenor;
    return papel;
  }
}

export default Regalo;
