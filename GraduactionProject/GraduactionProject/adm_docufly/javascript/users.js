function filterTable() {
    // الحصول على القيم من حقول البحث
    const searchCode = document.getElementById('searchInput2').value.toLowerCase();
    const searchType = document.getElementById('searchInput3').value.toLowerCase();
    const searchStatus = document.getElementById('searchInput5').value.toLowerCase();
    const dateRangeInput = document.getElementById('dateRange').value;

    // تحليل التاريخ المدخل
    const dateRange = dateRangeInput ? dateRangeInput.split(" to ") : null;
    const startDate = dateRange ? new Date(dateRange[0]) : null;
    const endDate = dateRange && dateRange[1] ? new Date(dateRange[1]) : null;

    // الحصول على صفوف الجدول
    const tableRows = document.querySelectorAll('#data-table tbody tr');

    // تكرار الصفوف وتصفية النتائج
    tableRows.forEach(row => {
        const requestCode = row.cells[0].textContent.toLowerCase();
        const requestType = row.cells[1].textContent.toLowerCase();
        const requestDate = new Date(row.cells[2].textContent); // تاريخ الطلب
        const requestStatus = row.cells[3].textContent.toLowerCase();

        // تحقق من وجود القيم المدخلة في الصف
        const codeMatch = searchCode === '' || requestCode.includes(searchCode);
        const typeMatch = searchType === '' || requestType.includes(searchType);
        const statusMatch = searchStatus === '' || requestStatus.includes(searchStatus);

        // تعديل التحقق من التاريخ بحيث يتم مقارنة السنة والشهر واليوم فقط
        const dateMatch = (!startDate && !endDate) || (
            (requestDate >= startDate && requestDate <= endDate) ||
            (startDate && !endDate && isSameDay(requestDate, startDate))
        );

        // إظهار أو إخفاء الصف بناءً على المطابقات
        if (codeMatch && typeMatch && statusMatch && dateMatch) {
            row.style.display = ''; // إظهار الصف
        } else {
            row.style.display = 'none'; // إخفاء الصف
        }
    });
}

// دالة للتحقق من تطابق التاريخ (اليوم والشهر والسنة فقط)
function isSameDay(date1, date2) {
    return date1.getFullYear() === date2.getFullYear() &&    
        date1.getMonth() === date2.getMonth() &&
        date1.getDate() === date2.getDate();
}

// إعداد date picker لاختيار نطاق التاريخ
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



// Pagination 

// متغيرات لتقسيم الصفحات
let current_page = 1;
let rows_per_page = 4; // عدد الصفوف في كل صفحة

// دالة لعرض صفوف الجدول بناءً على الصفحة الحالية
function displayTableRows(page) {
    const table = document.getElementById('data-table');
    const rows = table.getElementsByTagName('tr');
    const total_rows = rows.length - 1; // استبعاد صف العنوان
    const start = (page - 1) * rows_per_page + 1;
    const end = start + rows_per_page - 1;
    // const end =  Math.min(start + rows_per_page - 1, total_rows); // تعديل النهاية للتأكد من عدم تجاوز العدد الكلي للصفوف

    // حلقة للمرور عبر جميع الصفوف وإخفاء/عرض بناءً على الصفحة
    for (let i = 1; i < rows.length; i++) {
        if (i >= start && i <= end) {
            rows[i].style.display = ''; // عرض الصف
        } else {
            rows[i].style.display = 'none'; // إخفاء الصف
        }
    }
}
// دالة لتحديث التنقل لتمييز الصفحة الحالية وتعطيل/تمكين الأزرار
function updatePagination() {
    const totalRows = document.getElementById('data-table').getElementsByTagName('tr').length - 1;
    const totalPages = Math.ceil(totalRows / rows_per_page);

    // تمكين/تعطيل أزرار "السابق" و"التالي"
    const prevButton = document.getElementById('prevButton');
    const nextButton = document.getElementById('nextButton');

    prevButton.style.display = current_page === 1 ? 'none' : 'block'; // إخفاء زر "السابق" إذا كانت الصفحة الأولى
    nextButton.style.display = current_page === totalPages ? 'none' : 'block'; // إخفاء زر "التالي" إذا كانت الصفحة الأخيرة
    updateActivePage(); // تحديث العنصر النشط

} 
// دالة لإعداد عناصر التحكم في تقسيم الصفحات
function setupPagination(totalRows) {
    const pagination = document.getElementById('pagination');
    pagination.innerHTML = ''; // مسح التنقل الموجود

    const totalPages = Math.ceil(totalRows / rows_per_page);

    // إضافة زر "<< السابق"
    let prevLi = document.createElement('li');
    prevLi.classList.add('page-item');
    prevLi.innerHTML = `<a class="page-link" href="javascript:void(0)" onclick="prevPage()">«</a>`; // سهم مزدوج لليسار
    prevLi.id = 'prevButton';
    pagination.appendChild(prevLi);

    // إضافة أزرار أرقام الصفحات
    for (let i = 1; i <= totalPages; i++) {
        let li = document.createElement('li');
        li.classList.add('page-item');
        li.innerHTML = `<a class="page-link" href="javascript:void(0)" onclick="goToPage(${i}, this)">${i}</a>`;
        pagination.appendChild(li);
    }

    // إضافة زر "التالي >>"
    let nextLi = document.createElement('li');
    nextLi.classList.add('page-item');
    nextLi.innerHTML = `<a class="page-link" href="javascript:void(0)" onclick="nextPage()">»</a>`; // سهم مزدوج لليمين
    nextLi.id = 'nextButton';
    pagination.appendChild(nextLi);

    updatePagination(); // تحديث التنقل
}
// دالة للانتقال إلى الصفحة التالية
function nextPage() {
    const totalRows = document.getElementById('data-table').getElementsByTagName('tr').length - 1;
    const totalPages = Math.ceil(totalRows / rows_per_page);
    
    if (current_page < totalPages) {
        current_page++;
        displayTableRows(current_page);
        updatePagination(); // تحديث التنقل
        updateActivePage(); // تحديث العنصر النشط
    }
}

function prevPage() {
    if (current_page > 1) {
        current_page--;
        displayTableRows(current_page);
        updatePagination(); // تحديث التنقل
        updateActivePage(); // تحديث العنصر النشط
    }
}


// دالة لتحديث العنصر النشط بناءً على الصفحة الحالية
function updateActivePage() {
    // إزالة الصنف النشط من جميع روابط الصفحات
    const pageLinks = document.querySelectorAll('#pagination .page-link');
    pageLinks.forEach(link => link.classList.remove('active-page'));

    // إضافة الصنف النشط إلى الرابط الخاص بالصفحة الحالية بناءً على رقم الصفحة
    const pageItems = document.querySelectorAll('#pagination .page-item');
    if (pageItems[current_page]) {
        pageItems[current_page].querySelector('a').classList.add('active-page');
    }
}


// دالة للتعامل مع الضغط على رقم الصفحة وتحديث الصفحة الحالية
function goToPage(page, element) {
    current_page = page; // تحديث الصفحة الحالية
    displayTableRows(current_page); // عرض الصفوف الخاصة بالصفحة الحالية
    updatePagination(); // تحديث عناصر التحكم في التنقل
    updateActivePage(); // تحديث العنصر النشط

    // إزالة الصنف النشط من جميع روابط الصفحات
    const pageLinks = document.querySelectorAll('#pagination .page-link');
    pageLinks.forEach(link => link.classList.remove('active-page'));

    // إضافة الصنف النشط إلى الرابط الخاص بالصفحة المضغوطة
    element.classList.add('active-page');
}


// تهيئة تقسيم الصفحات عند تحميل الصفحة
window.onload = function () {
    sortRowsByDate(); // فرز الصفوف حسب التاريخ عند التحميل

    const totalRows = document.getElementById('data-table').getElementsByTagName('tr').length - 1;
    setupPagination(totalRows); // إعداد عناصر التحكم في تقسيم الصفحات
    displayTableRows(current_page); // عرض الصفوف الخاصة بالصفحة الحالية
    updatePagination(); // تحديث عناصر التحكم في التنقل
};
 
// دالة لفرز الصفوف حسب التاريخ
function sortRowsByDate() {
    const table = document.getElementById('data-table');
    const tbody = table.querySelector('tbody');
    const rows = Array.from(tbody.rows); // تحويل الـ NodeList إلى مصفوفة

    // فرز الصفوف حسب التاريخ (العمود الثالث)
    rows.sort((rowA, rowB) => {
        const dateA = new Date(rowA.cells[4].innerText); // التاريخ في الصف A
        const dateB = new Date(rowB.cells[4].innerText); // التاريخ في الصف B
        return dateB - dateA; // ترتيب تنازلي (الأحدث أولاً)
    });

    // إعادة إدراج الصفوف المرتبة في الـ tbody
    rows.forEach(row => tbody.appendChild(row));
}



let rowToDelete; // متغير لتخزين الصف المراد حذفه

    function showDeleteModal(button) {
        rowToDelete = button.closest('tr'); // خذ الصف الأقرب للزر
        var deleteModal = new bootstrap.Modal(document.getElementById('deleteModal'));
        deleteModal.show();
    }

    document.getElementById('confirmDeleteBtn').addEventListener('click', function() {
        if (rowToDelete) {
            rowToDelete.remove(); // احذف الصف
        }
        var deleteModal = bootstrap.Modal.getInstance(document.getElementById('deleteModal'));
        deleteModal.hide(); // أغلق النافذة
    });