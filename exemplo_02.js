function verificaNumero(n) {
  if (n > 0) {
    return "Positivo";
  } else if (n < 0) {
    return "Negativo";
  } else {
    return "Zero";
  }
}
console.log(verificaNumero(1));
console.log(verificaNumero(-1));
console.log(verificaNumero(0));
