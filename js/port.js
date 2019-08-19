// JavaScript Document

$(function(){
	new fullpage('#fullpage',{
		navigation: true, 
		scrollOverflow:true,
		anchors: ['firstPage', 'secondPage', 'thirdPage', 'fourthPage'],
		afterLoad: function(origin, destination, direction) { //페이지를 로딩하고나서 벌어지는 함수
			var loadedSection = this;
			if(origin.anchor == 'thirdPage' && direction == 'down') { // 내가 엥커를 떠난게 세번째 섹션이고 아래방향 일때 && - 그리고
				$('.scroll').css({display: 'none'});
			} else {
				$('.scroll').css({display: 'block'});
			}
			if(origin.anchor == 'thirdPage' && direction == 'down') {
				$('h1').css({display:'none'});
			} else {
				$('h1').css({display:'block'});
			}			
            if(origin.anchor == 'thirdPage' && direction == 'down') {
				$('.overlay').css({background:'rgba(0,0,0,0.8)'});
			}else {
				$('.overlay').css({background:'rgba(248, 248, 248, 0.8)'});
			}	            
		}
	});
$(document).ready(function() {
			$('.index').on('click', function() {
				$('.overlay').css({
					height: '33%'
				});
			});
		$('.closebtn').on('click',function() {
			$('.overlay').css({
				height:0
			});
		});
	});		
});