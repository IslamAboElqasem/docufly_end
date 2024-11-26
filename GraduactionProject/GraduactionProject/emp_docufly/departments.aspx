<%@ Page Title="" Language="C#" MasterPageFile="~/emp_docufly/master.Master" AutoEventWireup="true" CodeBehind="departments.aspx.cs" Inherits="GraduactionProject.emp_docufly.departments" %>
<asp:Content ID="Content1" ContentPlaceHolderID="TitleContentPlaceHolder" runat="server">
    الإدارات
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="HeadContent" runat="server">
     
   <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css" />
    <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+Arabic&display=swap" rel="stylesheet">
   
    <link rel="stylesheet" href="/emp_docufly/CSS/department.css" />
</asp:Content>
<asp:Content ID="Content3" ContentPlaceHolderID="ContentPlaceHolder1" runat="server">
      <div class="container-fluid my-4">
        <h1 class="dep text-center my-4">الإدارات</h1>
        <div class="container-fluid my-4">
            <div class="row row-cols-1 row-cols-md-2 row-cols-lg-5 g-4">
                <a href="/emp_docufly/formsandrequests.aspx" class="text-decoration-none">
                    <div class="col">
                        <div class="card">
                            <img src="/image/graduatin.png" class="card-img-top" alt="Icon" target="_self">
                            <div class="card-body text-center">
                                <h5 class="card-title">الخريجين</h5>
                            </div>
                        </div>
                    </div>
                </a>

                <a href="/emp_docufly/formsandrequests.aspx" class="text-decoration-none">
                <div class="col">
                    <div class="card">
                        <img src="/image/human resorces.png" class="card-img-top" alt="Icon">
                        <div class="card-body text-center">
                            <h5 class="card-title">الموارد البشرية</h5>
                        </div>
                    </div>
                </div>
                  </a>

                  <a href="/emp_docufly/formsandrequests.aspx" class="text-decoration-none">
                <div class="col">
                    <div class="card">
                        <img src="/image/student care.png" class="card-img-top" alt="Icon">
                        <div class="card-body text-center">
                            <h5 class="card-title">شئون الطلاب</h5>
                        </div>
                    </div>
                </div>
            </a>

            <a href="/emp_docufly/formsandrequests.aspx" class="text-decoration-none">
                <div class="col">
                    <div class="card">
                        <img src="/image/students.png" class="card-img-top" alt="Icon">
                        <div class="card-body text-center">
                            <h5 class="card-title">رعاية الطلاب</h5>
                        </div>
                    </div>
                </div>
                </a>

                <a href="/emp_docufly/formsandrequests.aspx" class="text-decoration-none">
                <div class="col">
                    <div class="card">
                        <img src="/image/diploma.png" class="card-img-top" alt="Icon">
                        <div class="card-body text-center">
                            <h5 class="card-title">دراسات عليا ودبلومات</h5>
                        </div>
                    </div>
                </div>
                </a>

                <a href="/emp_docufly/formsandrequests.aspx" class="text-decoration-none">
                <div class="col">
                    <div class="card">
                        <img src="/image/care.png" class="card-img-top" alt="Icon">
                        <div class="card-body text-center">
                            <h5 class="card-title">الرعاية الطبية</h5>
                        </div>
                    </div>
                </div>
                  </a>

                  <a href="/emp_docufly/formsandrequests.aspx" class="text-decoration-none">
                <div class="col">
                    <div class="card">
                        <img src="/image/library.png" class="card-img-top" alt="Icon">
                        <div class="card-body text-center">
                            <h5 class="card-title">المكتبة</h5>
                        </div>
                    </div>
                </div>
                </a>

                <a href="/emp_docufly/formsandrequests.aspx" class="text-decoration-none">
                <div class="col">
                    <div class="card">
                        <img src="/image/empolyees member.png" class="card-img-top" alt="Icon">
                        <div class="card-body text-center">
                            <h5 class="card-title">أعضاء هيئة التدريس</h5>
                        </div>
                    </div>
                </div>
                </a>


                <a href="/emp_docufly/formsandrequests.aspx" class="text-decoration-none">
                <div class="col">
                    <div class="card">
                        <img src="/image/store.png" class="card-img-top" alt="Icon">
                        <div class="card-body text-center">
                            <h5 class="card-title">المخازن</h5>
                        </div>
                    </div>
                </div>
                </a>

                <a href="/emp_docufly/formsandrequests.aspx" class="text-decoration-none">
                <div class="col">
                    <div class="card">
                        <img src="/image/money.png" class="card-img-top" alt="Icon">
                        <div class="card-body text-center">
                            <h5 class="card-title">الشئون المالية</h5>
                        </div>
                    </div>
                </div>
                </a>
                
            </div>
        </div>
    </div>
</asp:Content>
<asp:Content ID="Content4" ContentPlaceHolderID="ScriptsContent" runat="server">

         <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz"
        crossorigin="anonymous"></script>
        <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.6/dist/umd/popper.min.js"></script>
        <script src="/emp_docufly/JavaScript/department.js"></script>
</asp:Content>
