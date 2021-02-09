// Columns for anomalies table
export default [
  {
    propertyName: 'start',
    component: 'custom/anomalies-table/start-duration',
    title: 'Start/Duration',
    className: 'anomalies-table__column anomalies-table__column--med-width',
    disableFiltering: true
  },
  {
    propertyName: 'dimensions',
    component: 'custom/anomalies-table/dimensions',
    title: 'Dimensions',
    className: 'anomalies-table__column anomalies-table__column--large-width',
    disableFiltering: true
  },
  {
    propertyName: 'baseline',
    component: 'custom/anomalies-table/current-wow',
    title: 'Current/WoW',
    className: 'anomalies-table__column anomalies-table__column--small-width',
    disableFiltering: true
  },
  {
    propertyName: 'feedback',
    component: 'custom/anomalies-table/resolution',
    title: 'Resolution',
    className: 'anomalies-table__column anomalies-table__column--med-width',
    disableFiltering: true
  }
];
