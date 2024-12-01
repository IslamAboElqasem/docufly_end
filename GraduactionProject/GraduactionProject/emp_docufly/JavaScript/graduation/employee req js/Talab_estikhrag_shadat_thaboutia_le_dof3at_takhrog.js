
const currentDate = new Date();
let currentYear = currentDate.getFullYear();

// تحديد بداية ونهاية العام الأكاديمي
let academicYearStart = currentYear;
let academicYearEnd = currentYear + 1;

// إذا كان الشهر الحالي قبل سبتمبر، يعتبر العام الأكاديمي هو العام السابق
if (currentDate.getMonth() < 8) {
    academicYearStart = currentYear - 1;
    academicYearEnd = currentYear;
}

// تعيين القيم في حقول الإدخال
document.getElementById('grad-year-1').value = academicYearStart;
document.getElementById('grad-year-2').value = academicYearEnd;

// حساب الشهر الحالي
const months = ["يناير", "فبراير", "مارس", "أبريل", "مايو", "يونيو", "يوليو", "أغسطس", "سبتمبر", "أكتوبر", "نوفمبر", "ديسمبر"];
const currentMonth = months[currentDate.getMonth()]; // الحصول على اسم الشهر

// حساب الفصل الدراسي الحالي بناءً على الشهر
const currentMonthIndex = currentDate.getMonth();
let semester = "";

if (currentMonthIndex >= 0 && currentMonthIndex <= 2) {
    semester = "شتاء"; // يناير إلى مارس
} else if (currentMonthIndex >= 3 && currentMonthIndex <= 5) {
    semester = "ربيع"; // أبريل إلى يونيو
} else if (currentMonthIndex >= 6 && currentMonthIndex <= 8) {
    semester = "صيف"; // يوليو إلى سبتمبر
} else {
    semester = "خريف"; // أكتوبر إلى ديسمبر
}

// تعيين الشهر والفصل في حقول الإدخال
document.getElementById('current-month').value = currentMonth;
document.getElementById('current-semester').value = semester;