$.ajax({
  url: 'https://edu.telking.com/api/?type=week', 
  success: function(response) {
    if (response.code === 200) {
      var data = response.data;
      renderChart(data);
    } else {
      console.error('Failed to fetch data:', response.message);
    }
  },
  
  error: function(xhr, status, error) {
    console.error('Failed to fetch data:', error);
  }
});

function renderChart(data) {
  var chart = echarts.init(document.getElementById('chart'));
  
  var option = {
    title: {
      text: "type=week 的柱形图",
      left:'center'
    },
    xAxis: {
      type: 'category',
      data: data.xAxis
    },
    yAxis: {
      type: 'value'
    },
    series: [{
      type: 'bar',
      data: data.series
    }]
  };

  chart.setOption(option);
}
