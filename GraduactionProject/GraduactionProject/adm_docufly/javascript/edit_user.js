$(document).ready(function() {
    $('#submitBtn').on('click', function(event) {
        let isValid = true;

        // التحقق من ملء جميع الحقول المطلوبة
        $('#newEmployeeForm input[required]').each(function() {
            if ($(this).val() === '') {
                isValid = false;
                $(this).addClass('is-invalid');
            } else {
                $(this).removeClass('is-invalid');
            }
        });

        // التحقق من الرقم القومي
        const nationalId = $('#num').val();
        if (nationalId.length !== 14) {
            isValid = false;
            $('#numError').show(); // عرض رسالة الخطأ
        } else {
            $('#numError').hide(); // إخفاء رسالة الخطأ
        }

        if (isValid) {
            // عرض البوب أب عند النجاح
            $('#successModal').modal('show');
        } else {
            event.preventDefault(); // منع الإرسال إذا كان هناك خطأ
        }
    });
});

  // وظيفة لعرض الصورة المرفوعة
document.getElementById('imageUpload').addEventListener('change', function(event) {
    const file = event.target.files[0];
    const currentImage = document.getElementById('currentImage');

    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            currentImage.src = e.target.result; // تغيير مصدر الصورة الحالية
        }
        reader.readAsDataURL(file);
    }
});

// وظيفة لفتح حقل تحميل الصورة عند الضغط على الأيقونة
document.querySelector('label[for="imageUpload"]').addEventListener('click', function() {
    document.getElementById('imageUpload').click();
});