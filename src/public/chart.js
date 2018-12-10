google.charts.load('current', { packages: ['corechart'] })

google.charts.setOnLoadCallback(drawSkillCount)
google.charts.setOnLoadCallback(drawCityCount)
google.charts.setOnLoadCallback(yearCount)

function drawSkillCount () {
  var jsonData = $.ajax({
    url: '/skillcount',
    dataType: 'json',
    async: false
  }).responseJSON

  var data = new google.visualization.DataTable()
  data.addColumn('string', 'Name')
  data.addColumn('number', 'Count')

  $.each(jsonData, function (index, row) {
    data.addRow([String(row.name), parseInt(row.count)])
  })

  var options = {
    // title: 'Count by Skill',
    pieHole: 0.4,
    pieSliceText: 'label',
    reverseCategories: true,
    //  legend: { position: 'bottom' },
    left: 1,
    top: 1,
    widht: 900,
    height: 600,
    backgroundColor: { fill: 'transparent' }
  }
  // Instantiate and draw our chart, passing in some options.
  var chart = new google.visualization.PieChart(
    document.getElementById('chart_div')
  )
  chart.draw(data, options)
}

function drawCityCount () {
  var jsonData = $.ajax({
    url: '/citycount',
    dataType: 'json',
    async: false
  }).responseJSON

  var data = new google.visualization.DataTable()
  data.addColumn('string', 'Name')
  data.addColumn('number', 'Count')

  $.each(jsonData, function (index, row) {
    data.addRow([String(row.name), parseInt(row.count)])
  })

  var options = {
    // title: 'City Count',

    pieHole: 0.4,
    pieSliceText: 'label',
    reverseCategories: true,
    left: 1,
    top: 1,
    widht: 900,
    height: 600,
    backgroundColor: { fill: 'transparent' }
  }
  // Instantiate and draw our chart, passing in some options.
  var chart = new google.visualization.PieChart(
    document.getElementById('chart_city')
  )
  chart.draw(data, options)
}

function yearCount () {
  var jsonData = $.ajax({
    url: '/yearcount',
    dataType: 'json',
    async: false
  }).responseJSON

  var data = new google.visualization.DataTable()
  data.addColumn('string', 'Year')
  data.addColumn('number', 'Count')

  $.each(jsonData, function (index, row) {
    data.addRow([String(row.year), parseInt(row.count)])
  })

  var options = {
    // title: 'Hired by Year',
    hAxis: { title: 'Year', titleTextStyle: { color: '#333' } },
    vAxis: { minValue: 0 },
    left: 1,
    top: 1,
    widht: 900,
    height: 600,
    backgroundColor: { fill: 'transparent' }
  }
  // Instantiate and draw our chart, passing in some options.
  var chart = new google.visualization.AreaChart(
    document.getElementById('chart_year')
  )
  chart.draw(data, options)
}

$(window).resize(function () {
  drawSkillCount()
  drawCityCount()
  drawCityCount()()
})
