// Lógica principal con macros, IMC, agua y exportación

let macrosChart = null;

const translations = {
    es: {
        title: "🏋️ Calculadora Fitness",
        subtitle: "Calcula tus calorías diarias necesarias",
        gender: "Género",
        male: "Hombre",
        female: "Mujer",
        age: "Edad (años)",
        weight: "Peso (kg)",
        height: "Altura (cm)",
        bodyMeasurements: "📏 Medidas Corporales (opcional)",
        waist: "Cintura (cm)",
        hip: "Cadera (cm)",
        chest: "Pecho (cm)",
        arms: "Brazos (cm)",
        activityLevel: "Nivel de Actividad Física",
        sedentary: "Sedentario (poco o ningún ejercicio)",
        lightlyActive: "Ligeramente activo (1-3 días/semana)",
        moderatelyActive: "Moderadamente activo (3-5 días/semana)",
        veryActive: "Muy activo (6-7 días/semana)",
        extraActive: "Extra activo (intenso diario)",
        goalLabel: "Tu Objetivo",
        goalLoss: "Pérdida de peso",
        goalMaintain: "Mantenimiento",
        goalGain: "Ganancia muscular",
        calculate: "Calcular Calorías",
        bmr: "BMR (Metabolismo Basal)",
        tdee: "TDEE (Calorías Diarias Totales)",
        bmi: "IMC (Índice de Masa Corporal)",
        bmiUnderweight: "Bajo peso",
        bmiNormal: "Normal",
        bmiOverweight: "Sobrepeso",
        bmiObese: "Obesidad",
        waterIntake: "Agua Diaria Recomendada",
        goalsTitle: "📊 Objetivos Calóricos",
        weightLoss: "🔻 Pérdida de peso (-500 kcal)",
        maintenance: "⚖️ Mantenimiento",
        weightGain: "🔺 Ganancia muscular (+300 kcal)",
        macrosTitle: "🍽️ Distribución de Macronutrientes",
        protein: "Proteínas",
        carbs: "Carbohidratos",
        fats: "Grasas",
        exportPDF: "Exportar a PDF",
        tipsTitle: "💡 Consejos para Alcanzar tu Objetivo"
    },
    en: {
        title: "🏋️ Fitness Calculator",
        subtitle: "Calculate your daily calorie needs",
        gender: "Gender",
        male: "Male",
        female: "Female",
        age: "Age (years)",
        weight: "Weight (kg)",
        height: "Height (cm)",
        bodyMeasurements: "📏 Body Measurements (optional)",
        waist: "Waist (cm)",
        hip: "Hip (cm)",
        chest: "Chest (cm)",
        arms: "Arms (cm)",
        activityLevel: "Physical Activity Level",
        sedentary: "Sedentary (little or no exercise)",
        lightlyActive: "Lightly active (1-3 days/week)",
        moderatelyActive: "Moderately active (3-5 days/week)",
        veryActive: "Very active (6-7 days/week)",
        extraActive: "Extra active (intense daily)",
        goalLabel: "Your Goal",
        goalLoss: "Weight loss",
        goalMaintain: "Maintenance",
        goalGain: "Muscle gain",
        calculate: "Calculate Calories",
        bmr: "BMR (Basal Metabolic Rate)",
        tdee: "TDEE (Total Daily Energy Expenditure)",
        bmi: "BMI (Body Mass Index)",
        bmiUnderweight: "Underweight",
        bmiNormal: "Normal",
        bmiOverweight: "Overweight",
        bmiObese: "Obese",
        waterIntake: "Recommended Daily Water",
        goalsTitle: "📊 Caloric Goals",
        weightLoss: "🔻 Weight loss (-500 kcal)",
        maintenance: "⚖️ Maintenance",
        weightGain: "🔺 Muscle gain (+300 kcal)",
        macrosTitle: "🍽️ Macronutrient Distribution",
        protein: "Protein",
        carbs: "Carbohydrates",
        fats: "Fats",
        exportPDF: "Export to PDF",
        tipsTitle: "💡 Tips to Reach Your Goal"
    },
    de: {
        title: "🏋️ Fitness-Rechner",
        subtitle: "Berechne deinen täglichen Kalorienbedarf",
        gender: "Geschlecht",
        male: "Mann",
        female: "Frau",
        age: "Alter (Jahre)",
        weight: "Gewicht (kg)",
        height: "Größe (cm)",
        bodyMeasurements: "📏 Körpermaße (optional)",
        waist: "Taille (cm)",
        hip: "Hüfte (cm)",
        chest: "Brust (cm)",
        arms: "Arme (cm)",
        activityLevel: "Körperliche Aktivität",
        sedentary: "Sitzend (wenig oder keine Bewegung)",
        lightlyActive: "Leicht aktiv (1-3 Tage/Woche)",
        moderatelyActive: "Mäßig aktiv (3-5 Tage/Woche)",
        veryActive: "Sehr aktiv (6-7 Tage/Woche)",
        extraActive: "Extra aktiv (intensiv täglich)",
        goalLabel: "Dein Ziel",
        goalLoss: "Gewichtsverlust",
        goalMaintain: "Erhaltung",
        goalGain: "Muskelaufbau",
        calculate: "Kalorien Berechnen",
        bmr: "BMR (Grundumsatz)",
        tdee: "TDEE (Gesamter Energieverbrauch)",
        bmi: "BMI (Body-Mass-Index)",
        bmiUnderweight: "Untergewicht",
        bmiNormal: "Normal",
        bmiOverweight: "Übergewicht",
        bmiObese: "Adipositas",
        waterIntake: "Empfohlene Wassermenge",
        goalsTitle: "📊 Kalorienziele",
        weightLoss: "🔻 Gewichtsverlust (-500 kcal)",
        maintenance: "⚖️ Erhaltung",
        weightGain: "🔺 Muskelaufbau (+300 kcal)",
        macrosTitle: "🍽️ Makronährstoffverteilung",
        protein: "Protein",
        carbs: "Kohlenhydrate",
        fats: "Fette",
        exportPDF: "Als PDF exportieren",
        tipsTitle: "💡 Tipps zum Erreichen"
    }
};

const tips = {
    loss: {
        es: [
            { icon: "🍽️", text: "Crea un déficit calórico moderado de 300-500 kcal diarias. Un déficit demasiado grande puede ralentizar tu metabolismo." },
            { icon: "🏃", text: "Combina ejercicio cardiovascular con entrenamiento de fuerza para mantener la masa muscular mientras pierdes grasa." },
            { icon: "💧", text: "Bebe abundante agua (2-3 litros diarios) para mejorar la saciedad y optimizar tu metabolismo." },
            { icon: "🥗", text: "Prioriza alimentos ricos en proteína y fibra que te mantengan satisfecho por más tiempo y preserven tu músculo." }
        ],
        en: [
            { icon: "🍽️", text: "Create a moderate caloric deficit of 300-500 kcal daily. Too large a deficit can slow down your metabolism." },
            { icon: "🏃", text: "Combine cardiovascular exercise with strength training to maintain muscle mass while losing fat." },
            { icon: "💧", text: "Drink plenty of water (2-3 liters daily) to improve satiety and optimize your metabolism." },
            { icon: "🥗", text: "Prioritize protein and fiber-rich foods that keep you satisfied longer and preserve your muscle." }
        ],
        de: [
            { icon: "🍽️", text: "Schaffe ein moderates Kaloriendefizit von 300-500 kcal täglich. Ein zu großes Defizit kann deinen Stoffwechsel verlangsamen." },
            { icon: "🏃", text: "Kombiniere Ausdauertraining mit Krafttraining, um Muskelmasse zu erhalten, während du Fett verlierst." },
            { icon: "💧", text: "Trinke reichlich Wasser (2-3 Liter täglich), um die Sättigung zu verbessern und deinen Stoffwechsel zu optimieren." },
            { icon: "🥗", text: "Priorisiere protein- und ballaststoffreiche Lebensmittel, die dich länger satt halten und deine Muskeln schützen." }
        ]
    },
    maintain: {
        es: [
            { icon: "⚖️", text: "Consume las calorías de mantenimiento calculadas para mantener tu peso actual de forma estable." },
            { icon: "🏋️", text: "Mantén una rutina de ejercicio regular (3-5 días/semana) para preservar tu composición corporal y salud." },
            { icon: "📊", text: "Monitorea tu peso semanalmente y ajusta las calorías si ves cambios significativos (+/- 1-2 kg)." },
            { icon: "🥙", text: "Mantén una dieta equilibrada con 40% carbohidratos, 30% proteínas y 30% grasas saludables." }
        ],
        en: [
            { icon: "⚖️", text: "Consume the calculated maintenance calories to keep your current weight stable." },
            { icon: "🏋️", text: "Maintain a regular exercise routine (3-5 days/week) to preserve your body composition and health." },
            { icon: "📊", text: "Monitor your weight weekly and adjust calories if you see significant changes (+/- 1-2 kg)." },
            { icon: "🥙", text: "Maintain a balanced diet with 40% carbohydrates, 30% protein, and 30% healthy fats." }
        ],
        de: [
            { icon: "⚖️", text: "Verbrauche die berechneten Erhaltungskalorien, um dein aktuelles Gewicht stabil zu halten." },
            { icon: "🏋️", text: "Halte eine regelmäßige Trainingsroutine (3-5 Tage/Woche) ein, um deine Körperzusammensetzung zu erhalten." },
            { icon: "📊", text: "Überwache dein Gewicht wöchentlich und passe die Kalorien an bei signifikanten Veränderungen (+/- 1-2 kg)." },
            { icon: "🥙", text: "Halte eine ausgewogene Ernährung mit 40% Kohlenhydraten, 30% Protein und 30% gesunden Fetten." }
        ]
    },
    gain: {
        es: [
            { icon: "💪", text: "Consume un superávit calórico moderado de 200-400 kcal para ganar músculo minimizando la ganancia de grasa." },
            { icon: "🏋️‍♂️", text: "Entrena con pesas 4-5 veces por semana enfocándote en ejercicios compuestos y sobrecarga progresiva." },
            { icon: "🍗", text: "Asegura 1.6-2.2g de proteína por kg de peso corporal diariamente para optimizar el crecimiento muscular." },
            { icon: "😴", text: "Duerme 7-9 horas por noche. El descanso es crucial para la recuperación y construcción muscular." }
        ],
        en: [
            { icon: "💪", text: "Consume a moderate caloric surplus of 200-400 kcal to gain muscle while minimizing fat gain." },
            { icon: "🏋️‍♂️", text: "Weight train 4-5 times per week focusing on compound exercises and progressive overload." },
            { icon: "🍗", text: "Ensure 1.6-2.2g of protein per kg of body weight daily to optimize muscle growth." },
            { icon: "😴", text: "Sleep 7-9 hours per night. Rest is crucial for recovery and muscle building." }
        ],
        de: [
            { icon: "💪", text: "Verbrauche einen moderaten Kalorienüberschuss von 200-400 kcal, um Muskeln aufzubauen und Fettzunahme zu minimieren." },
            { icon: "🏋️‍♂️", text: "Trainiere 4-5 Mal pro Woche mit Gewichten und konzentriere dich auf Grundübungen und progressive Überlastung." },
            { icon: "🍗", text: "Stelle 1,6-2,2g Protein pro kg Körpergewicht täglich sicher, um das Muskelwachstum zu optimieren." },
            { icon: "😴", text: "Schlafe 7-9 Stunden pro Nacht. Ruhe ist entscheidend für Erholung und Muskelaufbau." }
        ]
    }
};

// Variables globales para exportación
let currentResults = {};

function selectGender(element, gender) {
    document.querySelectorAll('.radio-option').forEach(opt => opt.classList.remove('selected'));
    element.classList.add('selected');
    document.getElementById(gender).checked = true;
}

function changeLanguage(e, lang) {
    currentLang = lang;
    document.querySelectorAll('.lang-btn').forEach(btn => btn.classList.remove('active'));
    e.currentTarget.classList.add('active');

    document.querySelectorAll('[data-translate]').forEach(el => {
        const key = el.getAttribute('data-translate');
        if (translations[lang] && translations[lang][key]) {
            el.textContent = translations[lang][key];
        }
        if (authTranslations[lang] && authTranslations[lang][key]) {
            el.textContent = authTranslations[lang][key];
        }
    });

    document.querySelectorAll('[data-translate-placeholder]').forEach(el => {
        const key = el.getAttribute('data-translate-placeholder');
        if (authTranslations[lang] && authTranslations[lang][key]) {
            el.placeholder = authTranslations[lang][key];
        }
    });

    const activityOptions = document.querySelectorAll('#activity option');
    ['sedentary','lightlyActive','moderatelyActive','veryActive','extraActive'].forEach((k,i) => {
        if (activityOptions[i] && translations[lang][k]) {
            activityOptions[i].textContent = translations[lang][k];
        }
    });

    const goalOptions = document.querySelectorAll('#goal option');
    ['goalLoss','goalMaintain','goalGain'].forEach((k,i) => {
        if (goalOptions[i] && translations[lang][k]) {
            goalOptions[i].textContent = translations[lang][k];
        }
    });

    if (document.getElementById('tips') && document.getElementById('tips').classList.contains('show')) {
        const goal = document.getElementById('goal').value;
        showTips(goal);
    }
}

function showTips(goal) {
    const box = document.getElementById('tipsContent');
    box.innerHTML = '';
    tips[goal][currentLang].forEach(t => {
        const el = document.createElement('div');
        el.className='tip-item';
        el.innerHTML = `<div class="tip-icon">${t.icon}</div><div class="tip-text">${t.text}</div>`;
        box.appendChild(el);
    });
}

// Interpretar IMC
function interpretBMI(bmi) {
    const badge = document.getElementById('bmiBadge');
    let category, className;

    if (bmi < 18.5) {
        category = translations[currentLang].bmiUnderweight;
        className = 'bmi-underweight';
    } else if (bmi < 25) {
        category = translations[currentLang].bmiNormal;
        className = 'bmi-normal';
    } else if (bmi < 30) {
        category = translations[currentLang].bmiOverweight;
        className = 'bmi-overweight';
    } else {
        category = translations[currentLang].bmiObese;
        className = 'bmi-obese';
    }

    badge.textContent = category;
    badge.className = 'bmi-badge ' + className;
}

// NUEVO: Calcular agua diaria necesaria
function calculateWater(weight, activity) {
    // Fórmula base: 35ml por kg de peso
    let baseWater = weight * 0.035; // en litros

    // Ajuste según actividad física
    let multiplier = 1;
    if (activity >= 1.725) { // Muy activo o más
        multiplier = 1.3;
    } else if (activity >= 1.55) { // Moderadamente activo
        multiplier = 1.2;
    } else if (activity >= 1.375) { // Ligeramente activo
        multiplier = 1.1;
    }

    return (baseWater * multiplier).toFixed(1);
}

// Calcular macros según objetivo
function calculateMacros(calories, weight, goal) {
    let proteinPercent, carbsPercent, fatsPercent;

    if (goal === 'loss') {
        proteinPercent = 40;
        carbsPercent = 30;
        fatsPercent = 30;
    } else if (goal === 'gain') {
        proteinPercent = 30;
        carbsPercent = 45;
        fatsPercent = 25;
    } else { // maintain
        proteinPercent = 30;
        carbsPercent = 40;
        fatsPercent = 30;
    }

    const proteinCals = calories * (proteinPercent / 100);
    const carbsCals = calories * (carbsPercent / 100);
    const fatsCals = calories * (fatsPercent / 100);

    const proteinGrams = Math.round(proteinCals / 4);
    const carbsGrams = Math.round(carbsCals / 4);
    const fatsGrams = Math.round(fatsCals / 9);

    return {
        protein: { grams: proteinGrams, percent: proteinPercent },
        carbs: { grams: carbsGrams, percent: carbsPercent },
        fats: { grams: fatsGrams, percent: fatsPercent }
    };
}

// Mostrar macros
function displayMacros(macros) {
    document.getElementById('proteinValue').textContent = macros.protein.grams + 'g';
    document.getElementById('proteinPercent').textContent = macros.protein.percent + '%';

    document.getElementById('carbsValue').textContent = macros.carbs.grams + 'g';
    document.getElementById('carbsPercent').textContent = macros.carbs.percent + '%';

    document.getElementById('fatsValue').textContent = macros.fats.grams + 'g';
    document.getElementById('fatsPercent').textContent = macros.fats.percent + '%';

    // Gráfico de dona
    const ctx = document.getElementById('macrosChart');

    if (macrosChart) {
        macrosChart.destroy();
    }

    macrosChart = new Chart(ctx, {
        type: 'doughnut',
        data: {
            labels: [
                translations[currentLang].protein,
                translations[currentLang].carbs,
                translations[currentLang].fats
            ],
            datasets: [{
                data: [macros.protein.percent, macros.carbs.percent, macros.fats.percent],
                backgroundColor: ['#f87171', '#fbbf24', '#34d399'],
                borderWidth: 0
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: true,
            plugins: {
                legend: {
                    position: 'bottom',
                    labels: {
                        padding: 15,
                        font: { size: 13, weight: '600' }
                    }
                }
            }
        }
    });

    document.getElementById('macros').classList.add('show');
}

// Exportar a PDF
function exportToPDF() {
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();

    doc.setFontSize(20);
    doc.text('NUTRI-FIT-ON - Resultados', 20, 20);

    doc.setFontSize(12);
    let y = 40;

    doc.text(`BMR: ${currentResults.bmr} kcal`, 20, y);
    y += 10;
    doc.text(`TDEE: ${currentResults.tdee} kcal`, 20, y);
    y += 10;
    doc.text(`IMC: ${currentResults.bmi}`, 20, y);
    y += 10;
    doc.text(`Agua diaria: ${currentResults.water} litros`, 20, y);
    y += 20;

    doc.setFontSize(14);
    doc.text('Objetivos Caloricos:', 20, y);
    y += 10;
    doc.setFontSize(12);
    doc.text(`Perdida: ${currentResults.weightLoss} kcal`, 25, y);
    y += 8;
    doc.text(`Mantenimiento: ${currentResults.maintenance} kcal`, 25, y);
    y += 8;
    doc.text(`Ganancia: ${currentResults.weightGain} kcal`, 25, y);
    y += 20;

    doc.setFontSize(14);
    doc.text('Macronutrientes:', 20, y);
    y += 10;
    doc.setFontSize(12);
    doc.text(`Proteinas: ${currentResults.macros.protein.grams}g (${currentResults.macros.protein.percent}%)`, 25, y);
    y += 8;
    doc.text(`Carbohidratos: ${currentResults.macros.carbs.grams}g (${currentResults.macros.carbs.percent}%)`, 25, y);
    y += 8;
    doc.text(`Grasas: ${currentResults.macros.fats.grams}g (${currentResults.macros.fats.percent}%)`, 25, y);

    if (currentResults.measurements) {
        y += 20;
        doc.setFontSize(14);
        doc.text('Medidas Corporales:', 20, y);
        y += 10;
        doc.setFontSize(12);
        if (currentResults.measurements.waist) {
            doc.text(`Cintura: ${currentResults.measurements.waist} cm`, 25, y);
            y += 8;
        }
        if (currentResults.measurements.hip) {
            doc.text(`Cadera: ${currentResults.measurements.hip} cm`, 25, y);
            y += 8;
        }
        if (currentResults.measurements.chest) {
            doc.text(`Pecho: ${currentResults.measurements.chest} cm`, 25, y);
            y += 8;
        }
        if (currentResults.measurements.arms) {
            doc.text(`Brazos: ${currentResults.measurements.arms} cm`, 25, y);
            y += 8;
        }
        if (currentResults.measurements.waistHipRatio) {
            doc.text(`Indice Cintura-Cadera: ${currentResults.measurements.waistHipRatio}`, 25, y);
        }
    }

    doc.save('nutri-fit-on-resultados.pdf');
}

// Formulario
document.getElementById('calorieForm').addEventListener('submit', function(e){
    e.preventDefault();

    const gender = document.querySelector('input[name="gender"]:checked').value;
    const age = parseFloat(document.getElementById('age').value);
    const weight = parseFloat(document.getElementById('weight').value);
    const height = parseFloat(document.getElementById('height').value);
    const activity = parseFloat(document.getElementById('activity').value);
    const goal = document.getElementById('goal').value;

    // Medidas opcionales
    const waist = parseFloat(document.getElementById('waist').value) || null;
    const hip = parseFloat(document.getElementById('hip').value) || null;
    const chest = parseFloat(document.getElementById('chest').value) || null;
    const arms = parseFloat(document.getElementById('arms').value) || null;

    // Calcular índice cintura-cadera
    let waistHipRatio = null;
    if (waist && hip) {
        waistHipRatio = (waist / hip).toFixed(2);
    }

    // Fórmula Mifflin-St Jeor
    let bmr = (10 * weight) + (6.25 * height) - (5 * age) + (gender === 'male' ? 5 : -161);
    const tdee = bmr * activity;
    const weightLoss = tdee - 500;
    const weightGain = tdee + 300;

    // IMC
    const heightMeters = height / 100;
    const bmi = weight / (heightMeters * heightMeters);

    // NUEVO: Agua diaria
    const waterLiters = calculateWater(weight, activity);

    // Macros
    const macros = calculateMacros(tdee, weight, goal);

    // Guardar resultados para exportar
    currentResults = {
        bmr: Math.round(bmr),
        tdee: Math.round(tdee),
        bmi: bmi.toFixed(1),
        water: waterLiters,
        weightLoss: Math.round(weightLoss),
        maintenance: Math.round(tdee),
        weightGain: Math.round(weightGain),
        macros: macros,
        measurements: {
            waist: waist,
            hip: hip,
            chest: chest,
            arms: arms,
            waistHipRatio: waistHipRatio
        }
    };

    // Mostrar resultados
    document.getElementById('bmr').textContent = Math.round(bmr) + ' kcal';
    document.getElementById('tdee').textContent = Math.round(tdee) + ' kcal';
    document.getElementById('bmi').textContent = bmi.toFixed(1);
    interpretBMI(bmi);

    // NUEVO: Mostrar agua
    document.getElementById('waterIntake').textContent = waterLiters + ' L';

    document.getElementById('weightLoss').textContent = Math.round(weightLoss) + ' kcal';
    document.getElementById('maintenance').textContent = Math.round(tdee) + ' kcal';
    document.getElementById('weightGain').textContent = Math.round(weightGain) + ' kcal';

    document.getElementById('results').classList.add('show');
    displayMacros(macros);
    document.getElementById('tips').classList.add('show');
    showTips(goal);

    // Guardar progreso si está logueado
    if (currentUser) {
        saveProgressData({
            weight: weight,
            height: height,
            age: age,
            goal: goal,
            gender: gender,
            bmr: Math.round(bmr),
            tdee: Math.round(tdee),
            measurements: {
                waist: waist,
                hip: hip,
                chest: chest,
                arms: arms
            }
        });
    }

    setTimeout(() => document.getElementById('results').scrollIntoView({ behavior: 'smooth', block: 'nearest' }), 100);
});
