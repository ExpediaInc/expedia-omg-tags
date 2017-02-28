
b['checkInDate'] = '';
b['checkInTimeStampUtc'] = '';
if (utag.isHSR() && b['entity.hotels.search.hotelParameters.checkInDate'] != undefined)
{
    b['checkInDate'] = b['entity.hotels.search.hotelParameters.checkInDate'];
}
else if (utag.isHIS() && b['entity.hotels.listOfHotels.0.checkInDate'] != undefined)
{
    b['checkInDate'] = b['entity.hotels.listOfHotels.0.checkInDate'];
}
else if ((utag.isHCO() || utag.isHPymt()) && b['entity.checkout.hotel.isoCheckInDate'] != undefined)
{
    b['checkInDate'] = b['entity.checkout.hotel.isoCheckInDate'];
}
else if (utag.isPSR() || utag.isPIS_FH())
{
    if (true == b['entity.packageFHSearch.packageFHSearchParameters.packageHotelSearchParameters.partialStay'])
    {
        // FH/FHC (Partial Stay)
        b['checkInDate'] = b['entity.packageFHSearch.packageFHSearchParameters.packageHotelSearchParameters.checkInDateForPartialStay'];
    }
    else if (b['entity.packageFHSearch.packageFHSearchParameters.departureDate'])
    {
        // FH/FHC
        b['checkInDate'] = b['entity.packageFHSearch.packageFHSearchParameters.departureDate'];
    }
    else if (b['entity.packageSearch.packageSearchParameters.isoFormatDepartureDate'])
    {
        // FC/HC
        b['checkInDate'] = b['entity.packageSearch.packageSearchParameters.isoFormatDepartureDate'];
    }
}
else if (utag.isPIS())
{
    if (b['entity.hotels.listOfHotels.0.checkInDate']) {
        b['checkInDate'] = b['entity.hotels.listOfHotels.0.checkInDate'];
    }
    else if (b['entity.packageSearch.packageSearchParameters.isoFormatDepartureDate'])
    {
        b['checkInDate'] = b['entity.packageSearch.packageSearchParameters.isoFormatDepartureDate'];
    }
}
else if (utag.isPRateDetails())
{
    if (b['entity.tripDetails.hotelOffer.isoFormatCheckInDate'])
    {
        b['checkInDate'] = b['entity.tripDetails.hotelOffer.isoFormatCheckInDate'];
    }
    else if (b['entity.tripDetails.utcTripStartDate'])
    {
        var toIsoDate = function (jsDate)
        {
            return jsDate.getFullYear()
                + '-' + ('0' + (jsDate.getMonth() + 1)).slice(-2)
                + '-' + ('0' + jsDate.getDate()).slice(-2)
        };

        var tripStartDate = b['entity.tripDetails.utcTripStartDate'];
        if (!isNaN(tripStartDate))
        {
            b['checkInDate'] = toIsoDate(new Date(tripStartDate));
        }
    }
}
else if (utag.isPCO() && b['entity.checkout.hotel.isoCheckInDate'])
{
    b["checkInDate"] = b['entity.checkout.hotel.isoCheckInDate'];
}
else if ((utag.isCarCO() || utag.isCarPymt()) && b["entity.checkout.car.isoFormatPickUpDate"] != undefined)
{
    b["checkInDate"] = b.entity.checkout.car.isoFormatPickUpDate;
}
else if (utag.isCarCO() && b.entity.tripDetails != undefined)
{
    b["checkInDate"] = b.entity.tripDetails.carInfo.isoFormatPickUpDate;
}
else if (utag.isLXCO() && b['entity.checkout.activities.0.isoFormatStartDate'] != undefined)
{
    b['checkInDate'] = b['entity.checkout.activities.0.isoFormatStartDate'];
}
else if(utag.isLXCO() && b['entity.checkout.activity.activityDetail.isoFormatStartDate'] != undefined)
{
    b['checkInDate'] = b['entity.checkout.activity.activityDetail.isoFormatStartDate'];
}
else if(utag.isLXCO() && b.entity.checkout.activity.isoFormatStartDate != undefined){
    b['checkInDate'] = b.entity.checkout.activity.isoFormatStartDate;
}
else if((utag.isFSR() || utag.isPSR_F_Responsive()) && b['entity.flightSearch.searchParameters.isoFormatDepartureDate'])
{
    b['checkInDate'] = b['entity.flightSearch.searchParameters.isoFormatDepartureDate'];
}
else if (utag.isFRateDetails() && b.entity.tripDetails.flightOffer.flight.legs != undefined )
{
    b["checkInDate"] = b["entity.tripDetails.flightOffer.flight.legs.0.isoFormatDepartureTimestamp"];
}
else if((utag.isCarSR() || utag.isPCarSearch()) && b['entity.carSearch.searchCriteria.isoFormatPickUpDate'] != undefined){
    b['checkInDate'] =  b['entity.carSearch.searchCriteria.isoFormatPickUpDate'];
}
else if(utag.isFCO() && b['entity.checkout.flightOffer.flight.legs.0.isoFormatDepartureTimestamp'] != undefined)
{
    b['checkInDate'] = b['entity.checkout.flightOffer.flight.legs.0.isoFormatDepartureTimestamp'];
}
else if (utag.isCarCO() && b['entity.checkout.car.isoFormatPickUpDate'])
{
    b['checkInDate'] = b['entity.checkout.car.isoFormatPickUpDate'];
}
else if (utag.isCruiseCO() && b['entity.checkout.cruise.isoFormatDepartureDate'])
{
    b['checkInDate'] = b['entity.checkout.cruise.isoFormatDepartureDate'];
}
else if (utag.isCruiseSR() && b['entity.cruiseSearch.cruiseSearchCriteria.isoFormatEarliestDepartureDate'])
{
    b['checkInDate'] = b['entity.cruiseSearch.cruiseSearchCriteria.isoFormatEarliestDepartureDate'];
}
else if ((utag.isCruiseIS() || utag.isCruiseTP() || utag.isCruiseCabinN()) && b['entity.cruise.isoFormatDepartureDate'])
{
    b['checkInDate'] = b['entity.cruise.isoFormatDepartureDate'];
}
else if(utag.is3pp() && b['entity.checkout.hotel.checkInDate']){
    b['checkInDate'] = b['entity.checkout.hotel.checkInDate'];
}
else if (utag.isLXS() && b["entity.activities.activitySearchParameters.isoFormatStartDate"] != undefined){
    b['checkInDate'] = b["entity.activities.activitySearchParameters.isoFormatStartDate"];
}
else if (utag.isLXI() && b["entity.activities.activityInfo.activityDetail.isoFormatStartDate"] != undefined){
    b['checkInDate'] = b["entity.activities.activityInfo.activityDetail.isoFormatStartDate"];
}
else if (utag.isMCO()) {
    if (b['entity.checkout.hotels.0.isoCheckInDate'] != undefined) {
        b['checkInDate'] = b['entity.checkout.hotels.0.isoCheckInDate'];
    }
    else if (b['entity.checkout.flightOffers.0.flight.legs.0.isoFormatDepartureTimestamp'] != undefined) {
        b['checkInDate'] = b['entity.checkout.flightOffers.0.flight.legs.0.isoFormatDepartureTimestamp'];
    }
    else if (b['entity.checkout.cars.0.isoFormatPickUpDate'] != undefined) {
        b['checkInDate'] = b['entity.checkout.cars.0.isoFormatPickUpDate'];
    }
}
else if (utag.isPPymt()){
    //FH
    if (b["entity.checkout.hotel.isoCheckInDate"] != undefined) {
        b['checkInDate'] = b["entity.checkout.hotel.isoCheckInDate"];
    }
    // HC, FHC
    if (b["entity.checkout.hotels.0.isoCheckInDate"] != undefined) {
        b['checkInDate'] = b["entity.checkout.hotels.0.isoCheckInDate"];
    }
    //FC
    if (b["entity.checkout.cars.0.isoFormatPickUpDate"] != undefined) {
        b['checkInDate'] = b["entity.checkout.cars.0.isoFormatPickUpDate"].split("T")[0];
    }
}
else if (utag.isItinPage()){
    //FH, FHC, FC (all has flights)
    if (b["entity.tripDetails.flightOffers.0.flight.legs.0.segments.0.isoFormatDepartureTimestamp"] != undefined) {
        b['checkInDate'] = b["entity.tripDetails.flightOffers.0.flight.legs.0.segments.0.isoFormatDepartureTimestamp"].split("T")[0];
    }
    //HC
    if (b["entity.tripDetails.hotelOffer.isoFormatCheckInDate"] != undefined) {
        b['checkInDate'] = b["entity.tripDetails.hotelOffer.isoFormatCheckInDate"];
    }

    //utc
    if (b["entity.tripDetails.utcTripStartDate"] != undefined){
        b['checkInTimeStampUtc'] = b["entity.tripDetails.utcTripStartDate"];
    }
}
else if (utag.isPCF() && b['entity.packageSearch.packageSearchParameters.isoFormatDepartureDate']) {
    b['checkInDate'] = b['entity.packageSearch.packageSearchParameters.isoFormatDepartureDate'];
}
if(b["checkInDate"] != '')
{
    b["checkInDate"] = b["checkInDate"].split("T")[0];
}
