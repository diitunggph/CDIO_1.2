$(document).ready(function(){
    $('.dropdown-toggle').click(function(e) {
        // e.stopPropagation();
        $('.dropdown-menu').toggle();
        $('.dropdown-menu').addClass("active");
    });

    $(document).click(function(e) {
        var target = e.target;
        if (!$(target).is('.dropdown-toggle') && !$(target).parents().is('.dropdown-toggle')) {
            $('.dropdown-menu').hide();
            $('.dropdown-menu').removeClass("active");
        }
    });
});
