// Search

// تهيئة flatpickr
const datePicker = flatpickr("#dateRange", {
    mode: "range",
    dateFormat: "Y-m-d",
});

// دالة لفتح التقويم عند النقر على الأيقونة
document.getElementById('dateRangeIcon').addEventListener('click', function () {
    datePicker.open(); // فتح التقويم
});

function filterTable() {
    // جلب جميع القيم من حقول البحث
    var codeInput = document.getElementById("searchInput1").value.toLowerCase();
    var nameInput = document.getElementById("searchInput2").value.toLowerCase();
    var requestTypeInput = document.getElementById("searchInput3").value.toLowerCase();
    var dateRangeInput = document.getElementById("dateRange").value;

    // تحقق من وجود قيمة في حقول البحث
    if (!codeInput && !nameInput && !requestTypeInput && !dateRangeInput) {
        alert("يرجى اختيار شيء من حقول البحث قبل الضغط على زر بحث."); // تنبيه للمستخدم
        return; // إنهاء الوظيفة
    }

    // جلب جميع الصفوف في الجدول    
    var table = document.querySelector(".table tbody");
    var rows = table.getElementsByTagName("tr");

    // تحديد متغيرات لتاريخ البداية والنهاية
    var dateFrom = "";
    var dateTo = "";

    // معالجة نطاق التواريخ
    if (dateRangeInput) {
        var dates = dateRangeInput.split(" إلى "); // في حال كانت لغة التقويم عربية
        if (dates.length === 1) {
            dates = dateRangeInput.split(" to "); // في حال كانت لغة التقويم إنجليزية
        }

        dateFrom = new Date(dates[0]); // أول تاريخ
        if (dates[1]) {
            dateTo = new Date(dates[1]); // إذا كان هناك تاريخ ثاني
        } else {
            dateTo = dateFrom; // إذا تم إدخال تاريخ واحد فقط، اجعل تاريخ النهاية يساوي البداية
        }
    }

    // تصفح كل صف وتصفية البيانات
    for (var i = 0; i < rows.length; i++) {
        var codeCell = rows[i].getElementsByTagName("th")[0].innerText.toLowerCase();
        var nameCell = rows[i].getElementsByTagName("td")[0].innerText.toLowerCase();
        var requestTypeCell = rows[i].getElementsByTagName("td")[1].innerText.toLowerCase();
        var dateCell = rows[i].getElementsByTagName("td")[2].innerText;
        var rowDate = new Date(dateCell); // تحويل تاريخ الصف إلى كائن تاريخ

        // شروط البحث    
        var isCodeMatch = (codeInput === "" || codeCell.includes(codeInput));
        var isNameMatch = (nameInput === "" || nameCell.includes(nameInput));
        var isRequestTypeMatch = (requestTypeInput === "" || requestTypeCell.includes(requestTypeInput));
        var isDateMatch = true; // افتراض أن التاريخ صحيح إذا لم يتم إدخال تاريخ

        // التحقق من مطابقة التاريخ إذا تم إدخال تاريخ
        if (dateFrom) {
            isDateMatch = (rowDate >= dateFrom && rowDate <= dateTo); // التحقق من أن تاريخ الصف يقع ضمن النطاق
        }

        // إظهار أو إخفاء الصف بناءً على المطابقة
        if (isCodeMatch && isNameMatch && isRequestTypeMatch && isDateMatch) {
            rows[i].style.display = ""; // إظهار الصف
        } else {
            rows[i].style.display = "none"; // إخفاء الصف
        }
    }
}




// Pagination 

// متغيرات لتقسيم الصفحات
let current_page = 1;
let rows_per_page = 2; // عدد الصفوف في كل صفحة

// دالة لعرض صفوف الجدول بناءً على الصفحة الحالية
function displayTableRows(page) {
    const table = document.getElementById('requests-container');
    const rows = table.getElementsByTagName('tr');
    const total_rows = rows.length - 1; // استبعاد صف العنوان
    const start = (page - 1) * rows_per_page + 1;
    const end = Math.min(start + rows_per_page - 1, total_rows); // تعديل النهاية للتأكد من عدم تجاوز العدد الكلي للصفوف

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
    const totalRows = document.getElementById('requests-container').getElementsByTagName('tr').length - 1;
    const totalPages = Math.ceil(totalRows / rows_per_page);

    // تمكين/تعطيل أزرار "السابق" و"التالي"
    const prevButton = document.getElementById('prevButton');
    const nextButton = document.getElementById('nextButton');

    prevButton.style.display = current_page === 1 ? 'none' : 'block'; // إخفاء زر "السابق" إذا كانت الصفحة الأولى
    nextButton.style.display = current_page === totalPages ? 'none' : 'block'; // إخفاء زر "التالي" إذا كانت الصفحة الأخيرة
}

// دالة لإعداد عناصر التحكم في تقسيم الصفحات
function setupPagination(totalRows) {
    const pagination = document.getElementById('pagination');
    pagination.innerHTML = ''; // مسح التنقل الموجود

    const totalPages = Math.ceil(totalRows / rows_per_page);

    // إضافة زر "<< السابق"
    let prevLi = document.createElement('li');
    prevLi.classList.add('page-item');
    prevLi.innerHTML = `<a class="page-link" href="javascript:void(0)" onclick="prevPage()">«</a>`;
    prevLi.id = 'prevButton';
    pagination.appendChild(prevLi);

    // إضافة أزرار أرقام الصفحات
    let startPage = Math.max(1, current_page - 1); // بدء الصفحة من الصفحة الحالية - 1
    let endPage = Math.min(startPage + 2, totalPages); // نهاية الصفحة بحيث لا تتجاوز العدد الكلي للصفحات

    if (endPage - startPage < 2) {
        startPage = Math.max(1, endPage - 2); // تأكد من أن هناك 3 صفحات على الأقل
    }

    for (let i = startPage; i <= endPage; i++) {
        let li = document.createElement('li');
        li.classList.add('page-item');
        li.innerHTML = `<a class="page-link" href="javascript:void(0)" onclick="goToPage(${i}, this)">${i}</a>`;
        if (i === current_page) {
            li.classList.add('active'); // تعيين الصفحة النشطة
        }
        pagination.appendChild(li);
    }

    // إضافة زر "التالي >>"
    let nextLi = document.createElement('li');
    nextLi.classList.add('page-item');
    nextLi.innerHTML = `<a class="page-link" href="javascript:void(0)" onclick="nextPage()">»</a>`;
    nextLi.id = 'nextButton';
    pagination.appendChild(nextLi);

    updatePagination(); // تحديث التنقل

}

// دالة للانتقال إلى الصفحة التالية
function nextPage() {
    const totalRows = document.getElementById('requests-container').getElementsByTagName('tr').length - 1;
    const totalPages = Math.ceil(totalRows / rows_per_page);

    if (current_page < totalPages) {
        current_page++; // زيادة الصفحة الحالية
        displayTableRows(current_page); // عرض الصفوف الخاصة بالصفحة الجديدة
        setupPagination(totalRows); // تحديث عناصر التحكم في تقسيم الصفحات
    }
}

// دالة للانتقال إلى الصفحة السابقة
function prevPage() {
    if (current_page > 1) {
        current_page--; // تقليل الصفحة الحالية
        displayTableRows(current_page); // عرض الصفوف الخاصة بالصفحة الجديدة
        setupPagination(document.getElementById('requests-container').getElementsByTagName('tr').length - 1); // تحديث عناصر التحكم في تقسيم الصفحات
    }
}

// دالة للتعامل مع الضغط على رقم الصفحة وتحديث الصفحة الحالية
function goToPage(page, element) {
    current_page = page; // تحديث الصفحة الحالية
    displayTableRows(current_page); // عرض الصفوف الخاصة بالصفحة الحالية
    setupPagination(document.getElementById('requests-container').getElementsByTagName('tr').length - 1); // تحديث عناصر التحكم في تقسيم الصفحات

    // إزالة الصنف النشط من جميع روابط الصفحات
    const pageLinks = document.querySelectorAll('#pagination .page-link');
    pageLinks.forEach(link => link.classList.remove('active'));

    // إضافة الصنف النشط إلى الرابط الخاص بالصفحة المضغوطة
    element.classList.add('active');
}

window.onload = function () {
    current_page = 1; // تعيين الصفحة الحالية لتكون الأولى عند تحميل الصفحة
    sortTableByDate(); // فرز الجدول بالتاريخ عند التحميل
    const totalRows = document.getElementById('requests-container').getElementsByTagName('tr').length - 1;
    setupPagination(totalRows); // إعداد عناصر التحكم في تقسيم الصفحات
    displayTableRows(1); // عرض الصفوف الخاصة بالصفحة الحالية
};

function sortTableByDate() {
    var table = document.querySelector(".table tbody");
    var rows = Array.from(table.getElementsByTagName("tr")); // جلب جميع الصفوف وتحويلها إلى مصفوفة

    rows.sort(function (a, b) {
        var dateA = new Date(a.getElementsByTagName("td")[2].innerText); // استخراج التاريخ من العمود الثالث
        var dateB = new Date(b.getElementsByTagName("td")[2].innerText);

        // فرز تنازلي (الأحدث في الأعلى)
        return dateB - dateA;
    });

    // إعادة ترتيب الصفوف داخل الجدول
    rows.forEach(function (row) {
        table.appendChild(row); // إلحاق الصفوف بترتيب جديد
    });
}

// باقي الكود الخاص بالنوافذ المنبثقة والإشعارات هنا
// سيتم تضمينه كما هو مع ضمان عمل جميع الأجزاء معًا

// نوافذ منبثقة وإشعارات كما في الكود السابق

//اكتبي هنا ال بوبا تحويل الادارات 

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

function showRejectionPopup() {
    // إخفاء نافذة الصورة
    var imageModal = bootstrap.Modal.getInstance(document.getElementById('imageModal'));
    imageModal.hide();

    // إظهار نافذة كتابة سبب الرفض عند الضغط على "غير موافق"
    var rejectionModal = new bootstrap.Modal(document.getElementById('rejectionModal'));
    rejectionModal.show();
}

function submitRejection() {
    // إخفاء نافذة الرفض
    var rejectionModal = bootstrap.Modal.getInstance(document.getElementById('rejectionModal'));
    rejectionModal.hide();

    // إظهار نافذة التأكيد عند الضغط على "إرسال"
    var confirmationModal = new bootstrap.Modal(document.getElementById('confirmationModal'));
    confirmationModal.show();
}


function deleteRow(icon) {
    const row = icon.closest('tr');
    row.remove();
}

//حذف الصف من جدول الطلبات
let currentRow; // لتخزين الصف الحالي

function showImageModal(element) {
    currentRow = element.closest('tr'); // تخزين الصف الحالي
    const imageModal = new bootstrap.Modal(document.getElementById('imageModal'));
    imageModal.show();
}

function confirmApproval() {
    // إغلاق Modal الصورة
    const imageModal = bootstrap.Modal.getInstance(document.getElementById('imageModal'));
    imageModal.hide();

    // حذف الصف
    currentRow.remove();

    // إظهار Modal التأكيد
    const confirmationModal = new bootstrap.Modal(document.getElementById('confirmationModal'));
    confirmationModal.show();
}

function showRejectionPopup() {
    const imageModal = bootstrap.Modal.getInstance(document.getElementById('imageModal'));
    imageModal.hide();

    // إظهار Modal سبب الرفض
    const rejectionModal = new bootstrap.Modal(document.getElementById('rejectionModal'));
    rejectionModal.show();
}

function submitRejection() {
    // يمكنك إضافة كود هنا لمعالجة سبب الرفض (مثلاً إرسال إلى الخادم)

    const rejectionModal = bootstrap.Modal.getInstance(document.getElementById('rejectionModal'));
    rejectionModal.hide();

    // حذف الصف
    currentRow.remove();

    // إظهار Modal التأكيد
    const confirmationModal = new bootstrap.Modal(document.getElementById('confirmationModal'));
    confirmationModal.show();
}



