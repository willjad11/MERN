// BUBBLE SORT
// arr = [1,8,3,7,5]
// temp = 0
// count = 0
// sorted = false
// function bubbleSort (arr) {
//     while (sorted == false){
//         for (let i = 0; i < arr.length; i++) {
//             if (arr[i + 1]) {
//                 if (arr[i] > arr[i + 1]) {
//                     temp = arr[i + 1];
//                     arr[i + 1] = arr[i];
//                     arr[i] = temp;
//                     count += 1;
//                 }
//                 else {
//                     count -= 1;
//                 }
//             }
//             else if (count <= 0) {
//                 sorted = true;
//             }
//         }
//     }
//     console.log(arr)
// }
// bubbleSort(arr)

// SELECTION SORT
// let arr = [3,5,2,9,1,7,4,6,8];
// function selectionSort(arr) {
//     for (let i = 0; i < arr.length; i++) {
//         let min = i;
//         for (let j = i + 1; j < arr.length; j++) {
//             if (arr[j] > arr[min]) {
//                 min = j;
//             }
//         }
//         if (min != i) {
//             let tmp = arr[i];
//             arr[i] = arr[min];
//             arr[min] = tmp;
//         }
//     }
//     console.log(arr);
//     return arr;
// }
// selectionSort(arr)

// INSERTION SORT
// let arr = [3, 5, 2, 9, 1, 7, 4, 6, 8];
// function insertionSort(arr) {
//     for (let i = 1; i < arr.length; i++) {
//         let current = arr[i];
//         let j = i - 1;
//         while ( (j > -1) && (current < arr[j]) ) {
//             arr[j + 1] = arr[j];
//             j--;
//         }
//         arr[j + 1] = current;
//     }
//     console.log(arr)
//     return arr;
// }
// insertionSort(arr)

// MERGE SORT
// arr1 = [0,9,2,8,1]
// arr2 = [5,4,6,3,7]
// const merge = (arr1, arr2) => {
//     const newArr = [];
//     let arr1Idx = 0;
//     let arr2Idx = 0;
//     while (arr1Idx < arr1.length && arr2Idx < arr2.length) {
//         arr1[arr1Idx] < arr2[arr2Idx]
//             ? newArr.push(arr1[arr1Idx++])
//             : newArr.push(arr2[arr2Idx++]);
//     }
//     return [...newArr, ...arr1.slice(arr1Idx), ...arr2.slice(arr2Idx)];
// };
// const mergeSort = (arr) =>
//     arr.length <= 1
//         ? arr
//         : merge(
//             mergeSort(arr.slice(0, Math.floor(arr.length / 2))),
//             mergeSort(arr.slice(Math.floor(arr.length / 2)))
//         );
// console.log(mergeSort(arr1.concat(arr2)));

//QUICK SORT
// let arr = [3, 5, 2, 9, 1, 7, 4, 6, 8];
// function quickSort(arr) {
//     var pivot = arr[0];
//     var left = [];
//     var right = [];
//     if (arr.length <= 1) {
//         return arr;
//     }
//     for (var i = 1; i < arr.length; i++) {
//         if (arr[i] < pivot) {
//             left.push(arr[i])
//         }
//         else {
//             right.push(arr[i]);
//         }
//     }
//     return quickSort(left).concat(pivot, quickSort(right));
// };
// console.log(quickSort(arr))

//RECURSIVE PARTITIONING
// let arr = [3, 8, 2, 9, 1, 7, 4, 6, 0, 5];
// function partition(arr, left = [], right = [], i = 0, pivot = arr[arr.length - 1]) {
//     if (arr[i] < pivot) {
//         left.push(arr[i]);
//     }
//     if (arr[i] > pivot){
//         right.push(arr[i])
//     }
//     if (i == arr.length - 1) {
//         console.log("Pivot: " + pivot)
//         console.log("Pivot Index: " + (arr.length - 1))
//         console.log(left.concat(pivot, right));
//         return left.concat(pivot, right);
//     }
//     else {
//         partition(arr, left, right, i + 1, pivot)
//     }
// }
// partition(arr)

// ORDERED INTERSECTION
// const numsA1 = [0, 1, 2, 2, 2, 7];
// const numsB1 = [2, 2, 6, 6, 7];
// const numsA2 = [0, 1, 2, 2, 2, 7];
// const numsB2 = [2, 2];
// const numsA3 = [0, 1, 2, 2, 2, 7];
// const numsB3 = [10];
// function intersection (arr1, arr2) {
//     let newArr = [];
//     for (let i = 0; i < arr2.length; i++) {
//         if (arr1.indexOf(arr2[i]) != -1 && newArr.indexOf(arr2[i]) == -1) {
//             newArr.push(arr2[i]);
//         }
//     }
//     console.log(newArr);
// }
// intersection(numsA1, numsB1)
// intersection(numsA2, numsB2)
// intersection(numsA3, numsB3)
// const squareMatrix1 = [
//     [1, 2, 3],
//     [4, 5, 6],
//     [9, 8, 9],
// ];
// const squareMatrix2 = [
//     [1, 2, 3, 4, 5],
//     [1, 2, 3, 4, 5],
//     [1, 2, 3, 4, 5],
//     [1, 2, 3, 4, 5],
//     [1, 2, 3, 4, 5],
// ];
// function diagonalDifference(sqrMatrix) {
//     let leftToRight = 0;
//     let rightToLeft = 0;
//     for (let i = 0; i < sqrMatrix.length; i++) {
//         leftToRight += sqrMatrix[i][i];
//         rightToLeft += sqrMatrix[i][sqrMatrix.length - 1 - i];
//     }
//     console.log(rightToLeft - leftToRight)
//     return leftToRight - rightToLeft;
// }
// diagonalDifference(squareMatrix1)
// diagonalDifference(squareMatrix2)