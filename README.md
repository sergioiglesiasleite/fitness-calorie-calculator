# 🏋️ NUTRI-FIT-ON

Calculadora fitness profesional con sistema de seguimiento, macronutrientes y análisis corporal completo.

## 📁 Estructura del Proyecto

```
calculadora fit/
│
├── index.html          # Calculadora principal
├── progreso.html       # Seguimiento y evolución
├── auth.js             # Sistema de autenticación
├── app.js              # Lógica calculadora + macros
├── progreso.js         # Lógica seguimiento
│
└── assets/
    └── logo-nutri-fit-on.jpg  # Logo
```

## ✨ Características Principales

### 🧮 Calculadora de Calorías
- **Fórmula Mifflin-St Jeor** (la más precisa científicamente)
- Cálculo de **BMR** (metabolismo basal)
- Cálculo de **TDEE** (gasto calórico total)
- 5 niveles de actividad física
- 3 objetivos: pérdida, mantenimiento, ganancia muscular

### 📊 IMC Interpretado
- Cálculo automático del Índice de Masa Corporal
- **Badge con colores** según categoría:
  - 🔵 Bajo peso (<18.5)
  - 🟢 Normal (18.5-24.9)
  - 🟡 Sobrepeso (25-29.9)
  - 🔴 Obesidad (30+)

### 🍽️ Macronutrientes
- Distribución automática según objetivo:
  - **Pérdida**: 40% Proteína, 30% Carbos, 30% Grasas
  - **Mantenimiento**: 30% Proteína, 40% Carbos, 30% Grasas
  - **Ganancia**: 30% Proteína, 45% Carbos, 25% Grasas
- Valores en **gramos** y **porcentajes**
- **Gráfico circular** interactivo (Chart.js)

### 📏 Medidas Corporales
- Campos opcionales para tracking completo:
  - Cintura (cm)
  - Cadera (cm)
  - Pecho (cm)
  - Brazos (cm)
- **Índice Cintura-Cadera** calculado automáticamente
- Guardado en historial personal

### 📄 Exportación a PDF
- Botón para descargar resultados completos
- Incluye: BMR, TDEE, IMC, objetivos calóricos
- Macronutrientes detallados
- Medidas corporales (si se completaron)

### 👤 Sistema de Usuarios
- Registro e inicio de sesión
- Datos guardados en localStorage
- Cada usuario tiene su propio historial

### 📈 Seguimiento de Progreso
- Registro histórico de peso y medidas
- **Gráfica visual** de evolución de peso
- Estadísticas en tiempo real
- Historial completo con fechas

### 🌐 Multiidioma
- 🇪🇸 Español
- 🇬🇧 English
- 🇩🇪 Deutsch

### 🌙 Modo Oscuro/Claro
- Toggle en esquina superior derecha
- Preferencia guardada automáticamente
- Diseño elegante en ambos modos

### 📱 Responsive
- Optimizado para móvil, tablet y PC
- Diseño adaptable con CSS Grid/Flexbox

## 🛠️ Tecnologías

- **HTML5** - Estructura semántica
- **CSS3** - Flexbox, Grid, Animaciones, Gradientes
- **JavaScript Vanilla** - Sin frameworks
- **Chart.js** - Gráficos interactivos
- **jsPDF** - Exportación a PDF
- **FlagCDN** - Banderas de idiomas
- **LocalStorage** - Persistencia de datos

## 📊 Distribución de Macronutrientes

La app calcula automáticamente los macros según tu objetivo:

| Objetivo | Proteínas | Carbohidratos | Grasas |
|----------|-----------|---------------|--------|
| Pérdida de peso | 40% | 30% | 30% |
| Mantenimiento | 30% | 40% | 30% |
| Ganancia muscular | 30% | 45% | 25% |

## 📝 Changelog

### v2.0 (Diciembre 2025)
- ✅ Calculadora de macronutrientes con gráfico
- ✅ IMC interpretado con badge de colores
- ✅ Exportación a PDF completa
- ✅ Medidas corporales (cintura/cadera/pecho/brazos)
- ✅ Índice cintura-cadera
- ✅ Modo oscuro/claro

### v1.0 (Diciembre 2025)
- ✅ Calculadora de calorías (BMR/TDEE)
- ✅ Sistema de usuarios con localStorage
- ✅ Seguimiento de progreso con gráfica
- ✅ 3 idiomas (ES/EN/DE)
- ✅ Diseño responsive

**IMPORTANTE:** La versión actual usa localStorage. Para producción profesional.

## 📧 Contacto

Proyecto creado por **Sergio Iglesias** - Usuario de IT con pasión por fitness y tech.

---

**Creado con mucho ❤️**

🌟 **Si te gusta el proyecto, dale una estrella en GitHub!**
