/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

 // 双指针解法，只能用于有顺序的排列数组
// var twoSum = function(nums, target) {
//     // 使用双指针实现
//     let sIndex = 0, tIndex = nums.length - 1;
//     let sum = 0;
//     while(sIndex < tIndex && sum !== target) {
//         sum = nums[sIndex] + nums[tIndex];
//         // 最好的情况，直接相等了
//         if (sum === target) {
//             continue;
//         }

//         // 如果不相等就判断这个值是大了还是小了
//         if (sum > target) {
//             // 如果值大了，移动值较大的那边
//             if (nums[sIndex] > nums[tIndex]) {
//                 sIndex++;
//             } else {
//                 tIndex--;
//             }
//             continue;
//         }

//         // 如果值小了，移动值较小的那边
//         if (sum < target) {
//             if (nums[sIndex] < nums[tIndex]) {
//                 sIndex++;
//             } else {
//                 tIndex--;
//             }
//             continue;
//         }
//     }
//     return [sIndex, tIndex];
// };

// 暴力解法
// var twoSum = function(nums, target) {
//     for(let i = 0; i < nums.length - 1; i++) {
//         for(let j = i + 1; j < nums.length; j++) {
//             if(nums[i] + nums[j] === target) {
//                 return [i, j];
//             }
//         }
//     }
// }

// 哈希解法, 通过减法运算target - 其中数组内一个值，来寻找另外一个值
var twoSum = function(nums, target) {
  // 放入哈希列表
  let map = new Map();
  for(let i = 0; i < nums.length; i++) {
      map.set(nums[i], i);
  }

  for(let i = 0; i < nums.length; i++) {
      let findNum = target - nums[i];
      if (map.has(findNum) && i !== map.get(findNum)) {
          return [i, map.get(findNum)];
      }
  }
}



