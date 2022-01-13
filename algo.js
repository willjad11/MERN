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