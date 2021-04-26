let l = +prompt("Cantidad de litros que produce");
let pg = +prompt("precio del galon");
let conversion = 3.785;
let tg = l / conversion;
function calculo() {
  let ga = pg * tg;
  return ga;
}
let resultado = calculo(pg, tg);
alert(`La ganancia seria S/.${resultado.toFixed(2)}`);
