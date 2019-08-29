// JavaScript Document

$(document).ready(function () {
    new fullpage('#fullpage', {
        navigation: true,
        scrollOverflow: true,
        anchors: ['firstPage', 'secondPage', 'thirdPage', 'fourthPage'],
        afterLoad: function (origin, destination, direction) { //페이지를 로딩하고나서 벌어지는 함수
            var loadedSection = this;
            if (origin.anchor == 'thirdPage' && direction == 'down') { // 내가 엥커를 떠난게 세번째 섹션이고 아래방향 일때 && - 그리고
                $('.scroll').css({
                    display: 'none'
                });
            } else {
                $('.scroll').css({
                    display: 'block'
                });
            }
            if (origin.anchor == 'thirdPage' && direction == 'down') {
                $('h1').css({
                    display: 'none'
                });
            } else {
                $('h1').css({
                    display: 'block'
                });
            }
            if (origin.anchor == 'thirdPage' && direction == 'down') {
                $('.overlay').css({
                    background: 'rgba(0,0,0,0.8)'
                });
            } else {
                $('.overlay').css({
                    background: 'rgba(248, 248, 248, 0.8)'
                });
            }
        }
    });

    $('.index').on('click', function () {
        $('.overlay').css({
            height: '33%'
        });
    });
    $('.closebtn').on('click', function () {
        $('.overlay').css({
            height: 0
        });
    });

    /*   $(".menu01").on("click", function (e) {
        e.preventDefault(); //anchor이벤트의 기본동작을 막는다.
        var thisTarget = $(this).attr("href");
        $(window).scrollTop($(thisTarget).offset().top);
    });

      $(".menu02").click(function(event){            
                event.preventDefault();
                var thisTarget=  $(this).attr("href");
                $('html,body').animate({scrollTop:$(this.has).offset().top}, 500);
        });
*/
/*
    var $menu = $('.gnb ul li.m'),
        $contents = $('.section'),
        $doc = $('html, body');
    $(function () {
        $menu.on('click', 'a', function (e) {
            var $target = $(this).parent(),
                idx = $target.index(),
                area = $contents.eq(idx),
                offsetTop = area.offset().top;
            $doc.stop().animate({
                scrollTop: offsetTop
            }, 400);
            return false;
        });
    });
    $(window).scroll(function () {
        var scltop = $(window).scrollTop();
        $.each($contents, function (idx, item) {
            var $target = $contents.eq(idx),
                i = $target.index(),
                targetTop = $target.offset().top;
            if (targetTop <= scltop) {
                $menu.removeClass('on');
                $menu.eq(idx).addClass('on');
            }
            if (!(200 <= scltop)) {
                $menu.removeClass('on');
            }
        })
    });
*/


            $(".menu").click(function (event) {
              event.preventDefault();
              $('html,body').animate({
                  scrollTop: $(this.hash).offset().top
              }, 500);
          });
});
