import Excel from 'exceljs';

export const addValueInWorksheeet = async ({ 
	workbook_name, 
	number_sheet, 
	number_row, 
	number_cell, 
	value 
}) => {
	const excel = new Excel.Workbook()
	const workbook = await excel.xlsx.readFile(workbook_name)
	const worksheet = workbook.getWorksheet(number_sheet)
	const row = worksheet.getRow(number_row)
	row.getCell(number_cell).value = value
	row.commit()
	return workbook.xlsx.writeFile(workbook_name)
};
