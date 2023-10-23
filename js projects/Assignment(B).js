const arr1 = [1, 2, 3, 4, 5, 6, 7,8];
const arr2 = [1999, 2000, 2001, 2003, 2011, 2019, 2023];

function arrSort(arr) {
    arr.sort((a,b) =>b-a);
    return arr;
}
console.log(arrSort(arr1));
console.log(arrSort(arr2));