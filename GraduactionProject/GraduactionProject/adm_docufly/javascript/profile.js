function filterTable() {
    // الحصول على القيم من حقول البحث
    const searchInput1 = document.getElementById('searchInput1').value.toLowerCase();
    const searchInput2 = document.getElementById('searchInput2').value.toLowerCase();
    const searchInput3 = document.getElementById('searchInput3').value.toLowerCase();
    const searchInput5 = document.getElementById('searchInput5').value.toLowerCase();
    const dateRangeInput = document.getElementById('dateRange').value;

    // تحليل التاريخ المدخل
    const dateRange = dateRangeInput ? dateRangeInput.split(" to ") : null;
    const startDate = dateRange ? new Date(dateRange[0]) : null;
    const endDate = dateRange && dateRange[1] ? new Date(dateRange[1]) : null;

    // الحصول على صفوف الجدول
    const tableRows = document.querySelectorAll('#data-table tbody tr');

    // تكرار الصفوف وتصفية النتائج
    tableRows.forEach(row => {
        const studentName = row.cells[1].textContent.toLowerCase();
        const requestCode = row.cells[2].textContent.toLowerCase();
        const requestType = row.cells[3].textContent.toLowerCase();
        const requestDate = new Date(row.cells[4].textContent); // تحويل تاريخ الطلب إلى كائن تاريخ
        const status = row.cells[5].textContent.toLowerCase();

        // تحقق من وجود القيم المدخلة في الصف
        const nameMatch = studentName.includes(searchInput1);
        const codeMatch = requestCode.includes(searchInput2);
        const typeMatch = requestType.includes(searchInput3);
        const statusMatch = status.includes(searchInput5);

        // تحقق من تطابق التاريخ إذا كان المدخل موجودًا
        const dateMatch = (!startDate && !endDate) || (requestDate >= startDate && requestDate <= endDate);

        // إظهار أو إخفاء الصف بناءً على المطابقات
        if (nameMatch && codeMatch && typeMatch && statusMatch && dateMatch) {
            row.style.display = ''; // إظهار الصف
        } else {
            row.style.display = 'none'; // إخفاء الصف
        }
    });
}

// إعداد date picker

flatpickr(document.getElementById("dateRange"), {
    dateFormat: "Y-m-d",
    mode: "range", 
});

// فتح التقويم عند النقر على الأيقونة
document.getElementById("dateRangeIcon").onclick = () => document.getElementById("dateRange")._flatpickr.open();


function showImagePopup() {
    // عرض نافذة الصورة والزرارين
    var imageModal = new bootstrap.Modal(document.getElementById('imageModal'));
    imageModal.show();
}

function showPopup() {
    // إخفاء نافذة الصورة
    var imageModal = bootstrap.Modal.getInstance(document.getElementById('imageModal'));
    imageModal.hide();

    // إظهار نافذة التأكيد عند الضغط على "موافق"
    var confirmationModal = new bootstrap.Modal(document.getElementById('confirmationModal'));
    confirmationModal.show();
}
function submitRejection() {
    const reason = document.getElementById('rejectionReason').value;
    
    // يمكنك هنا إضافة الكود لإرسال السبب إلى الخادم إذا كنت بحاجة لذلك

    // إعادة التوجيه إلى صفحة معينة بعد فترة قصيرة
    window.location.href = "http://127.0.0.1:5502/HTML/employee%20req%20html/5tab%20moafka%20mn%20elrsayel%20elmab3ota%20mn%20el%20itc.html"; // استبدل هذا بالرابط الذي تريده
}

function printImage() {
    const img = document.getElementById('printImage').src;
    const newWindow = window.open('', '', 'width=600,height=400');
    newWindow.document.write(`
        <html>
        <head>
            <title>طباعة الصورة</title>
            <style>
                body { text-align: center; }
                img { max-width: 100%; height: auto; }
            </style>
        </head>
        <body>
            <img src="${img}" alt="صورة للطباعة">
        </body>
        </html>
    `);
    newWindow.document.close();
    newWindow.print();
    newWindow.close();
}