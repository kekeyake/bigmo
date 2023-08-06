$(function () {
  /**
   * common scroll header ui
   */
  $(window).scroll(function () {
    // .bigmo__header 요소의 현재 top 값(px 단위) 가져오기
    let headerTop = $(".bigmo__header").offset().top;
    $(".bigmo__header").toggleClass("scroll", headerTop > 0);
  });
});
