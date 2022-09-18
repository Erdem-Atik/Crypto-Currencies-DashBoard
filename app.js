const apikey = "aa2569959bab4e4bad46da2002dff41d"; // aa2569959bab4e4bad46da2002dff41d
const currencies = document.querySelector(".currencies");
const btn = document.querySelector(".curbutton");
const filter = document.querySelector(".filter-currencies");
const pcount = document.querySelector("#pagecounter");

const curMarker = function (cur) {
  const htmlMarkup = `<li class="currency">${cur}</li>`;
  currencies.innerHTML = "";
  currencies.insertAdjacentHTML("afterbegin", htmlMarkup);
};

const selectCur = function (rate) {
  rate.forEach((x, y) => {
    const markup = `
    <option value="${y}: ${(1 / x).toFixed(4)} USD">${y}</option>
  `;
    filter.insertAdjacentHTML("beforeend", markup);
  });
};

//until reqcount will be 100 until end of semptember, then it will be 1000 for each month
const reqCounter = function () {
  const d = new Date();
  let curMonth = d.getMonth();
  let curYear = d.getFullYear();

  let startCount;
  if (curYear === 2022 && curMonth === 8) {
    startCount = 100;
  } else {
    startCount = 0;
  }
};

reqCounter();

const reqPercentage = function () {
  const usageLimit = 1000;
  let strtCount = +localStorage.getItem("sCount");
  console.log(strtCount);
  strtCount += 1;
  console.log(strtCount);
  localStorage.setItem("sCount", JSON.stringify(strtCount));
  console.log(`%${Math.round((strtCount / usageLimit) * 100)}`);
  const perc = `API USAGE(MONTLY): %$${Math.round(
    (strtCount / usageLimit) * 100
  )}`;
  localStorage;

  // save on the local memory
  curMarker(perc);
};

reqPercentage();

// const currencyFreak = async function () {
//   const res = await fetch(
//     `https://api.currencyfreaks.com/latest?apikey=${apikey}`
//   );
//   console.log(res);
//   if (res.status === 412 || !res.ok)
//     throw new Error(
//       "probably exceeded the limit of  requests for my API subscribed plan or the API has gone. I am using free packet :)"
//     );

//     reqCount += 1;

//   const rep = await res.json();
//   return rep;
// };

// currencyFreak()
//   .then((rslt) => {
//     const { base: b, date: initdate, rates: rates } = rslt;
//     const converted = new Map(Object.entries(rates).sort()); // search more
//     selectCur(converted);
//     filter.addEventListener("click", function (e) {
//       let val = e.target.value;
//       curMarker(val);
//     });
//   })
//   .catch(function (error) {
//     alert(error);
//   });
