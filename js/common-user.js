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


	// календарь
	$(function() {

	    var date = new Date();
	    var d = date.getDate();
	    var m = date.getMonth();
	    var y = date.getFullYear();


	// RESIZE HANDLING START
	    function resizeCalendar() {
	        var currentView = $('#calendar').fullCalendar('getView');
	        if(currentView.name === 'agendaWeek' || currentView.name === 'agendaDay') {
	            currentView.setHeight(9999);
	        }
	    }
	    $(window).on('resize', resizeCalendar);

	    $('#calendar').fullCalendar({
	        viewDisplay: resizeCalendar,
	        header: {
	            left: 'prev,next',
	            center: 'title',
	            right: ''
	        },
	        contentHeight: 700,
	        editable: false,
	        eventStartEditable: false,
	        columnFormat: 'dddd',
	        fixedWeekCount: false,
	        displayEventTime: false,
		    dayRender: function( date, cell ) {
		    	cell.append('<div class="rkmd-checkbox checkbox-ripple input-ripple">'+
                '<label class="input-checkbox input-checkbox-radio checkbox-aquamarine">'+
                  '<input type="checkbox"><span class="checkbox"></span>'+
                '</label></div>');
		    },
		    eventAfterRender: function (event, element, view) {
			    var col=element.closest('td').index()+1;
			    var $cellh=element.closest('table').find('thead td:nth-child('+col+')');
			    if ($cellh.hasClass('fc-other-month') == true)
			            element.css('opacity', 0.4);
			},
			eventAfterAllRender: function (view) {
				$('.fc-day').change(function(){
					var check = $('input[type="checkbox"]').is(':checked');

					if(check) {
						$('.fc-view-container').addClass('active-month');
						$(this).closest('.fc-week').addClass('active-week');
					}
					else{
						$('.fc-view-container').removeClass('active-month');
						$('.fc-week').removeClass('active-week');
					}
				});

				$(".fc-day").click(function () {
					var checkLength = $('input[type=checkbox]:checked').length;

						for(var i = 0; i<checkLength; i++) {
							if(checkLength === 3) {
								$(this).siblings().find('input[type=checkbox]').removeAttr("checked");
						}

					}
				});
			},
	        events: [
	            {
	                title: 'Отчет',
	                start: '2016-09-26',
	                url: '#',
	                className: 'report'
	            },
	            {
	                title: 'Отчет',
	                start: '2016-10-10',
	                url: '#',
	                className: 'report'
	            },
	            {
	                title: 'Отчет',
	                start: '2016-10-24',
	                url: '#',
	                className: 'report'
	            },
	            {
	                title: 'Кардио',
	                start: '2016-09-26',
	                url: '#',
	                className: 'kardio'
	            },
	            {
	                title: 'Кардио',
	                start: '2016-10-01',
	                url: '#',
	                className: 'kardio'
	            },
	            {
	                title: 'Кардио',
	                start: '2016-10-04',
	                url: '#',
	                className: 'kardio'
	            },
	            {
	                title: 'Кардио',
	                start: '2016-10-07',
	                url: '#',
	                className: 'kardio'
	            },
	            {
	                title: 'Кардио',
	                start: '2016-10-13',
	                url: '#',
	                className: 'kardio'
	            },
	            {
	                title: 'Кардио',
	                start: '2016-10-16',
	                url: '#',
	                className: 'kardio'
	            },
	            {
	                title: 'Кардио',
	                start: '2016-10-18',
	                url: '#',
	                className: 'kardio'
	            },
	            {
	                title: 'Кардио',
	                start: '2016-10-22',
	                url: '#',
	                className: 'kardio'
	            },
	            {
	                title: 'Кардио',
	                start: '2016-10-24',
	                url: '#',
	                className: 'kardio'
	            },
	            {
	                title: 'Кардио',
	                start: '2016-10-26',
	                url: '#',
	                className: 'kardio'
	            },
	            {
	                title: 'Кардио',
	                start: '2016-11-01',
	                url: '#',
	                className: 'kardio'
	            },
	            {
	                title: 'Кардио',
	                start: '2016-11-05',
	                url: '#',
	                className: 'kardio'
	            },
	            {
	                title: 'Отдых',
	                start: '2016-09-27',
	                allDay: false,
	                className: 'relax'
	            },
	            {
	                title: 'Отдых',
	                start: '2016-09-30',
	                allDay: false,
	                className: 'relax'
	            },
	            {
	                title: 'Отдых',
	                start: '2016-10-05',
	                allDay: false,
	                className: 'relax'
	            },
	            {
	                title: 'Отдых',
	                start: '2016-10-08',
	                allDay: false,
	                className: 'relax'
	            },
	            {
	                title: 'Отдых',
	                start: '2016-10-11',
	                allDay: false,
	                className: 'relax'
	            },
	            {
	                title: 'Отдых',
	                start: '2016-10-14',
	                allDay: false,
	                className: 'relax'
	            },
	            {
	                title: 'Отдых',
	                start: '2016-10-17',
	                allDay: false,
	                className: 'relax'
	            },
	            {
	                title: 'Отдых',
	                start: '2016-10-20',
	                allDay: false,
	                className: 'relax'
	            },
	            {
	                title: 'Отдых',
	                start: '2016-10-25',
	                allDay: false,
	                className: 'relax'
	            },
	            {
	                title: 'Отдых',
	                start: '2016-10-30',
	                allDay: false,
	                className: 'relax'
	            },
	            {
	                title: 'Отдых',
	                start: '2016-11-04',
	                allDay: false,
	                className: 'relax'
	            },
	            {
	                title: 'Силовые',
	                start: '2016-09-28',
	     			allDay: false,
	                url: '#',
	                className: 'force'
	            },
	            {
	                title: 'Силовые',
	                start: '2016-09-29',
	     			allDay: false,
	                url: '#',
	                className: 'force'
	            },
	            {
	                title: 'Силовые',
	                start: '2016-10-02',
	     			allDay: false,
	                url: '#',
	                className: 'force'
	            },
	            {
	                title: 'Силовые',
	                start: '2016-10-03',
	     			allDay: false,
	                url: '#',
	                className: 'force'
	            },
	            {
	                title: 'Силовые',
	                start: '2016-10-06',
	     			allDay: false,
	                url: '#',
	                className: 'force'
	            },
	            {
	                title: 'Силовые',
	                start: '2016-10-09',
	     			allDay: false,
	                url: '#',
	                className: 'force'
	            },
	            {
	                title: 'Силовые',
	                start: '2016-10-10',
	     			allDay: false,
	                url: '#',
	                className: 'force'
	            },
	            {
	                title: 'Силовые',
	                start: '2016-10-12',
	     			allDay: false,
	                url: '#',
	                className: 'force'
	            },
	            {
	                title: 'Силовые',
	                start: '2016-10-15',
	     			allDay: false,
	                url: '#',
	                className: 'force'
	            },
	            {
	                title: 'Силовые',
	                start: '2016-10-19',
	     			allDay: false,
	                url: '#',
	                className: 'force'
	            },
	            {
	                title: 'Силовые',
	                start: '2016-10-21',
	     			allDay: false,
	                url: '#',
	                className: 'force'
	            },
	            {
	                title: 'Силовые',
	                start: '2016-10-23',
	     			allDay: false,
	                url: '#',
	                className: 'force'
	            },
	            {
	                title: 'Силовые',
	                start: '2016-10-27',
	     			allDay: false,
	                url: '#',
	                className: 'force'
	            },
	            {
	                title: 'Силовые',
	                start: '2016-10-28',
	     			allDay: false,
	                url: '#',
	                className: 'force'
	            },
	            {
	                title: 'Силовые',
	                start: '2016-10-29',
	     			allDay: false,
	                url: '#',
	                className: 'force'
	            },
	            {
	                title: 'Силовые',
	                start: '2016-10-31',
	     			allDay: false,
	                url: '#',
	                className: 'force'
	            },
	            {
	                title: 'Силовые',
	                start: '2016-11-02',
	     			allDay: false,
	                url: '#',
	                className: 'force'
	            },
	            {
	                title: 'Силовые',
	                start: '2016-11-03',
	     			allDay: false,
	                url: '#',
	                className: 'force'
	            },
	            {
	                title: 'Силовые',
	                start: '2016-11-06',
	     			allDay: false,
	                url: '#',
	                className: 'force'
	            }
	        ]
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


/*!
 * Обзор. Графики
 */
$(function() {
	// ДИНАМИКА ВЕСА
	var ctx = document.getElementById("chartWeight");
	var myChart = new Chart(ctx, {
	    type: 'line',
	    position: 'bottom',
	    data: {
	        labels: ["5 дек", "19 дек", "3 янв", "18 янв", "2 фев", "16 фев"],
	        scaleShowGridLines: !0,
            scaleShowVerticalLines: !1,
	        datasets: [{
	        	label: ' вес',
	            fill: false,
	            data: [85, 70, 65, 60, 55, 50],
	            borderColor: '#5fc7ae',
	            borderWidth: 2,
	            pointBorderColor: '#eeeeee',
	            pointBackgroundColor: '#5fc7ae',
	            pointBorderWidth: 3,
	            pointRadius: 6.5
	        }]
	    },
	    options: {
	        scales: {
	            yAxes: [{
	                ticks: {
	                    beginAtZero:false,
	                    min: 45,
	                    max: 90
	                }
	            }],
	        },
	        legend: {
                display: false
            },
            tooltips: {
            	mode: 'nearest',
            	xPadding: 10,
            	yPadding: 10,
            	caretSize: 10,
            	callbacks: {
	                label: function(tooltipItems, data) {
                        return data.datasets[0].label + ' ' + tooltipItems.yLabel + ' кг';
                    }
            	}
            },
	    },
	});

	// ДИНАМИКА ОБЪЕМА
	var capacity = document.getElementById("chartСapacity");
	var myChartСapacity = new Chart(capacity, {
	    type: 'line',
	    position: 'bottom',
	    data: {
	        labels: ["5 дек", "19 дек", "3 янв", "18 янв", "2 фев", "16 фев"],
	        scaleShowGridLines: !0,
            scaleShowVerticalLines: !1,
	        datasets: [{
                label: "Объем груди",
                borderColor: '#5fc7ae',
                backgroundColor: '#5fc7ae',
	            borderWidth: 2,
	            pointBorderColor: '#eeeeee',
	            pointBackgroundColor: '#5fc7ae',
	            pointBorderWidth: 3,
	            pointRadius: 6.5,
                data: [120, 117, 110, 98, 90, 88],
                fill: false,
            }, {
                label: "Объем талии",
                borderColor: '#f55145',
                backgroundColor: '#f55145',
	            borderWidth: 2,
	            pointBorderColor: '#eeeeee',
	            pointBackgroundColor: '#f55145',
	            pointBorderWidth: 3,
	            pointRadius: 6.5,
                data: [100, 95, 90, 85, 80, 70],
                fill: false,
            }, {
                label: "Объем бедер",
                borderColor: '#fbc53c',
                backgroundColor: '#fbc53c',
	            borderWidth: 2,
	            pointBorderColor: '#eeeeee',
	            pointBackgroundColor: '#fbc53c',
	            pointBorderWidth: 3,
	            pointRadius: 6.5,
                data: [122, 117, 110, 100, 95, 90],
                fill: false,
            }, {
                label: "Объем плеча",
                borderColor: '#55b559',
                backgroundColor: '#55b559',
	            borderWidth: 2,
	            pointBorderColor: '#eeeeee',
	            pointBackgroundColor: '#55b559',
	            pointBorderWidth: 3,
	            pointRadius: 6.5,
                data: [45, 40, 35, 30, 30, 25],
                fill: false,
            }, {
                label: "Объем бедра",
                borderColor: '#0ab1fc',
                backgroundColor: '#0ab1fc',
	            borderWidth: 2,
	            pointBorderColor: '#eeeeee',
	            pointBackgroundColor: '#0ab1fc',
	            pointBorderWidth: 3,
	            pointRadius: 6.5,
                data: [50, 57, 53, 49, 45, 43],
                fill: false,
            }]
	    },
	    options: {
	        scales: {
	            yAxes: [{
	                ticks: {
	                    beginAtZero:false,
	                    min: 15,
	                    max: 150
	                }
	            }],
	        },
	        legend: {
                display: true,
                position: 'bottom',
                labels: {
                	boxWidth: 15,
                	fontSize: 14,
                	fontColor: '#585858',
                	fontFamily: "'LatoLight', 'Arial', sans-serif",
                	padding: 25
                }
            },
            tooltips: {
            	mode: 'nearest',
            	intersect: false,
            	xPadding: 10,
            	yPadding: 10,
            	caretSize: 10,
            	callbacks: {
	                label: function(tooltipItems, data) {
                        return ' ' + data.datasets[tooltipItems.datasetIndex].label + ' ' + tooltipItems.yLabel + ' см';
                    }
            	}
            },
            hover: {
                mode: 'point',
                intersect: true
            },
	    },
	});

	// САМОЧУВСТВИЕ
	var health = document.getElementById("chartHealth");
	var myChartHealth = new Chart(health, {
	    type: 'line',
	    position: 'bottom',
	    data: {
	        labels: ["5 дек", "19 дек", "3 янв", "18 янв", "2 фев", "16 фев"],
	        scaleShowGridLines: !0,
            scaleShowVerticalLines: !1,
	        datasets: [{
                label: "Аппетит",
                borderColor: '#5fc7ae',
                backgroundColor: '#5fc7ae',
	            borderWidth: 2,
	            pointBorderColor: '#eeeeee',
	            pointBackgroundColor: '#5fc7ae',
	            pointBorderWidth: 3,
	            pointRadius: 6.5,
                data: [5, 4, 2, 5, 3, 5],
                fill: false,
            }, {
                label: "Сон",
                borderColor: '#f55145',
                backgroundColor: '#f55145',
	            borderWidth: 2,
	            pointBorderColor: '#eeeeee',
	            pointBackgroundColor: '#f55145',
	            pointBorderWidth: 3,
	            pointRadius: 6.5,
                data: [4, 4, 4, 3, 5, 3],
                fill: false,
            }, {
                label: "Усталость",
                borderColor: '#55b559',
                backgroundColor: '#55b559',
	            borderWidth: 2,
	            pointBorderColor: '#eeeeee',
	            pointBackgroundColor: '#55b559',
	            pointBorderWidth: 3,
	            pointRadius: 6.5,
                data: [2, 4, 3, 2, 4, 2],
                fill: false,
            }, {
                label: "Желание тренироваться",
                borderColor: '#0ab1fc',
                backgroundColor: '#0ab1fc',
	            borderWidth: 2,
	            pointBorderColor: '#eeeeee',
	            pointBackgroundColor: '#0ab1fc',
	            pointBorderWidth: 3,
	            pointRadius: 6.5,
                data: [5, 5, 4, 5, 3, 4],
                fill: false,
            }]
	    },
	    options: {
	        scales: {
	            yAxes: [{
	                ticks: {
	                    beginAtZero:true,
	                    min: 0,
	                    max: 5,
	                    stepSize: 1
	                }
	            }],
	        },
	        legend: {
                display: true,
                position: 'bottom',
                labels: {
                	boxWidth: 15,
                	fontSize: 14,
                	fontColor: '#585858',
                	fontFamily: "'LatoLight', 'Arial', sans-serif",
                	padding: 25
                }
            },
            tooltips: {
            	mode: 'nearest',
            	intersect: false,
            	xPadding: 10,
            	yPadding: 10,
            	caretSize: 10,
            	callbacks: {
	                label: function(tooltipItems, data) {
                        return ' ' + data.datasets[tooltipItems.datasetIndex].label + ' ' + tooltipItems.yLabel;
                    }
            	}
            },
            hover: {
                mode: 'point',
                intersect: true
            },
	    },
	});

	// ПУЛЬС
	var pulse = document.getElementById("chartPulse");
	var myChartPulse = new Chart(pulse, {
	    type: 'line',
	    position: 'bottom',
	    data: {
	        labels: ["5 дек", "19 дек", "3 янв", "18 янв", "2 фев", "16 фев"],
	        scaleShowGridLines: !0,
            scaleShowVerticalLines: !1,
	        datasets: [{
	        	label: ' Пульс',
	            fill: false,
	            data: [80, 76, 70, 76, 55, 50],
	            borderColor: '#f55145',
	            borderWidth: 2,
	            pointBorderColor: '#eeeeee',
	            pointBackgroundColor: '#f55145',
	            pointBorderWidth: 3,
	            pointRadius: 6.5
	        }]
	    },
	    options: {
	        scales: {
	            yAxes: [{
	                ticks: {
	                    beginAtZero:false,
	                    min: 45,
	                    max: 90
	                }
	            }],
	        },
	        legend: {
                display: false
            },
            tooltips: {
            	mode: 'nearest',
            	xPadding: 10,
            	yPadding: 10,
            	caretSize: 10,
            	callbacks: {
	                label: function(tooltipItems, data) {
                        return data.datasets[0].label + ' ' + tooltipItems.yLabel + ' ударов';
                    }
            	}
            },
	    },
	});
});