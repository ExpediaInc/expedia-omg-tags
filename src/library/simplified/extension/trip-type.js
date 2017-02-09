/**
 * Trip Type
 * 4-1
 * SR:          Flight, Packages
 * Check-Out:   Flight, Packages
 */

    var ONE_WAY = 'OneWay';
    var ROUND_TRIP = 'RoundTrip';
    var MULTI_DEST = 'MultiDest';

    function getTripType(flightTripTypeEnum)
    {
        var tripType = '';
        if (flightTripTypeEnum == 'OW')
        {
            tripType = ONE_WAY;
        }
        else if (flightTripTypeEnum == 'RT')
        {
            tripType = ROUND_TRIP;
        }
        else if (flightTripTypeEnum == 'MD')
        {
            tripType = MULTI_DEST
        }
        return tripType;
    }

    b['tripType'] = '';

    if (utag.isFSR() && b['entity.flightSearch.searchParameters.flightType'] != undefined)
    {
        b['tripType'] = b['entity.flightSearch.searchParameters.flightType']
    }
    else if (utag.isFSRMDest())
    {
        b['tripType'] = MULTI_DEST;
    }
    else if (utag.isPSR())
    {
        b['tripType'] = ROUND_TRIP;
    }
    else if (utag.isFCO() && b['entity.checkout.flightOffer.tripType'] != undefined)
    {
        b['tripType'] = getTripType(b['entity.checkout.flightOffer.tripType']);
    }
    else if (utag.isMCO() && b['entity.checkout.flightOffers.0.tripType'] != undefined)
    {
        b['tripType'] = getTripType(b['entity.checkout.flightOffers.0.tripType']);
    }
    else if (utag.isPCO())
    {
        b['tripType'] = ROUND_TRIP;
    }
    else if (utag.isPRateDetails() && b['entity.tripDetails.flightOffer.tripType'] != undefined){
        b['tripType'] = getTripType(b['entity.tripDetails.flightOffer.tripType']);
    }
    else if (utag.isFRateDetails() && b['entity.tripDetails.flightOffer.tripType'] != undefined){
        b['tripType'] = b['entity.tripDetails.flightOffer.tripType']
    }
