if(utag.isHSR() && typeof b.entity.hotels.search.country != "undefined"){
    var getCountry = b.entity.hotels.search.country.split(",");
    b["country"] = getCountry[getCountry.length -1];
}
else if((utag.isHIS() || utag.isPIS()) && typeof b.entity.hotels.listOfHotels[0] != "undefined" && b.entity.hotels.listOfHotels[0].length > 0 && typeof b.entity.hotels.listOfHotels[0].hotelCountryName != "undefined"){
    b["country"] = b.entity.hotels.listOfHotels[0].hotelCountryName;
}
else if((utag.isHCO() || utag.isHPymt() || utag.isPPymt() || utag.isPCO()) && typeof b["entity.checkout.hotel.hotelCountryName"] != "undefined"){
    b["country"] = b["entity.checkout.hotel.hotelCountryName"];
}
else if(utag.isCarSR() && typeof b.entity.carSearch.searchCriteria.dropOffLocation != "undefined"){
    var getCountryName = b.entity.carSearch.searchCriteria.dropOffLocation.regionName.split(",");
    b["country"] = getCountryName[getCountryName.length -1];
}
else if(utag.isPSR() && b.entity.packageFHSearch != undefined
    && b.entity.packageFHSearch.packageFHSearchParameters != undefined){
    b["country"] = b["entity.packageFHSearch.packageFHSearchParameters.arrivalCountryName"];
}
else if((utag.isPSR_HC() || utag.isPIS_HC() || utag.isPSR_FC() || utag.isPSR_FH_Responsive() || utag.isPIS_FH()) && ( b.entity.packageSearch.packageSearchParameters.flightSearchParameters != undefined)){
    b["country"] = b["entity.packageSearch.packageSearchParameters.flightSearchParameters.departureCountry"];
}
else if((utag.isPSR_HC() || utag.isPIS_HotelCar()) &&
    (b.entity.packageSearch.packageSearchParameters.flightSearchParameters != undefined)){
    b["country"] = b["entity.packageSearch.packageSearchParameters.flightSearchParameters.departureCountry"];
}
else if((utag.isPSR_FHC() || utag.isPSR_FC() || utag.isPIS_FlightHotel()) &&
    (b.entity.packageSearch.packageSearchParameters.flightSearchParameters != undefined)){
    b["country"] = b["entity.packageSearch.packageSearchParameters.flightSearchParameters.arrivalCountry"];
}
else if (utag.isFSR() && b["entity.flightSearch.searchParameters.arrivalCountry"] != undefined){
    b["country"] = utag.getCountryName(b["entity.flightSearch.searchParameters.arrivalCountry"]);
}
else if (utag.isMCO()) {
    if (b["entity.checkout.hotels.0.hotelCountryName"] != undefined) {
        b["country"] = b["entity.checkout.hotels.0.hotelCountryName"];
    }
    else if (b["entity.checkout.flightOffers.0.arrivalCountryName"] != undefined) {
        b["country"] = b["entity.checkout.flightOffers.0.arrivalCountryName"];
    }
    else if (b["entity.checkout.cars.0.dropOffLocation.address.country"] != undefined) {
        b["country"] = b["entity.checkout.cars.0.dropOffLocation.address.country"];
    }
}