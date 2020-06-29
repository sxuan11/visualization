<template>
  <div>
    <div id="c1"></div>
  </div>
</template>

<script>
import { Bar } from "@antv/g2plot";
export default {
  data() {
    return {
      gdp: require("./gdp.json"),
      data: [
        { 地区: "华东", 销售额: 4684506.442 },
        { 地区: "中南", 销售额: 4137415.0929999948 },
        { 地区: "东北", 销售额: 2681567.469000001 },
        { 地区: "华北", 销售额: 2447301.017000004 },
        { 地区: "西南", 销售额: 1303124.508000002 },
        { 地区: "西北", 销售额: 815039.5959999998 }
      ]
    };
  },
  methods: {
    init() {
      const barPlot = new Bar(document.getElementById("c1"), {
        title: {
          visible: true,
          text: "基础条形图"
        },
        forceFit: true,
        data: this.data,
        xField: "销售额",
        yField: "地区",
        animation: {
          update: {
            animation: "clipingWithData"
          }
        },
        label: {
          visible: true,
          formatter: v => Math.round(v / 10000) + "万"
        }
      });

      barPlot.render();
      setTimeout(() => {
        this.$set(this.data, 0, { 地区: "华东", 销售额: 24684506.442 });
        // barPlot.changeData(this.data);
        // barPlot.repaint();
        plot.updateConfig({
          width: 500,
          height: 600,
          legend: {
            visible: false
          }
        });

        plot.render();
      }, 1000);
    }
  },
  mounted() {
    this.init();
  }
};
</script>

<style scoped>
</style>