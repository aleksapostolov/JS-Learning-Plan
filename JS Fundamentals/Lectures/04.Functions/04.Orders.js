function orders(item, count) {
  let itemPrice = 0;

  switch (item) {
    case "water":
      itemPrice = 1.0;
      break;

    case "coffee":
      itemPrice = 1.5;
      break;

    case "coke":
      itemPrice = 1.4;
      break;

    case "snacks":
      itemPrice = 2.0;
      break;
  }

  let totalPrice = itemPrice * count;
  console.log(totalPrice.toFixed(2));
}
orders("water", 5);
orders("coffee", 2);
