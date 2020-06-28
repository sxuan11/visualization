<template>
  <div>
    <div id="c1"></div>
  </div>
</template>

<script>
export default {
  mounted() {
    this.initComponent();
  },
  data() {
    return {
      msg: "",
      chart: null,
      data: [
        { genre: "Sports", sold: 275 },
        { genre: "Strategy", sold: 115 },
        { genre: "Action", sold: 120 },
        { genre: "Shooter", sold: 350 },
        { genre: "Other", sold: 150 }
      ]
    };
  },
  methods: {
    initComponent() {
      const chart = new this.$G2.Chart({
        container: "c1",
        width: 600,
        height: 300
      });
      chart.source(this.data);
      chart
        .interval()
        .position("genre*sold")
        .color("genre");
      this.chart = chart;
      this.chart.render();
    }
  }
};
</script>