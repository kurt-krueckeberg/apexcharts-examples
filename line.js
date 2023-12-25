var options = {
     legend: {
         show: true,
         position: 'bottom'
     },
     series: [{
         name: "2018",
         data: [10, 41, 35, 51, 49, 62, 69, 91, 148]
     },{
         name: "2019",
         data: [30, 11, 55, 41, 69, 32, 49, 51, 128]
     }
     ],
     chart: {
       height: 350,
       type: 'line',
       zoom: {
         enabled: false
       }
     },
     dataLabels: {
       enabled: false
     },
     stroke: {
       // curve: 'smooth'
       curve: 'straight'
     },
     title: {
       text: 'Attendence Trends by Month',
       align: 'left'
     },
     grid: {
       row: {
         colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
         opacity: 0.5
       },
     },
     xaxis: {
       categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'],
     }
  };

var chart = new ApexCharts(document.querySelector("#chart"), options);
chart.render();
