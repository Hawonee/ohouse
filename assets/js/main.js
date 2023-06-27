$(function () {

  let lastScroll = 0;

  $(window).scroll(function () {
    curr = $(this).scrollTop();
    headerH = $(".header").outerHeight();

    if (curr > headerH) {
      $(".header").addClass("fixed");

      if (curr > lastScroll) {
        $(".header").addClass("hide");
      } else {
        $(".header").removeClass("hide");
      }
    } else if (curr === 0) {
      $(".header").removeClass("fixed");
    }
    lastScroll = curr;
  });

  //왼쪽 gnb 열고 닫기
  $(".btn-gnb").click(function (e) {
    e.preventDefault();
    $(".gnb,.bg").addClass("on");
    $("body").addClass("hidden");
  });
  $(".bg").click(function (e) {
    e.preventDefault();
    $(".gnb,.bg").removeClass("on");
    $("body").removeClass("hidden");
  });

  //gnb 대메뉴 누르고 열고 닫기
  $(".gnb-item .btn").click(function (e) {
    e.preventDefault();
    if ($(this).hasClass("on")) {
      $(".gnb-item .btn").removeClass("on");
      $(".gnb-area").slideUp();
    } else {
      $(".gnb-item .btn").removeClass("on");
      $(this).addClass("on");
      $(".gnb-area").slideUp();
      $(this).siblings(".gnb-area").slideDown();
    }
  });

  ////////////// 슬라이드

  // 상단 슬라이드
  var scVisual = new Swiper(".sc-visual .swiper", {
    loop: true,
    autoplay: {
      delay: 4500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".fraction",
      type: "fraction",
    },
  });

  // 중간 인기top10 마우스 슬라이드
  var scTopten = new Swiper(".sc-top-ten .swiper", {
    slidesPerView: 2.5,
    spaceBetween: 16,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });

  // 푸터 그룹 정보
  $(".addr-area").hide();
  $(".group-info .btn").click(function (e) {
    e.preventDefault();
    $(this).toggleClass("active");
    $(this).siblings(".addr-area").toggle();
  });
}); //끝 지우지 말 것
