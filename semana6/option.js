let btn = document.getElementById("btn");
let input = document.getElementById("input");
let lista = document.getElementById("lista");
let array = [];

btn.addEventListener("click", function () {
  if (input.value === "") {
    alert("Agrega un un campo");
  } else {
    let texto = input.value;
    array.push(texto);
    lista.innerText = array;

    input.value = "";
  }
});
