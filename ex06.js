function ex06() {

    let letra = prompt("Digite uma letra:");
    let l = letra.toLowerCase();

    if (l == "a" || l == "e" || l == "i" || l == "o" || l == "u") {
        console.log("Vogal");
    } else {
        console.log("Consoante");
    }
}
