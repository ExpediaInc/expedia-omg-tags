b['cabinClass'] = '';
if (utag.isCruiseCO() && b['entity.checkout.cruise.cabinCategory'])
{
    b['cabinClass'] = b['entity.checkout.cruise.cabinCategory'];
}
else if (utag.isFRateDetails() && b.entity.flight.flight.flight.legs != "undefined")
{
    var numLegs = '0';
    var numSegments = '0';
    var cabinClass = "";
    numLegs = b.entity.flight.flight.flight.legs.length;
    for (var i = 0; i < numLegs; i++) {
        numSegments = b.entity.flight.flight.flight.legs[i].segments.length;
            for (var j = 0; j < numSegments; j++){
                cabinClass = cabinClass + b.entity.flight.flight.flight.legs[i].segments[j].cabinClass + "|";
            }
        }
    b["cabinClass"] = cabinClass.slice(0, -1);
}
else if (utag.isFCO() && b.entity.checkout.flightOffer.flight.legs != "undefined")
{
    var numLegs = '0';
    var numSegments = '0';
    var cabinClass = "";
    numLegs = b.entity.checkout.flightOffer.flight.legs.length;
    for (var i = 0; i < numLegs; i++) {
        numSegments = b.entity.checkout.flightOffer.flight.legs[i].segments.length;
            for (var j = 0; j < numSegments; j++){
                cabinClass = cabinClass + b.entity.checkout.flightOffer.flight.legs[i].segments[j].cabinClass + "|";
            }
        }
    b["cabinClass"] = cabinClass.slice(0, -1);
}
else if (utag.isPCO() && b['entity.checkout.flightOffer.flight.legs.0.segments.0.cabinClass'])
{
    b['cabinClass'] = b['entity.checkout.flightOffer.flight.legs.0.segments.0.cabinClass'];
}
else if (utag.isPRateDetails() && b['entity.tripDetails.flightOffer.flight.legs.0.segments.0.cabinClass'])
{
    b['cabinClass'] = b['entity.tripDetails.flightOffer.flight.legs.0.segments.0.cabinClass'];
}
else if (b.isFlightSearchResults && b["entity.flightSearch.searchParameters.travelClass"] != undefined){
    b["cabinClass"] = b["entity.flightSearch.searchParameters.travelClass"];
}
else if (b.isPackageHotelSeachResult && b["entity.packageSearch.packageSearchParameters.flightSearchParameters.travelClass"] != undefined){
    b["cabinClass"] = b["entity.packageSearch.packageSearchParameters.flightSearchParameters.travelClass"];
}
else if ((utag.isCruiseTP() || utag.isCruiseCabinN()) && b['entity.cruise.cabinCategory']) {
    b['cabinClass'] = b['entity.cruise.cabinCategory'];
}
else if (utag.isMCO() && b['entity.checkout.flightOffers.0.flight.legs.0.segments.0.cabinClass']) {
    b['cabinClass'] = b['entity.checkout.flightOffers.0.flight.legs.0.segments.0.cabinClass'];
}
else if (utag.isPCF() && b['entity.packageSearch.packageSearchParameters.flightSearchParameters.travelClass']) {
    b['cabinClass'] = b['entity.packageSearch.packageSearchParameters.flightSearchParameters.travelClass'];
}
else if(utag.isRCO() && b['entity.checkout.railOffers.0.railProductList.0.legOptionList.0.travelSegmentList.0.availableSeatPreferenceList.0.serviceClass']){
   b['cabinClass'] = b['entity.checkout.railOffers.0.railProductList.0.legOptionList.0.travelSegmentList.0.availableSeatPreferenceList.0.serviceClass'];
}
else if (utag.isRailRateDetails() && b['entity.railSearch.railDetail.railLegs.0.railOfferItems.0.serviceClass']) {
	var cabinClass = "";
	var numLegs = '0';
	numLegs = b.entity.railSearch.railDetail.railLegs.length;
	for (var leg = 0; leg<numLegs; leg++) {
		cabinClass = cabinClass + b.entity.railSearch.railDetail.railLegs[leg].railOfferItems[0].serviceClass + "|";
	}
	b['cabinClass'] = cabinClass.slice(0, -1);
}
else if (utag.isPCarSearch() && b['entity.packageSearch.packageSearchParameters.flightSearchParameters.travelClass']) {
   b['cabinClass'] = b['entity.packageSearch.packageSearchParameters.flightSearchParameters.travelClass'];
}
