// Conversão de Fahrenheit para Celsius
const fahrenheitInput = document.getElementById('fahrenheit');
const celsiusResult = document.getElementById('celsiusResult');
const alertMessageF = document.getElementById('alertMessageF');

fahrenheitInput.addEventListener('input', function() {
    const fValue = parseFloat(this.value);
    
    if (isNaN(fValue)) {
        celsiusResult.textContent = '-- °C';
        alertMessageF.textContent = '';
        alertMessageF.className = 'alert';
        return;
    }

    const cValue = (fValue - 32) * 5 / 9;
    celsiusResult.textContent = cValue.toFixed(1) + ' °C';

    if (cValue >= 37.8) {
        alertMessageF.textContent = '⚠️ Temperatura elevada (possível febre)';
        alertMessageF.className = 'alert fever';
    } else {
        alertMessageF.textContent = '✓ Temperatura normal';
        alertMessageF.className = 'alert normal';
    }
});

// Conversão de Celsius para Fahrenheit
const celsiusInput = document.getElementById('celsius');
const fahrenheitResult = document.getElementById('fahrenheitResult');
const alertMessageC = document.getElementById('alertMessageC');

celsiusInput.addEventListener('input', function() {
    const cValue = parseFloat(this.value);
    
    if (isNaN(cValue)) {
        fahrenheitResult.textContent = '-- °F';
        alertMessageC.textContent = '';
        alertMessageC.className = 'alert';
        return;
    }

    const fValue = (cValue * 9 / 5) + 32;
    fahrenheitResult.textContent = fValue.toFixed(1) + ' °F';

    if (cValue >= 37.8) {
        alertMessageC.textContent = '⚠️ Temperatura elevada (possível febre)';
        alertMessageC.className = 'alert fever';
    } else {
        alertMessageC.textContent = '✓ Temperatura normal';
        alertMessageC.className = 'alert normal';
    }
});