const { handleReadFile, handleWriteFile, handleCreateWorkbook } = require('../libs/excel.js');

const addValue = async () => {
  await handleReadFile('../template/base.xlsx')
  handleWriteFile({ number_sheet: 1, number_row: 1, number_cell: 2, value: 'Prueba manuela' })
  handleCreateWorkbook('output.xlsx')
};