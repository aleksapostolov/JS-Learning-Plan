function repeatString(string, count) {
  let newArr = [];

  for (let i = 0; i < Number(count); i++) {
    newArr += string;
  }
  console.log(newArr);
}
repeatString("abc", 3);
repeatString("String", 2);
