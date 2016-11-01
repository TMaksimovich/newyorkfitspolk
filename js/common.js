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

	//выпадающий список
	$(".dropdown-list li>span").click(function() {
		var textList = $(this).text();
		$(this).closest(".dropdown-list").find(".dropdown-list-toggle").html(textList + '<b class="caret"></b>').addClass('active');
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

	//переключатель на странице плана тренировок
	$('.plan-training-content .toggle-block .toggle-checkbox').on('click', function(){
	    if ($(this).is(":checked")) {
	        $(this).closest('.toggle-block').find('p').html('Да');
	    }
	    else {
	    	$('.toggle-block').find('p').html('Нет');
	    }
	});

	//переключатель на странице участника
	$('#modalUserEdit .toggle-block .toggle-checkbox').on('click', function(){
	    if ($(this).is(":checked")) {
	        $(this).closest('.toggle-block').find('p').html('Активный');
	    }
	    else {
	    	$('.toggle-block').find('p').html('Заморожен');
	    }
	});

	// активный блок на странице Режим тренировки
	$('.new-block-praxis .dropdown-list').on('click', function(){
		if($(this).find('.dropdown-list-toggle').hasClass('active')) {
			$(this).closest('.new-block-praxis')
				   .find('.add-praxis')
				   .attr('data-toggle', 'modal')
				   .attr('data-target', '#modalTraining')
				   .addClass('active')
		}
	});

	$(".add-praxis").each(function() {
		var $praxisName = $(this).find('.praxis-name');

	    if ($.trim($praxisName.text()) !== "") {
	        $(this).closest('.add-praxis')
	        	   .find('.praxis-icon .material-icons')
	        	   .addClass('tooltip active')
	        	   .attr('title', 'Посмотреть тренировку')
	    }
	});


	//слайдер тренировок
	var $status = $('.pagingInfo');
	var $slickElement = $('.training-item');

	$slickElement.on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
	  //currentSlide is undefined on init -- set it to 0 in this case (currentSlide is 0 based)
	  var i = (currentSlide ? currentSlide : 0) + 1;
	  $status.text(i + '/' + slick.slideCount);
	});

	$slickElement.slick({
		prevArrow: '<a href="#" class="btn-flat waves-effect waves-grey slick-prev">назад</a>',
		nextArrow: '<a href="#" class="btn-flat waves-effect waves-grey slick-next">вперед</a>'
	});


	//всплывающие подсказки
	$(function() {

	  $('.tooltip').each(function() {
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
			var posBread = $(".block-scroll-y .breadcrumbs").offset().top;
			var posTitle = $(".block-scroll-y .page-title").offset().top;
			var bodyScroll = $("body").scrollTop();

			if(bodyScroll >= 110){
				$(".block-scroll-y .breadcrumbs").fadeOut();
			}
			else {
				$(".block-scroll-y .breadcrumbs").fadeIn();
			}
			if(bodyScroll >= 50) {
				$(".block-scroll-y .page-title").fadeOut();
			}
			else {
				$(".block-scroll-y .page-title").fadeIn();
			}
		}
		else {
			return false;
		}


	});

	// $(".block-scroll-y").mCustomScrollbar({
 //    	axis:"y",
 //    	scrollButtons: {
 //    		enable: true,
 //    		scrollAmount: "auto",
 //    		scrollType: "stepped"
 //    	},
 //    	callbacks:{
	// 		onScroll:function(){
	// 			var posBread = $(".block-scroll-y .breadcrumbs").offset().top;
	// 			var posTitle = $(".block-scroll-y .page-title").offset().top;

	// 			if(this.mcs.top <= -95){
	// 				$(".block-scroll-y .breadcrumbs").fadeOut();
	// 			}
	// 			if(this.mcs.top <= -50) {
	// 				$(".block-scroll-y .page-title").fadeOut();
	// 			}
	// 			else {
	// 				$(".block-scroll-y .breadcrumbs, .block-scroll-y .page-title").fadeIn();
	// 			}
	// 		},
	// 		onTotalScroll:function(){
	// 			$("#mCSB_1_container").css({
	// 				"top": this.mcs.top + (-158),
	// 				"overflow": "visible"});
	// 		},
 //      		onTotalScrollOffset: -158,
 //      		alwaysTriggerOffsets: false
	// 	}
	// });


	//кастомный скролл

	function window_resize(){
		var page_h = $("html").height();
		var page_w = $("html").width();

		if(page_w > 991){
			$(".table-wrapper").mCustomScrollbar({
		    	axis:"y",
		    	scrollButtons:{
		    		enable: true,
		    		scrollAmount: "auto",
		    		scrollType: "stepped",
		    	}
	    	});
		}
		else{
			$(".table-wrapper").mCustomScrollbar("destroy");
		}
	}

	//сайдбар на мобилках
	function sidebar_toggle() {
		var switch_btn  = $(".page-aside-switch");
		var switch_inner_btn = $(".page-aside-switch-inner");
		var page_w = $("html").width();

		if(page_w < 767){
			$(switch_btn).click(function() {
				$(this).closest(".page-aside-right").addClass("open-aside");
			});

			$(switch_inner_btn).click(function() {
				$(this).closest(".page-aside-right").removeClass("open-aside");
			});
		}

	}


	$(window).on("load",function(){
	    window_resize();
	    sidebar_toggle();
	});

	$(window).resize(function() {
        window_resize();
        sidebar_toggle();
    });
});