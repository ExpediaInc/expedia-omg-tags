b['totalPrice'] = '';
if (utag.isFRateDetails() && b['entity.flight.flight.totalPrice.amount']){
    b['totalPrice'] = formatAmount(b['entity.flight.flight.totalPrice.amount']);
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