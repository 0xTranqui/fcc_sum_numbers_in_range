// js script
// link to fcc problem https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/sum-all-numbers-in-a-range

function sumAll(arr) {
  let quickSum = 0;
  let secondArr = [];
  let secondSum = 0;

  for (let i = 0; i < arr.length; i++) {
    quickSum += arr[i];
  }

  if (arr[0] < arr[1]) {
    for (let i = 0; i < Math.abs(arr[0] - arr[arr.length - 1]) - 1; i++) {
      arr.splice(i + 1, 0, arr[i] + 1);
    }

    for (let i = 1; i < arr.length - 1; i++) {
      secondSum += arr[i];
    }

    return quickSum + secondSum;
  } else {
    for (let i = 0; i < Math.abs(arr[0] - arr[arr.length - 1]) - 1; i++) {
      arr.splice(i + 1, 0, arr[i] - 1);
    }

    for (let i = 1; i < arr.length - 1; i++) {
      secondSum += arr[i];
    }

    return quickSum + secondSum;
  }
}
