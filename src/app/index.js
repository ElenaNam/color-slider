import $ from "jquery";
import '../style/style.css';
require("jquery-ui/ui/widgets/slider");


$(function(){
  let form = $("<form/>", {
    action: "/",
    class: "form",
  }).appendTo("#root");

  $(form).append("<fieldset class='fieldset'></fieldset>");
  $(".fieldset").append("<legend class='legend'>Select:</legend>");

  $("<input/>", {
    id: "input-color",
    class: "input",
    type: "button",
    name: "input",
    val: "color",
  }).appendTo(".fieldset");

  $("<input/>", {
    id: "input-bg",
    class: "input",
    type: "button",
    name: "input",
    val: "backgroundColor",
  }).appendTo(".fieldset");

    let prop="color";

    $("#input-color").on("click", function () {
      $('input').removeClass('active');
      $(this).addClass('active'); 
      prop = "color";
    });

    $("#input-bg").on("click", function () {
      $("input").removeClass("active");
        $(this).addClass("active");
      prop = "backgroundColor";

    });

  $("#root").append("<div class='main'></div>");
  $(".main").append("<div class='slider-block'></div>");

  const textInner = `В книге  Дж. К. Роулинг «Гарри Поттер» описываются удивительные приключения 
   мальчика-сироты, который в возрасте одиннадцати лет узнал, что неразрывно связан с 
   тайным волшебным миром. Он отправляется на обучение  в школу чародейства Хогвартс, 
   где постигает азы волшебства и заводит верных друзей.
   `;

  $(".slider-block").append('<div id="red"></div>');
  $(".slider-block").append('<div id="green"></div>');
  $(".slider-block").append('<div id="blue"></div>');
  $(".main").append(
    '<div id="swatch" class="ui-widget-content ui-corner-all"></div>'
  );

  $("#swatch").html(`<p>${textInner}</p>`);
  $("#swatch p").addClass("text");
  /*-------------------------------------------------------------*/
  function hexFromRGB(r, g, b) {
    var hex = [r.toString(16), g.toString(16), b.toString(16)];
    $.each(hex, function (nr, val) {
      if (val.length === 1) {
        hex[nr] = "0" + val;
      }
    });
    return hex.join("").toUpperCase();
  }

  function refreshSwatch() {
    let red = $("#red").slider("value"),
      green = $("#green").slider("value"),
      blue = $("#blue").slider("value"),
      hex = hexFromRGB(red, green, blue);
    $("#swatch").css(`${prop}`, "#" + hex);
  }

  $(function () {
    $("#red, #green, #blue").slider({
      range: "min",
      max: 255,
      value: 127,
      slide: refreshSwatch,
      change: refreshSwatch,
    });

    $("#red").slider("value", 255);
    $("#green").slider("value", 140);
    $("#blue").slider("value", 60);
  });
})
