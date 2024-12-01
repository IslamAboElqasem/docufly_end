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
    document.getElementById('current-semester').value = semester;
