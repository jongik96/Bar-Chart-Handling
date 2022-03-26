import { createStore } from "vuex";
import { fetchTestNumber } from "../api/index.js";
import { getByMonth } from "../utils/date.js";

export default createStore({
  state: {
    testDay: [],
    testCount: [],
    day: [],
    monthSum: [],
    month: [],
  },
  mutations: {
    SET_DAY(state, day) {
      state.day = day;
    },
    SET_MONTHSUM(state, monthSum) {
      state.monthSum = monthSum;
    },
    SET_MONTH(state, month) {
      state.month = month;
    },
  },
  actions: {
    async FETCH_TEST({ commit }) {
      let response = await fetchTestNumber();
      let finalData = getByMonth(response.data.data);
      commit("SET_MONTH", finalData.byMonth.month);
      commit("SET_MONTHSUM", finalData.byMonth.monthSum);
      commit("SET_DAY", finalData.divideMonth);
    },
  },
});
