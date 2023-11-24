import dayjs from "https://unpkg.com/dayjs@1.11.10/esm/index.js";


const calcuateBtn = document.querySelector(".js-calculate");
const userInput = document.querySelector('.js-date-input');
const showResult = document.querySelector(".js-result");

const today = dayjs();
userInput.max = dayjs().format("YYYY-MM-D");

calcuateBtn.addEventListener("click", () => {
  calculateAge(userInput.value);
})

function calculateAge(userDate) {

  const userData = {
    day: 0,
    month: 0,
    year: 0
  };

  const d = userDate;
  userData.day = dayjs(d).$D;
  userData.month = dayjs(d).$M;
  userData.year = dayjs(d).$y;

  let day = today.$D - userData.day;
  let month = (today.$M - userData.month);
  let year = today.$y - userData.year;

  if (today.$D <= userData.day) {
    month--;
    day += findDaysofMonth();
  }
  if (today.$M <= userData.month) {
    year--;
    month += 12;
  }
  if (today.$y > userData.year) {
    showResult.innerHTML = "Invalid Date";
  }

  showResult.innerHTML = `Your age is ${year} years, ${month} months and ${day} days`
}


function findDaysofMonth() {
  const date = userInput.value;
  return dayjs(date).daysInMonth();
}




