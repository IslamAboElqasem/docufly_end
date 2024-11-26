document.getElementById('confirm').addEventListener('click', function(){
    window.open('../HTML/department.html');
    
})



document.getElementById("bell-icon").addEventListener("click", function(event) {
    event.preventDefault(); // يمنع الانتقال إلى الرابط
    const dropdownMenu = document.getElementById("dropdown-menu");
    dropdownMenu.style.display = dropdownMenu.style.display === "none" ? "block" : "none";
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

document.getElementById("outgoing").addEventListener("click", function(event) {
    event.preventDefault();
    const outgoingMenu = document.getElementById("outgoing-menu");
    outgoingMenu.style.display = outgoingMenu.style.display === "none" ? "block" : "none";
});

document.getElementById("incoming").addEventListener("click", function(event) {
    event.preventDefault();
    const incomingMenu = document.getElementById("incoming-menu");
    incomingMenu.style.display = incomingMenu.style.display === "none" ? "block" : "none";
});

document.getElementById("notificationsButton").addEventListener("click", function(event) {
    event.preventDefault();
    const notificationsDropdown = document.getElementById("notificationsDropdown");
    notificationsDropdown.style.display = notificationsDropdown.style.display === "none" ? "block" : "none";
});

// إخفاء القائمة عند النقر في أي مكان آخر
document.addEventListener("click", function(event) {
    const notificationsDropdown = document.getElementById("notificationsDropdown");
    const notificationsButton = document.getElementById("notificationsButton");

    // تحقق مما إذا كان النقر داخل أي من العناصر
    if (!notificationsButton.contains(event.target) && !notificationsDropdown.contains(event.target)) {
        notificationsDropdown.style.display = "none"; // إخفاء القائمة
    }
});

document.getElementById("outgoingButton").addEventListener("click", function(event) {
    event.preventDefault();
    const outgoingMessages = document.getElementById("outgoingMessages");
    outgoingMessages.style.display = outgoingMessages.style.display === "none" ? "block" : "none";
});

document.getElementById("incomingButton").addEventListener("click", function(event) {
    event.preventDefault();
    const incomingMessages = document.getElementById("incomingMessages");
    incomingMessages.style.display = incomingMessages.style.display === "none" ? "block" : "none";
});


//دي الاشعارات فالناف العاديه
$(document).ready(function() {
    let moreMessages = [
        '<a href="#" class="dropdown-item text-center">رسالة 5</a>',
        '<a href="#" class="dropdown-item text-center">رسالة 6</a>',
        // أضف المزيد من الرسائل هنا إذا كنت ترغب في ذلك
    ];

    $('#show-more').click(function(event) {
        event.preventDefault();
        
        // إضافة الرسائل الجديدة تحت الحاوية الحالية
        $('#additional-messages').append(moreMessages.join(''));

        // إذا كنت تريد إخفاء زر "عرض المزيد" بعد الضغط عليه، يمكنك إلغاء تعليق السطر التالي
        // $(this).hide();
    });
});

//دي اشعارات لما الشاشه تصغر
$(document).ready(function() {
    let additionalNotifications = [
        '<a href="#" class="dropdown-item text-center fs-6">رسالة 5</a>',
        '<a href="#" class="dropdown-item text-center fs-6">رسالة 6</a>',
        // يمكنك إضافة المزيد من الرسائل هنا
    ];

    $('#show-more-notifications').click(function(event) {
        event.preventDefault();
        
        // إضافة الإشعارات الجديدة تحت الحاوية الحالية
        $('#additional-notifications').append(additionalNotifications.join(''));
    });
});