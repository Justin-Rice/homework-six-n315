function route(){
    let hashTag = window.location.hash;
    let pageID = hashTag.replace("#/","");
    //pageID holds page name

    if(!pageID){
        MODEL.changePage("home");

    }else{
        MODEL.changePage(pageID);

    }

}

function initlistener(){
    $(window).on("hashchange",route);
//when the hamburger menu is clicked, display the mobile nav
    $("nav .fa-bars").click(function(){
        //console.log("nice")
        $(".mobile-nav").css("display", "flex");
        $(".mobile-nav").css("animation", "nav-in 1s");
    });

    //when the background of a mobile nav is clicked, remove it
    $("body").on("click", ".mobile-nav", function(e) {
        $(".mobile-nav").css("animation", "nav-out 1s");
        setTimeout(() => {
            $(".mobile-nav").css("display", "none");
        }, 1000);
    });


    route();
}

function underlineActivePage(){
    $(".nav-buttons a").click(function(){
        $("a.active").removeClass("active");
        $(this).addClass("active");
    });
    $(".mobile-nav a").click(function(){
        $("a.active").removeClass("active");
        $(this).addClass("active");
    });
    
}

$(document).ready(function(){
    initlistener();
    underlineActivePage();
    
})