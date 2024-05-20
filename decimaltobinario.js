function decimal_binario(numero) {
    if(numero < 2){
        return numero.toString();
    }
    octal="";
    while (numero > 7) {
        resto = numero % 2;
        octal = resto.toString() + octal;
        numero = Math.floor(numero / 2);
    }
    return numero.toString()+octal;
}

function teste_decimal_octal() {
    console.log("iniciando teste");
    resultado = decimal_octal(64);
    if (resultado == "100") {
        console.log("Passou o teste no decimal 64 e binario 100");
    } else {
        console.log("Falhou o teste no decimal 64 e binario 100");
    }
    resultado = decimal_octal(0);
    if(resultado == "0"){
        console.log("Passou o teste no decimal 0 e octal");
    }else{
            console.log("Falhou o teste no decimal 0 e octal");
        }
    
}
teste_decimal_octal();