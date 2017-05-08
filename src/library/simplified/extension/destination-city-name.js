b['destination'] = '';
if (utag.isLXCO() && b['entity.checkout.activity.activityDetail.destination'])
{
    b['destination'] = b['entity.checkout.activity.activityDetail.destination'];
}
if (utag.isLXCO() && b.entity.checkout.activity.activityDetail.destination)
{
    b['destination'] = b.entity.checkout.activity.activityDetail.destination;
}
else if (utag.isCruiseCO() && b['entity.checkout.cruise.destination'])
{
    b['destination'] = b['entity.checkout.cruise.destination'];
}
else if ((utag.isPSR_FH_Responsive() || utag.isPIS_FH() || utag.isPCF()) && b['entity.packageSearch.packageSearchParameters.flightSearchParameters.arrivalAirportCityState'])
{
    b['destination'] = b['entity.packageSearch.packageSearchParameters.flightSearchParameters.arrivalAirportCityState'].split(',')[0].split('(')[0].trim();
}
else if ((utag.isPSR() || utag.isPSR_FHC()) && b['entity.packageFHSearch.packageFHSearchParameters.arrivalCityName'])
{
    b['destination'] = b['entity.packageFHSearch.packageFHSearchParameters.arrivalCityName'].split('(')[0].trim();
}
else if ((utag.isPSR_FC() || utag.isPSR_Mobile()) && b['entity.packageSearch.packageSearchParameters.flightSearchParameters.arrivalAirportCityState'])
{
    b['destination'] = b['entity.packageSearch.packageSearchParameters.flightSearchParameters.arrivalAirportCityState'].split(',')[0].split('(')[0].trim();
}
else if (utag.isPSR_F_Responsive() && b['entity.packageSearch.packageSearchParameters.flightSearchParameters.arrivalAirportCityState'])
{
    b['destination'] = b['entity.packageSearch.packageSearchParameters.flightSearchParameters.arrivalAirportCityState'].split(',')[0].split('(')[0].trim();
}
else if ((utag.isPRateDetails() || utag.isFRateDetails()) && b['entity.tripDetails.flightOffer.destinationAirportCityState'])
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
else if (utag.isHCO() || utag.isHPymt()) {
    b['destination'] = b['entity.checkout.hotel.hotelCityName'];
}
else if (utag.isCarCO() || utag.isCarPymt()) {
    b['destination'] = b['entity.checkout.car.pickUpLocation.address.city'];
}
else if (utag.isHSR() && b['entity.hotels.search.city'])
{
    b['destination'] = b['entity.hotels.search.city'].split(',')[0].split('(')[0].trim();
}
else if (utag.isHIS() && b['entity.hotels.listOfHotels.0.hotelCityName'])
{
    b['destination'] = b['entity.hotels.listOfHotels.0.hotelCityName'];
} else if (utag.isCruiseSR() && b['entity.cruiseSearch.destination'])
{
    b['destination'] = b['entity.cruiseSearch.destination']
}
else if (utag.isFSR() && b['entity.flightSearch.searchParameters.arrivalAirportCityState'])
{
    b['destination'] = b['entity.flightSearch.searchParameters.arrivalAirportCityState'].split(",")[0]
} else if ((utag.isCarSR() || utag.isPCarSearch()) && b["entity.carSearch.searchCriteria.pickUpLocation.regionName"]) {
    b['destination'] = b["entity.carSearch.searchCriteria.pickUpLocation.regionName"].split(",")[0];
    if (b["entity.carSearch.searchCriteria.dropOffLocation.regionName"] != undefined)
    {
        b['destination'] = b["entity.carSearch.searchCriteria.dropOffLocation.regionName"].split(",")[0];
    }
}
else if (utag.isRailSearchResults() && b['entity.railSearch.searchParameters.arrivalStation.name'] != undefined) {
    b['destination'] = b['entity.railSearch.searchParameters.arrivalStation.name'].split(",")[0];
}
else if (utag.isRailRateDetails() && b['entity.railSearch.railDetail.railLegs.0.railOfferItems.0.arrivalStation.name'])
{
    b['destination'] = b['entity.railSearch.railDetail.railLegs.0.railOfferItems.0.arrivalStation.name'];
}
else if (utag.isMCO()) {
    if (b["entity.checkout.cars.0.dropOffLocation.address.city"] != undefined) {
        b['destination'] = b["entity.checkout.cars.0.dropOffLocation.address.city"];
    }
    else if (b["entity.checkout.flightOffers.0.destinationAirportCityState"] != undefined) {
        b['destination'] = b["entity.checkout.flightOffers.0.destinationAirportCityState"].split(",")[0].trim();
    }
    else if (b["entity.checkout.hotels.0.hotelCityName"] != undefined) {
        b['destination'] = b["entity.checkout.hotels.0.hotelCityName"];
    }
}
else if (utag.isLXI() && b["entity.activities.activityInfo.activityDetail.destination"]) {
    b['destination'] = b["entity.activities.activityInfo.activityDetail.destination"].split(",")[0];
} else if( utag.isLXCO()|| utag.isLXPymt()) {
    b['destination'] = b["entity.checkout.activities.0.activityDetail.destination"]
} else if((utag.isPSR() || utag.isPSR_FHC() || utag.isPSR_HC() || utag.isPIS_HC() || utag.isPSR_FC() || utag.isPSR_FH_Responsive() || utag.isPIS_FH()|| utag.isPIS()|| utag.isPCF()) && b["entity.packageSearch.packageSearchParameters.flightSearchParameters.arrivalAirportCityState"]){
    b['destination'] = b["entity.packageSearch.packageSearchParameters.flightSearchParameters.arrivalAirportCityState"].split(",")[0];
} else if(utag.isPCO() && b["entity.checkout.hotel.hotelCityName"]){
    b['destination'] = b["entity.checkout.hotel.hotelCityName"];
}

