const form = document.getElementById('form');

form.addEventListener('submit', function(event) {
    event.preventDefault(); // esse comando impede que a página atualize sem nos trazer o resultado do IMC

    const weight = document.getElementById('weight').value;
    const height = document.getElementById('height').value;

    const bmi = (weight / (height ** 2)).toFixed(2);

    const value = document.getElementById('value');
    let description = '';

    value.classList.add('attention');

    document.getElementById('infos').classList.remove('hidden');

    if (bmi < 18.5) {
        description = 'Cuidado! Você está abaixo do peso!'
    } else if (bmi <= 24.9) {
        description = 'Você está no peso ideal!';
        value.classList.remove('attention');
        value.classList.add('normal');
    } else if (bmi <= 29.9) {
        description = 'Atenção! Você está acima do peso!';
    } else if (bmi <= 34.9) {
        description = 'Cuidado! Você está com obesidade moderada!';
    } else if (bmi <= 39.9) {
        description = 'Cuidado! Você está com obesidade severa!';
    } else if (bmi >= 40) {
        description = 'Cuidado! Você está com obesidade mórbida!';
    } else {
        description = 'Error';
    }

    value.textContent = bmi.replace('.', ',');
    document.getElementById('description').textContent = description;
})