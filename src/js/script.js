const form = document.getElementById('form');

form.addEventListener('submit', function(event) {
    event.preventDefault();

    const weight = document.getElementById('weight').value;
    const height = document.getElementById('height').value;

    const bmi = (weight / (height ** 2)).toFixed(2);

    const value = document.getElementById('value');
    let description = '';

    document.getElementById('infos').classList.remove('hidden');

    if (bmi < 18.5) {
        description = 'Cuidado! Você está abaixo do peso!'
    } else if (bmi <= 24.9) {
        description = 'Você está no peso ideal!';
    } else if (bmi <= 29.9) {
        description = 'Atenção! Você está acima do peso!';
    } else if (bmi <= 34.9) {
        description = 'Cuidado! Você está com obesidade grau I!';
    } else if (bmi <= 39.9) {
        description = 'Cuidado! Você está com obesidade grau II!';
    } else if (bmi >= 40) {
        description = 'Cuidado! Você está com obesidade grau III!';
    } else {
        description = 'Error';
    }

    value.textContent = bmi.replace('.', ',');
    document.getElementById('description').textContent = description;
})