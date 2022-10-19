const { onReadBook, onReadSheet } = require('../libs/excel.cjs');

const readFile = () => {
  const wb = onReadBook("base.xlsx")
  const ws = onReadSheet(wb, "Apex Timesheet")
  return ws
};

module.exports = { readFile }