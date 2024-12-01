<%@ Page Title="" Language="C#" MasterPageFile="~/emp_docufly/master.Master" AutoEventWireup="true" CodeBehind="notifications.aspx.cs" Inherits="GraduactionProject.emp_docufly.notifications" %>
<asp:Content ID="Content1" ContentPlaceHolderID="TitleContentPlaceHolder" runat="server">
    الإشعارات
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="HeadContent" runat="server">
    <%-- <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous" />--%>
    <!-- Font Awesome -->
 <%--   <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css" />
    <!-- Google Fonts -->
    <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+Arabic&display=swap" rel="stylesheet">--%>
    

<%--    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons/font/bootstrap-icons.css" />--%>
    
      <link rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap-datepicker/1.9.0/css/bootstrap-datepicker.min.css" />
        <link rel="stylesheet" href="/emp_docufly/CSS/forms&request.css"> 
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/flatpickr/dist/flatpickr.min.css" />
    <!-- Custom CSS -->
    <link rel="stylesheet" href="/emp_docufly/CSS/notifications.css" />
</asp:Content>
<asp:Content ID="Content3" ContentPlaceHolderID="ContentPlaceHolder1" runat="server">
        <section class="container search">
            <div dir="rtl" class="row justify-content-center">
                <h3 class="section-title">الطلبات التي تم الرد عليها</h3>

                <!-- Search  -->

                <div class="row mb-5 mt-5" dir="rtl">
                    <div class="col-12 d-flex flex-wrap justify-content-between gap-2 search-inputs">
                        <div class="custom-select">
                            <input id="searchInput2" type="text" class="form-control" placeholder="البحث عن كود الطلب"
                                aria-label="البحث عن كود الطلب" />
                        </div>
                        <div class="custom-select">
                            <select id="searchInput3" class="form-select" aria-label="اختر نوع الطلب">
                                <option value="" disabled selected>البحث عن نوع الطلب</option>
                                <option value="طلب التحاق">طلب التحاق</option>
                                <option value="طلب استعجال شهادة" id="urgentCertificate">
                                    طلب استعجال شهادة
                                </option>
                                <option value="طلب استخراج شهادة">طلب استخراج شهادة</option>
                            </select>
                        </div>
                        <div class="custom-select">
                            <select id="searchInput5" class="form-select" aria-label="اختر الحالة">
                                <option value="" disabled selected>البحث عن حالة الطلب</option>
                                <option value="مقبول">مقبول</option>
                                <option value="مرفوض">مرفوض</option>
                            </select>
                        </div>

                        <div class="custom-select d-flex align-items-center">
                            <input type="text" id="dateRange" class="form-control date-input"
                                placeholder="اختيار التاريخ من و إلي" readonly />
                            <span class="input-group-text" id="dateRangeIcon"><i class="bi bi-calendar"></i></span>
                        </div>

                        <!-- Button -->
                        <div>
                            <button class="btn-search" onclick="filterTable()">
                                بحث
                            </button>
                        </div>
                    </div>
                </div>

                <!-- Table  -->
                <div class="col-md-12">
                    <div class="card-2">
                        <div class="card-body">
                            <table id="data-table" class="table table-striped text-center">
                                <thead class="table-dark">
                                    <tr>
                                        <th scope="col">كود الطلب</th>
                                        <th scope="col">نوع الطلب</th>
                                        <th scope="col">التاريخ</th>
                                        <th scope="col">الحالة</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr class="accepted">
                                        <td>12345</td>
                                        <td>طلب استعجال شهادة</td>
                                        <td>2024-08-20</td>
                                        <td>
                                            <span class="badge status-accepted" data-toggle="modal"
                                                data-target="#imageModal" onclick="showImagePopup();">
                                                مقبول
                                            </span>
                                        </td>
                                    </tr>
                                    <tr class="accepted">
                                        <td>12345</td>
                                        <td>طلب استعجال شهادة</td>
                                        <td>2024-09-20</td>
                                        <td>
                                            <span class="badge status-accepted" data-toggle="modal"
                                                data-target="#imageModal" onclick="showImagePopup();">
                                                مقبول
                                            </span>
                                        </td>
                                    </tr>
                                    <tr class="rejected">
                                        <td>83682</td>
                                        <td>طلب التحاق</td>
                                        <td>2024-09-18</td>
                                        <td>
                                            <span class="badge status-rejected" data-bs-toggle="modal"
                                                data-bs-target="#rejectionModal">مرفوض</span>
                                        </td>
                                    </tr>
                                    <tr class="accepted">
                                        <td>28621</td>
                                        <td>طلب التحاق</td>
                                        <td>2024-09-25</td>
                                        <td>
                                            <span class="badge status-accepted" data-toggle="modal"
                                                data-target="#imageModal" onclick="showImagePopup();">
                                                مقبول
                                            </span>
                                        </td>
                                    </tr>
                                    <tr class="rejected">
                                        <td>4979</td>
                                        <td>طلب التحاق</td>
                                        <td>2024-09-30</td>
                                        <td>
                                            <span class="badge status-rejected" data-bs-toggle="modal"
                                                data-bs-target="#rejectionModal">مرفوض</span>
                                        </td>
                                    </tr>
                                    <tr class="accepted">
                                        <td>79787</td>
                                        <td>طلب التحاق</td>
                                        <td>2024-09-05</td>
                                        <td>
                                            <span class="badge status-accepted" data-toggle="modal"
                                                data-target="#imageModal" onclick="showImagePopup();">
                                                مقبول
                                            </span>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <div class="d-flex justify-content-center mt-4">
                            <ul class="pagination" id="pagination">
                                <!-- Dynamic pagination will be inserted here -->
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>



      <div class="modal fade" id="imageModal" tabindex="-1" aria-labelledby="imageModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-lg">
            <div class="modal-content">
                <div class="modal-header">
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body text-center">
                    <img id="printImage" src="/image/diploma.png" alt="صورة" class="img-fluid" />
                </div>
            </div>
        </div>
        <div class="text-center">
            <button onclick="printImage()" type="button" class="btn btn-info mb-5">
                <i class="fa-solid fa-print"></i> طباعة
            </button>
        </div>
    </div>
    <div class="modal fade align-content-center" id="rejectionModal" tabindex="-1" aria-labelledby="rejectionModalLabel"
        aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header d-flex justify-content-between">
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body text-center">
                    <h4 id="rejectionReason">البيانات غير صحيحه</h4>
                    <button type="button" class="btn btn-info mt-4" onclick="submitRejection()">
                        حسناً
                    </button>
                </div>
            </div>
        </div>
    </div>
</asp:Content>
<asp:Content ID="Content4" ContentPlaceHolderID="ScriptsContent" runat="server">
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz"
        crossorigin="anonymous"></script>
   <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.10.2/dist/umd/popper.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/flatpickr"></script>

    <!-- Custom JS -->
    <script src="/emp_docufly/JavaScript/notifications.js"></script>
</asp:Content>
