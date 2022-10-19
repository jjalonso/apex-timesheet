const { readFile, utils } = require('xlsx');

//Read all Book
const onReadBook = file => readFile(file);

//Read only a sheet
const onReadSheet = (wb, ws) => utils.sheet_to_json(wb.Sheets[ws]);

module.exports = { onReadBook, onReadSheet };