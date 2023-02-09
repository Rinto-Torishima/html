var app = new Vue({
  el: "#app",
  data: {
    ActiveBtn: false,
  },
});
$(function () {
  $(".fit").hover(
    function () {
      //マウスオーバーしたときの処理
      $(this).stop().animate({ opacity: 0.5 }, "fast");
    },
    function () {
      //マウスアウトしたときの処理
      $(this).stop().animate({ opacity: 1 }, "fast");
    }
  );
});
