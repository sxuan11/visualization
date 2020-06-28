<template>
  <div>
    <div id="container"></div>
  </div>
</template>

<script>
import { Line } from "@antv/g2plot";
export default {
  data() {
    return {
      year: require("./gdp.json")
    };
  },
  methods: {
    init() {
      // fetch("./gdp.json")
      //   .then(res => res.json())
      //   .then(data => {
      const linePlot = new Line(document.getElementById("container"), {
        title: {
          visible: true,
          text: "2000 ~ 2018 年各国家 GDP 趋势对比"
        },
        description: {
          visible: true,
          text:
            "图形标签 (label) 位于折线尾部，用于标注整根折线，并有带有排名的含义在其中。"
        },
        padding: [20, 100, 30, 80],
        forceFit: true,
        data: this.year,
        xField: "year",
        yField: "gdp",
        seriesField: "name",
        xAxis: {
          type: "dateTime",
          label: {
            visible: true,
            autoHide: true
          }
        },
        yAxis: {
          formatter: v => `${(v / 10e8).toFixed(1)} B`
        },
        meta: {
          year: {
            alias: "年份",
            range: [0, 1],
            formatter: v => {
              return `${v}年`;
            }
          },
          value: {
            alias: "数量",
            formatter: v => {
              console.log(v);
            }
          }
        },
        legend: {
          visible: false
        },
        label: {
          visible: true,
          type: "line"
        },
        animation: {
          appear: {
            animation: "clipingWithData"
          }
        },
        smooth: true
      });

      linePlot.render();
      // });
    }
  },
  mounted() {
    this.init();
  }
};
</script>

<style lang="scss" scoped>
</style>