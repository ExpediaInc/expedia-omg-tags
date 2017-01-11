if(utag.isCarSR() && typeof b["entity.carSearch.lowestOfferTotalPrice.amount"] != "undefined"){
    b["cheapestFare"] = b["entity.carSearch.lowestOfferTotalPrice.amount"];
}
else if(utag.isHSR()){
    var length = utag.data.entity.hotels.results.results.length;
    var price = Number.MAX_VALUE;

    for(var i = 0;i < length;i++){
        if(b["entity.hotels.results.results."+i+".rooms.0.averagePrice.amount"]< price){
            price = parseInt(b["entity.hotels.results.results."+i+".rooms.0.averagePrice.amount"]);
        }
    }
    b["cheapestFare"] = price;
}
else if(utag.isHIS() && b['entity.hotels.listOfHotels.0.mostEconomicalRoomAvailable.averagePrice.amount'] != undefined)
{
    b['cheapestFare'] = b['entity.hotels.listOfHotels.0.mostEconomicalRoomAvailable.averagePrice.amount'];
}
else if((utag.isFSR() || utag.isPSR_F_Responsive()) && b['entity.flightSearch.searchResults.cheapest.price.amount'] != undefined)
{
    b['cheapestFare'] = b['entity.flightSearch.searchResults.cheapest.price.amount'];
}
else if(utag.isPSR() && b["entity.packageSearch.lowestPriceOffer.decimalAmountString"] != undefined)
{
    b['cheapestFare'] = b["entity.packageSearch.lowestPriceOffer.decimalAmountString"];
}
else if(utag.isPIS_FH() && b["b.entity.packageSearch.results.offers.0.packagePrice.packageTotalPrice.decimalAmountString"] != undefined){
    b['cheapestFare'] = b["b.entity.packageSearch.results.offers.0.packagePrice.packageTotalPrice.decimalAmountString"];
}
else if(utag.isPSR_FH_Responsive() && b.entity.packageSearch.lowestPriceOffer != undefined){
    b['cheapestFare'] = b["entity.packageSearch.lowestPriceOffer.decimalAmountString"];
}
else if(utag.isLXS() && b['entity.activities.activitySearchResults.cheapestPrice.amount'] != undefined){
    b['cheapestFare'] = b['entity.activities.activitySearchResults.cheapestPrice.amount'];
}
