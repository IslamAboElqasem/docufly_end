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

let currentDepartment = null;

function openPopup(currentDepartment) {
    currentRow = currentDepartment.parentElement.parentElement; // تعيين الصف الحالي
    document.getElementById('popupContent').style.display = 'block'; // فتح النافذة المنبثقة
}

function closePopup() {
    document.getElementById('popupContent').style.display = 'none';
}

function handleCheckboxChange(id) {
    var checkbox = document.getElementById(id);
    if (checkbox.checked) {
        console.log(id + ' checked');
    } else {
        console.log(id + ' unchecked');
    }
}

// Converted
//دروب داون التحويل
function confirmSelection() {
    // التحقق من الإدارات المختارة
    const checkboxes = document.querySelectorAll('.form-check-input');
    let selectedValues = [];
    
    checkboxes.forEach(checkbox => {
        if (checkbox.checked) {
            selectedValues.push(checkbox.value); // إضافة الإدارات المختارة إلى القائمة
        }
    });

    // إذا لم يتم اختيار أي إدارة
    if (selectedValues.length === 0) {
        alert('يجب عليك اختيار إدارة واحدة على الأقل للتحويل!');
        return; // إيقاف العملية إذا لم يتم اختيار أي إدارة
    }

    // إظهار المودال إذا تم الاختيار بنجاح
    const modal = new bootstrap.Modal(document.getElementById('successModal'));
    modal.show(); // عرض المودال بنجاح

    // حذف الصف الحالي إذا كان معرفًا
    if (currentRow) {
        currentRow.remove(); // حذف الصف من الـ DOM
    }

    // إلغاء تحديد جميع الـ checkboxes
    checkboxes.forEach(checkbox => {
        checkbox.checked = false; // إلغاء التحديد
    });


    // إعادة ترتيب الصفوف بعد الحذف
    const totalRows = document.getElementById('requests-container').getElementsByTagName('tr').length - 1;
    setupPagination(totalRows); // إعداد تقسيم الصفحات مرة أخرى
    displayTableRows(current_page); // عرض الصفوف المناسبة للصفحة الحالية
    
    // إغلاق النافذة المنبثقة
    closePopup();
}