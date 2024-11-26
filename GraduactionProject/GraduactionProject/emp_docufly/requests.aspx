<%@ Page Title="" Language="C#" MasterPageFile="~/emp_docufly/master.Master" AutoEventWireup="true" CodeBehind="requests.aspx.cs" Inherits="GraduactionProject.emp_docufly.requests" %>
<asp:Content ID="Content1" ContentPlaceHolderID="TitleContentPlaceHolder" runat="server">
    الطلبات
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="HeadContent" runat="server">
      <link rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap-datepicker/1.9.0/css/bootstrap-datepicker.min.css" />
        <link rel="stylesheet" href="/emp_docufly/CSS/forms&request.css"> 

    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/flatpickr/dist/flatpickr.min.css">
    <script src="https://cdn.jsdelivr.net/npm/flatpickr"></script>

   
    <link rel="stylesheet" href="/emp_docufly/CSS/request.css" />
</asp:Content>
<asp:Content ID="Content3" ContentPlaceHolderID="ContentPlaceHolder1" runat="server">
      <section class="container ">
            <div dir="rtl" class="row justify-content-center">
                <h3 class="section-title">الطلبات</h3>
                <!-- Search -->
                <div class="row mb-5 mt-5" dir="rtl">
                    <div class="col-12 d-flex flex-wrap justify-content-between gap-2 search-inputs">


                        <div class="custom-select">
                            <input id="searchInput1" type="text" class="form-control" placeholder="البحث عن كود الطلب"
                                aria-label="البحث عن كود الطلب">
                        </div>

                        <div class="custom-select">
                            <input id="searchInput2" type="text" class="form-control" placeholder="البحث عن أسم الطالب"
                                aria-label="ابحث عن أسم الطالب">
                        </div>

                        <div class="custom-select">
                            <select id="searchInput3" class="form-select" aria-label="اختر نوع الطلب">
                                <option value="" disabled selected>البحث عن الطلب</option>
                                <option value="طلب التحاق">طلب التحاق</option>
                                <option value="طلب اجازة">طلب اجازة</option> طلب اجازة
                                <option value="افادة">افادة</option>
                                <option value="إستعجال شهادة" id="urgentCertificate">إستعجال شهادة</option>
                                <option value="إستخراج شهادة">إستخراج شهادة</option>
                                <option value="كشف براءات">كشف براءات</option>
                            </select>
                        </div>

                        <div class="custom-select d-flex align-items-center">
                            <!-- إضافة d-flex لتوزيع العناصر بشكل أفقي -->
                            <input type="text" id="dateRange" class="form-control date-input"
                                placeholder="اختيار التاريخ من و إلي" readonly>
                            <span class="input-group-text" id="dateRangeIcon"><i class="bi bi-calendar"></i></span>
                        </div>
                        <!--  Button  -->
                        <div>
                            <button class="btn-search" onclick="filterTable()">
                                بحث
                            </button>
                        </div>
                    </div>
                </div>

                <!-- Table -->
                <div class="requests col-md-12" id="requests-container">
                    <div class="card-2">
                        <div class="card-body">
                            <table class="table table-striped text-center">
                                <thead class="table-dark">
                                    <tr>
                                        <th scope="col">الكود</th>
                                        <th scope="col">الاسم</th>
                                        <th scope="col">الطلب</th>
                                        <th scope="col">تاريخ الوصول</th>
                                        <th scope="col">عرض</th>
                                        <th scope="col">تحويل</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <th scope="row">1234</th>
                                        <td>ميرنا</td>
                                        <td>افادة</td>
                                        <td>2024-09-10</td>
                                        <td>
                                            <i class="fa-solid fa-eye" onclick="showImageModal(this)"></i>
                                        </td>
                                        <td>
                                            <!-- زر الأيقونة -->
                                            <button type="button" class="btn" id="popupButton"
                                                onclick="openPopup(this)">
                                                <i class="fa-solid fa-retweet"></i>
                                            </button>
                                        </td>
                                    </tr>

                                    <tr>
                                        <th scope="row">5678</th>
                                        <td>نيرة</td>
                                        <td>إستعجال شهادة</td>
                                        <td>2024-09-20</td>
                                        <td>
                                            <i class="fa-solid fa-eye" onclick="showImageModal(this)"></i>
                                        </td>
                                        <td>
                                            <!-- زر الأيقونة -->
                                            <button type="button" class="btn" id="popupButton"
                                                onclick="openPopup(this)">
                                                <i class="fa-solid fa-retweet"></i>
                                            </button>


                                        </td>
                                    </tr>

                                    <tr>
                                        <th scope="row">1726</th>
                                        <td>أسامة</td>
                                        <td>إستخراج شهادة</td>
                                        <td>2024-09-25</td>
                                        <td>
                                            <i class="fa-solid fa-eye" onclick="showImageModal(this)"></i>
                                        </td>
                                        <td>
                                            <!-- زر الأيقونة -->
                                            <button type="button" class="btn" id="popupButton"
                                                onclick="openPopup(this)">
                                                <i class="fa-solid fa-retweet"></i>
                                            </button>
                                        </td>
                                    </tr>

                                    <tr>
                                        <th scope="row">9375</th>
                                        <td>محمد</td>
                                        <td>كشف براءات</td>
                                        <td>2024-09-30</td>
                                        <td>
                                            <i class="fa-solid fa-eye" onclick="showImageModal(this)"></i>
                                        </td>
                                        <td>
                                            <!-- زر الأيقونة -->
                                            <button type="button" class="btn" id="popupButton"
                                                onclick="openPopup(this)">
                                                <i class="fa-solid fa-retweet"></i>
                                            </button>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <!-- Pagination -->
                        <div aria-label="Page navigation" dir="rtl">
                            <ul class="pagination justify-content-center mt-4" id="pagination">
                                <!-- Pagination links will be dynamically generated here -->
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>


      <!-- النافذة المنبثقة -->
    <div id="popupContent" class="popup-modal">
        <div class="popup-modal-content">
            <span class="close-btn" onclick="closePopup()">&times;</span>
            <h4 class="text-center mb-3">اختر الإدارات</h4>

            <div class="d-flex flex-wrap">
                <div class="col-md-6 col-12">
                    <ul class="text-end">
                        <li class="form-check m-2">
                            <input class="form-check-input" type="checkbox" value="الخريجين" id="check11"
                                onclick="toggleCheckbox('check11')" />
                            <label class="form-check-label" for="check11">الخريجين</label>
                        </li>
                        <li class="form-check m-2">
                            <input class="form-check-input" type="checkbox" value="الموارد البشرية" id="check12"
                                onclick="toggleCheckbox('check12')" />
                            <label class="form-check-label" for="check12">الموارد
                                البشرية</label>
                        </li>
                        <li class="form-check m-2">
                            <input class="form-check-input" type="checkbox" value="شئون الطلاب" id="check13"
                                onclick="toggleCheckbox('check13')" />
                            <label class="form-check-label" for="check13">شئون
                                الطلاب</label>
                        </li>
                        <li class="form-check m-2">
                            <input class="form-check-input" type="checkbox" value="رعاية الطلاب" id="check14"
                                onclick="toggleCheckbox('check14')" />
                            <label class="form-check-label" for="check14">رعاية
                                الطلاب</label>
                        </li>
                        <li class="form-check m-2">
                            <input class="form-check-input" type="checkbox" value="دراسات عليا و دبلومات" id="check15"
                                onclick="toggleCheckbox('check15')" />
                            <label class="form-check-label" for="check15">دراسات عليا و
                                دبلومات</label>
                        </li>
                    </ul>
                </div>
                <div class="col-md-6 col-12">
                    <ul class="text-end">
                        <li class="form-check m-2">
                            <input class="form-check-input" type="checkbox" value="الرعاية الطبية" id="check16"
                                onclick="toggleCheckbox('check16')" />
                            <label class="form-check-label" for="check16">الرعاية
                                الطبية</label>
                        </li>
                        <li class="form-check m-2">
                            <input class="form-check-input" type="checkbox" value="المكتبة" id="check17"
                                onclick="toggleCheckbox('check17')" />
                            <label class="form-check-label" for="check17">المكتبة</label>
                        </li>
                        <li class="form-check m-2">
                            <input class="form-check-input" type="checkbox" value="أعضاء هيئة التدريس" id="check18"
                                onclick="toggleCheckbox('check18')" />
                            <label class="form-check-label" for="check18">أعضاء هيئة
                                التدريس</label>
                        </li>
                        <li class="form-check m-2">
                            <input class="form-check-input" type="checkbox" value="المخازن" id="check19"
                                onclick="toggleCheckbox('check19')" />
                            <label class="form-check-label" for="check19">المخازن</label>
                        </li>
                        <li class="form-check m-2">
                            <input class="form-check-input" type="checkbox" value="الشئون المالية" id="check20"
                                onclick="toggleCheckbox('check20')" />
                            <label class="form-check-label" for="check20">الشئون
                                المالية</label>
                        </li>
                    </ul>
                </div>
            </div>

            <div class="modal-footer text-center m-2">
                <button class="btn btn-primary w-75" onclick="confirmSelection()">تأكيد</button>
            </div>
        </div>
    </div>

    <!-- Modal for Converted messages -->
    <div class="modal fade align-content-center" id="successModal" tabindex="-1" aria-labelledby="modalLabel"
        aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-body m-4 text-center">
                    <i class="fa-solid fa-circle-check mt-3"></i>
                    <h3 class="mt-3">تم التحويل بنجاح</h3>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary w-50" data-bs-dismiss="modal">
                        إغلاق
                    </button>
                </div>
            </div>
        </div>
    </div>

    <!-- Modal لعرض الصورة مع خيارات الموافقة والرفض -->
    <div class="modal fade" id="imageModal" tabindex="-1" aria-labelledby="imageModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-lg">
            <div class="modal-content">
                <div class="modal-header">
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body text-center">
                    <img src="/image/Untitled.png" alt="صورة" class="img-fluid mb-3" />
                    <div class="btn-group modal-footer">
                        <button type="button" class="btn btn2 btn-info" onclick="showRejectionPopup()">
                            غير موافق
                        </button>
                        <button type="button" class="btn btn1 btn-info" onclick="confirmApproval(this)">
                            موافق
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>


    <!-- Modal لسبب الرفض -->
    <div class="modal fade align-content-center" id="rejectionModal" tabindex="-1" aria-labelledby="rejectionModalLabel"
        aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-body text-center mt-2">
                    <h4>سبب الرفض</h4>
                    <textarea id="rejectionReason"
                        class="form-control w-75 mx-auto mb-3 border-primary border-2 resize-none mt-4" rows="4"
                        dir="rtl"></textarea>
                    <button type="button" class="btn btn-info" onclick="submitRejection()">
                        إرسال
                    </button>
                </div>
            </div>
        </div>
    </div>

    <!-- Modal لتأكيد الإرسال -->
    <div class="modal fade align-content-center" id="confirmationModal" tabindex="-1"
        aria-labelledby="confirmationModalLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-body text-center">
                    <i class="fa-solid fa-circle-check mt-3"></i>
                    <h3 class="mt-3">تم إرسال الرد</h3>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn w-50" data-bs-dismiss="modal">
                        حسنًا
                    </button>
                </div>
            </div>
        </div>
    </div>

</asp:Content>
<asp:Content ID="Content4" ContentPlaceHolderID="ScriptsContent" runat="server">
     <!-- jQuery -->
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

    <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.6/dist/umd/popper.min.js"></script>
    <script src="/emp_docufly/JavaScript/request.js" defer></script>
</asp:Content>
