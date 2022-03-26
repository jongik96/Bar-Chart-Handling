<template>
  <div>
    <h3>{{ props.month }} 검사건수</h3>
    <canvas id="myChart" style="width: 400; height: 300px"></canvas>
  </div>
</template>

<script setup>
import { getDate } from "../utils/date.js";
import Chart from "chart.js";
import { defineProps, onMounted } from "vue";
const props = defineProps({
  month: String,
});
console.log(props.month);
import { useStore } from "vuex";
const store = useStore();
// console.log(props);
let data = store.state.day;
// let testCount, testDay;
let testCount = store.state.testCount;
let testDay = store.state.testDay;
for (let i = 0; i < data.length; i++) {
  if (data[i].month == props.month) {
    testCount = data[i].testCount;
    testDay = data[i].testDay;
    store.state.testCount = testCount;
    store.state.testDay = testDay;
    // console.log(testCount, testDay);
  }
}

onMounted(() => {
  let ctx = document.getElementById("myChart");
  console.log(myChart);
  let myChart = new Chart(ctx, {
    type: "line",
    data: {
      labels: getDate(testDay),
      datasets: [
        {
          label: "일 별 검사 수",
          data: testCount,
          backgroundColor: "rgba(255, 0, 0, 0.8)",
        },
      ],
    },
    options: {
      scales: {
        yAxes: [
          {
            ticks: {
              beginAtZero: true,
            },
          },
        ],
      },
    },
  });
});
</script>

<style></style>
