$(function() {

	//SVG Fallback
	if(!Modernizr.svg) {
		$("img[src*='svg']").attr("src", function() {
			return $(this).attr("src").replace(".svg", ".png");
		});
	};

	//Chrome Smooth Scroll
	try {
		$.browserSelector();
		if($("html").hasClass("chrome")) {
			$.smoothScroll();
		}
	} catch(err) {

	};

	$("img, a").on("dragstart", function(event) { event.preventDefault(); });

	//волны
	Waves.init();
	Waves.attach('.waves', ['waves-light']);
	Waves.attach('.btn-flat', ['waves-button']);

	//автоматическое изменение размера у textarea
	$(function(){
		$('textarea').autosize();
	});

	//календарь
	$('.datepicker').datepicker({
		weekStart:1,
		format: 'dd.mm.yyyy'
	});

	//аккордион
	$('.accordion-header').on('click', function (e) {

		var $this = $(this);

		$this.parent('.accordion').toggleClass('expanded');
		$this.next('.accordion-collapse').slideToggle( "slow" );
		$this.parent('.accordion').siblings('.accordion').removeClass('expanded').find('.accordion-collapse').slideUp( "slow" );
		e.stopPropagation();
	});

	//табы
	$('ul.tabs__caption').on('click', 'li:not(.active)', function() {
	    $(this)
	      .addClass('active').siblings().removeClass('active')
	      .closest('div.tabs').find('div.tabs__content').removeClass('active').eq($(this).index()).addClass('active');
	});


	//слайдер тренировок
	var $status = $('.pagingInfo');
	var $slickElement = $('.training-item');
	var $modal = $('.modal');

	$slickElement.on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
	  //currentSlide is undefined on init -- set it to 0 in this case (currentSlide is 0 based)
	  var i = (currentSlide ? currentSlide : 0) + 1;
	  $status.text(i + '/' + slick.slideCount);
	});

	$slickElement.slick({
		prevArrow: '<a href="#" class="btn-flat waves-effect waves-grey slick-prev">назад</a>',
		nextArrow: '<a href="#" class="btn-flat waves-effect waves-grey slick-next">вперед</a>'
	});

	$modal.on('shown.bs.modal', function (e) { //когда открыто модальное окно
      $slickElement.slick("setPosition", 0);
    })


	//всплывающие подсказки
	$(function() {
	  var $tooltip = $('.tooltip');

	  $tooltip.each(function() {
	    var el = $(this);
	    var title = el.attr('title');
	    if (title && title != '') {
	      el.attr('title', '').append('<span>' + title + '</span>');
	      var width = el.find('span').width();
	      var height = el.find('span').height();
	      el.hover(
	        function() {
	          el.find('span')
	            .clearQueue()
	            .delay(200)
	            .animate({width: 150}, 200).show(200)
	            .animate({width: 150}, 200);
	        },
	        function() {
	          el.find('span')
	            .animate({width: 150}, 150)
	            .animate({width: 'hide', height: 'hide'}, 150);
	        }
	      ).mouseleave(function() {
	        if (el.children().is(':hidden')) el.find('span').clearQueue();
	      });
	    }
	  });
	});

	$(window).scroll(function() {
		var page_w = $("html").width();

		if(page_w > 992) {
			var $breadcrumbs = $(".block-scroll-y .breadcrumbs");
			var $title = $(".block-scroll-y .page-title");
			var $posBread = $breadcrumbs.offset().top;
			var $posTitle = $title.offset().top;
			var $bodyScroll = $("body").scrollTop();

			if($bodyScroll >= 110){
				$breadcrumbs.fadeOut();
			}
			else {
				$breadcrumbs.fadeIn();
			}
			if($bodyScroll >= 50) {
				$title.fadeOut();
			}
			else {
				$title.fadeIn();
			}
		}
		else {
			return false;
		}
	});
});