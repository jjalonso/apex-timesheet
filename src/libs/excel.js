import Excel from 'exceljs';

const workbook = new Excel.Workbook();

export const handleReadFile = wbName => workbook.xlsx.readFile(wbName)

export const handleWriteFile = ({number_sheet = 1, number_row = 1, number_cell = 1, value = ''}) => {
	const worksheet = workbook.getWorksheet(number_sheet)
	const row = worksheet.getRow(number_row)
	row.getCell(number_cell).value = value
	row.commit();
};

export const handleCreateWorkbook = name => workbook.xlsx.writeFile(name);
