<%@ Page Title="" Language="C#" MasterPageFile="~/emp_docufly/master.Master" AutoEventWireup="true" CodeBehind="formsandrequests.aspx.cs" Inherits="GraduactionProject.emp_docufly.formsandrequests" %>
<asp:Content ID="Content1" ContentPlaceHolderID="TitleContentPlaceHolder" runat="server">
    الطلبات والإستمارات
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="HeadContent" runat="server">
        <link rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap-datepicker/1.9.0/css/bootstrap-datepicker.min.css" />
        <link rel="stylesheet" href="/emp_docufly/CSS/forms&request.css">
</asp:Content>
<asp:Content ID="Content3" ContentPlaceHolderID="ContentPlaceHolder1" runat="server">
       <div class="container cards text-center mt-5 pt-5">
        <div class="row mt-5">
            <div class="col-md-6">
                <div class="card" style="cursor: pointer;" onclick="openPage('/emp_docufly/requests.aspx')">
                    <div class="img d-flex justify-content-center align-items-center">
                        <script src="https://unpkg.com/@dotlottie/player-component@latest/dist/dotlottie-player.mjs" type="module"></script> 
                        <dotlottie-player src="https://lottie.host/6c57995e-f57a-4506-a7fe-84f4ae7c651b/rQkV2jTsgx.json" background="transparent" speed="1" style="width: 300px; height: 300px;" loop autoplay></dotlottie-player>
                    </div>                    
                    <div class="card-body">
                        <h2 class="card-title mb-3">الطلبات</h2>
                    </div>
                </div>
            </div>
    
            <div class="col-md-6">
                <div class="card" style="cursor: pointer;" onclick="openPage('/emp_docufly/forms.aspx')">
                    <div class="img d-flex justify-content-center align-items-center">
                        <script src="https://unpkg.com/@dotlottie/player-component@latest/dist/dotlottie-player.mjs" type="module"></script> 
                        <dotlottie-player src="https://lottie.host/e0624ef9-8362-413b-9469-54f9623a3e37/KGRXqUj3QM.json" background="transparent" speed="1" style="width: 300px; height: 300px;" loop autoplay></dotlottie-player>
                    </div>                    
                    <div class="card-body">
                        <h2 class="card-title mb-3">الاستمارات</h2>
                    </div>
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
    <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.5.4/dist/umd/popper.min.js"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/5.3.3/js/bootstrap.min.js"></script>
    <script src="/emp_docufly/JavaScript/forms&request.js"></script>
</asp:Content>
