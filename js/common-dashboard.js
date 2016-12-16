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
                	padding: 10
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