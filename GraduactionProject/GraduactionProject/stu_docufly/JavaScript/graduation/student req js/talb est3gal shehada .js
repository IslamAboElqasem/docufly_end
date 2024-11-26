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
    // Get today's date
    let today = new Date();
    let formattedDate = today.toISOString().split('T')[0]; // Format as YYYY-MM-DD
    let currentMonth = today.getMonth() + 1; // Get current month (0-11) so we add 1

    // Determine the current season based on the month
    let season;
    if (currentMonth >= 3 && currentMonth <= 5) {
        season = 'ربيع';
    } else if (currentMonth >= 6 && currentMonth <= 8) {
        season = 'صيف';
    } else if (currentMonth >= 9 && currentMonth <= 11) {
        season = 'خريف';
    } else {
        season = 'شتاء';
    }

    // Auto-fill the role, year, and date fields
    document.getElementById('roleInput').value = season; // Set the season (role)
    document.getElementById('yearInput').value = today.getFullYear(); // Set the current year
    document.getElementById('date').value = formattedDate; // Set today's date
    
    // Auto-fill graduation year (assuming 4 years ahead for example)
    document.getElementById('graduationYearInput').value = today.getFullYear() + 4;
};

document.getElementById('confirm').addEventListener('click', function(){
    window.location.href = '/stu_docufly/HTML/department.html', '_blank';
})