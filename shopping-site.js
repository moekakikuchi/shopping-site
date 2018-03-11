$(document).ready(function(){
    $(".owl-carousel").owlCarousel(
        {
            items: 1,
        }
        );
});

$(document).ready(function(){
  $("#menu").click(function(){
    $("#sp_navi_li").slideToggle();
  });
});


$(document).ready(function(){
  $(".category_title").click(function(){
    $(".category_list").slideToggle();
  });
});

$(window).load(function(){
  $("#pro_img_small img").click(function(){
    var img_src = $(this).attr("src");
    $("#pro_img_large img").attr("src", img_src);
  });
});
