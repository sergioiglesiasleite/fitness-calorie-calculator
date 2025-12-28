// Lógica de la página de progreso con medidas corporales e ICC

const progressTranslations = {
    es: {
        navCalculator: "Calculadora",
        navProgress: "Mi Progreso",
        btnLogout: "Salir",
        progressTitle: "📊 Mi Progreso",
        progressSubtitle: "Seguimiento de tu evolución fitness",
        notLoggedTitle: "¡Inicia sesión para ver tu progreso!",
        notLoggedText: "Necesitas una cuenta para guardar y visualizar tu evolución",
        btnGoToLogin: "Ir a iniciar sesión",
        statCurrentWeight: "Peso Actual",
        statTotalEntries: "Registros Totales",
        statWeightChange: "Cambio Total",
        addEntryTitle: "➕ Añadir Nueva Entrada",
        weight: "Peso (kg)",
        height: "Altura (cm)",
        age: "Edad",
        waist: "Cintura (cm)",
        hip: "Cadera (cm)",
        chest: "Pecho (cm)",
        arms: "Brazos (cm)",
        goalLabel: "Objetivo",
        goalLoss: "Pérdida de peso",
        goalMaintain: "Mantenimiento",
        goalGain: "Ganancia muscular",
        btnAddEntry: "Guardar",
        chartTitle: "📈 Evolución del Peso",
        historyTitle: "📋 Historial de Registros",
        date: "Fecha",
        icc: "ICC",
        noDataMessage: "No hay datos registrados aún. ¡Añade tu primera entrada!",
        entrySaved: "¡Entrada guardada con éxito!",
        fillAllFields: "Por favor completa los campos obligatorios",
        lowRisk: "Bajo",
        moderateRisk: "Moderado",
        highRisk: "Alto"
    },
    en: {
        navCalculator: "Calculator",
        navProgress: "My Progress",
        btnLogout: "Logout",
        progressTitle: "📊 My Progress",
        progressSubtitle: "Track your fitness evolution",
        notLoggedTitle: "Log in to see your progress!",
        notLoggedText: "You need an account to save and view your evolution",
        btnGoToLogin: "Go to login",
        statCurrentWeight: "Current Weight",
        statTotalEntries: "Total Entries",
        statWeightChange: "Total Change",
        addEntryTitle: "➕ Add New Entry",
        weight: "Weight (kg)",
        height: "Height (cm)",
        age: "Age",
        waist: "Waist (cm)",
        hip: "Hip (cm)",
        chest: "Chest (cm)",
        arms: "Arms (cm)",
        goalLabel: "Goal",
        goalLoss: "Weight loss",
        goalMaintain: "Maintenance",
        goalGain: "Muscle gain",
        btnAddEntry: "Save",
        chartTitle: "📈 Weight Evolution",
        historyTitle: "📋 Entry History",
        date: "Date",
        icc: "WHR",
        noDataMessage: "No data recorded yet. Add your first entry!",
        entrySaved: "Entry saved successfully!",
        fillAllFields: "Please fill required fields",
        lowRisk: "Low",
        moderateRisk: "Moderate",
        highRisk: "High"
    },
    de: {
        navCalculator: "Rechner",
        navProgress: "Mein Fortschritt",
        btnLogout: "Abmelden",
        progressTitle: "📊 Mein Fortschritt",
        progressSubtitle: "Verfolge deine Fitness-Entwicklung",
        notLoggedTitle: "Melde dich an, um deinen Fortschritt zu sehen!",
        notLoggedText: "Du benötigst ein Konto, um deine Entwicklung zu speichern",
        btnGoToLogin: "Zur Anmeldung",
        statCurrentWeight: "Aktuelles Gewicht",
        statTotalEntries: "Gesamteinträge",
        statWeightChange: "Gesamtänderung",
        addEntryTitle: "➕ Neuen Eintrag Hinzufügen",
        weight: "Gewicht (kg)",
        height: "Größe (cm)",
        age: "Alter",
        waist: "Taille (cm)",
        hip: "Hüfte (cm)",
        chest: "Brust (cm)",
        arms: "Arme (cm)",
        goalLabel: "Ziel",
        goalLoss: "Gewichtsverlust",
        goalMaintain: "Erhaltung",
        goalGain: "Muskelaufbau",
        btnAddEntry: "Speichern",
        chartTitle: "📈 Gewichtsentwicklung",
        historyTitle: "📋 Verlauf",
        date: "Datum",
        icc: "WHR",
        noDataMessage: "Noch keine Daten. Füge deinen ersten Eintrag hinzu!",
        entrySaved: "Eintrag erfolgreich gespeichert!",
        fillAllFields: "Bitte fülle die Pflichtfelder aus",
        lowRisk: "Niedrig",
        moderateRisk: "Mäßig",
        highRisk: "Hoch"
    }
};

let weightChart = null;

document.addEventListener('DOMContentLoaded', function() {
    checkLoggedUser();

    if (currentUser) {
        document.getElementById('notLoggedMessage').style.display = 'none';
        document.getElementById('progressContent').classList.add('show');
        loadProgressData();
    } else {
        document.getElementById('notLoggedMessage').style.display = 'block';
        document.getElementById('progressContent').classList.remove('show');
    }

    document.getElementById('addEntryForm').addEventListener('submit', handleAddEntry);
});

function changeLanguage(e, lang) {
    currentLang = lang;
    document.querySelectorAll('.lang-btn').forEach(btn => btn.classList.remove('active'));
    e.currentTarget.classList.add('active');

    document.querySelectorAll('[data-translate]').forEach(el => {
        const key = el.getAttribute('data-translate');
        if (progressTranslations[lang] && progressTranslations[lang][key]) {
            el.textContent = progressTranslations[lang][key];
        }
        if (authTranslations[lang] && authTranslations[lang][key]) {
            el.textContent = authTranslations[lang][key];
        }
    });

    const goalOptions = document.querySelectorAll('#newGoal option');
    ['goalLoss','goalMaintain','goalGain'].forEach((k,i) => {
        if (goalOptions[i] && progressTranslations[lang][k]) {
            goalOptions[i].textContent = progressTranslations[lang][k];
        }
    });

    if (currentUser) {
        loadProgressData();
    }
}

function loadProgressData() {
    const data = getUserProgressData();
    updateStats(data);
    createChart(data);
    createHistoryTable(data);
}

function updateStats(data) {
    const totalEntries = data.length;
    document.getElementById('statTotalEntries').textContent = totalEntries;

    if (totalEntries > 0) {
        const currentWeight = data[data.length - 1].weight;
        document.getElementById('statCurrentWeight').textContent = currentWeight + ' kg';

        if (totalEntries > 1) {
            const firstWeight = data[0].weight;
            const change = currentWeight - firstWeight;
            const changeEl = document.getElementById('statWeightChange');
            const totalChangeEl = document.getElementById('statTotalChange');

            totalChangeEl.textContent = Math.abs(change).toFixed(1) + ' kg';

            if (change < 0) {
                changeEl.textContent = '▼ ' + Math.abs(change).toFixed(1) + ' kg';
                changeEl.className = 'stat-change positive';
            } else if (change > 0) {
                changeEl.textContent = '▲ ' + change.toFixed(1) + ' kg';
                changeEl.className = 'stat-change negative';
            } else {
                changeEl.textContent = '= Sin cambios';
                changeEl.className = 'stat-change';
            }
        }
    } else {
        document.getElementById('statCurrentWeight').textContent = '-- kg';
        document.getElementById('statTotalChange').textContent = '-- kg';
    }
}

function createChart(data) {
    const ctx = document.getElementById('weightChart');

    if (weightChart) {
        weightChart.destroy();
    }

    if (data.length === 0) {
        ctx.parentElement.innerHTML = '<p class="no-data">' + progressTranslations[currentLang].noDataMessage + '</p>';
        return;
    }

    const labels = data.map(entry => {
        const date = new Date(entry.date);
        return date.toLocaleDateString(currentLang === 'es' ? 'es-ES' : currentLang === 'de' ? 'de-DE' : 'en-GB');
    });
    const weights = data.map(entry => entry.weight);

    weightChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: labels,
            datasets: [{
                label: progressTranslations[currentLang].weight,
                data: weights,
                borderColor: 'rgb(102, 126, 234)',
                backgroundColor: 'rgba(102, 126, 234, 0.1)',
                tension: 0.3,
                fill: true,
                pointRadius: 5,
                pointHoverRadius: 7,
                pointBackgroundColor: 'rgb(102, 126, 234)',
                pointBorderColor: '#fff',
                pointBorderWidth: 2
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: true,
            plugins: {
                legend: { display: false },
                tooltip: {
                    backgroundColor: 'rgba(0, 0, 0, 0.8)',
                    padding: 12,
                    titleFont: { size: 14, weight: 'bold' },
                    bodyFont: { size: 13 },
                    displayColors: false
                }
            },
            scales: {
                y: {
                    beginAtZero: false,
                    ticks: {
                        callback: function(value) {
                            return value + ' kg';
                        }
                    },
                    grid: { color: 'rgba(0, 0, 0, 0.05)' }
                },
                x: { grid: { display: false } }
            }
        }
    });
}

// NUEVO: Interpretar riesgo ICC según género y valor
function interpretWHR(whr, gender) {
    if (!whr) return null;

    const ratio = parseFloat(whr);
    let risk, className;

    if (gender === 'male') {
        if (ratio < 0.90) {
            risk = progressTranslations[currentLang].lowRisk;
            className = 'whr-low';
        } else if (ratio < 1.0) {
            risk = progressTranslations[currentLang].moderateRisk;
            className = 'whr-moderate';
        } else {
            risk = progressTranslations[currentLang].highRisk;
            className = 'whr-high';
        }
    } else { // female
        if (ratio < 0.80) {
            risk = progressTranslations[currentLang].lowRisk;
            className = 'whr-low';
        } else if (ratio < 0.85) {
            risk = progressTranslations[currentLang].moderateRisk;
            className = 'whr-moderate';
        } else {
            risk = progressTranslations[currentLang].highRisk;
            className = 'whr-high';
        }
    }

    return `<span class="whr-badge ${className}">${ratio} (${risk})</span>`;
}

function createHistoryTable(data) {
    const container = document.getElementById('historyTableContainer');

    if (data.length === 0) {
        container.innerHTML = '<p class="no-data">' + progressTranslations[currentLang].noDataMessage + '</p>';
        return;
    }

    const sortedData = [...data].reverse();

    let tableHTML = `
        <table class="history-table">
            <thead>
                <tr>
                    <th>${progressTranslations[currentLang].date}</th>
                    <th>${progressTranslations[currentLang].weight}</th>
                    <th>${progressTranslations[currentLang].height}</th>
                    <th>${progressTranslations[currentLang].age}</th>
                    <th>${progressTranslations[currentLang].goalLabel}</th>
                    <th>BMR</th>
                    <th>TDEE</th>
                    <th>${progressTranslations[currentLang].icc}</th>
                </tr>
            </thead>
            <tbody>
    `;

    sortedData.forEach(entry => {
        const date = new Date(entry.date);
        const formattedDate = date.toLocaleDateString(currentLang === 'es' ? 'es-ES' : currentLang === 'de' ? 'de-DE' : 'en-GB');
        const goalText = progressTranslations[currentLang]['goal' + entry.goal.charAt(0).toUpperCase() + entry.goal.slice(1)];

        // NUEVO: Calcular ICC si hay datos de cintura y cadera
        let whrDisplay = '-';
        if (entry.measurements && entry.measurements.waist && entry.measurements.hip) {
            const whr = (entry.measurements.waist / entry.measurements.hip).toFixed(2);
            const whrBadge = interpretWHR(whr, entry.gender || 'male');
            whrDisplay = whrBadge || whr;
        }

        tableHTML += `
            <tr>
                <td>${formattedDate}</td>
                <td><strong>${entry.weight} kg</strong></td>
                <td>${entry.height} cm</td>
                <td>${entry.age} años</td>
                <td>${goalText}</td>
                <td>${entry.bmr} kcal</td>
                <td>${entry.tdee} kcal</td>
                <td>${whrDisplay}</td>
            </tr>
        `;
    });

    tableHTML += '</tbody></table>';
    container.innerHTML = tableHTML;
}

function handleAddEntry(e) {
    e.preventDefault();

    const weight = parseFloat(document.getElementById('newWeight').value);
    const height = parseFloat(document.getElementById('newHeight').value);
    const age = parseFloat(document.getElementById('newAge').value);
    const goal = document.getElementById('newGoal').value;

    // Medidas opcionales
    const waist = parseFloat(document.getElementById('newWaist').value) || null;
    const hip = parseFloat(document.getElementById('newHip').value) || null;
    const chest = parseFloat(document.getElementById('newChest').value) || null;
    const arms = parseFloat(document.getElementById('newArms').value) || null;

    if (!weight || !height || !age || !goal) {
        alert(progressTranslations[currentLang].fillAllFields);
        return;
    }

    // Obtener género del usuario si existe en datos anteriores
    const previousData = getUserProgressData();
    let gender = 'male'; // default
    if (previousData.length > 0 && previousData[0].gender) {
        gender = previousData[0].gender;
    }

    const bmr = (10 * weight) + (6.25 * height) - (5 * age) + (gender === 'male' ? 5 : -161);
    const tdee = Math.round(bmr * 1.55);

    const saved = saveProgressData({
        weight: weight,
        height: height,
        age: age,
        goal: goal,
        gender: gender,
        bmr: Math.round(bmr),
        tdee: tdee,
        measurements: {
            waist: waist,
            hip: hip,
            chest: chest,
            arms: arms
        }
    });

    if (saved) {
        alert(progressTranslations[currentLang].entrySaved);
        document.getElementById('addEntryForm').reset();
        loadProgressData();
    }
}
