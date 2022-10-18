const XLSX =  require('xlsx');

  //For input file
  const onChangeUpload = event => {
    const fileList = event.target.files
    for (let i = 0; i < fileList.length; i ++) return (fileList[i])
  };

  const onReadBook = async () => {
    const data = await fileUpload.arrayBuffer()
    const readBookXlsx = XLSX.readFile(data)
    return readBookXlsx
  };