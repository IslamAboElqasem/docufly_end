
document.getElementById('loginForm').addEventListener('submit', function (event) {
  event.preventDefault();

  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  if (username !== "" && password !== "") {

    window.location.href = '../HTML/department.html', '_blank';
  } else {
    alert('يرجى إدخال اسم المستخدم وكلمة المرور');
    
  }
});

