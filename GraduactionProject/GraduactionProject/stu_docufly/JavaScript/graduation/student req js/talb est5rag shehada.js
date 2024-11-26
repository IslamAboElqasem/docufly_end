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

window.onload = function() {
    let today = new Date().toISOString().split('T')[0];
    document.getElementById('universityDate').value = today;
    document.getElementById('collegeDate').value = today;
}

window.onload = function() {
    // الحصول على التاريخ الحالي
    let today = new Date();
    let month = today.getMonth() + 1; // الأشهر تبدأ من 0 في JavaScript لذلك نضيف 1
    let year = today.getFullYear();

    // تحديد الفصل بناءً على الشهر
    let season = "";
    if (month >= 3 && month <= 5) {
        season = "ربيع";
    } else if (month >= 6 && month <= 8) {
        season = "صيف";
    } else if (month >= 9 && month <= 11) {
        season = "خريف";
    } else {
        season = "شتاء";
    }
    document.getElementById('roleInput').value = season;

    // ملء العام الجامعي
    let startYear = (month >= 9) ? year : year - 1;
    let endYear = startYear + 1;
    document.getElementById('academicYearStart').value = startYear;
    document.getElementById('academicYearEnd').value = endYear;
}

document.getElementById('confirm').addEventListener('click', function(){
    window.location.href = '/stu_docufly/HTML/department.html', '_blank';
})