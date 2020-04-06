const data = [{
    principal: 2500,
    time: 1.8
  },
  {
    principal: 1000,
    time: 5
  },
  {
    principal: 3000,
    time: 1
  },
  {
    principal: 2000,
    time: 3
  }
];


const interestCalculator = arr => {
  //parameters
  let rate;
  let interest;
  const interestData = [];
  //To determine the rate
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].principal >= 2500 && arr[i].time > 1 && arr[i].time < 3) {
      let newData = {};
      rate = 3;
      interest = (arr[i].principal * rate * arr[i].time) / 100;
      //'principal', 'rate', 'time' and 'interest'
      newData.principal = arr[i].principal;
      newData.rate = rate;
      newData.time = arr[i].time;
      newData.interest = interest;
      interestData.push(newData);

    } else if (arr[i].principal >= 2500 && arr[i].time >= 3) {
      let newData = {};
      rate = 4;
      iinterest = (arr[i].principal * rate * arr[i].time) / 100;
      //'principal', 'rate', 'time' and 'interest'
      newData.principal = arr[i].principal;
      newData.rate = rate;
      newData.time = arr[i].time;
      newData.interest = interest;
      interestData.push(newData);

    } else if (arr[i].principal < 2500 || arr[i].time <= 1) {

      let newData = {};
      rate = 2;
      interest = (arr[i].principal * rate * arr[i].time) / 100;
      //'principal', 'rate', 'time' and 'interest'
      newData.principal = arr[i].principal;
      newData.rate = rate;
      newData.time = arr[i].time;
      newData.interest = interest;
      interestData.push(newData);

    } else {
      let newData = {};
      rate = 1;
      interest = (arr[i].principal * rate * arr[i].time) / 100;
      //'principal', 'rate', 'time' and 'interest'
      newData.principal = arr[i].principal;
      newData.rate = rate;
      newData.time = arr[i].time;
      newData.interest = interest;
      interestData.push(newData);
    }
  }

  return interestData;
}

console.log(interestCalculator(data));