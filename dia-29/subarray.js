function isSubArray(mainArray, subArray){
    return mainArray.join(',').includes(subArray.join(','));
}

const mainArray = [1,2,3,4,5,6,7,8,9];
const subArray = [2, 3, 4, 5];
console.log(isSubArray(mainArray, subArray));
