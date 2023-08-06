$(function () {
  /**
   * common scroll header ui
   */
  $(window).scroll(function () {
    // .bigmo__header 요소의 현재 top 값(px 단위) 가져오기
    let headerTop = $(".bigmo__header").offset().top;
    $(".bigmo__header").toggleClass("scroll", headerTop > 0);
  });

  $("#mBtn").on("click", function () {
    $(this).toggleClass("open");
    $(".bigmo__mNav").toggleClass("open");
    $("body").toggleClass("open");
    $(".logo").toggleClass("invert");
  });
  $(".bigmo__mNav__item").on("click", function () {
    $(this).toggleClass("selected").siblings().removeClass("selected");
  });

  if ($(".thumbLayer").length > 0) {
    $(".bigmoWorks__item").on("click", function () {
      let clickedImgSrc = $(this).find("img").attr("src");
      $(".thumbLayer").attr("open", "");
      $(".thumbLayer img").attr("src", clickedImgSrc);
    });
    $(".dialog__bg").on("click", function () {
      $(this).closest(".thumbLayer").removeAttr("open");
    });
  }
});
