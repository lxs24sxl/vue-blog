const unique = (list, key) => {
  let result = {};
  let finalResult = [];
  let oItem = null;
  for (let i = 0, len = list.length; i < len; i++) {
    oItem = list[i];
    let curId = oItem[key];
    if (result[curId]) {
      result[curId].count += 1;
    } else {
      oItem.count = 1;
      result[curId] = oItem;
    }
  }
  for (let item in result) {
    finalResult.push (result[item]);
  }
  console.log('finalResult', finalResult);
  return finalResult;
};

const test = () => {};

export default {
  unique,
  test,
};
