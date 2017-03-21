b['destinationAirportCode'] = '';
if (utag.isFRateDetails() && b['entity.flight.flight.flight.legs.0.arrivalAirportCode'])
{
    b['destinationAirportCode'] = b['entity.flight.flight.flight.legs.0.arrivalAirportCode'];
}
else if (utag.isPRateDetails() && b['entity.tripDetails.flightOffer.destinationAirportCode'])
{
    b['destinationAirportCode'] = b['entity.tripDetails.flightOffer.destinationAirportCode'];
}
else if ((utag.isFSR() || utag.isPSR_F_Responsive()) && b['entity.flightSearch.searchParameters.arrivalAirport'])
{
    b['destinationAirportCode'] = b['entity.flightSearch.searchParameters.arrivalAirport'];
}
else if (utag.isPSR())
{
    if (b['entity.packageFHSearch.packageFHSearchParameters.packageFlightSearchParameters.arrivalAirportTLA'])
    {
        // FH
        b['destinationAirportCode'] = b['entity.packageFHSearch.packageFHSearchParameters.packageFlightSearchParameters.arrivalAirportTLA'];
    }
    else if (b['entity.packageSearch.packageSearchParameters.flightSearchParameters.arrivalAirport'])
    {
        // FC/HC/FHC
        b['destinationAirportCode'] = b['entity.packageSearch.packageSearchParameters.flightSearchParameters.arrivalAirport'];
    }
}
else if ((utag.isFCO() || utag.isPCO()) && b['entity.checkout.flightOffer.flight.legs.0.arrivalAirportCode'])
{
    b['destinationAirportCode'] = b['entity.checkout.flightOffer.flight.legs.0.arrivalAirportCode'];
}
else if (utag.isCarSR() && b['entity.carSearch.carOffers.0.pickUpLocation.locationCode'] != undefined){
    b['destinationAirportCode'] = b['entity.carSearch.carOffers.0.pickUpLocation.locationCode'];
}
else if (utag.isMCO() && b['entity.checkout.flightOffers.0.flight.legs.0.arrivalAirportCode']) {
    b['destinationAirportCode'] = b['entity.checkout.flightOffers.0.flight.legs.0.arrivalAirportCode'];
}
else if ((utag.isPCF() || utag.isPSR_FC()) && b['entity.packageSearch.packageSearchParameters.flightSearchParameters.arrivalAirport']) {
    b['destinationAirportCode'] = b['entity.packageSearch.packageSearchParameters.flightSearchParameters.arrivalAirport'];
}
else if (utag.isPCarSearch() && b['entity.carSearch.searchCriteria.pickUpLocation.locationCode']) {
    b['destinationAirportCode'] = b['entity.carSearch.searchCriteria.pickUpLocation.locationCode'];
 }