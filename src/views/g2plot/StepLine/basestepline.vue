<template>
  <div>
    <div id="s1"></div>
  </div>
</template>

<script>
import { StepLine } from "@antv/g2plot";
export default {
  data() {
    return {
      sale: require("./sale.json")
    };
  },
  methods: {
    init() {
      const step = new StepLine(document.getElementById("s1"), {
        title: {
          visible: true,
          text: "为阶梯图添加缩略轴交互"
        },
        data: this.sale,
        xField: "城市",
        meta: {
          城市: {
            formatter: v => {
              return `${v}市`;
            }
          }
        },
        yField: "销售额",
        xAxis: {
          visible: true,
          label: {
            visible: true,
            autoHide: true
          }
        },
        interactions: [
          {
            type: "slider",
            cfg: {
              start: 0.1,
              end: 0.2
            }
          }
        ],
        animation: {
          appear: {
            animation: "clipingWithData",
            easing:'ease-in'
          }
        },
      });
      step.render();
    }
  },
  mounted() {
    this.init();
  }
};
</script>

<style scoped>
</style>