const unique = (list, key) => {
  let result = {};
  let finalResult = [];
  let oItem = null;
  console.log("list",list);
  for (let i = 0, len = list.length; i < len; i++) {
    oItem = list[i];
    result[oItem[key]] = oItem;
  }
  for (let item in result) {
    finalResult.push(result[item]);
  }
  return finalResult;
}

const test = () => {}

export default {
  unique,
  test
}