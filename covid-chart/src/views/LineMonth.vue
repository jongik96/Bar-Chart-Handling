<template>
  <div>
    <h3>월별 검사건수</h3>
    <canvas id="myChart" style="width: 400; height: 300px"></canvas>
  </div>
</template>

<script setup>
import Chart from "chart.js";
import { onMounted } from "vue";
import { useStore } from "vuex";
const store = useStore();
import { useRouter } from "vue-router";
const router = useRouter();

const month = store.state.month;
const monthSum = store.state.monthSum;

onMounted(() => {
  let ctx = document.getElementById("myChart");
  console.log(myChart);
  let myChart = new Chart(ctx, {
    type: "line",
    data: {
      labels: month,
      datasets: [
        {
          lineTension: 0,
          label: "월 별 검사 건 수",
          data: monthSum,
          backgroundColor: "rgba(255, 0, 0, 0.8)",
          borderColor: "rgba(255,0,0,0.8)",
          fill: false,
        },
      ],
    },
    options: {
      animation: {
        duration: 1500,
      },
      scales: {
        yAxes: [
          {
            ticks: {
              beginAtZero: true,
            },
          },
        ],
      },
      // events: ["click"],
      onClick: function (e) {
        console.log(e.target.__object__);
      },
    },
  });
});
const goMonth = (data) => {
  // console.log(data);
  router.push({ name: "LineByDay", params: { month: data } });
};
console.log(goMonth);
</script>

<style></style>
