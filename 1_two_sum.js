// var twoSum = function(nums, target) {
//     for(let i=0;i<nums.length;i++){
//         for(let j = i+1;j<nums.length;j++){
//             if(nums[i] + nums[j]=== target){
//                 return [i,j]
//             }
//         }
//     }
//    return -1
// for (let i = 0; i < nums.length; i++) {
//   deff = target - nums[i];
//   sliceArray = nums.slice(i + 1);
//   if (sliceArray.includes(deff)) {
//     return [i, i + 1 + sliceArray.indexOf(deff)];
//   }
// }
// return -1;
// };

// console.log(twoSum([1,2,3,4],7))

let arr = [1,2,3,4,56,6];
arr1 = arr.slice(2); 
console.log(arr1);