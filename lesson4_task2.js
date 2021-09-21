var cart = [];
var UIN, catalogVal, titleVal, priceVal, sizeVal, saleVal, numVal, numAvail;
var product_price, totalPrice = 0;


function cartAdd(UIN, catalogVal, titleVal, priceVal, sizeVal, saleVal, numVal, numAvail) {
    var product = {
        UIN: UIN,
        catalog: catalogVal,
        title: titleVal,
        price: priceVal,
        size: sizeVal,
        sale: saleVal,
        numOder: numVal,
        numAvailible: numAvail
    }

    cart.push(product)
    return cart;
}

function countCartPrice(price, sale, num) {
    if (sale != 0) {
        price = price - price * sale / 100;
    }
    if (num > 1) {
        price *= num;
    }
    totalPrice += price;
    return totalPrice;
}

cartAdd(5, 'bike', 'Author Ronin', 100, 54, 10, 1);
cartAdd(103, 'accesories', 'Topeak Versacage', 2, '', 0, 2);
cartAdd(54, 'components', 'Shimano GRX-800 RD', 15, 'SGS', 0, 1);

for (productInCart in cart) {
    countCartPrice(cart[productInCart].price, cart[productInCart].sale, cart[productInCart].numOder)
}

console.log(`Сумма товаров в корзине: ${totalPrice}`);
