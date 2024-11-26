function openPageById(elementId) {
    const pageName = elementId; 
    window.location.href = '/emp_docufly/HTML/graduation/employee_req_html/' + pageName + '.html'; // افتح الصفحة في نفس النافذة
}

// بعد ذلك يمكنك استخدام الدالة مع أي ID تريده
document.getElementById('5tab_moafka_mn_elrsayel_elmab3ota_mn_el_itc').onclick = function() {
    openPageById(this.id);
};

// بعد ذلك يمكنك استخدام الدالة مع أي ID تريده
document.getElementById('kashf_bra2at').onclick = function() {
    openPageById(this.id);
};

// بعد ذلك يمكنك استخدام الدالة مع أي ID تريده
document.getElementById('moafkt_tba3a_e3tmad_shehada_ta5rog').onclick = function() {
    openPageById(this.id);
};

// بعد ذلك يمكنك استخدام الدالة مع أي ID تريده
document.getElementById('Talab_estikhrag_shadat_thaboutia_le_dafa3at_mokhtalefa').onclick = function() {
    openPageById(this.id);
};

// بعد ذلك يمكنك استخدام الدالة مع أي ID تريده
document.getElementById('Talab_estikhrag_shadat_thaboutia_le_dof3at_takhrog').onclick = function() {
    openPageById(this.id);
};