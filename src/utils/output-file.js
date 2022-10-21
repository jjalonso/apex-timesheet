import { addValueInWorksheeet } from '../libs/excel.js';

addValueInWorksheeet({ 
  workbook_name: 'base.xlsx',
  number_sheet: 1, 
  number_row: 1, 
  number_cell: 2, 
  value: 'sergio' 
});