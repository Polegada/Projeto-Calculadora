function insert(num) {
  var numero = document.getElementById('resultados').innerHTML;
  document.getElementById('resultados').innerHTML = numero + num;
}

function clean() {
  document.getElementById('resultados').innerHTML = '';
}

function calcular() {
  var resultado = document.getElementById('resultados').innerHTML;
  if (resultado) {
    document.getElementById('resultados').innerHTML = eval(resultado);
  }
}
