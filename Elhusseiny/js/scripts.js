!function(){$(window).on("load",function(){$("body").css("overflow-y","auto"),$(".loader").fadeOut(),$(".loading").fadeOut().css({"transituin-delay":"1s"})});var o=document.querySelector("header");new Headroom(o).init(),$(".overlay").fadeOut(),$(".mob-collaps").on("click",function(){$(this).parent().find(".nav-links > ul").toggleClass("nav-open"),$(".overlay").fadeToggle(),$(this).find("span:first-child").toggleClass("rotate"),$(this).find("span:nth-child(2)").toggleClass("none"),$(this).find("span:nth-child(3)").toggleClass("rotate2")}),$(".overlay").on("click",function(){$(".nav-links ul").removeClass("nav-open"),$(this).fadeOut(),$(".mob-collaps span:first-child").removeClass("rotate"),$(".mob-collaps span:nth-child(2)").removeClass("none"),$(".mob-collaps span:nth-child(3)").removeClass("rotate2")}),$(".main-slider.owl-carousel").owlCarousel({items:1,loop:!0,autoplay:!0,margin:10,dots:!0})}(jQuery),$(function(){$(" #da-thumbs .block ").each(function(){$(this).hoverdir()})});
//# sourceMappingURL=scripts.js.map
