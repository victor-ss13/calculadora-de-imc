alert("Separe as casas decimais com ponto (.)")

let peso = parseFloat(prompt("Insira seu peso"));
let altura = parseFloat(prompt("Insira sua altura"));
let imc = (peso / (altura ** 2)).toFixed(2);
let st = '';

if (imc < 18.5) {
    st = "baixo peso"; 
} else if (imc <= 24.9) {
    st = "peso adequado";
} else if (imc <= 29.9) {
    st = "sobrepeso";
} else if (imc <= 34.9) {
    st = "obesidade grau I";
} else if (imc <= 39.9) {
    st = "obesidade grau II";
} else if (imc >= 40) {
    st = "obesidade grau III";
} else {
        alert("Valor inválido!");
}

console.log(`Seu IMC é de ${imc} e você está com ${st}.`)