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
    // Get current date
    let today = new Date();
    let currentMonth = today.getMonth() + 1; // January is 0, so we add 1
    let currentYear = today.getFullYear();

    // Determine the academic year based on the current month
    let academicYearStart, academicYearEnd;
    if (currentMonth >= 9) { // Academic year starts in September
        academicYearStart = currentYear;
        academicYearEnd = currentYear + 1;
    } else { // If before September, we're still in the previous academic year
        academicYearStart = currentYear - 1;
        academicYearEnd = currentYear;
    }

    // Set the academic year in the input fields
    document.getElementById('academicYearStart').value = academicYearStart;
    document.getElementById('academicYearEnd').value = academicYearEnd;
};

document.getElementById('confirm').addEventListener('click', function(){
    window.location.href = '/stu_docufly/HTML/department.html', '_blank';
})