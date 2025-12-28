// Sistema de autenticación con localStorage + modo oscuro/claro

const authTranslations = {
    es: {
        navCalculator: "Calculadora",
        navProgress: "Mi Progreso",
        username: "Usuario",
        password: "Contraseña",
        confirmPassword: "Confirmar contraseña",
        btnLogin: "Entrar",
        btnRegister: "Registrarse",
        btnLogout: "Salir",
        registerTitle: "Crear Cuenta",
        btnCancel: "Cancelar",
        btnCreateAccount: "Crear",
        loginSuccess: "¡Bienvenido!",
        loginError: "Usuario o contraseña incorrectos",
        registerSuccess: "¡Cuenta creada! Ya puedes iniciar sesión",
        registerError: "El usuario ya existe",
        passwordMismatch: "Las contraseñas no coinciden",
        fillAllFields: "Por favor completa todos los campos"
    },
    en: {
        navCalculator: "Calculator",
        navProgress: "My Progress",
        username: "Username",
        password: "Password",
        confirmPassword: "Confirm password",
        btnLogin: "Login",
        btnRegister: "Register",
        btnLogout: "Logout",
        registerTitle: "Create Account",
        btnCancel: "Cancel",
        btnCreateAccount: "Create",
        loginSuccess: "Welcome!",
        loginError: "Wrong username or password",
        registerSuccess: "Account created! You can now login",
        registerError: "Username already exists",
        passwordMismatch: "Passwords don't match",
        fillAllFields: "Please fill all fields"
    },
    de: {
        navCalculator: "Rechner",
        navProgress: "Mein Fortschritt",
        username: "Benutzername",
        password: "Passwort",
        confirmPassword: "Passwort bestätigen",
        btnLogin: "Anmelden",
        btnRegister: "Registrieren",
        btnLogout: "Abmelden",
        registerTitle: "Konto Erstellen",
        btnCancel: "Abbrechen",
        btnCreateAccount: "Erstellen",
        loginSuccess: "Willkommen!",
        loginError: "Falscher Benutzername oder Passwort",
        registerSuccess: "Konto erstellt! Du kannst dich jetzt anmelden",
        registerError: "Benutzername existiert bereits",
        passwordMismatch: "Passwörter stimmen nicht überein",
        fillAllFields: "Bitte fülle alle Felder aus"
    }
};

let currentUser = null;
let currentLang = 'es';

// Inicializar al cargar: tema + usuario
document.addEventListener('DOMContentLoaded', function() {
    // Cargar tema guardado
    const savedTheme = localStorage.getItem('theme') || 'light';
    if (savedTheme === 'dark') {
        document.body.classList.add('dark');
        const btn = document.getElementById('themeToggle');
        if (btn) btn.textContent = '☀️';
    }

    checkLoggedUser();
    updateAuthUI();
});

// Toggle tema oscuro/claro
function toggleTheme() {
    const isDark = document.body.classList.toggle('dark');
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
    const btn = document.getElementById('themeToggle');
    if (btn) btn.textContent = isDark ? '☀️' : '🌙';
}

// Verificar si hay usuario logueado
function checkLoggedUser() {
    const loggedUser = localStorage.getItem('currentUser');
    if (loggedUser) {
        currentUser = loggedUser;
        updateAuthUI();
    }
}

// Actualizar UI de autenticación
function updateAuthUI() {
    const authSection = document.getElementById('authSection');
    const usernameDisplay = document.getElementById('usernameDisplay');

    if (currentUser) {
        authSection.classList.add('logged-in');
        if (usernameDisplay) usernameDisplay.textContent = currentUser;
    } else {
        authSection.classList.remove('logged-in');
    }
}

// Login
function handleLogin() {
    const username = document.getElementById('loginUsername').value.trim();
    const password = document.getElementById('loginPassword').value;

    if (!username || !password) {
        alert(authTranslations[currentLang].fillAllFields);
        return;
    }

    const users = JSON.parse(localStorage.getItem('users') || '{}');

    if (users[username] && users[username].password === password) {
        currentUser = username;
        localStorage.setItem('currentUser', username);
        updateAuthUI();
        document.getElementById('loginUsername').value = '';
        document.getElementById('loginPassword').value = '';
        alert(authTranslations[currentLang].loginSuccess);
    } else {
        alert(authTranslations[currentLang].loginError);
    }
}

// Logout
function handleLogout() {
    currentUser = null;
    localStorage.removeItem('currentUser');
    updateAuthUI();
    // Si estamos en progreso.html, redirigir a index
    if (window.location.pathname.includes('progreso.html')) {
        window.location.href = 'index.html';
    }
}

// Mostrar modal de registro
function showRegisterModal() {
    document.getElementById('registerModal').classList.add('show');
}

// Cerrar modal de registro
function closeRegisterModal() {
    document.getElementById('registerModal').classList.remove('show');
    document.getElementById('regUsername').value = '';
    document.getElementById('regPassword').value = '';
    document.getElementById('regPasswordConfirm').value = '';
}

// Registrar usuario
function handleRegister() {
    const username = document.getElementById('regUsername').value.trim();
    const password = document.getElementById('regPassword').value;
    const passwordConfirm = document.getElementById('regPasswordConfirm').value;

    if (!username || !password || !passwordConfirm) {
        alert(authTranslations[currentLang].fillAllFields);
        return;
    }

    if (password !== passwordConfirm) {
        alert(authTranslations[currentLang].passwordMismatch);
        return;
    }

    const users = JSON.parse(localStorage.getItem('users') || '{}');

    if (users[username]) {
        alert(authTranslations[currentLang].registerError);
        return;
    }

    users[username] = {
        password: password,
        createdAt: new Date().toISOString(),
        progressData: []
    };

    localStorage.setItem('users', JSON.stringify(users));
    alert(authTranslations[currentLang].registerSuccess);
    closeRegisterModal();
}

// Guardar dato de progreso
function saveProgressData(data) {
    if (!currentUser) {
        alert("Debes iniciar sesión para guardar tu progreso");
        return false;
    }

    const users = JSON.parse(localStorage.getItem('users') || '{}');
    if (!users[currentUser]) return false;

    const progressEntry = {
        date: new Date().toISOString(),
        weight: data.weight,
        height: data.height,
        age: data.age,
        goal: data.goal,
        bmr: data.bmr,
        tdee: data.tdee
    };

    users[currentUser].progressData.push(progressEntry);
    localStorage.setItem('users', JSON.stringify(users));
    return true;
}

// Obtener datos de progreso del usuario
function getUserProgressData() {
    if (!currentUser) return [];

    const users = JSON.parse(localStorage.getItem('users') || '{}');
    if (!users[currentUser]) return [];

    return users[currentUser].progressData || [];
}
