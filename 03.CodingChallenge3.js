// Test Data
// const AvgOfDolphins = (96 + 108 + 89) / 3;
// const AvgOfKoals = (88 + 91 + 110) / 3;

// if (AvgOfDolphins > AvgOfKoals) {
//   console.log("Dolphins Win the trophy");
// } else if (AvgOfDolphins < AvgOfKoals) {
//   console.log("Koalas Win the trophy");
// } else if (AvgOfDolphins === AvgOfKoals) {
//   console.log("Both Wins the trophy");
// }

// Bonus 1
// const AvgOfDolphins = (97 + 112 + 101) / 3;
// const AvgOfKoals = (109 + 95 + 123) / 3;

// if (AvgOfDolphins > AvgOfKoals && AvgOfDolphins >= 100) {
//   console.log("Dolphins Win the trophy");
// } else if (AvgOfDolphins < AvgOfKoals && AvgOfKoals >= 100) {
//   console.log("Koalas Win the trophy");
// } else if (AvgOfDolphins === AvgOfKoals) {
//   console.log("Both Wins the trophy");
// }

// Bonus 2
const AvgOfDolphins = (97 + 112 + 101) / 3;
const AvgOfKoals = (109 + 95 + 106) / 3;

if (AvgOfDolphins > AvgOfKoals && AvgOfDolphins >= 100) {
  console.log("Dolphins Win the trophy");
} else if (AvgOfDolphins < AvgOfKoals && AvgOfKoals >= 100) {
  console.log("Koalas Win the trophy");
} else if (
  AvgOfDolphins === AvgOfKoals &&
  AvgOfDolphins >= 100 &&
  AvgOfKoals >= 100
) {
  console.log("Both Wins the trophy");
} else {
  console.log("No one Wins the trophy");
}
