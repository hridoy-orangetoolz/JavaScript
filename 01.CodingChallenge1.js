const MarkWeight = 70;
const MarkHeight = 1.69;
const JohnWeight = 95;
const JohnHeight = 1.88;

const MarkBMI = MarkWeight / MarkHeight ** 2;
const JohnBMI = JohnWeight / JohnHeight ** 2;

const markHigherBMI = MarkBMI > JohnBMI;

console.log(
  `Mark's BMI = ${MarkBMI.toFixed(2)} and John's BMI = ${JohnBMI.toFixed(2)}`
);

if (markHigherBMI) {
  console.log("Mark has a higher BMI than John");
} else {
  console.log("John has a higher BMI than Mark");
}
