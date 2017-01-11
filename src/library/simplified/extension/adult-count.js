//Hotel path
if(utag.isHSR() && typeof b.entity.hotels.search.hotelParameters.rooms != "undefined"){
    var roomsCount = b.entity.hotels.search.hotelParameters.rooms.length;
    var adults = 0;
    for(var i = 0; i < roomsCount; i++){
        var roomObject = "entity.hotels.search.hotelParameters.rooms." + i +".numAdults";
        adults = adults + parseInt(b[roomObject]);
    }

    b["adults"] = adults;
    utag.DB('Hotel Search page: Adult count =' + b["adults"]);

}
else if((utag.isHIS() || utag.isPIS()) && typeof b["entity.hotels.listOfHotels.0"] != "undefined"){
    var roomsCount = b.entity.hotels.listOfHotels[0].rooms.length;
    var adults = 0;
    for(var i = 0; i < roomsCount; i++){
        var roomObject = "entity.hotels.listOfHotels.0.rooms." + i +".numAdults";
        adults = adults + parseInt(b[roomObject]);
    }

    b["adults"] = adults;
    utag.DB('Hotel IS page: Adult count =' + b["adults"]);
}
else if (utag.isPIS() && b['entity.packageSearch.packageSearchParameters.travelers.0']) {
    var adults = 0;
    var roomsCount = b.entity.packageSearch.packageSearchParameters.travelers.length;
    for (var i = 0; i < roomsCount; i++) {
        var roomObject = 'entity.packageSearch.packageSearchParameters.travelers.' + i + '.numberOfAdults';
        adults += parseInt(b[roomObject]);
    }
    b['adults'] = adults;
}
else if(utag.isHCO() && typeof b.entity.checkout.hotel.rooms != "undefined"){
    var roomsCount = b.entity.checkout.hotel.rooms.length;
    var adults = 0;
    for(var i = 0; i < roomsCount; i++){
        var roomObject = "entity.checkout.hotel.rooms." + i +".numAdults";
        adults = adults + parseInt(b[roomObject]);
    }

    b["adults"] = adults;
    utag.DB('Hotel confirmation page: Adult count =' + b["adults"]);
}

//Flight path
else if(utag.isFSR() || utag.isPSR_F_Responsive()){
    b["adults"] = b["entity.flightSearch.travelers.numberOfAdults"];
    utag.DB('Flight Search page: Adult count =' + b["adults"]);
}
else if(utag.isFRateDetails() ){
    b["adults"] = b["entity.flight.travelerInfo.numberOfAdults"];
    utag.DB('Flight rate details page: Adult count =' + b["adults"]);
}
else if (utag.isPRateDetails() && b['entity.tripDetails.travelersInfo.numberOfAdults'])
{
    b["adults"] = b['entity.tripDetails.travelersInfo.numberOfAdults'];
}
else if(utag.isFPymt() || utag.isFCO() || utag.isPPymt() || utag.isPCO()){
    b["adults"] = b["entity.checkout.flightOffer.travelersInfo.numberOfAdults"];
    utag.DB('Flight/Package payment/checkout page: Adult count =' + b["adults"]);
}

//Package path
else if(utag.isPSR() && !utag.isPSR_FHC() && !utag.isPSR_HC() && !utag.isPSR_FC() && !utag.isPSR_FH_Responsive() && !utag.isPSR_Mobile() && b.entity.packageFHSearch.packageFHSearchParameters.packageTravelersPerRooms != undefined){
    var roomsCount = b.entity.packageFHSearch.packageFHSearchParameters.packageTravelersPerRooms.length;
    var adults = 0;
    for(var i = 0; i < roomsCount; i++){
        var roomObject = "entity.packageFHSearch.packageFHSearchParameters.packageTravelersPerRooms." + i +".adultsCount";
        adults = adults + parseInt(b[roomObject]);
    }

    b["adults"] = adults;
    utag.DB('Package Search page: Adult count =' + b["adults"]);
}
else if((utag.isPSR() || utag.isPSR_FHC() || utag.isPSR_HC() || utag.isPSR_FC() || utag.isPIS_HC() || utag.isPSR_FH_Responsive() || utag.isPIS_FH() || utag.isPSR_Mobile()) && b.entity.packageSearch.packageSearchParameters.travelers != undefined){
    var roomsCount = b.entity.packageSearch.packageSearchParameters.travelers.length;
    var adults = 0;
    for(var i = 0; i < roomsCount; i++){
        var roomObject = "entity.packageSearch.packageSearchParameters.travelers." + i +".numberOfAdults";
        adults = adults + parseInt(b[roomObject]);
    }

    b["adults"] = adults;
    utag.DB('Package Search page: Adult count =' + b["adults"]);
}
else if (utag.isLXCO())
{
    var adultCount = 0;
    var seniorCount = 0;
    if (!isNaN(b['entity.checkout.activity.travelerInfo.numberOfAdults']))
    {
        adultCount = parseInt(b['entity.checkout.activity.travelerInfo.numberOfAdults']);
    }
    if (!isNaN(b['entity.checkout.activity.travelerInfo.numberOfSeniors']))
    {
        seniorCount = parseInt(b['entity.checkout.activity.travelerInfo.numberOfSeniors']);
    }
    b['adults'] = adultCount + seniorCount;
}
else if (utag.isCruiseCO())
{
    var adultCount = 0;
    var seniorCount = 0;
    if (!isNaN(b['entity.checkout.cruise.traveler.numberOfAdults']))
    {
        adultCount = parseInt(b['entity.checkout.cruise.traveler.numberOfAdults']);
    }
    if (!isNaN(b['entity.checkout.cruise.traveler.numberOfSeniors']))
    {
        seniorCount = parseInt(b['entity.checkout.cruise.traveler.numberOfSeniors']);
    }
    b['adults'] = adultCount + seniorCount;

}
else if (utag.isMCO()) {
    if (b["entity.checkout.flightOffers.0.travelersInfo.numberOfAdults"] != undefined) {
        b["adults"] = b["entity.checkout.flightOffers.0.travelersInfo.numberOfAdults"];
    }
    else if (b["entity.checkout.hotels.0.rooms.0.numAdults"] != undefined) {
        var roomsCount = b.entity.checkout.hotels[0].rooms.length;
        var adults = 0;
        for(var i = 0; i < roomsCount; i++) {
            var roomObject = "entity.checkout.hotels.0.rooms." + i +".numAdults";
            adults = adults + parseInt(b[roomObject]);
        }

        b["adults"] = adults;
    }
}