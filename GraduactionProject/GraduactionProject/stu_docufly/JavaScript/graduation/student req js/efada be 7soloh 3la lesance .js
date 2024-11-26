function showPopup() {
    // إظهار النافذة المنبثقة عند الضغط على "موافق"
    var confirmationModal = new bootstrap.Modal(document.getElementById('confirmationModal'));
    confirmationModal.show();
}

function showRejection() {
    // إخفاء الزرارين "موافق" و"غير موافق"
    document.querySelector('.btn1').style.display = 'none';
    document.querySelector('.btn2').style.display = 'none';
    
    // إظهار textarea وزر "إرسال"
    document.getElementById('rejectionSection').style.display = 'block';
}

function submitRejection() {
    // إظهار النافذة المنبثقة عند الضغط على "إرسال" بعد كتابة سبب الرفض
    var confirmationModal = new bootstrap.Modal(document.getElementById('confirmationModal'));
    confirmationModal.show();
}

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

window.onload = function() {
    let today = new Date().toISOString().split('T')[0];
    document.getElementById('universityDate').value = today;
    document.getElementById('collegeDate').value = today;
}

document.getElementById('confirm').addEventListener('click', function(){
    window.location.href = '/stu_docufly/HTML/department.html', '_blank';
})

