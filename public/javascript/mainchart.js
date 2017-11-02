var ctx = document.getElementById("mainChart").getContext('2d');

var config = {
  type: 'bar',
  data: {
    labels: ['Tuuli', 'Vesi', 'Aurinko', 'Ydinvoima', 'Kaikki tuotanto'],
    datasets: [{
		label: "",
		data: [100,100,100,100, 100],
		datalabels: {
						align: 'center',
						anchor: 'center',
					},
		backgroundColor: ['#bae429', '#7092be', '#ffc90e', '#c3c3c3', '#c8bfe7'],
		fill: false,
    }]
  },
  options: {
	responsive: true,
    legend: {
    	display: false
    },
  	tooltips: {
    	callbacks: {
      	label: function(tooltipItem) {
        console.log(tooltipItem)
        	return tooltipItem.yLabel;
        }
      }
    },
	scales: {
		xAxes: [{
			gridLines: {
				display:false,
				drawBorder: false,
			},
			ticks: {
                fontSize: 20,
				fontColor: 'white',
            }
		}],
		yAxes: [{
			gridLines: {
				display: false,
				drawBorder: false,
			},
			ticks: {
                display: false,
            }			
		}]
    },
	plugins: {
		datalabels: {
			color: 'white',
			display: function(context) {
				return context.dataset.data[context.dataIndex] > 15;
			},
			font: {
				size: 20,
				weight: 'bold'
			},
			formatter: function(value, context) {
				return Math.round(value) + " MW";
			},
		}
	},
  },
  showTooltips: false,
  onAnimationComplete: function () {
        ctx.font = this.scale.font;
        ctx.fillStyle = this.scale.textColor
        ctx.textAlign = "center";
        ctx.textBaseline = "bottom";

        this.datasets.forEach(function (dataset) {
            dataset.bars.forEach(function (bar) {
                ctx.fillText(bar.value, bar.x, bar.y - 5);
            });
        })
    }
};

var myBarChart = new Chart(ctx, config);