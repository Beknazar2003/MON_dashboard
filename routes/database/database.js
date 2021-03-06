const filterData = require('./filter')

exports.kg_std_doo = [{
    chartType: 'ColumnChart',
    dataTable: [
      ['Time', 'Чуй', 'Иссык-Кол', 'Баткен', 'ОШ',
        'Таласс', 'Нарын', 'Джалал-Абад'
      ],
      ['2020-2021', 700, 1000, 400, 500, 600, 800, 200],
      ['2019-2020', 700, 1000, 400, 500, 600, 800, 200],
    ],
    options: {
      'title': 'Countries',
    },
    containerId: 'chart'
  },
  {
    chartType: 'ColumnChart',
    dataTable: [
      ['Time', 'Чуй', 'Иссык-Кол', 'Баткен', 'ОШ',
        'Таласс', 'Нарын', 'Джалал-Абад'
      ],
      ['2018-2019', 10, 24, 20, 32, 18, 5, 13],
      ['2019-2020', 16, 22, 23, 30, 16, 9, 13],
      ['2020-2021', 28, 19, 29, 30, 12, 13, 13]
    ],
    options: {
      'title': "Области",
      'colors': ['#eb4034', '#ebb134', '#34abeb'],
      'legend': {
        position: 'top',
        maxLines: 3
      },
      'bar': {
        groupWidth: '75%'
      },
      'isStacked': true,
    },
    containerId: 'chart1'
  },
  {
    chartType: 'ColumnChart',
    dataTable: [
      ['Time', 'Total'],
      ['2018-2019', 40],
      ['2019-2020', 95],
      ['2020-2021', 127]
    ],
    options: {
      'title': 'Сводка по регионам',
      'colors': ['#eb4034', '#ebb134', '#34abeb']
    },
    containerId: 'chart2'
  },
  {
    chartType: 'ColumnChart',
    dataTable: [
      ['Time', 'Баткенская область', 'Джалал-Абадская область', 'Иссык-Кульская область', 'Нарынская область',
        'Ошская область', 'Таласская область', 'Чуйская область', 'г.Бишкек', 'г.Ош'
      ],
      ['2015', 2492, 5964, 3119, 2180, 5526, 1516, 3866, 2593, 944],
      ['2016', 2648, 6116, 3328, 2202, 5805, 1644, 4035, 2598, 941],
      ['2017', 2590, 6450, 3390, 2196, 5758, 1695, 4248, 2670, 951],
      ['2018', 2676, 6505, 3344, 2128, 5574, 1642, 4248, 2710, 958],
      ['2019', 2867, 6971, 3520, 2169, 5889, 1749, 4792, 3120, 936]
    ],
    options: {
      title: 'Численность детей, получающих пособия \n по инвалидности по территорииs',
      'legend': 'bottom'
    },
    containerId: 'chart3'
  },
  {
    chartType: 'ColumnChart',
    dataTable: [
      ['region', '2015', '2016', '2017', '2018', '2019'],
      ['Баткенская область', 2492, 2648, 2590, 2676, 2867],
      ['Джалал-Абадская область', 5964, 6116, 6450, 6505, 6971],
      ['Иссык-Кульская область', 3119, 3328, 3390, 3344, 3520],
      ['Нарынская область', 2180, 2202, 2196, 2128, 2169],
      ['Ошская область', 5526, 5805, 5758, 5574, 5889],
      ['Таласская область', 1516, 1644, 1695, 1642, 1749],
      ['Чуйская область', 3866, 4035, 4248, 4297, 4792],
      ['г.Бишкек', 2593, 2598, 2670, 2710, 3120],
      ['г.Ош', 944, 941, 951, 958, 936]
    ],
    options: {
      title: 'Численность детей, получающих пособия \n по инвалидности по территорииs',
      'legend': 'bottom'
    },
    containerId: 'chart4'
  },
  {
    chartType: 'PieChart',
    dataTable: [
      ['Name', 'Value'],
      ['ДОО', filterData.PEO],
      ['ДОЦ', filterData.CEC],
      ['И_ВПО', filterData.IV],
      ['ОО', filterData.PS],
      ['СПО_ВПО', filterData.SV],
      ['ТЕСТ', filterData.T],
      ['ВРО', filterData.HPEO],
      ['СПО', filterData.SVEO],
      ['НПО', filterData.PVEO]
    ],
    options: {
      title: 'Численность организаций',
      'legend': 'bottom'
    },
    containerId: 'chart5'
  },
  {
    chartType: 'PieChart',
    dataTable: [
      ['Name', 'Value'],
      ['Девочки', filterData.girls],
      ['Мальчики', filterData.boys]
    ],
    options: {
      title: 'По полу обучающихся',
      'legend': 'bottom'
    },
    containerId: 'chart6'
  },
  {
    chartType: 'PieChart',
    dataTable: [
      ['Name', 'Value'],
      ['Женщины', filterData.women],
      ['Мужчины', filterData.men]
    ],
    options: {
      title: 'По полу сотрудников',
      'legend': 'bottom'
    },
    containerId: 'chart7'
  },
  {
    chartType: 'PieChart',
    dataTable: [
      ['Name', 'Value'],
      ['Кыргысзкий', filterData.kg],
      ['Русский', filterData.ru],
      ['Узбекский', filterData.uz],
      ['Другие', filterData.oth],
      ['Таджикский', filterData.tj],
    ],
    options: {
      title: 'По полу сотрудников',
      'legend': 'right'
    },
    containerId: 'chart8'
  }
]