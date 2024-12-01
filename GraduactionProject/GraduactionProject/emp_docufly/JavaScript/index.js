
document.getElementById('loginForm').addEventListener('submit', function (event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (username !== "" && password !== "") {

        window.open('/emp_docufly/departments.aspx', '_self');
    } else {
        alert('يرجى إدخال اسم المستخدم وكلمة المرور');

    }
});



