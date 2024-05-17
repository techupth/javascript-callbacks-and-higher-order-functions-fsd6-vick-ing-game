//Exercise #2: At Least Five Function

function atLeastFive(array, operation, roomNumber) {
  // Start coding here
  let result = 0;
  for (let i = 0; i < array.length; i++) {
    if (operation(array[i])) {
      result++;
    }
  }
  if (result >= 5) {
    return "นักเรียนห้องที่ " + roomNumber + " ผ่านเกณฑ์ ✅";
  } else {
    return "นักเรียนห้องที่ " + roomNumber + " ไม่ผ่านเกณฑ์ ❌";
  }
}

function passingScore(score) {
  return score >= 70;
}

const studentScoresRoom1 = [90, 40, 67, 80, 100, 15, 86, 12, 99, 67];
const studentScoresRoom2 = [78, 98, 23, 15, 40, 12, 40, 67, 80, 100];
const studentScoresRoom3 = [67, 80, 100, 15, 12, 40, 67, 80, 100, 67];

// Using `atLeastFive` function here

let scoreRoom1Result = atLeastFive(studentScoresRoom1, passingScore, 1);
let scoreRoom2Result = atLeastFive(studentScoresRoom2, passingScore, 2);
let scoreRoom3Result = atLeastFive(studentScoresRoom3, passingScore, 3);

console.log(scoreRoom1Result);
console.log(scoreRoom2Result);
console.log(scoreRoom3Result);
