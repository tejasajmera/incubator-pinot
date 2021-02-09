// rootcause metrics funnel columns mock
export default [
  {
    propertyName: 'isSelected',
    isHidden: true,
    sortDirection: 'desc',
    sortPrecedence: 0
  },
  {
    component: 'custom/table-checkbox',
    className: 'metrics-table__column  metrics-table__column--checkbox'
  },
  {
    propertyName: 'label',
    title: 'Metric',
    component: 'custom/metrics-table-metric',
    className: 'metrics-table__column metrics-table__column--large'
  },
  {
    propertyName: 'current',
    component: 'custom/metrics-table-current',
    sortedBy: 'sortable_current',
    title: 'current',
    disableFiltering: true,
    disableSorting: true,
    className: 'metrics-table__column metrics-table__column--small'
  },
  {
    propertyName: 'baseline',
    component: 'custom/metrics-table-offset',
    sortedBy: 'sortable_baseline',
    title: 'baseline',
    disableFiltering: true,
    className: 'metrics-table__column metrics-table__column--small'
  },
  {
    propertyName: 'yo1y',
    component: 'custom/metrics-table-offset',
    sortedBy: 'sortable_yo1y',
    title: 'YoY',
    disableFiltering: true,
    className: 'metrics-table__column metrics-table__column--small'
  },
  {
    propertyName: 'interval',
    title: 'Interval',
    disableFiltering: true,
    className: 'metrics-table__column metrics-table__column--small'
  },
  {
    propertyName: 'inInterval',
    title: 'In Interval',
    disableFiltering: true,
    className: 'metrics-table__column metrics-table__column--small'
  }
];
