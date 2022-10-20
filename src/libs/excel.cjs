const Excel = require('exceljs');
const workbook = new Excel.Workbook();

const handleReadFile = wbName => workbook.xlsx.readFile(wbName)

const handleWriteFile = ({number_sheet = 1, number_row = 1, number_cell = 1, value = ''}) => {
	const worksheet = workbook.getWorksheet(number_sheet)
	const row = worksheet.getRow(number_row)
	row.getCell(number_cell).value = value
	row.commit();
};

const handleCreateWorkbook = name => workbook.xlsx.writeFile(name);

module.exports = { handleReadFile, handleWriteFile, handleCreateWorkbook };