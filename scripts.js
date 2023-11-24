import dayjs from "https://unpkg.com/dayjs@1.11.10/esm/index.js";


const calcuateBtn = document.querySelector(".js-calculate");
const userInput = document.querySelector('.js-date-input');
const showResult = document.querySelector(".js-result");

const today = dayjs();
userInput.max = dayjs().format("YYYY-MM-D");

calcuateBtn.addEventListener("click", () => {
  calculateAge(userInput.value);
})

userInput.addEventListener("keydown",
  (event) => {
    if (event.key === "Enter") {
      calculateAge(userInput.value);
    }
  })

function calculateAge(userDate) {

  const d = userDate;

  let year = today.$y - dayjs(d).$y;
  let month = today.$M - dayjs(d).$M;
  let day = today.$D - dayjs(d).$D;

  if (year < 0) {
    showResult.innerHTML = month;
  } else if (month > 0) {
    console.log(year);
  } else if (month === 0 && day >= 0) {
    showResult.innerHTML = year;
  }
  else {
    year--;
    if (month <= 0)
      if (day > 0) month = 12 + month;
      else month = 11 - month;
  }
  if (day < 0) {
    day = findDaysofMonth() + day;
    month--;
  }

  if (year < 0) {
    showResult.innerHTML = "Invalid Date"
  }
  else {
    showResult.innerHTML = `Your age is <span>${year}</span> years, <span>${month}</span> months and <span>${day}</span> days`;
  }
}



function findDaysofMonth() {
  const date = userInput.value;
  return dayjs(date).daysInMonth();
}




