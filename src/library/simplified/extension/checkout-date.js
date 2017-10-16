
b['checkOutDate'] = '';
b['checkOutTimeStampUtc'] = '';
if (utag.isHSR() && b['entity.hotels.search.hotelParameters.checkOutDate'])
{
    b['checkOutDate'] = b['entity.hotels.search.hotelParameters.checkOutDate'];
}
else if (utag.isRailSearchResults() && b['entity.railSearch.searchParameters.journeyLegs.1.isoFormatDate']!= undefined )
{
    b["checkOutDate"] = b['entity.railSearch.searchParameters.journeyLegs.1.isoFormatDate'];
}
else if (utag.isHIS() && b['entity.hotels.listOfHotels.0.checkOutDate'])
{
    b['checkOutDate'] = b['entity.hotels.listOfHotels.0.checkOutDate'];
}
else if (utag.isHCO() && b['entity.checkout.hotel.isoCheckOutDate'])
{
    b['checkOutDate'] = b['entity.checkout.hotel.isoCheckOutDate'];
}
else if (utag.isPSR() || utag.isPIS_FH())
{
    if (true == b['entity.packageFHSearch.packageFHSearchParameters.packageHotelSearchParameters.partialStay'])
    {
        // FH/FHC (Partial Stay)
        b['checkOutDate'] = b['entity.packageFHSearch.packageFHSearchParameters.packageHotelSearchParameters.checkOutDateForPartialStay'];
    }
    else if (b['entity.packageFHSearch.packageFHSearchParameters.departureDate']
        && b['entity.packageFHSearch.packageFHSearchParameters.returnDate'])
    {
        // FH/FHC
        b['checkOutDate'] = b['entity.packageFHSearch.packageFHSearchParameters.returnDate'];
    }
    else if (b['entity.hotels.listOfHotels.0.checkOutDate'])
    {
        b['checkOutDate'] = b['entity.hotels.listOfHotels.0.checkOutDate'];
    }
    else if (b['entity.packageSearch.packageSearchParameters.isoFormatReturnDate'])
    {
        // FC/HC
        b['checkOutDate'] = b['entity.packageSearch.packageSearchParameters.isoFormatReturnDate'];
    }
}
else if (utag.isPIS())
{
    if (b['entity.hotels.listOfHotels.0.checkOutDate'])
    {
        b['checkOutDate'] = b['entity.hotels.listOfHotels.0.checkOutDate'];
    }
    else if (b['entity.packageSearch.packageSearchParameters.isoFormatReturnDate'])
    {
        b['checkOutDate'] = b['entity.packageSearch.packageSearchParameters.isoFormatReturnDate'];
    }
}
else if (utag.isPRateDetails())
{
    if (b['entity.tripDetails.hotelOffer.isoFormatCheckOutDate'])
    {
        b['checkOutDate'] = b['entity.tripDetails.hotelOffer.isoFormatCheckOutDate']
    }
    else if (b['entity.tripDetails.utcTripEndDate'])
    {
        var toIsoDate = function (jsDate)
        {
            return jsDate.getFullYear()
                + '-' + ('0' + (jsDate.getMonth() + 1)).slice(-2)
                + '-' + ('0' + jsDate.getDate()).slice(-2)
        };

        var tripEndDate = b['entity.tripDetails.utcTripEndDate'];
        if (!isNaN(tripEndDate))
        {
            b['checkOutDate'] = toIsoDate(new Date(tripEndDate));
        }
    }
}
else if (utag.isPCO() && b['entity.checkout.hotel.isoCheckOutDate'])
{
    b['checkOutDate'] = b['entity.checkout.hotel.isoCheckOutDate'];
}
else if ((utag.isCarSR() || utag.isPCarSearch()) && typeof b["entity.carSearch.searchCriteria.isoFormatDropOffDate"])
{
    b['checkOutDate'] = b.entity.carSearch.searchCriteria.isoFormatDropOffDate.split('T')[0];
}
else if (utag.isCarCO() || utag.isCarPymt()) {
    if (b["entity.checkout.car.isoFormatDropOffDate"]) {
        b["checkOutDate"] = b["entity.checkout.car.isoFormatDropOffDate"]
    } else if (b.entity.tripDetails != undefined) {
        b["checkOutDate"] = b.entity.tripDetails.carInfo.isoFormatDropOffDate;
    } else if (typeof b.entity.checkout.cars[0].isoFormatDropOffDate !== "undefined") {
        b['checkOutDate'] = b.entity.checkout.cars[0].isoFormatDropOffDate;
    }
}
else if(utag.isLXCO() || utag.isLXGT_CO() || utag.isLXGT_Pymt() || utag.isLXPymt()){
    //handle old page here:
    if (typeof b['entity.checkout.activity.isoFormatEndDate'] !== 'undefined') {
        b['checkOutDate'] = b['entity.checkout.activity.isoFormatEndDate'];
    }
    //handle old or new page here:
    if (typeof b["entity.checkout.activities.0.isoFormatEndDate"] !== 'undefined') {
        b['checkOutDate'] = b["entity.checkout.activities.0.isoFormatEndDate"];
    }
}
else if((utag.isFSR() || utag.isPSR_F_Responsive()))
{
    if (utag.isFSRMDest()) {
        var legLength = b.entity.flightSearch.searchResults.cheapest.flight.legs.length;
        if (typeof b.entity.flightSearch.searchResults.cheapest.flight.legs[legLength-1].isoFormatDepartureTimestamp !== "undefined") {
            b['checkOutDate'] = b.entity.flightSearch.searchResults.cheapest.flight.legs[legLength-1].isoFormatDepartureTimestamp;
        }
    }
    else if (typeof b['entity.flightSearch.searchParameters.isoFormatReturnDate'] !== "undefined") {
        b['checkOutDate'] = b['entity.flightSearch.searchParameters.isoFormatReturnDate'];
    }
}
else if (utag.isFRateDetails() && b.entity.tripDetails.flightOffer.flight.legs != undefined )
{
    var indexOfLastLeg = b.entity.tripDetails.flightOffer.flight.legs.length - 1;
    var indexOfLastSegment = b.entity.tripDetails.flightOffer.flight.legs[indexOfLastLeg].segments.length - 1;

    if( indexOfLastLeg >= 0 && indexOfLastSegment >= 0)
    {
        b["checkOutDate"] = b["entity.tripDetails.flightOffer.flight.legs."+indexOfLastLeg+".segments."+indexOfLastSegment+".isoFormatArrivalTimestamp"];
    }
}
else if ((utag.isFCO() || utag.isFPymt()) && b.entity.checkout.flightOffer.flight.legs != undefined )
{
    var indexOfLastLeg = b.entity.checkout.flightOffer.flight.legs.length - 1;
    var indexOfLastSegment = b.entity.checkout.flightOffer.flight.legs[indexOfLastLeg].segments.length - 1;

    if( indexOfLastLeg >= 0 && indexOfLastSegment >= 0)
    {
        b["checkOutDate"] = b["entity.checkout.flightOffer.flight.legs."+indexOfLastLeg+".segments."+indexOfLastSegment+".isoFormatArrivalTimestamp"];
    }
}
else if (utag.isCarCO() && b['entity.checkout.car.isoFormatDropOffDate'])
{
    b['checkOutDate'] = b['entity.checkout.car.isoFormatDropOffDate'];
}
else if ((utag.isCruiseIS() || utag.isCruiseTP() || utag.isCruiseCabinN()) && b['entity.cruise.isoFormatReturnDate'])
{
    b['checkOutDate'] = b['entity.cruise.isoFormatReturnDate'];
}
else if (utag.isCruiseCO() && b['entity.checkout.cruise.isoFormatReturnDate'])
{
    b['checkOutDate'] = b['entity.checkout.cruise.isoFormatReturnDate'];
}
else if(utag.is3pp() && b['entity.checkout.hotel.checkOutDate']){
    b['checkOutDate'] = b['entity.checkout.hotel.checkOutDate'];
}
else if (utag.isLXS() && b["entity.activities.activitySearchParameters.isoFormatEndDate"] != undefined){
    b['checkOutDate'] = b["entity.activities.activitySearchParameters.isoFormatEndDate"];
}
else if (utag.isLXI() && b["entity.activities.activityInfo.activityDetail.isoFormatEndDate"] != undefined){
    b['checkOutDate'] = b["entity.activities.activityInfo.activityDetail.isoFormatEndDate"];
}
else if (utag.isMCO()) {
    if (b['entity.checkout.hotels.0.isoCheckOutDate'] != undefined) {
        var numberOfHotel = b.entity.checkout.hotels.length ;
        var hotelIndex = numberOfHotel - 1;

        if(numberOfHotel > 1) {
            var checkout = 'entity.checkout.hotels.' + hotelIndex + '.isoCheckOutDate';
            b['checkOutDate'] = b[checkout];
        }
        else {
            b['checkOutDate'] = b['entity.checkout.hotels.0.isoCheckOutDate'];
        }
    }
    else if (b['entity.checkout.flightOffers.0.flight.legs.0'] != undefined )
    {
        var indexOfLastLeg = b.entity.checkout.flightOffers[0].flight.legs.length - 1;
        var indexOfLastSegment = b.entity.checkout.flightOffers[0].flight.legs[indexOfLastLeg].segments.length - 1;

        if (indexOfLastLeg >= 0 && indexOfLastSegment >= 0)
        {
            b['checkOutDate'] = b["entity.checkout.flightOffers.0.flight.legs."+indexOfLastLeg+".segments."+indexOfLastSegment+".isoFormatArrivalTimestamp"];
        }
    }
    else if (b['entity.checkout.cars.0.isoFormatDropOffDate'] != undefined) {
        b['checkOutDate'] = b['entity.checkout.cars.0.isoFormatDropOffDate'];
    }
    else if(b['entity.checkout.activities.1.isoFormatEndDate']){
        b['checkOutDate'] = b['entity.checkout.activities.1.isoFormatEndDate'];
    }
}
else if (utag.isPPymt()){
    //FH
    if (b["entity.checkout.hotel.isoCheckOutDate"] != undefined) {
        b['checkOutDate'] = b["entity.checkout.hotel.isoCheckOutDate"];
    }
    // HC, FHC
    if (b["entity.checkout.hotels.0.isoCheckOutDate"] != undefined) {
        b['checkOutDate'] = b["entity.checkout.hotels.0.isoCheckOutDate"];
    }
    //FC
    if (b["entity.checkout.cars.0.isoFormatDropOffDate"] != undefined) {
        b['checkOutDate'] = b["entity.checkout.cars.0.isoFormatDropOffDate"].split("T")[0];
    }
}
else if (utag.isItinPage()){
    //FH, FHC, FC (all has flights)
    if (b["entity.tripDetails.flightOffers.0.flight.legs.0.segments.0.isoFormatArrivalTimestamp"] != undefined) {
        b['checkOutDate'] = b["entity.tripDetails.flightOffers.0.flight.legs.0.segments.0.isoFormatArrivalTimestamp"].split("T")[0];
    }
    if (b["entity.tripDetails.hotelOffer.isoFormatCheckOutDate"] != undefined) {
        b['checkOutDate'] = b["entity.tripDetails.hotelOffer.isoFormatCheckOutDate"];
    }

    //utc
    if (b["entity.tripDetails.utcTripEndDate"] != undefined){
        b['checkOutTimeStampUtc'] = b["entity.tripDetails.utcTripEndDate"];
    }
    if (typeof b['entity.tripDetails.activities.0.isoFormatEndDate'] !== undefined) {
        b['checkOutDate'] = b['entity.tripDetails.activities.0.isoFormatEndDate'];
    }
}
else if (utag.isRailRateDetails() && b['entity.railSearch.railDetail.isoFormatReturnDate']){
    b['checkOutDate'] = b['entity.railSearch.railDetail.isoFormatReturnDate'];
}
else if (utag.isPCF() && b['entity.packageSearch.packageSearchParameters.isoFormatReturnDate']) {
    b['checkOutDate'] = b['entity.packageSearch.packageSearchParameters.isoFormatReturnDate'];
}
else if(utag.isRCO() && b['entity.checkout.railOffers.0.tripEndDateTime']){
    b['checkOutDate'] = b['entity.checkout.railOffers.0.tripEndDateTime'];
}
if(b["checkOutDate"] != undefined)
{
    b["checkOutDate"] = b["checkOutDate"].split("T")[0];
}
