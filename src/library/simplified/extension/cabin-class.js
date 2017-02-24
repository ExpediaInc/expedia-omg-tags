b['cabinClass'] = '';
if (utag.isCruiseCO() && b['entity.checkout.cruise.cabinCategory'])
{
    b['cabinClass'] = b['entity.checkout.cruise.cabinCategory'];
}
else if (utag.isFRateDetails() && b['entity.flight.flight.flight.legs.0.segments.0.cabinClass'])
{
    b['cabinClass'] = b['entity.flight.flight.flight.legs.0.segments.0.cabinClass'];
}
else if ((utag.isPCO() || utag.isFCO()) && b['entity.checkout.flightOffer.flight.legs.0.segments.0.cabinClass'])
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

/** old
 utag_data['cabinClass'] = '';
 if (utag.isCruiseCO() && utag_data['entity.checkout.cruise.cabinCategory'])
 {
     utag_data['cabinClass'] = utag_data['entity.checkout.cruise.cabinCategory'];
 }
 else if (utag.isFRateDetails() && utag_data['entity.flight.flight.flight.legs.0.segments.0.cabinClass'])
 {
     utag_data['cabinClass'] = utag_data['entity.flight.flight.flight.legs.0.segments.0.cabinClass'];
 }
 else if ((utag.isPCO() || utag.isFCO()) && utag_data['entity.checkout.flightOffer.flight.legs.0.segments.0.cabinClass'])
 {
     utag_data['cabinClass'] = utag_data['entity.checkout.flightOffer.flight.legs.0.segments.0.cabinClass'];
 }
 else if (utag.isPRateDetails() && utag_data['entity.tripDetails.flightOffer.flight.legs.0.segments.0.cabinClass'])
 {
     utag_data['cabinClass'] = utag_data['entity.tripDetails.flightOffer.flight.legs.0.segments.0.cabinClass'];
 }
 else if (utag_data.isFlightSearchResults && utag_data["entity.flightSearch.searchParameters.travelClass"] != undefined){
    utag_data["cabinClass"] = utag_data["entity.flightSearch.searchParameters.travelClass"];
}
 else if (utag_data.isPackageHotelSeachResult && utag_data["entity.packageSearch.packageSearchParameters.flightSearchParameters.travelClass"] != undefined){
    utag_data["cabinClass"] = utag_data["entity.packageSearch.packageSearchParameters.flightSearchParameters.travelClass"];
}
 else if ((utag.isCruiseTP() || utag.isCruiseCabinN()) && utag_data['entity.cruise.cabinCategory']) {
    utag_data['cabinClass'] = utag_data['entity.cruise.cabinCategory'];
}
 **/