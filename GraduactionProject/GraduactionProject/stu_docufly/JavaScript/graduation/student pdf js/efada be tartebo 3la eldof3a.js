document.getElementById('showImageBtn').addEventListener('click', function() {
    convertToImage('png');
});

function convertToImage(format = 'png') {
    const formContainer = document.getElementById('capture');
    const buttons = document.querySelectorAll('.btn-info');
    
    // Hide buttons before capturing
    buttons.forEach(button => button.classList.add('hide'));
    html2canvas(formContainer, { scrollY: -window.scrollY }).then(canvas => {
        const img = canvas.toDataURL(`image/${format}`);
        const newWindow = window.open("", "_blank");
        newWindow.document.write(`
            <!DOCTYPE html>
            <html lang="ar" dir="rtl">
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>عرض الصورة</title>
                <style>
                    body {
                        text-align: center;
                        margin: 0;
                        padding: 20px;
                        font-family: Arial, sans-serif;
                    }
                    img {
                        max-width: 100%;
                        height: auto;
                    }
                    .btn {
                        display: inline-block;
                        padding: 10px 20px;
                        margin-top: 20px;
                        border: none;
                        border-radius: 5px;
                        background-color: #007bff;
                        color: white;
                        font-size: 16px;
                        cursor: pointer;
                    }
                    .btn:hover {
                        background-color: #0056b3;
                    }
                </style>
                <script src="https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.5.1/jspdf.umd.min.js"></script>
            </head>
            <body>
                <img src="${img}" alt="Captured Image" id="photo_form"/>
                <br>
                <button type="button" id="downloadPDFBtn" class="btn btn-info">تحميل كـ PDF</button>
                <script>
                    document.getElementById('downloadPDFBtn').addEventListener('click', function() {
                        const { jsPDF } = window.jspdf;
                        const img = document.getElementById('photo_form').src;
                        const pdf = new jsPDF();
                        pdf.addImage(img, 'PNG', 0, 0, 210, 297); // Adjust the dimensions if needed
                        pdf.save('document.pdf');
                    });
                </script>
            </body>
            </html>
        `);
        newWindow.document.close(); // Close document to ensure proper rendering
    }).finally(() => {
        // Restore buttons after capturing
        buttons.forEach(button => button.classList.remove('hide'));
    });
}

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
    // الحصول على التاريخ الحالي
    let today = new Date();
    let month = today.getMonth() + 1; // الأشهر تبدأ من 0 في JavaScript لذلك نضيف 1
    let year = today.getFullYear(); // الحصول على السنة الحالية
    
    // 1. ملء حقل "دور" بالشهر الحالي
    let months = ["يناير", "فبراير", "مارس", "أبريل", "مايو", "يونيو", "يوليو", "أغسطس", "سبتمبر", "أكتوبر", "نوفمبر", "ديسمبر"];
    document.getElementById('roleInput').value = months[month - 1]; // تعبئة حقل الدور بالشهر الحالي

    // 2. تحديد الفصل بناءً على الشهر
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
    document.getElementById('seasonInput').value = season; // تعبئة حقل الفصل بفصل السنة الحالي

    // 3. تحديد العام الجامعي بناءً على الشهر
    let academicYearStart;
    let academicYearEnd;
    if (month >= 9) { // العام الجامعي يبدأ في سبتمبر
        academicYearStart = year;
        academicYearEnd = year + 1;
    } else { // إذا كان قبل سبتمبر، ما زلنا في العام الجامعي السابق
        academicYearStart = year - 1;
        academicYearEnd = year;
    }
    document.getElementById('academicYearStart').value = academicYearStart; // تعبئة حقل بداية العام الجامعي
    document.getElementById('academicYearEnd').value = academicYearEnd; // تعبئة حقل نهاية العام الجامعي

    // 4. تعبئة التاريخ في الحقول المحددة (مثال للحقلين: "universityDate" و"collegeDate")
    let formattedDate = today.toISOString().split('T')[0]; // الحصول على التاريخ في صيغة YYYY-MM-DD
    if (document.getElementById('universityDate')) {
        document.getElementById('universityDate').value = formattedDate;
    }
    if (document.getElementById('collegeDate')) {
        document.getElementById('collegeDate').value = formattedDate;
    }
}

document.getElementById('confirm').addEventListener('click', function(){
    window.location.href = '/stu_docufly/HTML/department.html', '_blank';
})