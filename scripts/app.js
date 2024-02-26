$(document).ready(function () {
  //   button-click
  $(".sec1btn").click(function () {
    $("html, body").animate({ scrollTop: $("#sec3").offset().top }, 1000);
  });
  $("#logoText").click(function () {
    $("html, body").animate({ scrollTop: $("#sec").offset().top }, 300);
  });

  /////Annimation
  let wayPoint = new Waypoint({
    element: document.getElementById("sec2"),
    handler: function (direction) {
      $(".sec2MiniDiv").addClass("animate__animated animate__fadeInDown");
      $(".sec2Text").addClass("animate__animated animate__fadeInLeft");
    },
    offset: 120,
  });

  let wayPointer = new Waypoint({
    element: document.getElementById("sec3"),
    handler: function (direction) {
      $(".img-container").addClass("animate__animated animate__fadeIn");
    },
    offset: 250,
  });

  let containersSecFour = new Waypoint({
    element: document.getElementById("sec4"),
    handler: function (direction) {
      $(".containerLeft").addClass("animate__animated animate__fadeInLeft");
      $(".containerRight").addClass("animate__animated animate__fadeInRight");
      $(".sec4MiniDiv").addClass("animate__animated animate__fadeIn");
    },
    offset: 250,
  });

  // firstButon Animation
  let wayPointe = new Waypoint({
    element: document.getElementById("sec2"),
    handler: function (direction) {
      if (direction === "up") {
        $(".amim1").addClass("animate__animated animate__shakeX");
      } else {
        $(".amim1").removeClass("animate__animated animate__shakeX");
      }
    },
    offset: 60,
  });
  console.log(wayPointe);
});

/////////////////////////////////////////////////
//  sticky nav
document.addEventListener("DOMContentLoaded", function () {
  window.addEventListener("scroll", function () {
    if (window.scrollY > 50) {
      document.getElementById("navbar_top").classList.add("fixed-top");
      // add padding top to show content behind navbar
      navbar_height = document.querySelector(".navbar").offsetHeight;
      document.body.style.paddingTop = navbar_height + "px";
    } else {
      document.getElementById("navbar_top").classList.remove("fixed-top");
      // remove padding top from body
      document.body.style.paddingTop = "0";
    }
  });
});
