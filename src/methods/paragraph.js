export function question(data) {
  console.log(typeof data);
  const newData1 = data.split("？").join("？<br/>");
  const newData2 = newData1.split("。").join("。<br/>");
  return newData2;
}

export function paragraph(data) {
  const newData = data.split("。").join("。<br/>");
  return newData;
}

export function table(data){
  const lists = data.split("。");
  lists.splice(-1,1);
  const tableArr = [];
  lists.forEach(element => {
    let temp = {};
    console.log(element);
    let splitArr = element.split(":");
    console.log(splitArr);
    temp.title = splitArr[0];
    temp.content = splitArr[1];
    tableArr.push(temp);
  });
  return tableArr;
}