b['originAirportCode'] = '';
if (utag.isFRateDetails() && b['entity.flight.flight.flight.legs.0.departureAirportCode'])
{
    b['originAirportCode'] = b['entity.flight.flight.flight.legs.0.departureAirportCode'];
}
else if (utag.isPRateDetails() && b['entity.tripDetails.flightOffer.originAirportCode'])
{
    b['originAirportCode'] = b['entity.tripDetails.flightOffer.originAirportCode'];
}
else if ((utag.isFSR() || utag.isPSR_F_Responsive()) && b['entity.flightSearch.searchParameters.departureAirport'])
{
    b['originAirportCode'] = b['entity.flightSearch.searchParameters.departureAirport'];
}
else if (utag.isPSR())
{
    if (b['entity.packageFHSearch.packageFHSearchParameters.packageFlightSearchParameters.departureAirportTLA'])
    {
        b['originAirportCode'] = b['entity.packageFHSearch.packageFHSearchParameters.packageFlightSearchParameters.departureAirportTLA'];
    }
    else if (b['entity.packageSearch.packageSearchParameters.flightSearchParameters.departureAirport'])
    {
        // FC/HC/FHC/HC
        b['originAirportCode'] = b['entity.packageSearch.packageSearchParameters.flightSearchParameters.departureAirport'];
    }
}
else if ((utag.isFCO() || utag.isPCO()) && b['entity.checkout.flightOffer.flight.legs.0.departureAirportCode'])
{
    b['originAirportCode'] = b['entity.checkout.flightOffer.flight.legs.0.departureAirportCode'];
}
else if (utag.isMCO && b['entity.checkout.flightOffers.0.flight.legs.0.departureAirportCode']) {
    b['originAirportCode'] = b['entity.checkout.flightOffers.0.flight.legs.0.departureAirportCode'];
}
else if (utag.isPCF() && b['entity.packageSearch.packageSearchParameters.flightSearchParameters.departureAirport']) {
    b['originAirportCode'] = b['entity.packageSearch.packageSearchParameters.flightSearchParameters.departureAirport'];
}