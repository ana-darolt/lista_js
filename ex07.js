function ex07() {

    let codigo = prompt("Digite o código do picolé:");
    let preco = 0;

    if (codigo == "a") {
        preco = 1.50;
    } else if (codigo == "b") {
        preco = 2.50;
    } else if (codigo == "c") {
        preco = 2.50;
    } else if (codigo == "d") {
        preco = 3.20;
    } else if (codigo == "e") {
        preco = 3.40;
    } else if (codigo == "f") {
        preco = 3.00;
    } else if (codigo == "g") {
        preco = 3.60;
    } else if (codigo == "h") {
        preco = 4.00;
    } else if (codigo == "i") {
        preco = 5.00;
    } else {
        console.log("Código inválido");
    }

    if (preco > 0) {
        console.log("Preço: R$ " + preco);
    }
}
