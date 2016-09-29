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

	$(".dropdown-list li>a").click(function() {
		var textList = $(this).text();
		$(".dropdown-list-toggle").html(textList + '<b class="caret"></b>');
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

	$(".block-scroll-y").mCustomScrollbar({
    	axis:"y",
    	scrollButtons: {
    		enable: true,
    		scrollAmount: "auto",
    		scrollType: "stepped"
    	},
    	callbacks:{
			onScroll:function(){
				var posBread = $(".block-scroll-y .breadcrumbs").offset().top;
				var posTitle = $(".block-scroll-y .page-title").offset().top;

				if(this.mcs.top <= -95){
					$(".block-scroll-y .breadcrumbs").fadeOut();
				}
				if(this.mcs.top <= -50) {
					$(".block-scroll-y .page-title").fadeOut();
				}
				else {
					$(".block-scroll-y .breadcrumbs, .block-scroll-y .page-title").fadeIn();
				}
			},
			onTotalScroll:function(){
				$("#mCSB_1_container").css({
					"top": this.mcs.top + (-158),
					"overflow": "visible"});
			},
      		onTotalScrollOffset: -158,
      		alwaysTriggerOffsets: false
		}
	});


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