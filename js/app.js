require.config({
	baseUrl: "/js",
	paths: {
		"jquery": "jquery",
		"chartjs":"Chart.js/dist/Chart",
		"script":"script"
	}
});

require(['jquery', 'script', 'chartjs'], function($, script, chartjs) {
	$(document).ready(function(){
		// 1. Get Data from feed
		$.get('../test_feed.json', function(result){
		    // 2. On successful return, send retrieved object to stripContent function
		    data = stripContent(result.content);

		    console.log(data);

		    // 3. Create graph

		    var ctx = document.getElementById("myChart");
			var myChart = new Chart(ctx, {
			    type: 'bar',
			    data: {
			        labels: data.words,
			        datasets: [{
			            label: '# of words per tweet',
			            data: data.numbers
			        }]
			    },
			    options: {
			        scales: {
			            yAxes: [{
			                ticks: {
			                    beginAtZero:true
			                }
			            }]
			        }
			    }
			});
		});
	});
});