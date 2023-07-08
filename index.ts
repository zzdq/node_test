// rowSpan  合并列
// colSpan  合并行
export const changeData = (data, field) => {
    let count = 0;//重复项的第一项
    let indexCount = 1;//下一项
    while (indexCount < data.length) {
        var item = data.slice(count, count + 1)[0];//获取没有比较的第一个对象
        if (!item[`${field}rowSpan`]) {
            item[`${field}rowSpan`] = 1;//初始化为1
        }
        if (item[field] === data[indexCount][field]) {//第一个对象与后面的对象相比，有相同项就累加，并且后面相同项设置为0
            item[`${field}rowSpan`]++;
            data[indexCount][`${field}rowSpan`] = 0;
        } else {
            count = indexCount;
        }
        indexCount++;
    }
    return data
}


// rowSpan  合并列
// colSpan  合并行
// reference 参照列
export const changeDataReference = (data, field, reference) => {
    console.log(data, 'datadatadatadatadatadata')
    let count = 0;//重复项的第一项
    let indexCount = 1;//下一项
    while (indexCount < data.length) {
        var item = data.slice(count, count + 1)[0];//获取没有比较的第一个对象
        if (!item[`${field}rowSpan`]) {
            item[`${field}rowSpan`] = 1;//初始化为1
        }
        if (item[field] === data[indexCount][field] && item[reference] === data[indexCount][reference]) {//第一个对象与后面的对象相比，有相同项就累加，并且后面相同项设置为0
            item[`${field}rowSpan`]++;
            data[indexCount][`${field}rowSpan`] = 0;
        } else {
            count = indexCount;
        }
        indexCount++;
    }
    return data
}

/**
 * 
 * @param {
 * *} data  数据源
 * @param {*} field  合并标识
 * @param {*} referenceList []数组  第一项为合并参照   后面的以第一项为参照
 * @param {*} reference2     除了referenceList中的项，其他都按照 reference2参照
 */
export const changeData2 = (data, field, referenceList, reference2) => {
    let count = 0;//重复项的第一项
    let indexCount = 1;//下一项
    while (indexCount < data.length) {
        var item = data.slice(count, count + 1)[0];//获取没有比较的第一个对象
        if (!item[`${field}rowSpan`]) {
            item[`${field}rowSpan`] = 1;//初始化为1
        }
        if (referenceList.includes(field) ) {
            if (item[field] === data[indexCount][field] && item[referenceList[0]] === data[indexCount][referenceList[0]]) {//第一个对象与后面的对象相比，有相同项就累加，并且后面相同项设置为0
                item[`${field}rowSpan`]++;
                data[indexCount][`${field}rowSpan`] = 0;
            } else {
                count = indexCount;
            }
        } else {
            if (item[field] === data[indexCount][field] && item[reference2] === data[indexCount][reference2] && item[referenceList[0]] === data[indexCount][referenceList[0]]) {//第一个对象与后面的对象相比，有相同项就累加，并且后面相同项设置为0
                item[`${field}rowSpan`]++;
                data[indexCount][`${field}rowSpan`] = 0;
            } else {
                count = indexCount;
            }
        }
        indexCount++;
    }
    return data
}
