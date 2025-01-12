function solution(o) {
  let priceToPay = 0;

  for (let el of o) {
    el.includes('americano') || el.includes('anything') ?
    priceToPay += 4500 : priceToPay += 5000
  }

  return priceToPay;
}