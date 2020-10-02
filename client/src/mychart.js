const container = document.querySelector("#container");

let cryptoData,
  displayData,
  lastIndexDisplayed = 5;
const renderCryptos = (arr) => {
  arr.forEach((obj, i) => {
    const fragment = new DocumentFragment();
    const column = document.createElement("div");
    column.classList.add("column");

    const callout = document.createElement("div");
    callout.classList.add("callout");

    const canvas = document.createElement("canvas");
    const canvasId = `canvas-${i}`;
    canvas.setAttribute("id", canvasId);
    canvas.setAttribute("width", "400");
    canvas.setAttribute("height", "370");

    const name = document.createElement("h3");
    name.innerText = obj.name;

    const val = document.createElement("p");
    val.classList.add("lead");
    val.innerText = `$${obj.priceUsd.toFixed(2)}`;

    const deleteBtn = document.createElement("button");
    // deleteBtn.classList.add("button");
    // deleteBtn.setAttribute("data-index", i);
    // deleteBtn.innerText = "Delete";
    callout.appendChild(canvas);
    callout.appendChild(name);
    callout.appendChild(val);
    callout.appendChild(deleteBtn);
    column.appendChild(callout);
    fragment.appendChild(column);
    container.appendChild(fragment);

    const ctx = document.getElementById(canvasId);
    Chart.defaults.global.defaultFontColor = "white";
    const barChartData = {
      labels: ["Percentage change within 24 hours"],
      datasets: [
        {
          label: "changePercent24Hr",
          borderWidth: 1,
          data: [obj.changePercent24Hr],
          backgroundColor: ["lightgray"],
        },
      ],
    };
    const chart = new Chart(ctx, {
      type: "bar",
      data: barChartData,
      options: {
        responsive: true,
        legend: {
          display: false,
        },
        title: {
          display: true,
          text: "Revenge of the Crypto!",
        },
      },
    });
  });
};

fetch("/api/cryptos")
  .then((response) => response.json())
  .then((data) => {
    cryptoData = data;
    displayData = data.slice(0, 6);
    renderCryptos(displayData);
  })
  .catch((err) => {
    console.log(err);
  });
