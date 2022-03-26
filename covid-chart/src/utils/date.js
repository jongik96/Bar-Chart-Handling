function getByMonth(data) {
  // 해당 기간동안 월(month) 수 구하기
  let months = new Array();
  for (let i = 0; i < data.length; i++) {
    months[i] = data[i].일자.substr(0, 7); //.replace("-", "");
  }
  const set = new Set(months);
  months = [...set];
  // console.log(months);
  // 월 단위로 나뉘어 담아질 배열
  let divideMonth = new Array();
  for (let i = 0; i < months.length; i++) {
    divideMonth[i] = {
      month: "",
      testCount: [], // 일 별 검사 수
      testDay: [], // 일자
    };
  }
  for (let i = 0; i < data.length; i++) {
    for (let j = 0; j < months.length; j++) {
      divideMonth[j].month = months[j];
      if (data[i].일자.includes(months[j])) {
        divideMonth[j].testDay.push(data[i].일자);
        divideMonth[j].testCount.push(data[i].검사건수);
      }
    }
  }
  let byMonth = {
    month: months,
    monthSum: [],
  };
  for (let i = 0; i < divideMonth.length; i++) {
    let sum = 0;
    for (let j = 0; j < divideMonth[i].testCount.length; j++) {
      sum += divideMonth[i].testCount[i];
    }
    divideMonth[i].monthSum = sum;
    byMonth.monthSum.push(sum);
  }

  let finalData = {
    divideMonth: divideMonth,
    byMonth: byMonth,
  };

  // console.log(finalData);
  return finalData;
}

// dd 만 뽑아내기
function getDate(yyyymmdd) {
  let date = new Array();
  console.log(yyyymmdd);
  for (let i = 0; i < yyyymmdd.length; i++) {
    date[i] = yyyymmdd[i].slice(8);
  }
  console.log(date);
  return date;
}

export { getByMonth, getDate };
