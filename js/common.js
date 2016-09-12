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

	$(window).on("load",function(){
	    window_resize();
	});

	$(window).resize(function() {
        window_resize();
    });
});