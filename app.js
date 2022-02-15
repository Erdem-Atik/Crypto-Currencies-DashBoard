const apikey = "aa2569959bab4e4bad46da2002dff41d";
const currencies = document.querySelector(".currencies");
const btn = document.querySelector(".curbutton");
const filter = document.querySelector(".filter-currencies");

const curexpress = function (cur) {
  const htmlMarkup = `<li class="currency">${cur}</li>`;
  currencies.innerHTML = "";
  currencies.insertAdjacentHTML("afterbegin", htmlMarkup);
};

const selectCur = function (rate) {
  rate.forEach((x, y) => {
    const markup = `
    <option value="${y}: ${1 / x} USD">${y}</option>
  `;
    filter.insertAdjacentHTML("beforeend", markup);
  });
};

const currencyFreak = async function () {
  const res = await fetch(
    `https://api.currencyfreaks.com/latest?apikey=${apikey}`
  );
  const rep = await res.json();
  return rep;
};

currencyFreak().then((rslt) => {
  const { base: b, date: initdate, rates: rates } = rslt;
  const converted = new Map(Object.entries(rates).sort()); // search more
  selectCur(converted);
  filter.addEventListener("click", function (e) {
    let val = e.target.value;
    curexpress(val);
  });
});
