document.getElementById('loginForm').addEventListener('submit', function (event) {
  event.preventDefault();

  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;
  const role = document.querySelector('input[name="role"]:checked'); // التحقق من اختيار الدور

  // التحقق من ملء جميع البيانات واختيار الحالة
  if (username === "" &&  password === "" && !role) {
      alert('يرجى إدخال اسم المستخدم وكلمة المرور واختيار الحالة (طالب أو موظف)');
  } else {
      window.location.href = '../HTML/department.html';
  }
});