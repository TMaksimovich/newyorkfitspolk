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
	$('[data-toggle="tooltip"]').tooltip();

});
