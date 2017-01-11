if((utag.isFRateDetails() || utag.isPRateDetails())  && typeof b["entity.tripDetails.flightOffer.arrivalCountryName"] != "undefined"){
    b["countryCode"] = b["entity.tripDetails.flightOffer.arrivalCountryName"];
}
else if(utag.isFCO() && typeof b["entity.checkout.flightOffer.arrivalCountryName"] != "undefined"){
    b["countryCode"] = b["entity.checkout.flightOffer.arrivalCountryName"];
}
else if(utag.isCarSR()){
    b["countryCode"] = b["entity.carSearch.searchCriteria.dropOffRegion.countryCode"];
}
else if((utag.isCarCO() || utag.isCarPymt()) && b["entity.checkout.car.dropOffLocation.address.country"])
{
    b["countryCode"] = b["entity.checkout.car.dropOffLocation.address.country"]
}
else if((utag.isHCO() || utag.isPCO()) && b["entity.checkout.hotel.hotelCountryCode"])
{
    b["countryCode"] = b["entity.checkout.hotel.hotelCountryCode"];
}
else if(utag.isHSR() && b["entity.hotels.results.results.0.hotelCountryCode"])
{
    b["countryCode"] = b["entity.hotels.results.results.0.hotelCountryCode"];
}
else if(utag.isHIS() && b["entity.hotels.listOfHotels.0.hotelCountryCode"])
{
    b["countryCode"] = b["entity.hotels.listOfHotels.0.hotelCountryCode"];
}
else if((utag.isFSR() || utag.isPSR_F_Responsive()) && b["entity.flightSearch.searchParameters.arrivalCountry"])
{
    b["countryCode"] = b["entity.flightSearch.searchParameters.arrivalCountry"];
}
else if (utag.isPSR() && b['entity.packageSearch.packageSearchParameters.flightSearchParameters.arrivalCountry'])
{
    b["countryCode"] = b['entity.packageSearch.packageSearchParameters.flightSearchParameters.arrivalCountry'];
}
else if (utag.isMCO())
{
    if (b["entity.checkout.hotels.0.hotelCountryCode"] != undefined)
    {
        b["countryCode"] = b["entity.checkout.hotels.0.hotelCountryCode"];
    }
    else if (b["entity.checkout.flightOffers.0.arrivalCountryName"] != undefined)
    {
        b["countryCode"] = b["entity.checkout.flightOffers.0.arrivalCountryName"];
    }
    else if (b["entity.checkout.cars.0.dropOffLocation.address.country"] != undefined)
    {
        b["countryCode"] = b["entity.checkout.cars.0.dropOffLocation.address.country"];
    }
}