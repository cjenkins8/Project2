document.getElementById('mortgage-form').addEventListener('submit', function(event) {
    event.preventDefault();


    const principal = parseFloat(document.getElementById('principal').value);
    const rate = parseFloat(document.getElementById('rate').value);
    const termInYears = parseInt(document.getElementById('term').value);


    if (isNaN(principal) || isNaN(rate) || isNaN(termInYears)) {
        alert('Please enter valid numbers for all fields.');
        return;
    }


    const monthlyRate = rate / 100 / 12;
    const termInMonths = termInYears * 12;
    const monthlyPayment = (principal * monthlyRate) / (1 - Math.pow(1 + monthlyRate, -termInMonths));


    const resultElement = document.getElementById('result');
    resultElement.innerHTML = `Monthly Payment: $${monthlyPayment.toFixed(2)}`;
});
