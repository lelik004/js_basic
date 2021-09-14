var shopCart = [['Author Ronin', 100], ['Marin FC', 90], ['Topeak Versacage', 3], ['Marin Larkspur', 85]];
var totalPrice = 0, priceItem, itemCard;

function countBasketPrice(priceItem) {
    totalPrice += priceItem;
    return totalPrice
}

for (var item = 0; item < shopCart.length; item++) {
    itemCard = shopCart[item]
    countBasketPrice(itemCard[1])
    // console.log(item)
}

console.log(totalPrice)