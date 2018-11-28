$(document).ready(function () {
    //$(".page-sidebar ul li").each(function () {
    //    if ($(this).baseURI == "rfq-index.html")
    //        $(this).addClass("active");
    //})

    $(function () {
        var pgurl = window.location.pathname.replace("/","");
        $(".page-sidebar ul li").each(function () {
            if ($('a', this).attr("href") == pgurl)
                $(this).addClass("active");
        })
    });

});