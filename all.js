$(document).ready(function () {

    $('.dropdown').click(function() {
        
        event.preventDefault();
        $('.droplist').slideToggle();
    });
});