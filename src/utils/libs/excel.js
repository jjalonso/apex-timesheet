const XLSX =  require('xlsx');

  //For input file
  const onChangeUpload = event => {
    const fileList = event.target.files;
    for (let i = 0; i < fileList.length; i ++) return (fileList[i]);
  };

  //Read all Book
  const onReadBook = async file => {
    const data = await file.arrayBuffer();
    const readBookXlsx = XLSX.readFile(data);
    return readBookXlsx;
  };

  //Read only a sheet
  const onReadSheet = (wb, ws) => {
    const readSheetXlsx = XLSX.utils.sheet_to_json(wb.Sheets[ws]);
    return readSheetXlsx;
  };

  module.exports = { onChangeUpload, onReadBook, onReadSheet };