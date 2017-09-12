b['totalPrice'] = '';
if (utag.isFRateDetails() && b['entity.flight.flight.totalPrice.amount']){
    b['totalPrice'] = formatAmount(b['entity.flight.flight.totalPrice.amount']);
}

else if (utag.isRailRateDetails() && utag_data["entity.railSearch.railDetail.railLegs.0.railOfferItems.0.price.amount"]) {
    b['totalPrice'] = formatAmount(b['entity.railSearch.railDetail.railLegs.0.railOfferItems.0.price.amount']);
}

else if (utag.isFCO() && b['entity.checkout.flightOffer.totalPrice.netValue']) {
	b['totalPrice'] = formatAmount(parseInt(b['entity.checkout.flightOffer.totalPrice.netValue']));
}

else if (utag.isPIS() && typeof b.entity.packageSearch.results !== undefined) {
	b['totalPrice'] = b['entity.packageSearch.results.offers.0.packagePrice.packageTotalPrice.decimalAmountString'];
}

else if (utag.isCarUDP() && typeof b.entity.carDetails.totalPrice !== undefined) {
    b['totalPrice'] = b["entity.carDetails.totalPrice.decimalAmountString"];
}

function formatAmount(amount) {
    amount= amount.toFixed(2);
    amount += '';
	x = amount.split('.');
	x1 = x[0];
	x2 = x.length > 1 ? '.' + x[1] : '';
	var rgx = /(\d+)(\d{3})/;
	while (rgx.test(x1)) {
		x1 = x1.replace(rgx, '$1' + ',' + '$2');
	}
	return x1 + x2;
}
