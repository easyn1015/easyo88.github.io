$(function(){

/*slidebanner*/
var numSlide = $('div.image-slide ul.slide li').length;
var slideNow = 0;
var slidePrev = 0;
var slideNext = 0;
var slideFirst = 1;
var timerId = null;
var isTimerOn = true;
var timerSpeed = 4000;
var startX = 0;
var delX = 0;
var delY = 0;
var offsetX = 0;
var isTouched = false;
var direction = ''; 
    
// 초기화
$('div.image-slide ul.slide li').each(function(i) {
    $(this).css({'left': (i * 100) + '%', 'display': 'block'});
});
showSlide(slideFirst);
    
$('div.image-slide ul.indicator li a').on('click', function() {
    var index = $('div.image-slide ul.indicator li').index($(this).parent());
    showSlide(index + 1);
});
    
    
function showSlide(n) {
    clearTimeout(timerId);
    if (slideNow === 0) {
        $('div.image-slide ul.slide').css({'transition': 'none', 'left': -((n - 1) * 100) + '%'});
    } else {
        $('div.image-slide ul.slide').css({'transition': 'left 0.3s', 'left': -((n - 1) * 100) + '%'});
    }
    $('div.image-slide ul.indicator li').removeClass('on');
    $('div.image-slide ul.indicator li:eq(' + (n - 1) + ')').addClass('on');
    slideNow = n;
    slidePrev = (n - 1) < 1 ? numSlide : n - 1;
    slideNext = (n + 1) > numSlide ? 1 : n + 1;
    if (isTimerOn === true) {
        timerId = setTimeout(function() {showSlide(slideNext);}, timerSpeed);
    }
}
    
$(".hover").mouseleave(
  function() {
    $(this).removeClass("hover");
  }
);


/*toggleMenu*/
var speed = 1000, 
    easing = 'easeInOutExpo', 
    $aside = $('.toggle-menu'), 
    $gnb = $('.gnb')

    $btn = $gnb.find('.menu'); 
    $btn.click(function(){
    $aside.toggleClass('on');
    
if($aside.hasClass('on')) {
    $aside.stop(true,true).animate({
    left:'0' 
    }, speed, easing)
} else { $aside.stop(true,true).animate({
    left:'-350px'
    },speed,easing);
}
});
    
/*scrollTop*/    
    $('#scrollTop').on('click', function() {
    $('html, body').animate({'scrollTop': 0}, 500);
});    

    
 // show/hide    

    checkVisibility('.latest h1');
$(window).on('scroll resize', function() {
    checkVisibility('.latest h1');
});

    checkVisibility('.latestCover li');
$(window).on('scroll resize', function() {
    checkVisibility('.latestCover li');
});
    

    checkVisibility('.hotIssue h1');
$(window).on('scroll resize', function() {
    checkVisibility('.hotIssue h1');
});

    checkVisibility('.bcast .bcastImage');
$(window).on('scroll resize', function() {
    checkVisibility('.bcast .bcastImage');
});

    checkVisibility('.bcast p');
$(window).on('scroll resize', function() {
    checkVisibility('.bcast p');
});

    checkVisibility('.bcast .ani_box');
$(window).on('scroll resize', function() {
    checkVisibility('.bcast .ani_box');
});

    checkVisibility('.bcast .btnmore');
$(window).on('scroll resize', function() {
    checkVisibility('.bcast .btnmore');
});

    checkVisibility('.bestBcast h1');
$(window).on('scroll resize', function() {
    checkVisibility('.bestBcast h1');
});

    checkVisibility('.bcastList li');
$(window).on('scroll resize', function() {
    checkVisibility('.bcastList li');
});
    
    checkVisibility('.special h1');
$(window).on('scroll resize', function() {
    checkVisibility('.special h1');
}); 
    
    checkVisibility('.special .spec_content img');
$(window).on('scroll resize', function() {
    checkVisibility('.special .spec_content img');
});   
    
    checkVisibility('.video');
$(window).on('scroll resize', function() {
    checkVisibility('.video');
});    
    
    checkVisibility('.issueImg .issueImg2');
$(window).on('scroll resize', function() {
    checkVisibility('.issueImg .issueImg2');
});

function checkVisibility(selector) {
    var scrollTop = $(document).scrollTop();
    $(selector).each(function() {
        var $selector = $(this);
        var minScroll = $selector.offset().top - $(window).height();
        var maxScroll = $selector.offset().top + $selector.outerHeight();
        if (scrollTop < minScroll) {
            if ($selector.hasClass('down') !== true) {
                $selector.removeClass('show up');
                $selector.addClass('down');
            }
        } else if (scrollTop > maxScroll) {
            if ($selector.hasClass('up') !== true) {
                $selector.removeClass('down show');
                $selector.addClass('up');
            }
        } else {
            if ($selector.hasClass('show') !== true) {
                $selector.removeClass('down up');
                $selector.addClass('show');
            }
        }
    });
}

      
});