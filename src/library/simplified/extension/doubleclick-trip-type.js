b['flightTripType'] = '';
if (utag.isFRateDetails() && b['entity.tripDetails.flightOffer.tripType'] != undefined){
    b['flightTripType'] = b['entity.tripDetails.flightOffer.tripType']
}
else if (utag.isFCO() && b['entity.checkout.flightOffer.tripType'] != undefined){
    b['flightTripType'] = b['entity.checkout.flightOffer.tripType']
}