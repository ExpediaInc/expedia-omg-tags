b['origin'] = '';
if(utag.isFCO() || utag.isPCO()){
    b['origin'] = b['originAirportCode'];
}
else if(utag.isHCO()){
    b['origin'] = b['entity.checkout.hotel.cityCode'];
}
else if(utag.isCarCO() && b['entity.checkout.car.pickUpLocation.locationCode'] != undefined){
    b['origin'] = b['entity.checkout.car.pickUpLocation.locationCode'];
}
else if(utag.isCarCO() && b.entity.tripDetails != undefined){
    b['origin'] = b.entity.tripDetails.carInfo.pickUpLocation.locationCode;
}
else if(utag.isLXCO()){
    b['origin'] = b['entity.checkout.activity.activityDetail.destination'];
}
else if (utag.isCruiseCO()){
    b['origin'] = b['entity.checkout.cruise.embarkationPortName'];
}
else if (utag.isCruiseSR() && b.entity && b.entity.cruiseSearch && b.entity.cruiseSearch.cruiseSearchCriteria
    && Array.isArray(b.entity.cruiseSearch.cruiseSearchCriteria.embarkationPorts))
{
    b['origin'] = b.entity.cruiseSearch.cruiseSearchCriteria.embarkationPorts.join('|');
}
else if ((utag.isCarSR() || utag.isPCarSearch()) && b['entity.carSearch.searchCriteria.pickUpLocation.locationCode'] != undefined){
    b['origin'] = b['entity.carSearch.searchCriteria.pickUpLocation.locationCode'];
}
else if (utag.isFSR() || utag.isPCF()){
    b['origin'] = b['entity.flightSearch.searchParameters.departureAirportCityState'];
}
else if (utag.isPSR()){
    b['origin'] = b['entity.packageSearch.packageSearchParameters.flightSearchParameters.departureAirportCityState'];
}
else if (utag.isRCO()){
    b['origin'] = b['entity.checkout.railOffers.0.railProductList.0.legOptionList.0.travelSegmentList.0.departureStationName'];
}
else if (utag.isRailUDP() && b['entity.railSearch.railDetail.railLegs.0.railOfferItems.0.departureStation.name']) {
    b['origin'] = b['entity.railSearch.railDetail.railLegs.0.railOfferItems.0.departureStation.name'];
}
else if (utag.isMCO()) {
    if (b['originAirportCode']) {
        b['origin'] = b['originAirportCode'];
    }
    else if (b['entity.checkout.hotels.0.cityCode']) {
        b['origin'] = b['entity.checkout.hotels.0.cityCode'];
    }
    else if (b['entity.checkout.cars.0.pickUpLocation.locationCode']) {
        b['origin'] = b['entity.checkout.cars.0.pickUpLocation.locationCode'];
    }
}
