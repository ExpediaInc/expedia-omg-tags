//Hotel path
if((utag.isHIS() || utag.isPIS()) && typeof b["entity.hotels.listOfHotels.0.mostEconomicalRoomAvailable.averagePrice.currency"] !== "undefined"){
    b["currencyCode"] = b["entity.hotels.listOfHotels.0.mostEconomicalRoomAvailable.averagePrice.currency"];
}
else if(utag.isHSR() && typeof b["entity.hotels.resultsSummary.summaryPrice.currency"] !== "undefined"){
    b["currencyCode"] = b["entity.hotels.resultsSummary.summaryPrice.currency"];
}

//Package
else if ((utag.isPSR()  || utag.isPSR_F_Responsive() || utag.isPIS_HotelCar()) && typeof b["entity.packageSearch.results.offers.0.packagePrice.packageTotalPrice.currency"] !== "undefined"){
    b["currencyCode"] = b["entity.packageSearch.results.offers.0.packagePrice.packageTotalPrice.currency"];
}

//Flight path
else if (utag.isFSR() && b["entity.flightSearch.searchResults.cheapest.price.currency"] != undefined){
    b["currencyCode"] = b["entity.flightSearch.searchResults.cheapest.price.currency"]
}
else if(utag.isFRateDetails() && b["entity.tripDetails.flightOffer.price.currency"] != undefined){
    b["currencyCode"] = b["entity.tripDetails.flightOffer.price.currency"];
}
else if(utag.isFCO() && typeof b["entity.checkout.flightOffer.totalPrice.currency"] !== "undefined"){
    b["currencyCode"] = b["entity.checkout.flightOffer.totalPrice.currency"];
}

//Car path
else if(utag.isCarSR() && b["entity.carSearch.lowestOfferDailyPrice.currency"] != undefined){
    b["currencyCode"] = b["entity.carSearch.lowestOfferDailyPrice.currency"];
}
else if (utag.isPCarSearch() && typeof b["entity.carSearch.lowestOfferTotalPrice.currency"] !== "undefined") {
    b["currencyCode"] = b["entity.carSearch.lowestOfferTotalPrice.currency"];
}

//Common package
else if (utag.isPSR_HC() || utag.isPSR_FC() || utag.isPSR_FH_Responsive() || utag.isPIS()) {
    if (typeof b.entity.packageSearch.results !== "undefined" && typeof b.entity.packageSearch.results.offers !== "undefined") {
        b["currencyCode"] = b["entity.packageSearch.results.offers.0.packagePrice.packageTotalPrice.currency"] ? b["entity.packageSearch.results.offers.0.packagePrice.packageTotalPrice.currency"] : "";
    } else if (typeof b["entity.multiItemSearch.multiItemSearchResults.offers.0.packagePrice.packageTotalPrice.currency"] !== "undefined") {
        b["currencyCode"] = b["entity.multiItemSearch.multiItemSearchResults.offers.0.packagePrice.packageTotalPrice.currency"];
    }
}
else if(utag.isCarUDP() && b["entity.carDetails.totalPrice.currency"] !== undefined) {
	b["currencyCode"] = b["entity.carDetails.totalPrice.currency"];
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
else if((utag.isCarPymt() || utag.isCarCO() || utag.isHCO() || utag.isHPymt() || utag.isCruisePymt() || utag.isCruiseCO()
    || utag.isLXCO() || utag.isPCO() || utag.isPCO_Mobile() || utag.isMCO() || utag.isRCO() || utag.isFPymt()
    || utag.isLXCO() || utag.isLXGT_CO()) && typeof b["entity.checkout.cartTotal.currency"] != "undefined"){
    b["currencyCode"] = b["entity.checkout.cartTotal.currency"];
}
else if((utag.isPRateDetails() || utag.isCarCO() || utag.isItinPage()) && typeof b["entity.tripDetails.totalPrice.currency"] != "undefined"){
    b['currencyCode'] = b["entity.tripDetails.totalPrice.currency"] ? b["entity.tripDetails.totalPrice.currency"] : "";
}
else if(utag.isPCF() && typeof b['entity.packageSearch.results.offers.0.packagePrice.packageTotalPrice.currency'] !== undefined) {
    b['currencyCode'] = b['entity.packageSearch.results.offers.0.packagePrice.packageTotalPrice.currency'];
}
else if((utag.is3pp() || b.pageInfo.pageName && b.pageInfo.pageName.indexOf("Checkout.Confirmation") > -1 ) && b.entity.checkout.currency){
    b['currencyCode'] = b.entity.checkout.currency;
}

