const goal = new Date("2023-10-7 10:00:00");
let count;

function countDown(goal) {
  const now = new Date();
  const left = goal.getTime() - now.getTime();
  if (left > 0) {
    const sec = Math.floor(left / 1000) % 60;

    const min = Math.floor(left / 1000 / 60) % 60;
    const hours = Math.floor(left / 1000 / 60 / 60) % 24;
    const days = Math.floor(left / 1000 / 60 / 60 / 24);
    count = {
      days: days,
      hours: hours,
      min: min,
      sec: sec
    };
  } else {
    count = {
      days: 0,
      hours: 0,
      min: 0,
      sec: 0
    };
  }
  return count;
}
//Timer処理
function setCountDown() {
  let counter = countDown(goal);
  let end = 0;
  const countDownTimer = setTimeout(setCountDown, 1000);

  for (let item in counter) {
    document.getElementById(item).textContent = counter[item];
    end += parseInt(counter[item]);
  }
  if (end === 0) {
    clearTimeout(countDownTimer);
  }
}

setCountDown();
