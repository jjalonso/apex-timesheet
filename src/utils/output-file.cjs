const { handleReadFile, handleWriteFile, handleCreateWorkbook } = require('../libs/excel.cjs');

const addValue = async () => {
  await handleReadFile('base.xlsx')
  handleWriteFile({ number_sheet: 1, number_row: 1, number_cell: 2, value: 'Prueba manuela' })
  handleCreateWorkbook('base.xlsx')
};