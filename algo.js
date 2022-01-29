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

// DIAGONAL DIFFERENCE
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

// TWO SUMS
// const nums1 = [2, 11, 7, 15];
// const targetSum1 = 9;
// const nums2 = [10, 3, 2, 5, 4, -1];
// const targetSum2 = 6;
// const nums3 = [3, 8, 4, 1, 9, -2, 0];
// const targetSum3 = 6;
// function twoSum(nums, targetSum) {
//     for (let i = 0; i < nums.length; i++) {
//         for (let j = nums.length - 1; j >= 0; j--) {
//             if (nums[i] + nums[j] == targetSum && j != i) {
//                 console.log([i, j]);
//                 return [i, j];
//             }
//         }
//     }
// }
// twoSum(nums1, targetSum1)
// twoSum(nums2, targetSum2)
// twoSum(nums3, targetSum3)

// K MOST FREQUENT
// const nums4 = [1, 2, 1, 2, 3, 1];
// const k4 = 2;
// const nums5 = [3, 2, 0, 2, 0, 0];
// const k5 = 1;
// const nums6 = [1, 2, 3, 2, 1, 3];
// const k6 = 3;
// function kMostFrequent(nums, k) {
//     numTracker = {};
//     output = [];
//     for (let i = 0; i < nums.length; i++) {
//         numTracker[nums[i]] = nums.filter(num => num == nums[i]).length;
//     }
//     while (output.length < k) {
//         let max = 0;
//         let num = 0;
//         for (const number in numTracker) {
//             if (output.indexOf(number) == -1 && numTracker[number] > max) {
//                 max = numTracker[number];
//                 num = number;
//             }
//         }
//         output.push(num);
//     }
//     console.log(output.map(Number));
//     return output.map(Number);
// }
// kMostFrequent(nums4, k4)
// kMostFrequent(nums5, k5)
// kMostFrequent(nums6, k6)

//MEASURE WATER LEVELS
// const riverLevels1 = [15, 17, 30];
// const riverLevels2 = [15, 17, 30, 14, 5, 16, 25, 9, 3];
// const riverLevels3 = [21, 18, 10, 11, 14, 9, 5, 13, 15, 7, 1, 6, 12, 4];
// const riverLevels4 = [1, 5];
// const riverLevels5 = [5, 1];
// const riverLevels6 = [9, 7, 7, 7];
// const riverLevels7 = [42];
// function measureWaterLevels(waterLevels) {
//     let maxRise = -1;
//     for (let i = 0; i < waterLevels.length; i++) {
//         if (waterLevels[i] > waterLevels[i - 1]) {
//             for (let j = i - 1; j >= 0; j--) {
//                 if (waterLevels[i] - waterLevels[j] > maxRise) {
//                     maxRise = waterLevels[i] - waterLevels[j];
//                 }
//                 if (waterLevels[j - 1] > waterLevels[j]) {
//                     break;
//                 }
//             }
//         }
//     }
//     console.log(maxRise);
//     return maxRise;
// }
// measureWaterLevels(riverLevels1)
// measureWaterLevels(riverLevels2)
// measureWaterLevels(riverLevels3)
// measureWaterLevels(riverLevels4)
// measureWaterLevels(riverLevels5)
// measureWaterLevels(riverLevels6)
// measureWaterLevels(riverLevels7)

//OBJECT ENTRIES
// const obj1 = {
//     name: "Pizza",
//     calories: 9001,
// };
// const proto = { inheritance: "inherited key", keyOnProto: "val from proto" };
// const obj2 = Object.assign(Object.create(proto), {
//     firstName: "Foo",
//     lastName: "Bar",
//     age: 13,
// });
// function entries(obj) {
//     const keys = Object.keys(obj);
//     const output = [];
//     for (let i = 0; i < keys.length; i++) {
//         output.push([keys[i], obj[keys[i]]]);
//     }
//     console.log(output);
//     return output;
// }
// entries(obj1)
// entries(obj2)

//TABLE INSERT
// const table = "users";
// const insertData1 = { first_name: "John", last_name: "Doe" };
// const insertData2 = {
//     first_name: "John",
//     last_name: "Doe",
//     age: 30,
//     is_admin: false,
// };
// function insert(tableName, columnValuePairs) {
//     const str1 = Object.keys(columnValuePairs).join(", ");
//     const str2 = Object.values(columnValuePairs).join(", ");
//     console.log(`INSERT INTO ${tableName} (${str1}) VALUES (${str2})`)
//     return `INSERT INTO ${tableName} (${str1}) VALUES (${str2})`
// }
// insert(table, insertData1)
// insert(table, insertData2)

//FIND OBJECTS
// const users = [
//     { firstName: "Bob", lastName: "Bobbert", age: 31 },
//     { firstName: "John", lastName: "Smith", age: 25 },
//     { firstName: "Bob", lastName: "Smith", age: 27 },
//     { firstName: "Bob", lastName: "White", age: 31 },
// ];
// const searchCriteria1 = {
//     firstName: "Bob",
//     age: 31,
// };
// const searchCriteria2 = {
//     lastName: "Smith",
// };
// function findObjects(criteria, collection) {
//     let output = [];
//     for (obj in collection) {
//         let count = 0;
//         for (crit in criteria) {
//             if (criteria[crit] == collection[obj][crit]) {
//                 count += 1;
//             }
//             if (count == Object.keys(criteria).length) {
//                 output.push(collection[obj])
//             }
//         }
//     }
//     if (output == []) {
//         console.log("No results");
//         return false;
//     }
//     else {
//         console.log(output);
//         return output;
//     }
// }
// findObjects(searchCriteria1, users)
// findObjects(searchCriteria2, users)

// SEARCH BY
// const people = [
//     { firstName: "John", lastName: "Doe" },
//     { firstName: "Jane", lastName: "Doe" },
//     { firstName: "Eddy", lastName: "Lee" },
//     { firstName: "John", lastName: "Fawn" },
//     { firstName: "Edward", lastName: "Kim" }
// ];
// const searchFor1 = "Jo";
// const searchBy1 = "firstName";
// const searchFor2 = "ohn";
// const searchBy2 = "firstName";
// const searchFor3 = "Do";
// const searchBy3 = "lastName";
// const searchFor4 = "E";
// const searchBy4 = "lastName";
// const searchMethod4 = "includes";
// function filterByKey(items, searchFor, searchBy, searchMethod="startsWith") {
//     let output = [];
//     if (searchMethod == "startsWith") {
//         for (person in items) {
//             if (items[person][searchBy].startsWith(searchFor)) {
//                 output.push(items[person])
//             }
//         }
//     }
//     if (searchMethod == "endsWith") {
//         for (person in items) {
//             if (items[person][searchBy].endsWith(searchFor)) {
//                 output.push(items[person])
//             }
//         }
//     }
//     if (searchMethod == "includes") {
//         for (person in items) {
//             if (items[person][searchBy].indexOf(searchFor.toLowerCase()) != -1) {
//                 output.push(items[person])
//             }
//         }
//     }
//     console.log(output)
//     return output;
// }
// filterByKey(people, searchFor1, searchBy1)
// filterByKey(people, searchFor2, searchBy2)
// filterByKey(people, searchFor3, searchBy3)
// filterByKey(people, searchFor4, searchBy4, searchMethod4)

//SEARCH NESTED ARRAY
// const students = [
//     {
//         firstName: "Jane",
//         lastName: "Doe",
//         habits: [
//             "doesn't wash dishes",
//             "falls asleep in lecture",
//             "shows up early",
//         ],
//     },
//     {
//         firstName: "John",
//         lastName: "Smith",
//         habits: ["shows up late", "washes dishes", "helps peers"],
//     },
//     {
//         firstName: "Arya",
//         lastName: "Stark",
//         habits: ["doesn't wash dishes", "hoards snacks", "shows up late"],
//     },
//     {
//         firstName: "Jon",
//         lastName: "Snow",
//         habits: ["shows up early", "helps peers", "washes dishes"],
//     },
// ];
// const badHabit1 = "doesn't wash dishes";
// const badHabit2 = "shows up late";
// const badHabit3 = "different naming for variables";
// function santasNaughtyList(persons, badHabit) {
//     let output = [];
//     for (student of persons) {
//         if (student.habits.includes(badHabit)) {
//             output.push([student.firstName, student.lastName].join(" "));
//         }
//     }
//     console.log(output);
//     return output;
// }
// santasNaughtyList(students, badHabit1)
// santasNaughtyList(students, badHabit2)
// santasNaughtyList(students, badHabit3)