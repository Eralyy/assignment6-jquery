$(document).ready(function () {
  console.log("jQuery is ready!");

  $("h1").css("color", "#1764bc");
  $("#headline").text("Hello! I am Yerali, a future web developer.");
  $(".intro").css("font-style", "italic");

  $("#light-theme").click(function () {
    $("body").css({ "background-color": "#f3f4f6", "color": "#222" });
    $("h1, a").css("color", "#1764bc");
  });

  $("#dark-theme").click(function () {
    $("body").css({ "background-color": "#222", "color": "#f3f4f6" });
    $("h1, a").css("color", "#8cbcff");
  });

  $("#hide-status").click(function () {
    $("#status").hide();
  });

  $("#show-status").click(function () {
    $("#status").show();
  });

  $("#toggle-status").click(function () {
    $("#status").toggle();
  });

  $("#fade-in").click(function () {
    $(".photos img").fadeIn(500);
  });

  $("#fade-out").click(function () {
    $(".photos img").fadeOut(500);
  });

  $("#fade-toggle").click(function () {
    $(".photos img").fadeToggle(500);
  });

  $(".panel-title").click(function () {
    $(this).parent().next(".panel").slideToggle(400);
  });

  $("#open-panels").click(function () {
    $(".panel").slideDown(400);
  });

  $("#close-panels").click(function () {
    $(".panel").slideUp(400);
  });

  $("#add-skill").click(function () {
    let skill = $("#new-skill").val().trim();
    if (skill !== "") {
      $("#skill-list").append($("<li>").text(skill));
    }
  });

  $("#prepend-skill").click(function () {
    let skill = $("#new-skill").val().trim();
    if (skill !== "") {
      $("#skill-list").prepend($("<li>").text(skill));
    }
  });

  $("#remove-skill").click(function () {
    $("#skill-list li:last-child").remove();
  });

  $("#change-link").click(function () {
    $("#social-link").attr("href", "https://github.com/Eralyy?tab=repositories");
  });

  $("#name").on("input", function () {
    $("#live-name").text($("#name").val());
  });

  $("#email").on("input", function () {
    $("#live-email").text($("#email").val());
  });

  let skillsVisible = false;

  $("#animate-skills").click(function () {
    if (skillsVisible === false) {
      $("#html-bar").animate({ width: "80%" }, 800);
      $("#css-bar").animate({ width: "65%" }, 800);
      $("#js-bar").animate({ width: "50%" }, 800);
      skillsVisible = true;
    } else {
      $(".skill-bar").animate({ width: "0%" }, 800);
      skillsVisible = false;
    }
  });
});
