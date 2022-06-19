function sortByTwoCriteria(arr) {
  let sortedArray = arr.sort((a, b) => {
    return a.length - b.length || a.localeCompare(b);
  });

  sortedArray.forEach((element) => { // forEach провери този метод!!!
    console.log(element);
  });
}
sortByTwoCriteria(["alpha", "beta", "gamma"]);
sortByTwoCriteria(["Isacc", "Theodor", "Jack", "Harrison", "George"]);
