$(document).ready(function () {
  let start = $(".catalog-nav").offset();

  let headerScroll = function () {
    let headerHeight = $("header").height();
    $(window).on("scroll", function () {
      if ($(window).scrollTop() > start.top && $(window).width() > 1005) {
        $("body").css({ paddingTop: headerHeight });
        $("header").addClass("scroll");
        $(".scrollHide").addClass("hide");
        $(".cart").css({ marginLeft: "auto" });
        $(".catalog-nav").addClass("scroll");
      } else if (
        $(window).scrollTop() < start.top &&
        $(window).width() > 1005
      ) {
        $(".catalog-nav").removeClass("scroll");
        $("header").removeClass("scroll");
        $(".scrollHide").removeClass("hide");
        $("body").css({ paddingTop: 0 });
        $(".cart").css({ marginLeft: "65px" });
      } else if (
        $(window).scrollTop() > start.top &&
        $(window).width() < 1005
      ) {
        $("body").css({ paddingTop: "150px" });
        $("header").addClass("scroll-mobile");
        $(".scrollHide").addClass("hide");
        $(".cart").css({ marginLeft: "auto" });
        $(".catalog-nav").addClass("scroll-mobile");
        $(".logo-image").attr("src", "assets/img/logo_x2_w.png");
      } else if (
        $(window).scrollTop() < start.top - 60 &&
        $(window).width() < 1005
      ) {
        $("body").css({ paddingTop: 0 });
        $("header").removeClass("scroll-mobile");
        $(".scrollHide").removeClass("hide");
        $(".cart").css({ marginLeft: "auto" });
        $(".catalog-nav").removeClass("scroll-mobile");
        $(".logo-image").attr("src", "assets/img/logo_x2.png");
      }
    });
  };

  let windowResize = function () {
    $(window).on("resize", function () {
      console.log($(window).scrollTop(),  (start.top - 60))
      let width = $(window).width();
      if (width > 1005) {
        $("header").removeClass("scroll-mobile");
        $(".scrollHide").removeClass("hide");
        $("body").css({ paddingTop: 0 });
        $(".catalog-nav").removeClass("scroll-mobile");
        $(".logo-image").attr("src", "assets/img/logo_x2.png");
      } else if (width < 1005 && $(window).scrollTop() > start.top - 60) {
        $("header").addClass("scroll-mobile");
        $("body").css({ paddingTop: "150px" });
        $(".logo-image").attr("src", "assets/img/logo_x2_w.png");
        $(".catalog-nav").addClass("scroll-mobile");
        $(".catalog-nav").removeClass("scroll");
      }
    });
  };

  if ($(window).width() > 1005) {
  } else if (
    $(window).width() < 1005 &&
    $(window).scrollTop() > start.top - 65
  ) {
    $("header").addClass("scroll-mobile");
    $("body").css({ paddingTop: "150px" });
    $(".logo-image").attr("src", "assets/img/logo_x2_w.png");
    $(".catalog-nav").addClass("scroll-mobile");
    $(".catalog-nav").removeClass("scroll");
  }
  
  headerScroll();
  windowResize();
  
});
