<template>
  <div>
    <div id="l1"></div>
  </div>
</template>

<script>
import {handleData } from './index.ts'
import { Chart, registerAnimation } from '@antv/g2';
export default {
  data() {
    return {
      gdp: require('./gdp.json')
    };
  },
  mounted() {
    this.initLineChart();
  },
  methods: {
    initLineChart() {
    let count = 0;
    let chart;
    let interval;
    let _this = this
    function countUp() {
      if (count === 0) {
        chart = new Chart({
          container: 'l1',
          autoFit: true,
          height: 500,
          padding: [ 20, 60 ]
        });
        // @ts-ignore
        chart.data(handleData(Object.values(_this.gdp)[count]));
        chart.coordinate('rect').transpose();
        chart.legend(false);
        chart.tooltip(false);
        // chart.axis('value', false);
        chart.axis('city', {
          animateOption: {
            update: {
              duration: 1000,
              easing: 'easeLinear'
            }
          }
        });
        chart.annotation().text({
          position: ['95%', '90%'],
          content: Object.keys(_this.gdp)[count],
          style: {
            fontSize: 40,
            fontWeight: 'bold',
            fill: '#ddd',
            textAlign: 'end'
          },
          animate: false,
        });
        chart
          .interval()
          .position('city*value')
          .color('city')
          .label('value', (value) => {
            // if (value !== 0) {
            return {
              animate: {
                appear: {
                  animation: 'label-appear',
                  delay: 0,
                  duration: 1000,
                  easing: 'easeLinear'
                },
                update: {
                  animation: 'label-update',
                  duration: 1000,
                  easing: 'easeLinear'
                }
              },
              offset: 5,
            };
            // }
          }).animate({
            appear: {
              duration: 1000,
              easing: 'easeLinear'
            },
            update: {
              duration: 1000,
              easing: 'easeLinear'
            }
          });

        chart.render();
      } else {
        chart.annotation().clear(true);
        chart.annotation().text({
          position: ['95%', '90%'],
          content: Object.keys(_this.gdp)[count],
          style: {
            fontSize: 40,
            fontWeight: 'bold',
            fill: '#ddd',
            textAlign: 'end'
          },
          animate: false,
        });
        // @ts-ignore
        chart.changeData(handleData(Object.values(_this.gdp)[count]));
      }

      ++count;

      if (count === Object.keys(_this.gdp).length) {
        clearInterval(interval);
      }
    }

    countUp();
    interval = setInterval(countUp, 1200);
    }
  }
};
</script>

<style  scoped>
</style>