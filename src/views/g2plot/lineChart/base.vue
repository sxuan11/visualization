<template>
  <div>
    <div id="l1"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      year: [
        { year: "1991", value: 3 },
        { year: "1992", value: 4 },
        { year: "1993", value: 3.5 },
        { year: "1994", value: 15 },
        { year: "1995", value: 4.9 },
        { year: "1996", value: 6 },
        { year: "1997", value: 7 },
        { year: "1998", value: 9 },
        { year: "1999", value: 10 }
      ]
    };
  },
  methods: {
    init() {
      let _this = this;
      const linePlot = new this.$g2plot.Line(document.getElementById("l1"), {
        title: {
          visible: true,
          text: "曲线折线图"
        },
        description: {
          visible: true,
          text: "用平滑的曲线代替折线。"
        },
        padding: "auto",
        forceFit: true, //图表是否自适应容器宽高
        data: this.year,
        xField: "year",
        yField: "value",
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
              return `${v}个`;
            }
          }
        },
        // smooth: true,
        color: "pink",
        lineSize: 5, //设置折线宽度
        lineStyle: {
          stroke: "deeppink",
          lineWidth: "4",
          lineDash: 5,
          opacity: 0.5
        },
        smooth: false,
        label: {
          visible: true,
          type: "point",
          offsetX: 26,
          offsetY: 26,
          style: {
            fill: "rgba(0, 0, 0, 0.65)",
            stroke: "#ffffff",
            lineWidth: 2
          }
        },
        animation: {
          appear: {
            animation: "clipingWithData"
          }
        },
      });

      linePlot.render();
    }
  },
  mounted() {
    this.init();
  }
};
</script>

<style scoped>
</style>