//ハンバーガーメニュー
function toggleNav() {
  const body = document.body;
  const hamburger = document.getElementById("js_hamburger");
  const overlay = document.getElementById("js_overlay");
  const a = document.querySelectorAll(".atag");
  hamburger.addEventListener("click", function () {
    body.classList.toggle("nav_open"); //クラスが含まれていれば削除、含まれていなければ追加する
  });
  overlay.addEventListener("click", function () {
    body.classList.remove("nav_open"); //クラスを削除する
  });
  a.forEach(function (element) {
    element.addEventListener("click", function () {
      body.classList.remove("nav_open");
    });
  });
}
toggleNav();
