function ex04() {

    let valores = [];

    for (let i = 1; i <= 4; i++) {
        let num = Number(prompt("Digite o " + i + "º valor inteiro:"));

        if (!isNaN(num)) {
            valores.push(num);
        } else {
            alert("Digite um valor válido");
            i--;
        }
    }

    valores.sort(function(a, b) {
        return b - a;
    });

    alert("Valores em ordem decrescente: " + valores.join(", "));
}
