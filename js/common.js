$(document).ready(function() {

$('body').css('backgroundSize', '100%' + $(window).height()+'px');
$('.tel button').on('click',function(){
	$('menu').slideToggle('slow');
});

hParallax();
windowHeight($('header'));
windowHeight($('.wrap_header'));
tile();
pageScroll.init();

  $("#owl-demo").owlCarousel({
 
      navigation : true, // Show next and prev buttons
      slideSpeed : 300,
      paginationSpeed : 400,
       // autoPlay: true,
       pagination: false,
      singleItem:true
  });  
});
function windowHeight(elem){
	elem.height($(window).height());
}
function hParallax(){
	$('header').mousemove(function(e){
		// положение элемента
		var pos = $(this).offset();
		var elem_left = pos.left;
		var elem_top = pos.top;
		// положение курсора внутри элемента
		var Xinner = e.pageX - elem_left;
		var Yinner = e.pageY - elem_top;

		$(this)
		.css({
			backgroundPosition: -Yinner / 15+'px '+ (-Xinner / 20) +'px'
		}).find('.wrap_header')
		.css({
			backgroundPosition: Yinner / 20+'px '+ (Xinner / 30) +'px'
		})
		.children('h1').css({
			transform: 'translate(-'+ Yinner / 40 +'px, '+ Xinner / 50 +'px)'						
		});
	});
};	

var pageScroll = {
	itemAc: $('menu ul li a'),
	init: function(){
		pageScroll.itemAc.on('click',function(){
			var pos = $($(this).attr('data-id')).offset().top;
			$('body').animate({scrollTop: pos}, 1000);
			console.log(pos);
		});
	}
}

function tile(){
	var main = $('#container');
	var item = $('.tile');
	var itemLength = item.length;

	var firstCol = $('#container .tile:nth-child(3n+1)');
	var secondCol = $('#container .tile:nth-child(3n+2)');
	var firdCol = $('#container .tile:nth-child(3n+3)');

	var firstColSmall = $('#container .tile:nth-child(2n+3)');
	var secondColSmall = $('#container .tile:nth-child(2n+2)');
if($(window).width() > 767){
	firstCol.wrapAll('<div class="firstCol"></div>');
	secondCol.wrapAll('<div class="secondCol"></div>');
	firdCol.wrapAll('<div class="firdCol"></div>');
}else{
	firstColSmall.wrapAll('<div class="firstColSmall"></div>');
	secondColSmall.wrapAll('<div class="secondColSmall"></div>');
}

	var fl = firstCol.length;
	var sl = secondCol.length;
	var fil = firdCol.length;
}
