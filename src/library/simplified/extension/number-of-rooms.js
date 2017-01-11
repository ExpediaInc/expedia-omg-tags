b['numberOfRooms'] = '';
if(utag.isHSR() && b['entity.hotels.search.numberOfRooms'] != undefined)
{
    b['numberOfRooms'] = b['entity.hotels.search.numberOfRooms'];
}
else if(utag.isHIS() && b['entity.hotels.listOfHotels.0.rooms.0'] != undefined )
{
    b['numberOfRooms'] = utag.data.entity.hotels.listOfHotels[0].rooms.length;
}
else if(utag.isPSR() && b['entity.packageSearch.packageSearchParameters.packageHotelSearchParameters.numberOfRooms'] != undefined)
{
    b['numberOfRooms'] = b['entity.packageSearch.packageSearchParameters.packageHotelSearchParameters.numberOfRooms'];
}
else if(utag.isPSR_FH_Responsive() || utag.isPIS_FH()){
    b['numberOfRooms'] = b.entity.packageSearch.packageSearchParameters.travelers.length;
}
else if ((utag.isHCO() || utag.isPCO() || utag.isPCO_Mobile()) && b.entity != undefined
    && b.entity.checkout != undefined
    && b.entity.checkout.hotel != undefined
    && b.entity.checkout.hotel.rooms != undefined
    && Array.isArray(b.entity.checkout.hotel.rooms))
{
    b['numberOfRooms'] = b.entity.checkout.hotel.rooms.length;
}
else if (utag.isMCO() && b['entity.checkout.hotels.0.rooms.0'] != undefined)
{
    b['numberOfRooms'] = b.entity.checkout.hotels[0].rooms.length;
}
else if (utag.isPRateDetails() && b['entity.tripDetails.hotelOffer.numRooms'])
{
    b['numberOfRooms'] = b['entity.tripDetails.hotelOffer.numRooms'];
}
// For backwards compatibility (roomCount is deprecated)
b['roomCount'] = b['numberOfRooms'];