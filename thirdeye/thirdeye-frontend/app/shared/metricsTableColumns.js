// rootcause metrics table columns mock
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
    propertyName: 'wo1w',
    component: 'custom/metrics-table-offset',
    sortedBy: 'sortable_wo1w',
    title: 'WoW',
    disableFiltering: true,
    className: 'metrics-table__column metrics-table__column--small'
  },
  {
    propertyName: 'wo2w',
    component: 'custom/metrics-table-offset',
    sortedBy: 'sortable_wo2w',
    title: 'Wo2W',
    disableFiltering: true,
    className: 'metrics-table__column metrics-table__column--small'
  },
  {
    propertyName: 'score',
    title: 'Outlier',
    disableFiltering: true,
    className: 'metrics-table__column metrics-table__column--small',
    sortDirection: 'desc',
    sortPrecedence: 1
  },
  {
    component: 'custom/rca-metric-links',
    propertyName: 'links',
    title: 'Links',
    disableFiltering: true,
    disableSorting: true,
    className: 'metrics-table__column metrics-table__column--small'
  }
];
