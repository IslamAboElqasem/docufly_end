let notifications = ['requestReceived', 'leaveAccepted', 'leaveRejected'];

function toggleDropdown() {
    const dropdownMenu = document.getElementById('dropdown-menu');
    dropdownMenu.style.display = dropdownMenu.style.display === 'none' ? 'block' : 'none';
}

function handleNotificationClick(notification) {
    // قم بإزالة الرسالة من قائمة الإشعارات
    notifications = notifications.filter(item => item !== notification);
    
    // تحديث عدد الإشعارات
    document.getElementById('notification-count').innerText = notifications.length;

    // إخفاء الرسالة في القائمة
    const dropdownMenu = document.getElementById('dropdown-menu');
    dropdownMenu.innerHTML = notifications.map(item => {
        return item === 'requestReceived' ? 
            `<a href="#" class="dropdown-item text-center" onclick="handleNotificationClick('requestReceived')">تم استلام الطلب</a>` : 
            `<a href="#" class="dropdown-item text-center" onclick="handleNotificationClick('leaveAccepted')"><i class="fa-solid fa-circle-check"></i> تم قبول طلب الاجازه</a>`;
            `<a href="#" class="dropdown-item text-center" onclick="handleNotificationClick('leaveRejected')"> <i class="fa-solid fa-circle-xmark" style="color: red;"></i> تم رفض طلب الاجازه</a>`
    }).join('');
    
    // الذهاب إلى الصفحة الجديدة (يمكن تعديل الرابط حسب الحاجة)
    if (notification === 'leaveAccepted') {
        window.location.href = "/HTML/الخريجين/employee_pdf_html/kashf_bra2at.html";
    }
    if (notification === 'leaveRejected') {
        window.location.href = "/HTML/الخريجين/employee_req_html/moafkt_tba3a_e3tmad_shehada_ta5rog.html";
    }
}


// إخفاء القائمة عند النقر في أي مكان آخر
document.addEventListener("click", function(event) {
    const notificationsDropdown = document.getElementById("notificationsDropdown");
    const notificationsButton = document.getElementById("notificationsButton");

    // تحقق مما إذا كان النقر داخل أي من العناصر
    if (!notificationsButton.contains(event.target) && !notificationsDropdown.contains(event.target)) {
        notificationsDropdown.style.display = "none"; // إخفاء القائمة
    }
});


// إخفاء القائمة عند النقر في أي مكان آخر
document.addEventListener("click", function(event) {
    const notificationsDropdown = document.getElementById("notificationDropdown");
    const notificationsButton = document.getElementById("notificationsButton");

    // تحقق مما إذا كان النقر داخل أي من العناصر
    if (!notificationsButton.contains(event.target) && !notificationsDropdown.contains(event.target)) {
        notificationsDropdown.style.display = "none"; // إخفاء القائمة
    }
});


// إخفاء القائمة عند النقر في أي مكان آخر
document.addEventListener("click", function(event) {
    const dropdownMenu = document.getElementById("dropdown-menu");
    const bellIcon = document.getElementById("bell-icon");

    // تحقق مما إذا كان النقر داخل أي من العناصر
    if (!bellIcon.contains(event.target) && !dropdownMenu.contains(event.target)) {
        dropdownMenu.style.display = "none"; // إخفاء القائمة
    }
});


//الاشعارات الصغيره
function toggleNotificationDropdown() {
    var dropdown = document.getElementById('notificationDropdown');
    dropdown.style.display = (dropdown.style.display === 'none' || dropdown.style.display === '') ? 'block' : 'none';
}



function showRejectionModal() {
    var rejectionModal = new bootstrap.Modal(document.getElementById('rejectionModall'));
    rejectionModal.show();
}




//حذف الاشعارت
function toggleDropdown() {
    const dropdown = document.getElementById('dropdown-menu');
    dropdown.style.display = dropdown.style.display === 'none' ? 'block' : 'none';
}

function removeNotification(event, url) {
    event.preventDefault(); // منع الانتقال إلى صفحة جديدة
    const notificationItem = event.target.closest('.dropdown-item');
    if (notificationItem) {
        notificationItem.remove(); // إزالة العنصر من الـ DOM
    }

    // تحديث عدد الإشعارات
    const countElement = document.getElementById('notification-count');
    const currentCount = parseInt(countElement.innerText);
    countElement.innerText = currentCount - 1; // تقليل العدد بمقدار 1

    // الانتقال إلى الصفحة المحددة بعد حذف الإشعار
    setTimeout(() => {
        window.location.href = url; // الانتقال إلى الرابط
    }); // تأخير لمدة 100 ملي ثانية
}



function toggleNotificationDropdown() {
    const dropdown = document.getElementById('notificationDropdown');
    dropdown.style.display = dropdown.style.display === 'none' ? 'block' : 'none';
}

function removeNotifications(event, url) {
    event.preventDefault(); // منع الانتقال إلى صفحة جديدة
    const notificationItem = event.target.closest('.dropdown-item');
    if (notificationItem) {
        notificationItem.remove(); // إزالة العنصر من الـ DOM
    }

    // تحديث عدد الإشعارات
    const countElement = document.querySelector('#notificationsButton .num');
    const currentCount = parseInt(countElement.innerText);
    countElement.innerText = currentCount - 1; // تقليل العدد بمقدار 1

     // الانتقال إلى الصفحة المحددة بعد حذف الإشعار
     setTimeout(() => {
        window.location.href = url; // الانتقال إلى الرابط
    }); // تأخير لمدة 100 ملي ثانية
}