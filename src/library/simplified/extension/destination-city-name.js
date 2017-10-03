b['destination'] = '';
if (utag.isLXCO()) {
    if (typeof b["entity.checkout.activity.activityDetail.destination"] !== "undefined") {
        b['destination'] = b.entity.checkout.activity.activityDetail.destination;
    }
    else if (typeof b["entity.checkout.activities.0.activityDetail.destination"] !== "undefined") {
        b['destination'] = b["entity.checkout.activities.0.activityDetail.destination"];
    }
}
else if (utag.isCruiseCO() && b['entity.checkout.cruise.destination'])
{
    b['destination'] = b['entity.checkout.cruise.destination'];
}
else if ((utag.isPSR_FH_Responsive() || utag.isPIS_FH() || utag.isPCF()) && b['entity.packageSearch.packageSearchParameters.flightSearchParameters.arrivalAirportCityState'])
{
    b['destination'] = b['entity.packageSearch.packageSearchParameters.flightSearchParameters.arrivalAirportCityState'].split(',')[0].split('(')[0].trim();
}
else if (utag.isPIS_FHC() && typeof b["entity.multiItemSearch.multiItemSearchParameters.flightSearchParameters.arrivalAirportCityState"] !== "undefined") {
    b['destination'] = b["entity.multiItemSearch.multiItemSearchParameters.flightSearchParameters.arrivalAirportCityState"].split(',')[0].split('(')[0].trim();
} 
else if (utag.isPSR() || utag.isPSR_FHC()) {
    if (typeof b['entity.packageFHSearch.packageFHSearchParameters.arrivalCityName'] !== "undefined") {
        b['destination'] = b['entity.packageFHSearch.packageFHSearchParameters.arrivalCityName'].split('(')[0].trim();
    } 
    else if (typeof b["entity.multiItemSearch.multiItemSearchParameters.flightSearchParameters.arrivalAirportCityState"] !== "undefined") {
        b['destination'] = b["entity.multiItemSearch.multiItemSearchParameters.flightSearchParameters.arrivalAirportCityState"].split(",")[0].split('(')[0].trim();
    }
    else if(typeof b["entity.packageSearch.packageSearchParameters.flightSearchParameters.arrivalAirportCityState"] !== "undefined") {
		b['destination'] = b["entity.packageSearch.packageSearchParameters.flightSearchParameters.arrivalAirportCityState"].split(",")[0]
    }
}
else if ((utag.isPSR_FC() || utag.isPSR_Mobile()|| utag.isPIS_HotelCar()) && b['entity.packageSearch.packageSearchParameters.flightSearchParameters.arrivalAirportCityState'])
{
    b['destination'] = b['entity.packageSearch.packageSearchParameters.flightSearchParameters.arrivalAirportCityState'].split(',')[0].split('(')[0].trim();
}
else if (utag.isPSR_F_Responsive() && b['entity.flightSearch.searchParameters.arrivalAirportCityState'])
{
    b['destination'] = b['entity.flightSearch.searchParameters.arrivalAirportCityState'].split(',')[0];
}
else if (utag.isPRateDetails() && b['entity.tripDetails.flightOffer.destinationAirportCityState'])
{
    b['destination'] = b['entity.tripDetails.flightOffer.destinationAirportCityState'].split('(')[0].trim();
}
else if (utag.isPCO() && b['entity.checkout.flightOffer.destinationAirportCityState'])
{
    b['destination'] = b['entity.checkout.flightOffer.destinationAirportCityState'].split(',')[0];
}
else if (utag.isFCO() && b['entity.checkout.flightOffer.destinationAirportCityState']) {
    b['destination'] = b['entity.checkout.flightOffer.destinationAirportCityState'].split(',')[0].trim();
}
else if (utag.isHCO() || utag.isPTP()) {
    b['destination'] = b['entity.checkout.hotel.hotelCityName'];
}
else if (utag.isCarCO()) {
    if (b['entity.checkout.car.pickUpLocation.address.city'] != undefined) {
        b['destination'] = b['entity.checkout.car.pickUpLocation.address.city'];
    } 
    else if (b['entity.checkout.cars.0.dropOffLocation.address.city'] != undefined) {
        b['destination'] = b['entity.checkout.cars.0.dropOffLocation.address.city'];
    }
}
else if (utag.isHSR() && b['entity.hotels.search.city'])
{
    b['destination'] = b['entity.hotels.search.city'].split(',')[0].split('(')[0].trim();
}
else if (utag.isCruiseSR() && b['entity.cruiseSearch.destination'])
{
    b['destination'] = b['entity.cruiseSearch.destination']
}
else if (utag.isFSR() && b['entity.flightSearch.searchParameters.arrivalAirportCityState'])
{
    b['destination'] = b['entity.flightSearch.searchParameters.arrivalAirportCityState']
}
else if ((utag.isCarSR() || utag.isPCarSearch()) && utag_data["entity.carSearch.searchCriteria.pickUpLocation.regionName"]) {
    utag_data['destination'] = utag_data["entity.carSearch.searchCriteria.pickUpLocation.regionName"].split(",")[0];
    if (utag_data["entity.carSearch.searchCriteria.dropOffLocation.regionName"] != undefined) {
        utag_data['destination'] = utag_data["entity.carSearch.searchCriteria.dropOffLocation.regionName"].split(",")[0];
    }
}
else if (utag.isRailSearchResults() && b['entity.railSearch.searchParameters.arrivalStation.name'] != undefined) {
    b['destination'] = b['entity.railSearch.searchParameters.arrivalStation.name'].split(",")[0];
}
else if (utag.isRailRateDetails() && b['entity.railSearch.railDetail.railLegs.0.railOfferItems.0.arrivalStation.name'])
{
    b['destination'] = b['entity.railSearch.railDetail.railLegs.0.railOfferItems.0.arrivalStation.name'];
}
else if (utag.isPPymt() && typeof b["entity.checkout.flightOffers.0.destinationAirportCityState"] !== "undefined") {
	b['destination'] = b["entity.checkout.flightOffers.0.destinationAirportCityState"].split(",")[0];
}
else if (utag.isMCO()) {
    if (typeof b["entity.checkout.cars.0.dropOffLocation.address.city"] !== "undefined") {
        b["destination"] = b["entity.checkout.cars.0.dropOffLocation.address.city"];
    } 
	else if (typeof b["entity.checkout.flightOffers.0.destinationAirportCityState"] !== "undefined") {
        b["destination"] = b["entity.checkout.flightOffers.0.destinationAirportCityState"].split(",")[0].trim();
    } 
	else if (typeof b["entity.checkout.hotels.0.hotelCityName"] !== "undefined") {
        b["destination"] = b["entity.checkout.hotels.0.hotelCityName"];
    } 
	else if (typeof b["entity.checkout.activities.0.activityDetail.destination"] !== "undefined") {
        b['destination'] = b["entity.checkout.activities.0.activityDetail.destination"];
    }
}

