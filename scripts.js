import dayjs from "https://unpkg.com/dayjs@1.11.10/esm/index.js";

const today = dayjs();
const age = dayjs("1993-11-30");
console.log(today.$y);
console.log(age.$y);
console.log((today.$y - age.$y));