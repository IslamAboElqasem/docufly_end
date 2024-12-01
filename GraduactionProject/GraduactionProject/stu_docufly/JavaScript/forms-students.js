function openPageById(elementId) {
    const pageName = elementId; 
    window.location.href = '../HTML/graduation/student_req_html/' + pageName + '.html';
}

document.addEventListener("DOMContentLoaded", function() {
    document.getElementById('7osn_ser_w_slok').onclick = function() { openPageById(this.id); };
    document.getElementById('efada_be_7soloh_3la_lesance').onclick = function() { openPageById(this.id); };
    document.getElementById('efada_be_tartebo_3la_eldof3a').onclick = function() { openPageById(this.id); };
    document.getElementById('talb_efada_be_7soloh_3la_lesance').onclick = function() { openPageById(this.id); };
    document.getElementById('talb_est3gal_shehada').onclick = function() { openPageById(this.id); };
    document.getElementById('talb_est5rag_shehada').onclick = function() { openPageById(this.id); };
    document.getElementById('talb_est5rag_shehada_2slya').onclick = function() { openPageById(this.id); };

});