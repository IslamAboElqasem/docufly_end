
    function validateForm() {
      const username = document.getElementById('username').value;
      const password = document.getElementById('password').value;

      // تحقق من ملء الحقول
      if (username === '' || password === '') {
        alert('يرجى ملء جميع الحقول!');
        return false; // منع إرسال النموذج
      }

      // إعادة التوجيه إلى الصفحة المستهدفة
      window.location.href = '../HTML/admin.html'; // استبدل بالمسار الذي تريد التوجيه إليه
      return false; // منع الإرسال الافتراضي للنموذج
    }
