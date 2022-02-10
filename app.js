const apikey = "aa2569959bab4e4bad46da2002dff41d";
const currencies = document.querySelector(".currencies");
const btn = document.querySelector(".curbutton");
const filter = document.querySelector(".filter-currencies");

const curexpress = function (cur) {
  const markup = `<li class="currency"> ${cur} </li>`;
  currencies.innerHTML = "";
  currencies.insertAdjacentHTML("afterbegin", markup);
};

const currencyFreak = async function () {
  const res = await fetch(
    `https://api.currencyfreaks.com/latest?apikey=${apikey}`
  );
  const rep = await res.json();
  return rep;
};

currencyFreak().then((rslt) => {
  // console.log(rslt);
  const { base: b, date: initdate, rates: rates } = rslt;
  console.log(rates);
  btn.addEventListener("click", function () {
    let filterCur = filter.value;
    console.log(filterCur);
    console.log(rates.ETH);
    console.log(rates[filterCur]);
    curexpress(rates[filterCur]);
  });
});

// const drawGraphic = function (cur) {
//   $(document).ready(function () {
//     // function $(x) {return document.getElementById(x);}
//     var graph = $("#graph"),
//       c = graph[0].getContext("2d");

//     c.lineWidth = 2;
//     c.strokeStyle = "#333";
//     c.font = "italic 8pt sans-serif";
//     c.textAlign = "center";

//     c.beginPath();
//     c.moveTo(xPadding, 0);
//     c.lineTo(xPadding, graph.height() - yPadding);
//     c.lineTo(graph.width(), graph.height() - yPadding);
//     c.stroke();
//   });
// };
