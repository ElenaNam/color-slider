import $ from "jquery";
import '../style/style.css';
import './slider.js';


$(function(){
  let form = $("<form/>", {
    action: "/",
    class: "form",
  }).appendTo("#root");

  $(form).append("<fieldset class='fieldset'></fieldset>")
  $('.fieldset').append("<legend class='legend'>Select:</legend>");

  $("<input/>", {
    id: "input-color",
    class: "input",
    type: "button",
    name: "input",
    val: "color",
  }).appendTo('.fieldset');

  $("<input/>", {
    id: "input-bg",
    class: "input",
    type: "button",
    name: "input",
    val: "backgroundColor",
  }).appendTo('.fieldset');

   $("#root").append("<div class='main'></div>");
   $(".main").append("<div class='slider-block'></div>");   
   $(".main").append("<div class='text-block'></div>");

   const textInner = `В книге  Дж. К. Роулинг «Гарри Поттер» описываются удивительные приключения 
   мальчика-сироты, который в возрасте одиннадцати лет узнал, что неразрывно связан с 
   тайным волшебным миром. Он отправляется на обучение  в школу чародейства Хогвартс, 
   где постигает азы волшебства и заводит верных друзей.
   `;

   $(".text-block").html(`<p>${textInner}</p>`);
   $(".text-block p").addClass('text');


})
