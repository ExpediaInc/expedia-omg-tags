if (b['entity.checkout.trl'] != undefined) {
    b['checkout.trl'] = b['entity.checkout.trl'];
    b['checkoutTRL'] = b['entity.checkout.trl'];
}
else if (b['entity.checkout.trl'] == "" || b['entity.checkout.trl'] == undefined) {
    b['entity.checkout.trl'] = b['entity.checkout.orderNumber'];
    b['checkout.trl'] = b['entity.checkout.orderNumber'];
    b['checkoutTRL'] = b['entity.checkout.orderNumber'];
}