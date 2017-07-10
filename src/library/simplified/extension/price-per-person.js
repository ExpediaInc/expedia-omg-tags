b['pricePerPerson'] = '';
if (utag.isCruiseCO() && b['entity.checkout.cruise.perPassengerPrice.amount'])
{
    b['pricePerPerson'] = b['entity.checkout.cruise.perPassengerPrice.amount'];
}
else if (utag.isCruiseSR() && b['entity.cruiseSearch.lowestOfferPerPassengerPrice.amount'])
{
    b['pricePerPerson'] = b['entity.cruiseSearch.lowestOfferPerPassengerPrice.amount'];
}
else if (utag.isPSR() && (b['entity.packageSearch.lowestPriceOffer.decimalAmountString']))
{
    b['pricePerPerson'] = b['entity.packageSearch.lowestPriceOffer.decimalAmountString'];
}
else if((utag.isHCO()|| utag.isFCO() || utag.isPCO()|| utag.isLXCO() || utag.isMCO()) && b['checkout.cartTotal.amount'] && b['numberOfGuests'])
{
    if(b['numberOfGuests'] > 0)
    {
        b['pricePerPerson'] = (b['checkout.cartTotal.amount'] / b['numberOfGuests']).toFixed(2);
    }
}
else if (utag.isFSR() && (b['entity.flightSearch.searchResults.cheapest.pricePerTraveler.amount'])) {
    b['pricePerPerson'] = b['entity.flightSearch.searchResults.cheapest.pricePerTraveler.amount'];
}
else if (utag.isFRateDetails() && (b['entity.flight.flight.avgPriceOfAdultAndSenior.amount'] || b['entity.flight.flight.avgPriceOfChildrenAndInfants.amount']))
{
    b['pricePerPerson'] = formatAmount(b['entity.flight.flight.avgPriceOfAdultAndSenior.amount']) + "|" + formatAmount(b['entity.flight.flight.avgPriceOfChildrenAndInfants.amount']);
}
else if(utag.isHSR()){
    var pricePerPerson = "";
    for(var i=0;i<5;i++){
        if(b["entity.hotels.results.results."+i+".rooms.0.averagePrice.amount"] != undefined ){
            pricePerPerson =  pricePerPerson + formatAmount(b["entity.hotels.results.results."+i+".rooms.0.averagePrice.amount"])+ "|";
        }
    }
    b['pricePerPerson'] = pricePerPerson.slice(0,-1);
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