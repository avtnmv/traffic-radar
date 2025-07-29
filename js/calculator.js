console.log('Script loaded!');
const countryData = {
    // Tier 1
    germany: { facebook: [109, 158], google: [122, 183], seo: [146, 219], push: [61, 97], aso: [97, 146] },
    uk: { facebook: [109, 158], google: [122, 183], seo: [146, 219], push: [61, 97], aso: [97, 146] },
    canada: { facebook: [103, 146], google: [109, 170], seo: [134, 195], push: [54, 91], aso: [85, 134] },
    australia: { facebook: [103, 146], google: [109, 170], seo: [134, 195], push: [54, 91], aso: [85, 134] },
    norway: { facebook: [97, 134], google: [109, 158], seo: [134, 183], push: [48, 85], aso: [85, 122] },
    sweden: { facebook: [97, 134], google: [109, 158], seo: [134, 183], push: [48, 85], aso: [85, 122] },
    netherlands: { facebook: [97, 134], google: [109, 158], seo: [134, 183], push: [48, 79], aso: [85, 122] },
    finland: { facebook: [97, 134], google: [109, 158], seo: [134, 183], push: [48, 79], aso: [85, 122] },
    switzerland: { facebook: [103, 146], google: [122, 170], seo: [146, 195], push: [54, 85], aso: [85, 134] },
    belgium: { facebook: [91, 134], google: [109, 158], seo: [134, 183], push: [48, 79], aso: [73, 109] },
    france: { facebook: [91, 134], google: [109, 158], seo: [134, 183], push: [48, 79], aso: [73, 109] },
    ireland: { facebook: [85, 122], google: [103, 146], seo: [122, 170], push: [42, 73], aso: [73, 109] },
    
    // Tier 2
    poland: { facebook: [73, 109], google: [85, 122], seo: [109, 146], push: [36, 61], aso: [61, 97] },
    spain: { facebook: [73, 109], google: [85, 122], seo: [109, 146], push: [36, 61], aso: [61, 97] },
    italy: { facebook: [79, 115], google: [91, 134], seo: [109, 158], push: [42, 67], aso: [67, 103] },
    portugal: { facebook: [67, 103], google: [79, 115], seo: [97, 146], push: [36, 61], aso: [61, 91] },
    czech: { facebook: [61, 97], google: [73, 109], seo: [91, 134], push: [30, 48], aso: [48, 85] },
    hungary: { facebook: [54, 85], google: [67, 103], seo: [85, 122], push: [30, 48], aso: [48, 79] },
    romania: { facebook: [54, 85], google: [67, 103], seo: [85, 122], push: [30, 48], aso: [48, 79] },
    greece: { facebook: [61, 91], google: [73, 109], seo: [91, 128], push: [30, 48], aso: [48, 79] },
    slovakia: { facebook: [54, 85], google: [67, 97], seo: [85, 122], push: [30, 48], aso: [42, 73] },
    croatia: { facebook: [54, 85], google: [67, 97], seo: [85, 122], push: [30, 42], aso: [42, 67] },
    bulgaria: { facebook: [48, 79], google: [61, 91], seo: [79, 109], push: [24, 36], aso: [36, 61] },
    slovenia: { facebook: [48, 79], google: [61, 91], seo: [79, 109], push: [24, 36], aso: [36, 61] },
    latvia: { facebook: [42, 73], google: [54, 85], seo: [73, 103], push: [21, 36], aso: [30, 54] },
    lithuania: { facebook: [42, 73], google: [54, 85], seo: [73, 103], push: [21, 36], aso: [30, 54] },
    estonia: { facebook: [42, 73], google: [54, 85], seo: [73, 103], push: [21, 36], aso: [30, 54] },
    
    // Tier 3
    ukraine: { facebook: [24, 48], google: [30, 54], seo: [48, 73], push: [18, 30], aso: [24, 48] },
    kazakhstan: { facebook: [24, 48], google: [30, 54], seo: [48, 73], push: [18, 30], aso: [24, 48] },
    india: { facebook: [18, 36], google: [24, 48], seo: [36, 61], push: [12, 24], aso: [18, 36] },
    pakistan: { facebook: [12, 30], google: [18, 36], seo: [30, 48], push: [9, 18], aso: [14, 30] },
    philippines: { facebook: [24, 42], google: [30, 48], seo: [42, 67], push: [14, 26], aso: [24, 42] },
    indonesia: { facebook: [24, 42], google: [30, 48], seo: [42, 67], push: [14, 26], aso: [24, 42] },
    vietnam: { facebook: [24, 42], google: [30, 48], seo: [42, 67], push: [14, 26], aso: [24, 42] },
    thailand: { facebook: [30, 48], google: [36, 54], seo: [48, 73], push: [18, 30], aso: [30, 48] },
    mexico: { facebook: [36, 61], google: [42, 67], seo: [61, 91], push: [24, 36], aso: [36, 61] },
    brazil: { facebook: [42, 67], google: [48, 73], seo: [67, 97], push: [26, 42], aso: [42, 67] },
    argentina: { facebook: [36, 61], google: [42, 67], seo: [61, 85], push: [24, 36], aso: [36, 61] },
    colombia: { facebook: [36, 61], google: [42, 67], seo: [61, 85], push: [24, 36], aso: [36, 61] },
    turkey: { facebook: [30, 54], google: [36, 61], seo: [54, 85], push: [21, 34], aso: [36, 54] },
    egypt: { facebook: [24, 42], google: [30, 54], seo: [48, 73], push: [18, 30], aso: [30, 48] },
    morocco: { facebook: [24, 36], google: [30, 48], seo: [42, 67], push: [14, 24], aso: [24, 42] },
    nigeria: { facebook: [24, 36], google: [30, 48], seo: [42, 67], push: [14, 24], aso: [24, 42] }
};

document.addEventListener('DOMContentLoaded', function() {
    const countrySelect = document.getElementById('country');
    const trafficSourceSelect = document.getElementById('traffic-source');
    const depositsInput = document.getElementById('deposits');
    const resultDiv = document.getElementById('result');
    const payoutSpan = document.getElementById('payout');
    const submitBtn = document.getElementById('submit-btn');
    const leadForm = document.getElementById('lead-form');
    const finalSubmitBtn = document.getElementById('final-submit');
    const calculatorData = document.getElementById('calculator-data');
    
    let currentPayout = 0;
    let selectedCountry = '';
    let selectedSource = '';
    let selectedDeposits = 0;

    // Инициализация результата с нулевым значением
    payoutSpan.textContent = '0';
    resultDiv.classList.remove('hidden');

    function calculatePayout() {
        const country = countrySelect.value;
        const trafficSource = trafficSourceSelect.value;
        const deposits = parseInt(depositsInput.value) || 0;
        
        if (country && trafficSource) {
            const sourceKey = {
                'facebook': 'facebook',
                'google': 'google',
                'seo': 'seo',
                'push': 'push',
                'aso': 'aso'
            }[trafficSource];
            
            const range = countryData[country][sourceKey];
            const average = (range[0] + range[1]) / 2;
            currentPayout = average * deposits;
            
            payoutSpan.textContent = currentPayout.toFixed(2);
            
            // Сохраняем выбранные значения
            selectedCountry = countrySelect.options[countrySelect.selectedIndex].text;
            selectedSource = trafficSourceSelect.options[trafficSourceSelect.selectedIndex].text;
            selectedDeposits = deposits;
        }
    }

    function showLeadForm() {
        if (selectedCountry && selectedSource && selectedDeposits > 0) {
            // Обновляем данные калькулятора в форме
            calculatorData.innerHTML = `
                <p><strong>Страна:</strong> ${selectedCountry}</p>
                <p><strong>Источник трафика:</strong> ${selectedSource}</p>
                <p><strong>Ожидаемые депозиты:</strong> ${selectedDeposits}</p>
                <p><strong>Ожидаемая выплата:</strong> ${currentPayout.toFixed(2)}$</p>
            `;
            
            leadForm.classList.remove('hidden');
            submitBtn.classList.add('hidden');
        } else {
            alert('Пожалуйста, заполните все поля калькулятора и укажите количество депозитов больше 0');
        }
    }

async function submitLeadForm() {
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const telegram = document.getElementById('telegram').value.trim();

    if (!name || !email || !telegram) {
        alert('Заполните все обязательные поля!');
        return;
    }

    // Показываем loader
    finalSubmitBtn.disabled = true;
    finalSubmitBtn.textContent = 'Отправка...';

    try {
        // Создаем форму динамически для отправки
        const form = document.createElement('form');
        form.style.display = 'none';
        form.method = 'GET';
        form.action = 'https://script.google.com/macros/s/AKfycby-y6NWIpsiksBqyCxYT3z9geTbizGl5G7NjkxHcR_rh8_MU3yxiR6G73_2sW7URd0/exec';
        form.target = 'hiddenFrame';

        // Добавляем параметры
        const params = {
            name,
            email,
            telegram,
            country: selectedCountry,
            trafficSource: selectedSource,
            expectedDeposits: selectedDeposits,
            expectedPayout: currentPayout.toFixed(2),
            timestamp: new Date().toISOString()
        };

        for (const key in params) {
            const input = document.createElement('input');
            input.type = 'hidden';
            input.name = key;
            input.value = params[key];
            form.appendChild(input);
        }

        // Создаем iframe для получения ответа
        const iframe = document.createElement('iframe');
        iframe.name = 'hiddenFrame';
        iframe.style.display = 'none';
        iframe.onload = function() {
            alert('Данные успешно отправлены!');
            leadForm.reset();
            leadForm.classList.add('hidden');
            submitBtn.classList.remove('hidden');
            document.body.removeChild(iframe);
            document.body.removeChild(form);
        };

        document.body.appendChild(iframe);
        document.body.appendChild(form);
        form.submit();

    } catch (error) {
        console.error('Error:', error);
        alert('Ошибка при отправке: ' + error.message);
    } finally {
        finalSubmitBtn.disabled = false;
        finalSubmitBtn.textContent = 'Отправить заявку';
    }
}

    // События
    countrySelect.addEventListener('change', calculatePayout);
    trafficSourceSelect.addEventListener('change', calculatePayout);
    depositsInput.addEventListener('input', calculatePayout);
    submitBtn.addEventListener('click', showLeadForm);
    finalSubmitBtn.addEventListener('click', submitLeadForm);
});

function generateRandomAmount() {
    return Math.floor(Math.random() * 1500) + 1;
}

function generateRandomInvoice() {
    return Math.floor(1000 + Math.random() * 9000);
}

function generateRandomMinutes() {
    const minutes = [1, 2, 3, 5, 10, 15, 20, 30, 45];
    return minutes[Math.floor(Math.random() * minutes.length)];
}

function updateAllData() {
    // Обновляем сумму оплаты
    document.getElementById('paymentAmount').textContent = '$' + generateRandomAmount();
    
    // Обновляем номер инвойса
    document.getElementById('invoiceNumber').textContent = generateRandomInvoice();
    
    // Обновляем время
    const minutes = generateRandomMinutes();
    document.getElementById('timeText').textContent = minutes + ' минут' + getRussianMinutesEnding(minutes) + ' назад';
}

function getRussianMinutesEnding(minutes) {
    if (minutes % 10 === 1 && minutes !== 11) return 'у';
    if ([2, 3, 4].includes(minutes % 10) && ![12, 13, 14].includes(minutes)) return 'ы';
    return '';
}

// Закрытие виджета
document.getElementById('closeBtn').addEventListener('click', function() {
    document.querySelector('.widget-container').style.display = 'none';
});

function updateAllData() {
    // Обновляем сумму оплаты
    document.getElementById('paymentAmount').textContent = '$' + generateRandomAmount();
    
    // Обновляем номер инвойса
    document.getElementById('invoiceNumber').textContent = generateRandomInvoice();
    
    // Обновляем время
    const minutes = generateRandomMinutes();
    updateTimeText(minutes);
}

function updateTimeText(minutes) {
    const lang = localStorage.getItem('lang') || 'ru';
    const lastChar = minutes % 10;
    const isTeen = minutes >= 11 && minutes <= 19;
    
    if (lang === 'en') {
        document.getElementById('timeText').textContent = 
            minutes === 1 
                ? `1 ${translations.en.minute1}` 
                : `${minutes} ${translations.en.minute2}`;
    } 
    else if (lang === 'ua') {
        document.getElementById('timeText').textContent = 
            lastChar === 1 && !isTeen ? `${minutes} ${translations.ua.minute1}` :
            (lastChar >= 2 && lastChar <= 4 && !isTeen) ? `${minutes} ${translations.ua.minute2}` :
            `${minutes} ${translations.ua.minute3}`;
    }
    else { // ru по умолчанию
        document.getElementById('timeText').textContent = 
            lastChar === 1 && !isTeen ? `${minutes} ${translations.ru.minute1}` :
            (lastChar >= 2 && lastChar <= 4 && !isTeen) ? `${minutes} ${translations.ru.minute2}` :
            `${minutes} ${translations.ru.minute3}`;
    }
}
// Обновление данных каждые 15 минут (900000 миллисекунд)
setInterval(updateAllData, 900000);

