var speedCanvas = document.getElementById("speedChart");

Chart.defaults.global.defaultFontFamily = "Gilroy";
Chart.defaults.global.defaultFontSize = 18;

var dataFirst = {
    label: "Переходы",
    data: [1, 2, 3, 4],
    fill: false,
    borderColor: '#8A0502'
};

var dataSecond = {
    label: "Регистрации",
    data: [1, 15, 3, 10],
    fill: false,
    borderColor: '#616781'
};

var dataThird = {
    label: "Кол-во игроков",
    data: [1, 4, 3, 30],
    fill: false,
    borderColor: '#6BB3E2'
};

var dataFourth = {
    label: "Кол-во пополнений",
    data: [4, 15, 5, 3],
    fill: false,
    borderColor: 'blue'
};

var speedData = {
    labels: ["27.05", "28.05", "29.05", "30.05"],
    datasets: [dataFirst, dataSecond, dataThird, dataFourth]
};

var chartOptions = {
    legend: {
        display: true,
        position: 'bottom',
        labels: {
            boxWidth: 20,
            fontColor: 'black',
        }
    }
};

var lineChart = new Chart(speedCanvas, {
    type: 'line',
    data: speedData,
    responsive: true,
    maintainAspectRatio: false,
    options: chartOptions
});




var payCanvas = document.getElementById("payCanvas");


var depositAmount = {
    label: "Переходы",
    data: [1, 2, 3, 4],
    fill: false,
    borderColor: '#8A0502'
};

var averageCompletion = {
    label: "Регистрации",
    data: [1, 15, 3, 10],
    fill: false,
    borderColor: '#616781'
};

var myIncome = {
    label: "Кол-во игроков",
    data: [1, 4, 3, 30],
    fill: false,
    borderColor: '#159E24'
};

var payData = {
    labels: ["27.05", "28.05", "29.05", "30.05"],
    datasets: [depositAmount, averageCompletion, myIncome]
};

var payChartOptions = {
    legend: {
        display: true,
        position: 'bottom',
        labels: {
            boxWidth: 20,
            fontColor: 'black',
        }
    }
};

var payLineChart = new Chart(payCanvas, {
    type: 'line',
    data: payData,
    options: payChartOptions,
    responsive: true,
    maintainAspectRatio: false,
});

function beforePrintHandler () {
    for (var id in Chart.instances) {
        Chart.instances[id].resize();
    }
}