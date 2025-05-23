function primeiroMaiuscula(nome){
    return nome.charAt(0).toUpperCase() + nome.slice(1).toLowerCase();
}
console.log(primeiroMaiuscula("JoÃO"))