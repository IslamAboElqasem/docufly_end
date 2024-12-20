﻿<!DOCTYPE html>
<html lang="ar" dir="rtl">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="icon" href="/image/logo minia.png" type="image/png">
    <title>الصفحة الرئيسية</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet"
    integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous" />    
    <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+Arabic&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css" />
    <link rel="stylesheet" href="/emp_docufly/CSS/index.css">
    <link rel="stylesheet" href="/emp_docufly/CSS/nav&footer.css">

</head>

<body>

    <header class="bg-light shadow-sm">
        <div class="container">
            <div class="d-flex justify-content-between align-items-center py-2">
                <div class="logo">
                    <img src="/image/OIP-removebg-preview.png" alt="شعار الموقع" class="img-fluid">
                </div>
                <div class="logo2">
                    <img src="/image/logo minia.png" alt="شعار الموقع" class="img-fluid">
                </div>
            </div>
        </div>
    </header>

    <div class="container-fluid position-relative">
        <div class="overlay"></div>
        <div class="row align-items-center text-end text-white">
            <div class="Hello col-md-6 text-container">
                <h1>مرحباً بك</h1>
                <p>في كلية حقوق المنيا</p>
                <h6>منصة توفر الحصول علي الأوراق المطلوبة بشكل أسرع إلكترونياً</h6>
                <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#loginModal">تسجيل
                    الدخول</button>
            </div>
            <div class="logo-Low col-md-6 d-none d-md-block ">
                <img src="/image/OIP-removebg-preview.png" alt="شعار الكلية" class="img-fluid">
            </div>
        </div>
    </div>


    <div class="info container">
        <div class="row align-items-center text-center text-lg-end">
            <!-- نص المعلومات -->
            <div class="col-lg-6 mb-4 mb-lg-0 my-5">
                <h1>معلومات عن المنصة</h1>
                <h4>منصة كلية الحقوق الإلكترونية</h4>
                <p>
                    مرحبًا بكم في المنصة الإلكترونية لكلية الحقوق.
                    نهدف في كلية الحقوق بجامعة المنيا إلى تقديم تجربة تعليمية وإدارية متميزة من خلال هذه المنصة الإلكترونية الشاملة. توفر المنصة وصولاً سهلاً إلى جميع المستندات والأوراق المطلوبة للطلاب والموظفين، بما في ذلك:
                    <strong>الأوراق الإدارية: </strong> يمكنك من خلال المنصة الاطلاع على جميع المستندات اللازمة لإجراءات القبول والتسجيل والخدمات الطلابية.
                    <strong>التقديمات الرسمية:</strong>متابعة حالة الطلبات الإدارية، مثل طلبات التظلمات، أو السحب، أو التحويلات.
                    <strong>التحديثات والإشعارات:</strong>ابقَ على اطلاع دائم بجميع التحديثات الخاصة بالفعاليات الأكاديمية، والمواعيد الهامة، والإعلانات.                    
                </p>
                <p>نهدف من خلال هذه المنصة إلى تسهيل العملية التعليمية والإدارية، وتقديم خدمة متكاملة ومتطورة لكل من الطلاب والموظفين.</p>
            </div>
            <!-- صورة -->
            <div class="col-lg-6 text-center ">
                <img class="img-fluid" src="/image/Feb-Business_9-removebg-preview.png" alt="Image">
            </div>
        </div>
    </div>


    <!-- Modal -->
    <div class="modal fade m-3" id="loginModal" tabindex="-1" aria-labelledby="loginModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
            <div class="modal-content">

                <div class="modal-header d-flex justify-content-between">
                    <img src="/image/logo minia.png" alt="Logo" class="img-fluid mx-5" style="max-height: 40px;">
                    <button type="button" class="btn-close mx-5" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>

                <div class="modal-body my-5">
                    <form id="loginForm">
                        <div class="mb-3">
                            <input type="text" class="form-control" id="username" placeholder="اسم المستخدم">
                        </div>
                        <div class="mb-3">
                            <input type="password" class="form-control" id="password" placeholder="كلمة المرور">
                        </div>
                    
                        <div class="d-flex justify-content-center align-items-center mb-3">
                            <div class="form-check me-3">
                                <input class="form-check-input modern-radio" type="radio" name="role" id="Student" value="طالب">
                                <label class="form-check-label" for="Student">طالب</label>
                            </div>
                            <div class="form-check">
                                <input class="form-check-input modern-radio" type="radio" name="role" id="Employee" value="موظف">
                                <label class="form-check-label" for="Employee">موظف</label>
                            </div>
                        </div>
                            <button type="button" id="loginButton" class="btn btn-primary w-100">تسجيل الدخول</button>
                    </form>
                </div>
            </div>
        </div>
    </div>


    <footer>
        <p>جميع الحقوق محفوظة لجامعة المنيا <i class="fa-regular fa-copyright"></i> 2025</p>
    </footer>

    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>
    <script src="https://code.jquery.com/jquery-3.6.4.min.js"></script>
    <script src="/emp_docufly/JavaScript/index.js"></script>

</body>

</html>