//Hotel path
if(utag.isHSR()){
    b["currencyCode"] = b["entity.hotels.resultsSummary.summaryPrice.currency"] ? b["entity.hotels.resultsSummary.summaryPrice.currency"] : "";
}
else if(utag.isHIS() || utag.isPIS()){
    b["currencyCode"] = b["entity.hotels.listOfHotels.0.mostEconomicalRoomAvailable.averagePrice.currency"] ? b["entity.hotels.listOfHotels.0.mostEconomicalRoomAvailable.averagePrice.currency"] : "";
}
if(utag.isHSR() && b["entity.hotels.resultsSummary.summaryPrice.currency"] != undefined){
    b["currencyCode"] = b["entity.hotels.resultsSummary.summaryPrice.currency"];
}

//Package
else if ((utag.isPSR() || utag.isPSR_F_Responsive()) && b["entity.packageSearch.results.offers.0.packagePrice.packageTotalPrice.currency"] != undefined){
    b["currencyCode"] = b["entity.packageSearch.results.offers.0.packagePrice.packageTotalPrice.currency"];
}


//Flight path
else if (utag.isFSR() && b["entity.flightSearch.searchResults.cheapest.price.currency"] != undefined){
    b["currencyCode"] = b["entity.flightSearch.searchResults.cheapest.price.currency"]
}
else if(utag.isFRateDetails() && b["entity.tripDetails.flightOffer.price.currency"] != undefined){
    b["currencyCode"] = b["entity.tripDetails.flightOffer.price.currency"];
}
else if(utag.isFPymt()){
    b["currencyCode"] = b["entity.checkout.cartTotal.currency"] ? b["entity.checkout.cartTotal.currency"] : "";
}
else if(utag.isFCO()){
    b["currencyCode"] = b["entity.checkout.flightOffer.totalPrice.currency"] ? b["entity.checkout.flightOffer.totalPrice.currency"] : "";
}

//Car path
else if(utag.isCarSR() && b["entity.carSearch.lowestOfferDailyPrice.currency"] != undefined){
    b["currencyCode"] = b["entity.carSearch.lowestOfferDailyPrice.currency"];
}
else if((utag.isPSR_HC() || utag.isPIS_HC() || utag.isPSR_FC() || utag.isPSR_FH_Responsive() || utag.isPIS_FH()) && typeof b.entity.packageSearch.results != "undefined"
    && typeof b["entity.packageSearch.results.offers"] != "undefined"){
    utag["currencyCode"] = b["entity.packageSearch.results.offers.0.packagePrice.packageTotalPrice.currency"] ? b["entity.packageSearch.results.offers.0.packagePrice.packageTotalPrice.currency"] : "";
}
else if(utag.isCarSR() && b["entity.carSearch.lowestOfferDailyPrice.currency"] != undefined){
    b["currencyCode"] = b["entity.carSearch.lowestOfferDailyPrice.currency"];
}

//LX
else if (utag.isLXS() && b["entity.activities.activitySearchResults.cheapestPrice.currency"] != undefined){
    b["currencyCode"] = b["entity.activities.activitySearchResults.cheapestPrice.currency"];
}

//Rails Path
else if (utag.isRailSearchResults() && b['entity.railSearch.searchResults.railLegs.0.railOfferItems.0.price.currency'] != undefined) {
    b["currencyCode"]  = b['entity.railSearch.searchResults.railLegs.0.railOfferItems.0.price.currency'];
}
else if (utag.isRailRateDetails() && b['entity.railSearch.railDetail.railLegs.0.railOfferItems.0.price.currency'] != undefined) {
    b['currencyCode'] = b['entity.railSearch.railDetail.railLegs.0.railOfferItems.0.price.currency'];
}

//Common data element
else if((utag.isCarPymt() || utag.isCarCO() || utag.isHCO() || utag.isHPymt()
    || utag.isCruisePymt() || utag.isCruiseCO() || utag.isLXCO() || utag.isPCO() || utag.isPCO_Mobile() || utag.isMCO() || utag.isRCO()) && typeof b["entity.checkout.cartTotal.currency"] != "undefined"){
    b["currencyCode"] = b["entity.checkout.cartTotal.currency"];
}
else if(utag.isLXCO() && b.entity.checkout.cartTotal.currency){
    b["currencyCode"] = b.entity.checkout.cartTotal.currency;
}
else if(utag.isCarCO() && typeof b["entity.tripDetails.totalPrice"] != "undefined"){
    b['currencyCode'] = b["entity.tripDetails.totalPrice.currency"] ? b["entity.tripDetails.totalPrice.currency"] : "";
}
else if(utag.isItinPage() && b["entity.tripDetails.totalPrice"] != "undefined"){
    b['currencyCode'] = b["entity.tripDetails.totalPrice.currency"] ? b["entity.tripDetails.totalPrice.currency"] : "";
}
else if(utag.is3pp()){
    b['currencyCode'] = b["entity.checkout.currency"];
}
// FH : Checkout
else if(utag.isPTP() && b['entity.checkout.cartTotal.currency']){
    b['currencyCode'] = b['entity.checkout.cartTotal.currency'];
}