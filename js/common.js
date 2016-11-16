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
	$(".dropdown-list").on('touchstart click', 'li>span', function(){
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
	$('.plan-training-content .toggle-block').on('click', '.toggle-checkbox', function(){
	    if ($(this).is(":checked")) {
	        $(this).closest('.toggle-block').find('p').html('Да');
	    }
	    else {
	    	$('.toggle-block').find('p').html('Нет');
	    }
	});

	//переключатель на странице участника
	$('#modalUserEdit .toggle-block').on('click', '.toggle-checkbox', function(){
	    if ($(this).is(":checked")) {
	        $(this).closest('.toggle-block').find('p').html('Активный');
	    }
	    else {
	    	$('.toggle-block').find('p').html('Заморожен');
	    }
	});

	// активный блок на странице Режим тренировки
	$('.new-block-praxis').on('click', '.dropdown-list', function(){
		if($(this).find('.dropdown-list-toggle').hasClass('active')) {
			$(this).closest('.new-block-praxis')
				   .find('.add-praxis')
				   .addClass('active')
				   .find('.praxis-info')
				   .attr('data-toggle', 'modal')
				   .attr('data-target', '#modalTraining')

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
		var $page_h = $("html").height();
		var $page_w = $("html").width();
		var $tableWrapper = $(".table-wrapper");

		if($page_w > 991){
			$tableWrapper.mCustomScrollbar({
		    	axis:"y",
		    	scrollButtons:{
		    		enable: true,
		    		scrollAmount: "auto",
		    		scrollType: "stepped",
		    	}
	    	});
		}
		else{
			$tableWrapper.mCustomScrollbar("destroy");
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

	// Боковое меню на странице участника
	function side_menu_toggle() {
		var open_btn  = $(".menu-user button");
		var close_btn = $(".right-menu-block .close");
		var page_w = $("html").width();
		var page_h = $("html").height();


		$(open_btn).click(function() {
			$(this).closest(".menu-user-column")
				   .find('.right-menu-block')
				   .height(page_h-64)
				   .addClass("open-menu");
		});

		$(close_btn).click(function() {
			$(this).closest(".right-menu-block").removeClass("open-menu");
		});

		$(document).mouseup(function (e){
			var close_doc = $(".right-menu-block.open-menu");
			if (!close_doc.is(e.target)
			    && close_doc.has(e.target).length === 0) {
				close_doc.removeClass("open-menu");
			}
		});
	}


	// Загрузка изображений
	$(function(){

		var dropbox = $('#dropbox'),
			message = $('.message', dropbox);

		dropbox.filedrop({
			paramname:'pic',

			maxfiles: 4,
	    	maxfilesize: 2,
			url: ' ',

			uploadFinished:function(i,file,response){
				$.data(file).addClass('done');
			},

	    	error: function(err, file) {
				switch(err) {
					case 'BrowserNotSupported':
						showMessage('Ваш браузер не поддерживает HTML5');
						break;
					case 'TooManyFiles':
						alert('За раз можно загрузить максимум 4 файла');
						break;
					case 'FileTooLarge':
						alert(file.name+' Превышен размер файла');
						break;
					default:
						break;
				}
			},

			beforeEach: function(file){
				if(!file.type.match(/^image\//)){
					return false;
				}
			},

			uploadStarted:function(i, file, len){
				createImage(file);
			},

			progressUpdated: function(i, file, progress) {
				$.data(file).find('.progress').width(progress);
			}

		});

		var template = '<div class="preview">'+
							'<span class="imageHolder">'+
								'<img />'+
								'<span class="uploaded"></span>'+
							'</span>'+
							'<div class="progressHolder">'+
								'<div class="progress"></div>'+
							'</div>'+
						'</div>';


		function createImage(file){

			var preview = $(template),
				image = $('img', preview);

			var reader = new FileReader();

			image.width = 221;
			image.height = 295;

			reader.onload = function(e){

				image.attr('src',e.target.result);
			};

			reader.readAsDataURL(file);

			message.hide();
			preview.appendTo(dropbox);

			$.data(file,preview);
		}

		function showMessage(msg){
			message.html(msg);
		}

	});




	$(window).on("load",function(){
	    window_resize();
	    sidebar_toggle();
	    side_menu_toggle();
	});

	$(window).resize(function() {
        window_resize();
        sidebar_toggle();
        side_menu_toggle();
    });
});