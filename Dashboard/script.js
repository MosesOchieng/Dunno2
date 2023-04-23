const lineOptions = {
  responsive: false,
  maintainAspectRatio: false,
  borderWidth: 2,
  elements: {
    point: {
      radius: 0,
    },
    line: {
      fill: true,
    },
  },
  scales: {
    x: {
      display: false,
    },
    y: {
      display: false,
    },
  },
  plugins: {
    legend: {
      display: false,
    },
    tooltip: {
      enabled: false,
    },
  },
};

const agents = [
  {
    id: 0,
    "Agent Name": "Aiden Rodriguez",
    "Recruitment Length": "4 years 5 months",
    "Recruitment Date": "September 2017",
    Rank: 15,
    Spend: "$56,935",
    "Spend Percent": "7.4%",
  },
  {
    id: 1,
    "Agent Name": "Alexa Wong",
    "Recruitment Length": "2 years 11 months",
    "Recruitment Date": "December 2019",
    Rank: 3,
    Spend: "$34,206",
    "Spend Percent": "4.5%",
  },
  {
    id: 2,
    "Agent Name": "Amanda Kim",
    "Recruitment Length": "1 year 10 months",
    "Recruitment Date": "September 2020",
    Rank: 9,
    Spend: "$44,782",
    "Spend Percent": "5.9%",
  },
  {
    id: 3,
    "Agent Name": "Benjamin Thompson",
    "Recruitment Length": "3 years 1 month",
    "Recruitment Date": "November 2017",
    Rank: 11,
    Spend: "$62,938",
    "Spend Percent": "8.2%",
  },
  {
    id: 4,
    "Agent Name": "Bryant Johnson",
    "Recruitment Length": "5 years 6 months",
    "Recruitment Date": "May 2017",
    Rank: 16,
    Spend: "$58,749",
    "Spend Percent": "7.7%",
  },
  {
    id: 5,
    "Agent Name": "Caitlyn Williams",
    "Recruitment Length": "1 year 4 months",
    "Recruitment Date": "September 2021",
    Rank: 5,
    Spend: "$40,000",
    "Spend Percent": "5.2%",
  },
  {
    id: 6,
    "Agent Name": "Cameron Davis",
    "Recruitment Length": "4 years 9 months",
    "Recruitment Date": "January 2018",
    Rank: 10,
    Spend: "$47,399",
    "Spend Percent": "6.2%",
  },
  {
    id: 7,
    "Agent Name": "Christopher Smith",
    "Recruitment Length": "2 years 8 months",
    "Recruitment Date": "January 2020",
    Rank: 4,
    Spend: "$33,678",
    "Spend Percent": "4.4%",
  },
  {
    id: 8,
    "Agent Name": "David Anderson",
    "Recruitment Length": "6 years 8 months",
    "Recruitment Date": "August 2015",
    Rank: 7,
    Spend: "$79,056",
    "Spend Percent": "10.4%",
  },
  {
    id: 9,
    "Agent Name": "Elizabeth Thompson",
    "Recruitment Length": "3 years 2 months",
    "Recruitment Date": "November 2017",
    Rank: 13,
    Spend: "$63,847",
    "Spend Percent": "8.3%",
  },
  {
    id: 10,
    "Agent Name": "Emily Davis",
    "Recruitment Length": "4 years 5 months",
    "Recruitment Date": "September 2017",
    Rank: 15,
    Spend: "$56,935",
    "Spend Percent": "7.4%",
  },
  {
    id: 11,
    "Agent Name": "James Anderson",
    "Recruitment Length": "6 years 1 month",
    "Recruitment Date": "December 2015",
    Rank: 8,
    Spend: "$75,123",
    "Spend Percent": "9.8%",
  },
  {
    id: 12,
    "Agent Name": "Jennifer Williams",
    "Recruitment Length": "1 year 7 months",
    "Recruitment Date": "February 2021",
    Rank: 6,
    Spend: "$40,921",
    "Spend Percent": "5.3%",
  },
  {
    id: 13,
    "Agent Name": "Jessica Thompson",
    "Recruitment Length": "3 years 1 month",
    "Recruitment Date": "November 2017",
    Rank: 11,
    Spend: "$62,938",
    "Spend Percent": "8.2%",
  },
  {
    id: 14,
    "Agent Name": "Jessica Williams",
    "Recruitment Length": "1 year 10 months",
    "Recruitment Date": "September 2020",
    Rank: 9,
    Spend: "$44,782",
    "Spend Percent": "5.9%",
  },
  {
    id: 15,
    "Agent Name": "John Smith",
    "Recruitment Length": "2 years 11 months",
    "Recruitment Date": "December 2019",
    Rank: 3,
    Spend: "$34,206",
    "Spend Percent": "4.5%",
  },
  {
    id: 16,
    "Agent Name": "Karen Thompson",
    "Recruitment Length": "3 years 3 months",
    "Recruitment Date": "October 2017",
    Rank: 18,
    Spend: "$66,942",
    "Spend Percent": "8.8%",
  },
  {
    id: 17,
    "Agent Name": "Lauren Davis",
    "Recruitment Length": "4 years 9 months",
    "Recruitment Date": "January 2018",
    Rank: 10,
    Spend: "$47,399",
    "Spend Percent": "6.2%",
  },
  {
    id: 18,
    "Agent Name": "Mark Johnson",
    "Recruitment Length": "5 years 6 months",
    "Recruitment Date": "May 2017",
    Rank: 16,
    Spend: "$58,749",
    "Spend Percent": "7.7%",
  },
  {
    id: 19,
    "Agent Name": "Michael Smith",
    "Recruitment Length": "2 years 10 months",
    "Recruitment Date": "January 2020",
    Rank: 2,
    Spend: "$32,845",
    "Spend Percent": "4.3%",
  },
  {
    id: 20,
    "Agent Name": "Nicole Davis",
    "Recruitment Length": "4 years 3 months",
    "Recruitment Date": "October 2017",
    Rank: 20,
    Spend: "$65,344",
    "Spend Percent": "8.6%",
  },
  {
    id: 21,
    "Agent Name": "Rachel Williams",
    "Recruitment Length": "1 year 4 months",
    "Recruitment Date": "September 2021",
    Rank: 5,
    Spend: "$40,000",
    "Spend Percent": "5.2%",
  },
  {
    id: 22,
    "Agent Name": "Robert Anderson",
    "Recruitment Length": "6 years 11 months",
    "Recruitment Date": "January 2016",
    Rank: 12,
    Spend: "$71,657",
    "Spend Percent": "9.4%",
  },
];

// Call Volumes chart
const callVolumesCTX = document.getElementById("callVolumes");
const callVolumesChart = new Chart(callVolumesCTX, {
  type: "line",
  data: {
    datasets: [
      {
        data: generateData(200, 400),
        cubicInterpolationMode: "monotone",
        label: "Calls Received Daily",
        borderColor: "#ab3c4f",
        backgroundColor: "#ab3c4f4a",
      },
    ],
  },
  options: lineOptions,
});

// Average Speed of Answer chart
const ASACTX = document.getElementById("ASA");
const ASAChart = new Chart(ASACTX, {
  type: "line",
  data: {
    datasets: [
      {
        data: generateData(200, 400),
        cubicInterpolationMode: "monotone",
        label: "Calls Received Daily",
        borderColor: "#ab3c4f",
        backgroundColor: "#ab3c4f4a",
      },
    ],
  },
  options: lineOptions,
});

// Average Handle Time chart
const AHTCTX = document.getElementById("AHT");
const AHTChart = new Chart(AHTCTX, {
  type: "line",
  data: {
    datasets: [
      {
        data: generateData(200, 400),
        cubicInterpolationMode: "monotone",
        label: "Calls Received Daily",
        borderColor: "#d58b48",
        backgroundColor: "#d58b484a",
      },
    ],
  },
  options: lineOptions,
});

// Call Abandonment chart
const callAbandonmentCTX = document.getElementById("callAbandonment");
const callAbandonmentChart = new Chart(callAbandonmentCTX, {
  type: "line",
  data: {
    datasets: [
      {
        data: generateData(200, 400),
        cubicInterpolationMode: "monotone",
        label: "Calls Received Daily",
        borderColor: "#d58b48",
        backgroundColor: "#d58b484a",
      },
    ],
  },
  options: lineOptions,
});

// Customer Recovery Cost chart
const recoveryCostCTX = document.getElementById("recoveryCost");
const recoveryCostChart = new Chart(recoveryCostCTX, {
  type: "bar",
  data: {
    datasets: [
      {
        data: generateRecoveryCostData(4000, 87500),
        borderWidth: 1,
        borderColor: "#ab3c4f4a",
        backgroundColor: "#ab3c4f",
      },
    ],
  },
  options: {
    maxBarThickness: 25,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
    },
    scales: {
      xAxis: {
        display: true,
        grid: {
          display: false,
        },
        ticks: {
          color: "#8a8ca4",
          font: {
            size: 10,
          },
        },
      },
      yAxis: {
        display: true,
        grid: {
          color: "#2c2e3e",
          tickLength: 1,
        },
        ticks: {
          callback: function (value, index, ticks) {
            let formatted = value.toLocaleString("en-US", {
              notation: "compact",
              compactDisplay: "short",
            });

            formatted = "$" + formatted;
            return formatted;
          },
          stepSize: 25000,
          color: "#8a8ca4",
          font: {
            size: 9,
          },
        },
      },
    },
  },
});

// Call Origin Map chart
anychart.onDocumentLoad(function () {
  // create an instance of a pie chart
  let data = generateMapData();

  // create map chart
  let map = anychart.map();

  //colors
  map
    .unboundRegions()
    .enabled(true)
    .fill("var(--map-landmass)")
    .stroke("black");

  // set geodata using https://cdn.anychart.com/geodata/2.1.1/countries/australia/australia.js
  map.geoData(anychart.maps.australia);

  // create bubble series
  let series = map.bubble(data);

  //set chart background
  let background = map.background();
  background.fill("#00000000");

  // changes the fill and hoverFill colors
  series.fill("#90caf9");
  series.hovered().fill("var(--chart-secondary)");
  series.labels().fontColor("#0277bd");
  series.hovered().labels().fontColor("#01579b");

  // changes the stroke and hoverStroke colors
  series.stroke("#333");
  series.fill("var(--chart-primary");
  series.hovered().stroke("#222");

  // sets the select colors
  series.selected().stroke("var(--chart-secondary)");
  series.selected().fill("var(--chart-secondary)");
  series.selected().labels().fontColor("#263238");

  // set the size-range of the bubble
  map.maxBubbleSize(18);
  map.minBubbleSize(4);

  // set tooltip options
  let tooltip = map.tooltip();
  tooltip.format(function () {
    return "Calls: " + this.size;
  });

  // set container id for the chart
  map.container("map");

  // initiate chart drawing
  map.draw();
  goOnGit();
});

// Call Type chart
const callTypeCTX = document.getElementById("callType");
const callTypeChart = new Chart(callTypeCTX, {
  type: "bar",
  data: {
    labels: [
      "Complaints",
      "Product Queries",
      "Sign-Ups",
      "Sales Calls",
      "Compliments",
    ],
    datasets: [
      {
        axis: "y",
        data: [250, 220, 180, 150, 25],
        backgroundColor: "#ab3c4f",
      },
    ],
  },
  options: {
    maxBarThickness: "20",
    indexAxis: "y",
    scales: {
      xAxis: {
        grid: {
          display: false,
        },
        ticks: {
          color: "#8a8ca4",
          font: {
            size: 10,
          },
        },
      },
      yAxis: {
        grid: {
          display: true,
          color: "#2c2e3e",
        },
        ticks: {
          color: "#8a8ca4",
          font: {
            size: 11,
          },
        },
      },
    },
    plugins: {
      legend: {
        display: false,
      },
    },
  },
});

// Social Media chart
const socialMediaCTX = document.getElementById("socialMedia");
const socialMediaChart = new Chart(socialMediaCTX, {
  type: "line",
  data: {
    labels: getMonths(),
    datasets: [
      {
        label: "Twitter",
        data: generateMonthlyData(1000),
        fill: false,
        borderColor: "#1DA1F2",
        tension: 0.1,
      },
      {
        label: "Facebook",
        data: generateMonthlyData(2500),
        fill: false,
        borderColor: "#4267B2",
        tension: 0.1,
      },
      {
        label: "Instagram",
        data: generateMonthlyData(1750),
        fill: false,
        borderColor: "#C13584",
        tension: 0.1,
      },
      {
        label: "YouTube",
        data: generateMonthlyData(750),
        fill: false,
        borderColor: "#FF0000",
        tension: 0.1,
      },
    ],
  },
  options: {
    plugins: {
      legend: {
        labels: {
          usePointStyle: true,
          pointStyle: "line",
          color: "#8a8ca4",
        },
      },
    },
    scales: {
      y: {
        grid: {
          display: false,
        },
        ticks: {
          color: "#8a8ca4",
          font: {
            size: 10,
          },
        },
      },
      x: {
        grid: {
          color: "#2c2e3e",
        },
        ticks: {
          color: "#8a8ca4",
        },
      },
    },
  },
});

// Agent Monthly Spend chart
const agentMonthlySpendCTX = document.getElementById("agentMonthlySpend");
const agentMonthlySpendChart = new Chart(agentMonthlySpendCTX, {
  type: "bar",
  data: {
    labels: getMonths(),
    datasets: [
      {
        label: "Monthly Spend",
        data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        backgroundColor: "rgba(255, 99, 132, 0.2)",
        borderColor: "rgba(255, 99, 132, 1)",
        borderWidth: 1,
      },
    ],
  },
  options: {
    maxBarThickness: 18,
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
    },
    scales: {
      y: {
        display: false,
      },
      x: {
        grid: {
          display: false,
        },
        ticks: {
          color: "#8a8ca4",
        },
      },
    },
  },
});

// Agent Closure by Category chart
const closureCategoriesCTX = document.getElementById("closureCategories");
const closureCategoriesChart = new Chart(closureCategoriesCTX, {
  type: "bar",
  data: {
    labels: [
      "Complaints",
      "Compliments",
      "Product Queries",
      "Sales Calls",
      "Sign-ups",
    ],
    datasets: [
      {
        data: [[], [], [], [], []],
        backgroundColor: "#ab3c4f",
      },
    ],
  },
  options: {
    maxBarThickness: 75,
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
    },
    scales: {
      y: {
        grid: {
          display: false,
        },
        ticks: {
          color: "#8a8ca4",
        },
      },
      x: {
        ticks: {
          color: "#8a8ca4",
        },
      },
    },
  },
});

//UTILS
function generateCurve(min, max) {
  let curve = [];
  for (let i = 0; i < 12; i++) {
    let x = i / 11;
    let y = (Math.sin(x * Math.PI) + 1) / 2;
    let value = Math.round(y * (max - min) + min);
    curve.push(value);
  }
  return curve;
}

function getDates() {
  let currentDate = new Date();
  let dateValue = currentDate.valueOf();
  let dayLength = 86400000; // Number of milliseconds in one day
  let formattedDates = [];

  for (let i = 0; i < 30; i++) {
    let date = new Date(dateValue);
    let day = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();
    formattedDates.unshift(`${day}-${month}-${year}`);
    dateValue -= dayLength;
  }

  return formattedDates;
}

function generateData(min, max) {
  let dates = getDates();
  let data = [];

  for (let i = 0; i < dates.length; i++) {
    let entry = {
      x: dates[i],
      y: Math.floor(Math.random() * (max - min + 1) + min),
    };
    data.push(entry);
  }
  return data;
}

function generateMonthlyData(min) {
  let data = [];
  data.push(min);

  for (let i = 1; i < 12; i++) {
    let multiplier = 0.15 + Math.random() * 0.2;
    let nextVal = data[i - 1] * (1 + multiplier);
    let int = Math.floor(nextVal);
    data.push(int);
  }

  return data;
}

function generateRecoveryCostData(min, max) {
  let data = [];
  let months = getMonths();

  for (let i = 0; i < months.length; i++) {
    let entry = {
      x: months[i],
      y: Math.floor(Math.random() * (max - min + 1) + min),
    };
    data.push(entry);
  }
  return data;
}

function getMonths() {
  // Get the current date
  let date = new Date();

  //Define a date formatter
  let formatter = new Intl.DateTimeFormat("en-US", { month: "short" });

  //Generate  an array of the previous 12 months
  let months = Array.from({ length: 12 }, (_, i) => {
    let d = new Date(date.getFullYear(), date.getMonth() - i, 1);
    return formatter.format(d);
  });

  //Reverse the order of the months in the array
  months = months.reverse();
  return months;
}

function generateMapData() {
  //Define a constant for maximum size value
  const MAX_SIZE = 150;

  //Create an array to store randomly generated values
  let numbers = [];

  //Using a for loop, generate 7 random values and push them to the numbers array
  for (let i = 0; i < 7; i++) {
    numbers.push(Math.floor(Math.random() * MAX_SIZE));
  }

  //Create the data object required for the chart
  let data = [
    { id: "AU.NS", size: numbers[0], title: "New South Wales" },
    { id: "AU.NT", size: numbers[1], title: "Northern Territory" },
    { id: "AU.WA", size: numbers[2], title: "Western Australia" },
    { id: "AU.SA", size: numbers[3], title: "South Australia" },
    { id: "AU.VI", size: numbers[4], title: "Victoria" },
    { id: "AU.QL", size: numbers[5], title: "Queensland" },
    { id: "AU.TS", size: numbers[6], title: "Tasmania" },
  ];

  return data;
}

function goOnGit() {
  const blah = document.querySelector(".anychart-credits");
  blah.remove();
}

function resizeCharts() {
  //Define a constant height percentage
  const TOP_CHART_HEIGHT_PERCENTAGE = 0.45;
  const MID_CHART_HEIGHT_PERCENTAGE = 0.9;

  //Collect all chart canvases into a variable
  const canvases = document.querySelectorAll("canvas");

  //Loop over each chart canvas, setting the canvas' height to be relative to the size of it's parent
  canvases.forEach((canvas) => {
    if (canvas.parentElement.classList.contains("top-chart")) {
      let segmentHeight = canvas.parentElement.clientHeight;
      canvas.style.height = segmentHeight * TOP_CHART_HEIGHT_PERCENTAGE + "px";
      canvas.style.width = "100%";
    } else if (canvas.parentElement.classList.contains("mid-chart")) {
      let segmentHeight = canvas.parentElement.clientHeight;
      canvas.style.height = segmentHeight * MID_CHART_HEIGHT_PERCENTAGE + "px";
      canvas.style.width = "100%";
    }
  });
}

function resizeCharts2() {
  //Collect all chart canvases into a variable
  const canvases = document.querySelectorAll("canvas");

  canvases.forEach((canvas) => {
    let canvasID = canvas.id;
    let segmentHeight = canvas.parentElement.clientHeight;

    //Set height values approproate to each canvas element as required
    switch (canvasID) {
      case "recoveryCost":
        canvas.style.height = segmentHeight * 0.85 + "px";
        break;

      case "callType":
        canvas.style.height = segmentHeight * 0.9 + "px";
        break;

      case "agentMonthlySpend":
        canvas.style.height = segmentHeight * 0.95 + "px";
        break;

      case "callVolumes":
      case "ASA":
      case "AHT":
      case "callAbandonment":
        canvas.style.height = segmentHeight * 0.45 + "px";
        break;

      default:
        canvas.style.height = segmentHeight + "px";
    }
    //Set canvas width to 100% of container
    canvas.style.width = "100%";
  });
}

function setFontSizeDynamically() {
  //set dynamic font-size
  document.body.style.fontSize = document.body.clientHeight * 0.018 + "px";
}

function agentChartsDimensions() {
  // set agent charts section dimensions dynamically
  agentCharts.style.height = sidebar.clientHeight + "px";
  let rect = sidebar.getBoundingClientRect();
  let distanceFromLeft = rect.left;
  let sidebarWidth = rect.width;
  agentCharts.style.left = distanceFromLeft + sidebarWidth + 22 + "px";
  agentCharts.style.width = charts.clientWidth + "px";
}

function generateFivePairArrays(max) {
  let result = [];
  let current = 0;

  for (let i = 0; i < 5; i++) {
    let increment = Math.floor(Math.random() * (max - current)) + 1;
    current += increment;
    result.push([current - increment, current]);
  }

  return result;
}

//EVENT LISTENERS

window.addEventListener("resize", () => {
  resizeCharts2();
  agentChartsDimensions();
});

//SWITCH CHART PAGES

let charts = document.getElementById("mainCharts");
let agentCharts = document.getElementById("agentCharts");
let sidebar = document.getElementById("sidebar");
let sidebarIcons = document.querySelectorAll(".sidebar-icon");
let menuSwitches = [];
menuSwitches.push(sidebarIcons[0]);
menuSwitches.push(sidebarIcons[1]);

menuSwitches[0].addEventListener("click", (e) => {
  if (menuSwitches[0].classList.contains("active")) {
    console.log("active");
  } else {
    // change sidebar active icon
    menuSwitches[1].classList.remove("active");
    menuSwitches[0].classList.add("active");

    // remove hidden class from main charts
    charts.classList.remove("hidden");

    // remove active class from agent charts
    agentCharts.classList.remove("active");
  }
});

menuSwitches[1].addEventListener("click", (e) => {
  if (menuSwitches[1].classList.contains("active")) {
    console.log("active");
  } else {
    // change sidebar active icon
    menuSwitches[0].classList.remove("active");
    menuSwitches[1].classList.add("active");

    // add hidden class to main charts
    charts.classList.add("hidden");

    // add active class to agent charts
    agentCharts.classList.add("active");

    // set agent charts section dimensions dynamically
    agentChartsDimensions();
  }
});

// Agent Select Dropdown
const select = document.getElementById("agentSelect");
const agentName = document.getElementById("agentName");
const tenureValue = document.getElementById("tenureValue");
const recruitedValue = document.getElementById("recruitedValue");
const rankValue = document.getElementById("rankValue");
const spendValue = document.getElementById("spendValue");
const spendPercent = document.getElementById("spendPercent");
const progressBarContent = document.getElementById("progressBarContent");
agents.forEach(function (item) {
  let option = document.createElement("option");
  option.value = item.id;
  option.text = item["Agent Name"];
  select.add(option);
});

select.addEventListener("change", () => {
  let i = select.value;

  //Update various values on page
  agentName.innerText = agents[i]["Agent Name"];
  tenureValue.innerText = agents[i]["Recruitment Length"];
  recruitedValue.innerText = agents[i]["Recruitment Date"];
  rankValue.innerText = agents[i].Rank;
  spendValue.innerText = agents[i].Spend;
  spendPercent.innerText = agents[i]["Spend Percent"];
  progressBarContent.style.width = agents[i]["Spend Percent"];

  // Redo the Monthly Total Spend Chart
  let min = Math.floor(Math.random() * 200);
  let max = Math.floor(Math.random() * 9500);
  agentMonthlySpendChart.data.datasets[0].data = generateCurve(min, max);
  agentMonthlySpendChart.update();

  // Redo the Agent Closures by Category chart
  let closuresMin = Math.floor(Math.random() * 200);
  let closuresMax = Math.floor(Math.random() * 500);
  closureCategoriesChart.data.datasets[0].data = generateFivePairArrays(
    closuresMax - closuresMin + closuresMin
  );
  closureCategoriesChart.update();
});

resizeCharts2();

setInterval(() => {
  let recoveryCost = document.getElementById("recoveryCost");
  recoveryCost.style.height =
    recoveryCost.parentElement.clientHeight * 0.85 + "px";
}, 1000);