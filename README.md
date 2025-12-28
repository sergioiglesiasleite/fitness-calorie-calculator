# 🏋️ NUTRI-FIT-ON

Professional fitness calculator with tracking system, macronutrients, and comprehensive body analysis.

## 📁 Project Structure

fitness-calorie-calculator/
│
├── index.html # Main calculator
├── progreso.html # Progress tracking
├── auth.js # Authentication system
├── app.js # Calculator logic + macros
├── progreso.js # Progress tracking logic
│
└── assets/
└── logo-nutri-fit-on.jpg # Logo

## ✨ Key Features

### 🧮 Calorie Calculator
- **Mifflin-St Jeor Formula** (most scientifically accurate)
- **BMR** calculation (Basal Metabolic Rate)
- **TDEE** calculation (Total Daily Energy Expenditure)
- 5 physical activity levels
- 3 goals: weight loss, maintenance, muscle gain

### 📊 Interpreted BMI
- Automatic Body Mass Index calculation
- **Color-coded badge** by category:
  - 🔵 Underweight (<18.5)
  - 🟢 Normal (18.5-24.9)
  - 🟡 Overweight (25-29.9)
  - 🔴 Obesity (30+)

### 🍽️ Macronutrients
- Automatic distribution based on goal:
  - **Weight Loss**: 40% Protein, 30% Carbs, 30% Fats
  - **Maintenance**: 30% Protein, 40% Carbs, 30% Fats
  - **Muscle Gain**: 30% Protein, 45% Carbs, 25% Fats
- Values in **grams** and **percentages**
- Interactive **pie chart** (Chart.js)

### 📏 Body Measurements
- Optional fields for complete tracking:
  - Waist (cm)
  - Hip (cm)
  - Chest (cm)
  - Arms (cm)
- **Waist-to-Hip Ratio** calculated automatically
- Saved in personal history

### 📄 PDF Export
- Button to download complete results
- Includes: BMR, TDEE, BMI, calorie goals
- Detailed macronutrients
- Body measurements (if completed)

### 👤 User System
- Registration and login
- Data stored in localStorage
- Each user has their own history

### 📈 Progress Tracking
- Historical record of weight and measurements
- **Visual chart** of weight evolution
- Real-time statistics
- Complete history with dates

### 🌐 Multilingual
- 🇪🇸 Español
- 🇬🇧 English
- 🇩🇪 Deutsch

### 🌙 Dark/Light Mode
- Toggle in upper right corner
- Preference saved automatically
- Elegant design in both modes

### 📱 Responsive
- Optimized for mobile, tablet, and PC
- Adaptive design with CSS Grid/Flexbox

## 🛠️ Technologies

- **HTML5** - Semantic structure
- **CSS3** - Flexbox, Grid, Animations, Gradients
- **Vanilla JavaScript** - No frameworks
- **Chart.js** - Interactive charts
- **jsPDF** - PDF export
- **FlagCDN** - Language flags
- **LocalStorage** - Data persistence

## 📊 Macronutrient Distribution

The app automatically calculates macros based on your goal:

| Goal | Protein | Carbohydrates | Fats |
|------|---------|---------------|------|
| Weight Loss | 40% | 30% | 30% |
| Maintenance | 30% | 40% | 30% |
| Muscle Gain | 30% | 45% | 25% |

## 📝 Changelog

### v2.0 (December 2025)
- ✅ Macronutrient calculator with chart
- ✅ Interpreted BMI with color-coded badge
- ✅ Complete PDF export
- ✅ Body measurements (waist/hip/chest/arms)
- ✅ Waist-to-hip ratio
- ✅ Dark/light mode

### v1.0 (December 2025)
- ✅ Calorie calculator (BMR/TDEE)
- ✅ User system with localStorage
- ✅ Progress tracking with chart
- ✅ 3 languages (ES/EN/DE)
- ✅ Responsive design

**NOTE:** Current version uses localStorage. For professional production use, consider implementing a backend database.

## 📧 Contact

Project created by **Sergio Iglesias** - IT professional with passion for fitness and tech.

- GitHub: [@sergioiglesiasleite](https://github.com/sergioiglesiasleite)
- Email: sergioiglesiasleite@gmail.com
- LinkedIn: [linkedin.com/in/sergio-iglesias](https://linkedin.com/in/sergio-iglesias)

---

**Built with ❤️**

🌟 **If you like this project, give it a star on GitHub!**