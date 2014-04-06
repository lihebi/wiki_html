$(document).ready(function(){
    $('.toc').wrap("<div class='col-md-3 col-md-pull-10'></div>");
    $('.col-md-3').siblings().wrapAll("<div class='col-md-9 col-md-push-2'></div>");
    $('.toc').css("margin", "10px 0 0 10px");
    $('.toc').affix({
        offset: {
            top: 0
        }
    });
    $('table').addClass('table table-striped');
});
