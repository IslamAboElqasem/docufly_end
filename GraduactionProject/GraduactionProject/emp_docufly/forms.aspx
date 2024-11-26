<%@ Page Title="" Language="C#" MasterPageFile="~/emp_docufly/master.Master" AutoEventWireup="true" CodeBehind="forms.aspx.cs" Inherits="GraduactionProject.emp_docufly.forms" %>
<asp:Content ID="Content1" ContentPlaceHolderID="TitleContentPlaceHolder" runat="server">
    الإستمارات
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="HeadContent" runat="server">
      <link rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap-datepicker/1.9.0/css/bootstrap-datepicker.min.css" />
        <link rel="stylesheet" href="/emp_docufly/CSS/forms&request.css">
<%--        <link rel="stylesheet" href="/emp_docufly/CSS/forms&request.css">--%>
    <link rel="stylesheet" href="/emp_docufly/CSS/forms.css">
</asp:Content>
<asp:Content ID="Content3" ContentPlaceHolderID="ContentPlaceHolder1" runat="server">
      <section class="container mb-0">
            <div class="forms" id="forms-container">
                <div class="row">
                    <!-- الصف الأول -->
                    <div class="col-12 col-sm-6 col-md-6 mb-5">
                        <button id="5tab_moafka_mn_elrsayel_elmab3ota_mn_el_itc" class="btn btn-small w-75">
                            ITC خطاب موافقة من ال
                        </button>
                    </div>
                    <div class="col-12 col-sm-6 col-md-6 mb-5">
                        <button class="btn btn-small w-75" id="kashf_bra2at">
                            كشف براءات
                        </button>
                    </div>
                    <!-- الصف الثاني -->
                    <div class="col-12 col-sm-6 col-md-6 mb-5">
                        <button class="btn btn-small w-75" id="moafkt_tba3a_e3tmad_shehada_ta5rog">
                            موافقة طباعة (إعتماد) شهادة تخرج
                        </button>
                    </div>
                    <div class="col-12 col-sm-6 col-md-6 mb-5">
                        <button class="btn btn-small w-75" id="Talab_estikhrag_shadat_thaboutia_le_dafa3at_mokhtalefa">
                            طلب استخراج شهادة ثبوتية لدفعات مختلفة
                        </button>
                    </div>
                    <!-- الصف الثالث مع الزر في المنتصف -->
                    <div class="col-12 col-sm-6 col-md-6 mb-5">
                        <button class="btn btn-small w-75" id="Talab_estikhrag_shadat_thaboutia_le_dof3at_takhrog">
                            طلب استخراج شهادة ثبوتية لدفعة تخرج
                        </button>
                    </div>
                </div>
            </div>
        </section>
</asp:Content>
<asp:Content ID="Content4" ContentPlaceHolderID="ScriptsContent" runat="server">
      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz"
        crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.6/dist/umd/popper.min.js"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/5.3.0/js/bootstrap.min.js"></script>
    <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
    <script src="../JavaScript/forms.js" ></script>
</asp:Content>
