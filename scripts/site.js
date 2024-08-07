
/**
 * This script wrapped in a Immediately-Invoked Function Expression (IIFE) to
 * prevent variables from leaking onto the global scope. For more information
 * on IIFE visit the link below.
 * @see http://en.wikipedia.org/wiki/Immediately-invoked_function_expression
 */

(function() {
  'use strict';

  // Load all images via Squarespace's Responsive ImageLoader
  function loadAllImages() {
    var images = document.querySelectorAll('img[data-src]' );
    for (var i = 0; i < images.length; i++) {
      ImageLoader.load(images[i], {load: true});
    }
  }
  
  
    function adjustFoculPoint() {
        var tags = document.querySelectorAll('.foculad');
        for (var i = 0; i < tags.length; i++) {
            var xPerc= parseInt($(tags[i]).data('x')*100);
            var yPerc= parseInt($(tags[i]).data('y')*100);
            xPerc = typeof xPerc=='undefined' ? 0 : xPerc;
            yPerc = typeof yPerc=='undefined' ? 0 : yPerc;
            tags[i].style.setProperty('background-position-x',xPerc+ '%', 'important');
            tags[i].style.setProperty('background-position-y',yPerc+ '%', 'important');
        }
    }
    
    
      // The event subscription that loads images when the page is ready
  document.addEventListener('DOMContentLoaded', adjustFoculPoint);


  // The event subscription that loads images when the page is ready
  document.addEventListener('DOMContentLoaded', loadAllImages);

  // The event subscription that reloads images on resize
  window.addEventListener('resize', loadAllImages);
  
  
    setTimeout(function () {
        window.dispatchEvent(new Event('resize'));
    }, 500);

}());


$(document).ready(function() {

  $(".sqs-tagcloud li[title*='orporate']").insertBefore($(".sqs-tagcloud li[title*='onprofit']"));
  $(".sqs-tagcloud li[title*='ommercial']").insertBefore($(".sqs-tagcloud li[title*='onprofit']"));
  $(".sqs-tagcloud li[title*='vent']").insertBefore($(".sqs-tagcloud li[title*='onprofit']"));
  $(".sqs-tagcloud li[title*='oduct']").insertBefore($(".sqs-tagcloud li[title*='onprofit']"));

  // $(".nd-categories a[href*='orporate']").insertBefore($(".nd-categories a[href*='onprofit']"));
  // $(".nd-categories a[href*='ommercial']").insertBefore($(".nd-categories a[href*='onprofit']"));
  // $(".nd-categories a[href*='vent']").insertBefore($(".nd-categories a[href*='onprofit']"));
  // $(".nd-categories a[href*='oduct']").insertBefore($(".nd-categories a[href*='onprofit']"));

  $(".menu-trigger").click(function(event) {
    $(this).toggleClass('is-active');
    $(".overlay-menu-wrap").toggleClass('is-active');
    $("body, html").toggleClass('ovh');
  });

  setTimeout(function(){
    $(".nd-vpage-sidebar-items a[href='"+ window.location.pathname +"']").parents("li").addClass('active'); 
   // $(".nd-category[href='"+ window.location.pathname + window.location.search +"']").addClass('is-active'); 
    //$(".nd-category[href*='"+ window.location.search +"']").addClass('is-active'); 
    if (window.location.pathname == "/") {
      //$(".sqs-tagcloud").prepend('<li><a class="is-active" href="#"><span class="name">Featured</span></a></li>')
    }
  }, 500);

  $('.related-slider').slick({
    slidesToShow: 2,
    slidesToScroll: 2,
    prevArrow: $(".related-controls .arrow-prev"),
    nextArrow: $(".related-controls .arrow-next")

  });
  $('.projects-slider').slick({
    slidesToShow: 3,
    slidesToScroll: 2,
    prevArrow: $(".slider-controls .arrow-prev"),
    nextArrow: $(".slider-controls .arrow-next"),
    responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 2,
        infinite: true
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
  });
  
  $('.nd-member-gallery').slick({
    arrows: false,
    infinite: true,
    speed: 500,
    fade: true,
    cssEase: 'linear',
    autoplay: true,
    autoplaySpeed: 2000
  });

  if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
  } else {
      //https://player.vimeo.com/video/243351825?background=1
    $("#cover-section").append('<div class="iframe-wrap"><iframe src="https://player.vimeo.com/video/925652183?background=1" /></div>');
  }

  if ($(".nd-sidebar-expertise").length) {
    var extext = $(".nd-sidebar-expertise").text();
    $(".nd-sidebar-expertise").html(extext.split(",").join("<br>"));
  }

  $(".image-block-outer-wrapper a[href*='vimeo.com'],.image-block-outer-wrapper a[href*='youtube.com']").attr('data-lity', '1').append('<div class="btn-play"></div>');
  $('.index-section[id*="cover"] a[href*="vimeo"]').attr('data-lity', '1');

  $("#fullwidth-slider-section .sqs-gallery-container").mousemove(function( event ) {
      event.preventDefault();
      var wWidth = $(window).width();
      var rightCorner = $(window).width() - wWidth/3;
          leftCorner = wWidth/3;

      if (event.pageX >= rightCorner) {
          $(this).removeClass('prev-visible');
          $(this).addClass('next-visible');

      }
      else {
          if (event.pageX <= leftCorner) {
              $(this).removeClass('next-visible');
              $(this).addClass('prev-visible');
          }
          else {
              $(this).removeClass('next-visible').removeClass('prev-visible');
          }
      }
  });
  $(".nd-reviews-slider").slick({
    fade: true
  });
  $(".index-section[id*='parallax'] .index-section-image").each(function(index, el) {
//    var link = $(this).data('bg');
//    $(this).attr('style', 'height: 70vh');

//    $(el).parallax({
//      imageSrc: link,
//      bleed: 5
//    });
    
  });
    $(".parallax-bg").each(function (index, el) {
        var link = $(this).data('bg');
        // $(this).attr('style', 'height: 70vh');
        if ($(this).hasClass('foculad')) {
            var xPerc = parseInt($(this).data('y') * 100);
            $(el).parallax({imageSrc: link,bleed: 5,topPerc: xPerc, overScrollFix: true});
            //$(this).css('background-image','url('+link+') !important');
        } else {
             $(el).parallax({imageSrc: link,bleed: 5});
        }

    });
    
//  $(".nd-testimonials-one:not(.is-active)").click(function(event) {
//    var logo = $(this).find('.logo');
//    var wrap = $(this).parents(".nd-testimonials");
//    var testim = $(this).parents(".nd-testimonials").find('.chosen-testim');
//    $(testim).find(".nd-name").html($(logo).data('author'));
//    $(testim).find(".nd-text").html($(logo).data('text'));
//    $(testim).find(".nd-avtr img").attr("src", $(logo).data('avtr'));
//
//    var toactive = $(this).html();
//    var tonormal = $(wrap).find('.nd-testimonials-one.is-active').html();
//    $(wrap).find('.nd-testimonials-one.is-active').html(toactive);
//    $(this).html(tonormal);
//  });

  $(".nd-testimonials-one").click(function(event) {
    var logo = $(this).find('.logo');
    var wrap = $(this).parents(".nd-testimonials");
   var testim = $(this).parents(".nd-testimonials").find('.chosen-testim');
    $('.nd-testimonials-one').removeClass('is-active');
    $(logo).parent().addClass('is-active');
    
    var author =$(logo).data('author');
    var title =$(logo).data('authtitle');
    var bgvidimg =$(logo).data('bgvidimg');
    var video =$(logo).data('video');
    var htmltitle= author+',<span class="info-auth-title"> '+title+'</span>';
    var datahtml = '<iframe src=&quot;https://player.vimeo.com/video/954106703?byline=0&portrait=0&title=0&autoplay=1&quot; allowfullscreen allow=&quot;autoplay; fullscreen&quot; scrolling=&quot;no&quot;></iframe>';
    
    $(testim).find(".nd-name").html(htmltitle);
    $(testim).find(".nd-text").html($(logo).data('text'));
    //$(testim).find(".nd-video").find("iframe").attr("src",video);
//    $(testim).find(".nd-avtr img").attr("src", $(logo).data('avtr'));
    $(testim).find(".nd-vpage-cover").css("background","url(" + bgvidimg + ")");
    $(testim).find(".nd-vpage-cover").find("a").attr("href",video);
    $(testim).find(".nd-vpage-cover").find("a").attr("data-html", datahtml);

  });
  
  $("a[href='#popup-quote']").click(function(event) {
    event.preventDefault();
    $("div#popup-quote")
        .addClass('active')
        .hide()
        .fadeIn(300);
    $("body").addClass('ovh');

  });
  
  $("a[href='#popup-greenscreen']").click(function(event) {
    event.preventDefault();
//    $("div#popup-slider")
//        .addClass('active')
//        .hide()
//        .fadeIn(300);

//$("div#popup-slider").fadeIn(300,function({
//    
//}));
 $("div#popup-slider").addClass('active');
   $("div#popup-slider").fadeIn(300, function(){

//            $anchor = $(".popup-ask-bg.active a.next");
//          
//          
//            var e = document.createEvent('MouseEvents');
//            e.initEvent('click', true, true);
//            $anchor.dispatchEvent(e);

       
    });


    $("body").addClass('ovh');
        console.log('Clicked');
        window.dispatchEvent(new Event('resize'));
     $("div#popup-slider a.next")[0].click();

//    $(".sqs-gallery-thumbnails").find("img")[1].click();

  setTimeout(function () {
        window.dispatchEvent(new Event('resize'));
    }, 500);




  });
  
  
//  width  = window.outerWidth;height = window.outerHeight;window.resizeTo(width - 1, height);window.resizeTo(width + 1, height);
  
  $(".popup-ask-wrap").click(function(e){
    e.stopPropagation();
  });
  $(".js-closepop").click(function(event) {
    event.preventDefault();
    closePopup();
  });

  $(".popup-ask-fade").click(function(event) {
    event.preventDefault();
    closePopup();
  });
  function closePopup() {
    $(".popup-ask-fade").fadeOut(400, function(){
      $(".popup-ask-fade").hide();
    });
    $("body").removeClass('ovh');
  }
});



if ($("#map").length) {
  // This example displays a marker at the center of Australia.
  // When the user clicks the marker, an info window opens.

  function initMap() {

    var motion = {lat: 41.813945, lng: -87.869851};
    var map = new google.maps.Map(document.getElementById('map'), {
      zoom: 15,
      center: {lat: 41.817859, lng: -87.869809},
      disableDefaultUI: true,
      scrollwheel: false,
      draggable: false,
      styles: 
        [{"featureType":"water","elementType":"geometry","stylers":[{"color":"#e9e9e9"},{"lightness":17}]},{"featureType":"landscape","elementType":"geometry","stylers":[{"color":"#f5f5f5"},{"lightness":20}]},{"featureType":"road.highway","elementType":"geometry.fill","stylers":[{"color":"#ffffff"},{"lightness":17}]},{"featureType":"road.highway","elementType":"geometry.stroke","stylers":[{"color":"#ffffff"},{"lightness":29},{"weight":0.2}]},{"featureType":"road.arterial","elementType":"geometry","stylers":[{"color":"#ffffff"},{"lightness":18}]},{"featureType":"road.local","elementType":"geometry","stylers":[{"color":"#ffffff"},{"lightness":16}]},{"featureType":"poi","elementType":"geometry","stylers":[{"color":"#f5f5f5"},{"lightness":21}]},{"featureType":"poi.park","elementType":"geometry","stylers":[{"color":"#dedede"},{"lightness":21}]},{"elementType":"labels.text.stroke","stylers":[{"visibility":"on"},{"color":"#ffffff"},{"lightness":16}]},{"elementType":"labels.text.fill","stylers":[{"saturation":36},{"color":"#333333"},{"lightness":40}]},{"elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"transit","elementType":"geometry","stylers":[{"color":"#f2f2f2"},{"lightness":19}]},{"featureType":"administrative","elementType":"geometry.fill","stylers":[{"color":"#fefefe"},{"lightness":20}]},{"featureType":"administrative","elementType":"geometry.stroke","stylers":[{"color":"#fefefe"},{"lightness":17},{"weight":1.2}]}]
    });

    var contentString = '<div id="map-content">'+
        '<a href="https://www.google.com/maps/place/Motion+Source/@41.8138934,-87.869852,15z/data=!4m5!3m4!1s0x0:0xab6045e85f6160df!8m2!3d41.8138934!4d-87.869852"> <div class="map-logo">'+
          '<img src="https://static1.squarespace.com/static/58484ba31b631b41c9c779ec/t/5862a2552e69cf4bac8e212a/1485488714174/?format=500w">'+
        '</div>'+
        '<div class="map-address">'+
          '40 S. La Grange Rd., La Grange, IL 60525' +
        '</div></a>'+
       '</div>';

    var infowindow = new google.maps.InfoWindow({
      content: contentString
    });

    var marker = new google.maps.Marker({
      position: motion,
      map: map,
      title: 'Head office',
      icon: '/assets/map-pin.svg'
    });

      infowindow.open(map, marker);

    marker.addListener('click', function() {
      window.open('https://www.google.com/maps/place/Motion+Source/@41.8138934,-87.869852,15z/data=!4m5!3m4!1s0x0:0xab6045e85f6160df!8m2!3d41.8138934!4d-87.869852', '_blank');
    });

    infowindow.addListener('click', function() {
      window.open('https://www.google.com/maps/place/Motion+Source/@41.8138934,-87.869852,15z/data=!4m5!3m4!1s0x0:0xab6045e85f6160df!8m2!3d41.8138934!4d-87.869852', '_blank');
    });


    google.maps.event.addListener(infowindow, 'domready', function() {

      // Reference to the DIV that wraps the bottom of infowindow
      var iwOuter = $('.gm-style-iw');

      /* Since this div is in a position prior to .gm-div style-iw.
       * We use jQuery and create a iwBackground variable,
       * and took advantage of the existing reference .gm-style-iw for the previous div with .prev().
      */
      var iwBackground = iwOuter.prev();

      // Removes background shadow DIV
      iwBackground.children(':nth-child(2)').css({'display' : 'none'});

      // Removes white background DIV
      iwBackground.children(':nth-child(4)').css({'display' : 'none'});

      // Moves the infowindow 115px to the right.
      iwOuter.parent().parent().css({top: '20px', left: "11px"});

      // Moves the shadow of the arrow 76px to the left margin.
      iwBackground.children(':nth-child(1)').attr('style', "display:none");

      // Moves the arrow 76px to the left margin.
      iwBackground.children(':nth-child(3)').attr('style', "display:none");

      // Changes the desired tail shadow color.
      iwBackground.children(':nth-child(3)').find('div').children().css({'display': 'none', 'z-index' : '1'});

      // Reference to the div that groups the close button elements.
      var iwCloseBtn = iwOuter.next();

      // Apply the desired effect to the close button
      iwCloseBtn.css({opacity: '0'});

      // If the content of infowindow not exceed the set maximum height, then the gradient is removed.
      if($('.iw-content').height() < 140){
        $('.iw-bottom-gradient').css({display: 'none'});
      }

      // The API automatically applies 0.7 opacity to the button after the mouseout event. This function reverses this event to the desired value.
      iwCloseBtn.mouseout(function(){
        $(this).css({opacity: '1'});
      });
    });
  }
}

$(".collection-586a835a44024318a0841042").append('<div class="fl-btn"><a class="floating-btn button sqs-system-button sqs-editable-button" href="#reserve-section">Make a Reservation</a></div>');

function videoCategoryPageInit(){
$("\
#categorylistpage--section,\n\
#categorylistpage-2-section,\n\
#categorylistpage-3-section,\n\
#categorylistpage-16-section,\n\
#categorylistpage-copy-section,\n\
#categorylistpage-4-section,\n\
#categorylistpage-5-section,\n\
#categorylistpage-64-section,\n\
#categorylistpage-20-section").addClass('categorylistpage');
    
 $("#workintro-section,\n\
#workintro-2-page,\n\
#workintro-8-page,\n\
#workintro-3-page,\n\
#workintro-4-page,\n\
#workintro-88-section,\n\
#workintro-5-page").addClass('workintro-section');   
    
    
    
    if ($(".categorylistpage").length) {
       $(".image-caption-wrapper").append('<div class="btn-play small"></div>');
         
       $(".categorylistpage .image-block").each(function(index, el) {
           
           $anchor=$(this).find("a")[0];
           $elToMove =  $(this).find(".image-caption-wrapper");
            if (typeof ($anchor) !== 'undefined' ) {
                   $($elToMove).detach().appendTo($anchor);
               }
    
        });
     
 } 
     
  
    
}

$(function() {

  $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
  

  videoCategoryPageInit();
  
/*Show related  items sections*/
    if (typeof (curWorkId) !== 'undefined') {
        var counter = 0;
        var hide = true;
        for (var i = 0; i < workListIds.length; i++) {

            if (hide) {
                $('div.work-items.' + workListIds[i].id).hide();
            } else {
                counter++;
            }

            if (curWorkId == workListIds[i].id) {
                hide = false;
            }

            if (counter == 2) {
                break;
            }
        }

        if (counter == 0) {
            $('div.work-items.' + workListIds[0].id).show();
            $('div.work-items.' + workListIds[1].id).show();
        } else if (counter == 1) {
            $('div.work-items.' + workListIds[0].id).show();
        }
    }

});

$(window).scroll(function() {
    if ($(this).scrollTop()) {
        $('.fl-btn').addClass('visible');
    } else {
        $('.fl-btn').removeClass('visible');
    }
});
