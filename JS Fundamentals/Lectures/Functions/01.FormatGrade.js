function formatGrade(grade) {
  let desc;
  let formattedGrade = grade.toFixed(2);

  if (grade < 3.0) {
    desc = "Fail";
    formattedGrade = 2;
  } else if (grade >= 3.0 && grade < 3.5) {
    desc = "Poor";
  } else if (grade >= 3.5 && grade < 4.5) {
    desc = "Good";
  } else if (grade >= 4.5 && grade < 5.5) {
    desc = "Very Good";
  } else {
    desk = "Excellent";
  }

  console.log(`${desc} (${formattedGrade})`);
}
formatGrade(3.33);
formatGrade(4.5);
formatGrade(2.99);
