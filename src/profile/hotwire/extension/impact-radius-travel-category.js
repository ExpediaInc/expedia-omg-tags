var lobType = 'Flight';
var category = '';

if(typeof utag_data['entity.checkout.lobType'] != "undefined") {
	lobType = utag_data['entity.checkout.lobType'];
}

if(lobType == 'Hotel') {
	category = 'Retail Hotel';
}
else if(lobType == 'Flight') {
	if(typeof utag_data['entity.checkout.flightOffer.flight.flightFareType.0'] != "undefined") {
		if (utag_data['entity.checkout.flightOffer.flight.flightFareType.0'] == 'WHITE_LABEL') {
			category = 'Opaque Air';
		}
		else {
			category = 'Retail Air';
		}
	}
}
else if(lobType == 'Package') {
	category = 'Packages';
}

b['impact_radius_travel_category'] = category;
