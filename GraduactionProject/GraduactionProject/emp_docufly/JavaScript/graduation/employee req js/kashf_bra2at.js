
const currentDate = new Date();
let currentYear = currentDate.getFullYear();

// الجامعات عادة تبدأ العام الدراسي في سبتمبر، لذلك نقوم بحساب العام الأكاديمي بناءً على الشهر
let academicYearStart = currentYear;
let academicYearEnd = currentYear + 1;

// إذا كان اليوم الحالي في العام بعد شهر 8 (سبتمبر)، يعتبر أن العام الأكاديمي الجديد قد بدأ
if (currentDate.getMonth() < 8) {
    academicYearStart = currentYear - 1;
    academicYearEnd = currentYear;
}

// تعيين القيم في حقلي الإدخال
document.getElementById('grad-year-1').value = academicYearStart;
document.getElementById('grad-year-2').value = academicYearEnd;


// حساب الشهر الحالي
const currentMonth = currentDate.getMonth(); // يبدأ من 0 (يناير) حتى 11 (ديسمبر)

let semester = "";

// تحديد الفصل الدراسي بناءً على الشهر
if (currentMonth >= 0 && currentMonth <= 2) {
    semester = "شتاء"; // يناير إلى مارس
} else if (currentMonth >= 3 && currentMonth <= 5) {
    semester = "ربيع"; // أبريل إلى يونيو
} else if (currentMonth >= 6 && currentMonth <= 8) {
    semester = "صيف"; // يوليو إلى سبتمبر
} else {
    semester = "خريف"; // أكتوبر إلى ديسمبر
}

// تعيين الفصل في حقل الإدخال
document.getElementById('semester-input').value = semester;


