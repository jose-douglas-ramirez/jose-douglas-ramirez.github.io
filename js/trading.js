'use strict';

var $chart = $('.chart');
var curr = $chart.attr('data-curr');

function splitData(rawData) {
  var categoryData = [];
  var values = [];
  for (var i = 0; i < rawData.length; i++) {
    categoryData.push(rawData[i].splice(0, 1)[0]);
    values.push(rawData[i]);
  }
  return {
    categoryData: categoryData,
    values: values
  };
}

function calculateMA(dayCount, data0) {
  var result = [];
  for (var i = 0, len = data0.values.length; i < len; i++) {
    if (i < dayCount) {
      result.push('-');
      continue;
    }
    var sum = 0;
    for (var j = 0; j < dayCount; j++) {
      sum += data0.values[i - j][1];
    }
    result.push(sum / dayCount);
  }
  return result;
}

$.get("../../csrfToken", {}, function (csrf) {

  io.socket.post('/forecasts/get_predict', { curr: curr, _csrf: csrf._csrf }, function (res_dann, jwres) {

    // @todo позже проверить


    if (res_dann.no_auth) {
      $('.chart_el').addClass('blur');
    }
    res_dann.predict = _.reverse(res_dann.predict);

    var num = 0;
    res_dann.predict.forEach(function (el, ind) {

      num = num + 1;
      var dann = [];

      var dann_min = [],
          dann_max = [];
      el.predict.forEach(function (els, ind) {
        dann.push([els[0], els[1], els[2], els[4], els[3]]);
        dann_min.push(els[4]);
        dann_max.push(els[3]);
      });

      var max_d = 0;
      var min_d = 0;
      if (_.max(dann_max) > 1000 && _.max(dann_max) < 10000) {
        max_d = _.ceil(_.max(dann_max), -2);
        min_d = _.floor(_.min(dann_min, -2));
      } else if (_.max(dann_max) > 100 && _.max(dann_max) < 1000) {
        max_d = _.ceil(_.max(dann_max), -2);
        min_d = _.floor(_.min(dann_min, -2));
      } else if (_.max(dann_max) > 10 && _.max(dann_max) < 100) {
        max_d = _.ceil(_.max(dann_max), -1);
        min_d = _.floor(_.min(dann_min, -1));
      } else {
        max_d = _.max(dann_max);
        min_d = _.min(dann_min);
      }

      // console.log(max_d);
      // console.log(min_d);

      var data0 = splitData(dann);

      // console.log(data0);
      //
      // console.log(num);

      var per_title = curr.toUpperCase() + " " + el.period + " hours | 30 min Poloniex UTC";
      var show_per = 30;
      if (el.period == 84) {
        per_title = curr.toUpperCase() + "  " + 7 + " day | 2 hours Poloniex UTC";
        show_per = 20;
      }
      if (res_dann.no_auth) {
        per_title = 'FAKE DANN';
      }
      if (el.period == 24 || el.period == 48) {
        el.period = el.period * 2;
      }

      var option = {
        title: {
          text: per_title,
          left: 0
        },
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'cross'
          }
        },
        legend: {
          data: ['K', 'MA5', 'MA10', 'MA20', 'MA30']
        },
        grid: {
          left: '10%',
          right: '10%',
          bottom: '15%'
        },
        xAxis: {
          type: 'category',
          data: data0.categoryData,
          scale: true,
          boundaryGap: false,
          axisLine: { onZero: false },
          splitLine: { show: true },
          splitNumber: 15,
          min: 'dataMin',
          max: 'dataMax'
        },
        yAxis: {
          scale: true,
          splitArea: {
            show: true
          }
        },
        dataZoom: [{
          type: 'inside',
          start: show_per,
          end: 100
        }, {
          show: true,
          type: 'slider',
          y: '90%',
          start: show_per,
          end: 100
        }],
        series: [{
          name: 'candlestick',
          type: 'candlestick',
          data: data0.values,

          itemStyle: {
            normal: {
              opacity: 0.3,
              color: '#ef232a',
              color0: '#14b143',
              borderColor: '#ef232a',
              borderColor0: '#14b143'
            },
            emphasis: {
              opacity: 0.3,
              color: 'black',
              color0: '#444',
              borderColor: 'black',
              borderColor0: '#444'
            }
          },
          markPoint: {
            label: {
              normal: {
                formatter: function formatter(param) {
                  if (param.value < 1) {
                    return param != null ? _.round(param.value, 5) : '';
                  } else {
                    return param != null ? _.round(param.value, 2) : '';
                  }
                }
              }
            },
            data: [{
              name: 'highest value',
              type: 'max',
              valueDim: 'highest'
            }, {
              name: 'lowest value',
              type: 'min',
              valueDim: 'lowest'
            }, {
              name: 'average value on close',
              type: 'average',
              valueDim: 'close'
            }],
            tooltip: {
              formatter: function formatter(param) {
                return param.name + '<br>' + (param.data.coord || '');
              }
            }
          }

        }, {
          name: 'candlestick',
          type: 'candlestick',
          data: _.slice(data0.values, 0, data0.values.length - el.period)

          // itemStyle: {
          //   normal: {
          //     color: '#ef232a',
          //     color0: '#14b143',
          //     borderColor: '#ef232a',
          //     borderColor0: '#14b143'
          //   },
          //   emphasis: {
          //     color: 'black',
          //     color0: '#444',
          //     borderColor: 'black',
          //     borderColor0: '#444'
          //   }
          // }

        }, {
          name: 'MA5',
          type: 'line',
          data: calculateMA(5, data0),
          smooth: true,
          lineStyle: {
            normal: { opacity: 0.5 }
          }
        }, {
          name: 'MA10',
          type: 'line',
          data: calculateMA(10, data0),
          smooth: true,
          lineStyle: {
            normal: { opacity: 0.5 }
          }
        }, {
          name: 'MA20',
          type: 'line',
          data: calculateMA(20, data0),
          smooth: true,
          lineStyle: {
            normal: { opacity: 0.5 }
          }
        }, {
          name: 'MA30',
          type: 'line',
          data: calculateMA(30, data0),
          smooth: true,
          lineStyle: {
            normal: { opacity: 0.5 }
          }
        }]
      };

      var myChart = echarts.init(document.getElementById('chart' + num));

      // console.log(myChart);

      myChart.setOption(option);
    });
  });

  // if(window.location.pathname.search(/forecasts/) !== -1){
  //
  //   setTimeout(function () {
  //     window.location.href = "../../../../presale";
  //   },20000);
  //
  //
  // }
});
//# sourceMappingURL=index.js.map
