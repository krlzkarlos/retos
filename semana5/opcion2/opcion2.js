let recargo = 0.05;
let sencilla = 1;
let dobles = 2;
let triples = 3;
let PrecioSencilla = 20;
let PrecioDobles = 25;
let PrecioTriples = 28;
let ti = ["1. Sencilla", "2. Dobles", "3. Triples"];
let tarjeta = ["1. SI", "2. NO"];
let llevar = +prompt(
  "Ingresa el codigo de la hamb: 1.Sencilla - 2.Dobles - 3.Triples"
);
let cantidad = +prompt("cuantas llevaras ?");
let tarjetaPregunta = +prompt("pagaras con tarjeta? : 1.SI   ---  2.NO");
let hamb = ti[llevar - 1];
let tarjetastatus = tarjeta[tarjetaPregunta - 1];

if ((parseInt(hamb) == sencilla) & (parseInt(tarjetastatus) == 2)) {
  let resultadoOne = cantidad * PrecioSencilla;
  alert(`El costo total seria: $${resultadoOne}`);
} else if ((parseInt(hamb) == sencilla) & (parseInt(tarjetastatus) == 1)) {
  let resultadoOnet = cantidad * PrecioSencilla;
  let resultadoOnets = resultadoOnet * recargo + resultadoOnet;
  alert(
    `El costo total seria: $${resultadoOnets} incluye un recargo de $${
      resultadoOnet * recargo
    } por uso de la tarjeta`
  );
} else if ((parseInt(hamb) == dobles) & (parseInt(tarjetastatus) == 2)) {
  let resultadoOne = cantidad * PrecioDobles;
  alert(`El costo total seria: $${resultadoOne}`);
} else if ((parseInt(hamb) == dobles) & (parseInt(tarjetastatus) == 1)) {
  let resultadoOnet = cantidad * PrecioDobles;
  let resultadoOnets = resultadoOnet * recargo + resultadoOnet;
  alert(
    `El costo total seria: $${resultadoOnets} incluye un recargo de $${
      resultadoOnet * recargo
    } por uso de la tarjeta`
  );
} else if ((parseInt(hamb) == triples) & (parseInt(tarjetastatus) == 2)) {
  let resultadoOne = cantidad * PrecioTriples;
  alert(`El costo total seria: $${resultadoOne}`);
} else if ((parseInt(hamb) == triples) & (parseInt(tarjetastatus) == 1)) {
  let resultadoOnet = cantidad * PrecioTriples;
  let resultadoOnets = resultadoOnet * recargo + resultadoOnet;
  alert(
    `El costo total seria: $${resultadoOnets} incluye un recargo de $${
      resultadoOnet * recargo
    } por uso de la tarjeta`
  );
} else {
  alert("datos mal ingresados por favor volver a intentar");
}
