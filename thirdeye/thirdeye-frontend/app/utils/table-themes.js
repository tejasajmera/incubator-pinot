import Default from 'ember-models-table/themes/bootstrap3';

const ANOMALIES_TABLE_EXTENSIONS = {
  messages: {
    searchLabel: 'Search',
    searchPlaceholder: 'Search by any column'
  },

  globalFilterWrapper: 'te-table-global-filter',
  outerTableWrapper: 'te-anomaly-table-wrapper',
  columnsDropdownWrapper: 'te-column-dropdown',
  table: 'table table-striped table-bordered table-condensed te-anomaly-table-body'
};

const ROOTCAUSE_DIMENSIONS_ALGORITHM_EXTENSIONS = {
  table: 'rootcause-dimensions-table table-condensed',
  noDataCell: 'rootcause-dimensions-table__column--blank-cell'
};

export const ANOMALIES_TABLE_THEME = Default.extend(ANOMALIES_TABLE_EXTENSIONS);
export const ROOTCAUSE_DIMENSIONS_ALGORITHM_THEME = Default.extend(ROOTCAUSE_DIMENSIONS_ALGORITHM_EXTENSIONS);
