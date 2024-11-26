<%@ Page Title="" Language="C#" MasterPageFile="~/emp_docufly/master.Master" AutoEventWireup="true" CodeBehind="profile.aspx.cs" Inherits="GraduactionProject.emp_docufly.profile" %>
<asp:Content ID="Content1" ContentPlaceHolderID="TitleContentPlaceHolder" runat="server">
    الصفحة الشخصية
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="HeadContent" runat="server">
   <%--  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous" />--%>

    <!-- Font Awesome -->
<%--    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css" />--%>

    <!-- Google Fonts -->
<%--    <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+Arabic&display=swap" rel="stylesheet" />--%>

    <!-- Bootstrap Datepicker CSS -->
    <link rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap-datepicker/1.9.0/css/bootstrap-datepicker.min.css" />

    <!-- Flatpickr CSS -->
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/flatpickr/dist/flatpickr.min.css" />

   

    <!-- Select2 CSS -->
    <link href="https://cdn.jsdelivr.net/npm/select2@4.1.0-rc.0/dist/css/select2.min.css" rel="stylesheet" />
         <link rel="stylesheet" href="/emp_docufly/CSS/profile.css" />

</asp:Content>
<asp:Content ID="Content3" ContentPlaceHolderID="ContentPlaceHolder1" runat="server">
      <section>
            <div class="container my-5">
                <div dir="rtl" class="row justify-content-center">
                    <div class="col-md-12 mb-3">
                        <div class="card profile-card">
                            <div class="card-body">
                                <!-- Section 1: Personal Information -->
                                <div class="section personal-info mb-4">
                                    <h3 class="section-title">المعلومات الشخصية</h3>
                                    <div class="d-flex align-items-center justify-content-between">
                                        <div class="profile-details">
                                            <p><strong>الاسم:</strong> أروي أحمد</p>
                                            <p><strong>الحالة:</strong> موظف</p>
                                            <p><strong>تاريخ الميلاد:</strong> 1990-05-23</p>
                                            <p><strong>الرقم القومي:</strong> 12345678974185</p>
                                            <p><strong>الجنسية:</strong> مصرية</p>
                                        </div>
                                        <div class="profile-image text-center">
                                            <img src="/image/profile.jpg" alt="Profile Picture" class="profile-img rounded-circle" />
                                        </div>
                                    </div>
                                </div>
        
                                <!-- Section 2: Contact Information -->
                                <div class="section contact-info mb-4">
                                    <h3 class="section-title">معلومات الاتصال</h3>
                                    <p><strong>البريد الإلكتروني:</strong> example@email.com</p>
                                    <p><strong>رقم الهاتف:</strong> 01037653253</p>
                                    <p><strong>العنوان:</strong> 123 شارع التحرير، القاهرة، مصر</p>
                                </div>
        
                                <!-- Section 3: Job Information -->
                                <div class="section job-info mb-4">
                                    <h3 class="section-title">معلومات الوظيفة</h3>
                                    
                                    <p><strong>المسمى الوظيفي:</strong> مطور ويب</p>
                                    <p><strong> الكلية:</strong>الحقوق</p>
                                    <p><strong>تاريخ التوظيف:</strong> 2022-01-15</p>
                                    <p><strong>الإدارة:</strong>الخريجين</p>
                                </div>
        
                                <!-- Section 4: Signature -->
                                <div class="section signature mt-4 text-center">
                                    <h3 class="section-title">التوقيع</h3>
                                    <img src="/image/sign.jpg" alt="Signature" class="signature-img" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
</asp:Content>
<asp:Content ID="Content4" ContentPlaceHolderID="ScriptsContent" runat="server">
     <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>

    <!-- Bootstrap Bundle with Popper -->
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz"
        crossorigin="anonymous"></script>

    <!-- Flatpickr JS -->
    <script src="https://cdn.jsdelivr.net/npm/flatpickr"></script>

    <!-- Bootstrap Datepicker JS -->
    <script
        src="https://cdnjs.cloudflare.com/ajax/libs/bootstrap-datepicker/1.9.0/js/bootstrap-datepicker.min.js"></script>

    <!-- Select2 JS -->
    <script src="https://cdn.jsdelivr.net/npm/select2@4.1.0-rc.0/dist/js/select2.min.js"></script>

    <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.6/dist/umd/popper.min.js"></script>

    <!-- Custom JS -->
    <script src="/emp_docufly/JavaScript/profile.js"></script>
</asp:Content>
