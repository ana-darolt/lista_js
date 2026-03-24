function ex05() {

    let n = Number(prompt("Digite um número inteiro:"));
    let novo;

    if (n % 2 == 0) {
        novo = n + 1;
    } else {
        novo = n - 1;
    }

    console.log("Resultado: " + novo);
}
