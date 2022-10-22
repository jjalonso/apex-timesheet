import Excel from 'exceljs';

export const readWorkbook = name => {
	const excel = new Excel.Workbook()
	return excel.xlsx.readFile(name)
};

export const addValueToWorkbook = ({
	workbook,
	sheetNumber,
	rowNumber,
	cellNumber,
	value
}) => {
	const worksheet = workbook.getWorksheet(sheetNumber)
	const row = worksheet.getRow(rowNumber)
	row.getCell(cellNumber).value = value
	return row.commit()
};

export const writeWorkbook = (workbook, name) => {
	workbook.calcProperties.fullCalcOnLoad = true
	return workbook.xlsx.writeFile(name)
}

export const schemaWorkbook = [
	{ col: 'Date', value: 3 },
	{ col: 'Hours Worked', value: 5 },
	{ col: 'Notes', value: 6 },
];