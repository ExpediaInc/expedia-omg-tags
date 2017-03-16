var pageName = "";
if(typeof b["pageInfo.pageName"] != "undefined"){
    pageName = b["pageInfo.pageName"];
}else if(typeof b.pageInfo.pageName != "undefined"){
    pageName = b.pageInfo.pageName;
}
//3pp Page
window.utag.is3pp = function(){
    if(pageName == '3pp'){
        b["is3pp"] = true;
        return true;
    }
    return false;
}

//Hotel Path
window.utag.isHotelLanding = function(){
    if(pageName == "page.Hotels"){
        b["isHL"] = true;
        b["pageType"] = "Landing";
        return true;
    }
    return false;
}
window.utag.isHSR = function(){
    if(pageName.indexOf("page.Hotel-Search") > -1 || pageName.indexOf("page.Hotels-Search") > -1 || pageName.indexOf("page.Hotels.Search") > -1 || pageName.indexOf("page.Hotel.Search") > -1 || pageName.toLowerCase().indexOf("page.Package.HC.Hotel-Search".toLowerCase()) > -1){
        b["isHSR"] = true;
        b["pageType"] = "Search";
        return true;
    }
    return false;
}

window.utag.isHIS = function(){
    if(pageName.indexOf("page.Hotels.Infosite.Information") > -1){
        b["isHIS"] = true;
        b["pageType"] = "Infosite";
        return true;
    }
    return false;
}

window.utag.isHPymt = function(){
    if(pageName.indexOf("page.Hotels.Checkout.Payment") > -1){
        b["isHPymt"] = true;
        b["pageType"] = "Payment";
        return true;
    }
    return false;
}

window.utag.isHCO = function(){
    if(pageName.indexOf("page.Hotels.Checkout.Confirmation") > -1){
        b["isHCO"] = true;
        b["pageType"] = "Confirmation";
        return true;
    }
    return false;
}

//Flight Path
window.utag.isFlightLanding = function(){
    if(pageName == "page.Flights"){
        b["isFlightLanding"] = true;
        b["pageType"] = "Landing";
        return true;
    }
    return false;
}

window.utag.isFSR = function(){
    if(pageName.indexOf("page.Flight-Search-Roundtrip.Out") > -1 || pageName.indexOf("page.Flight-Search-Roundtrip.In") > -1
        || pageName.indexOf("page.Flight-Search-Oneway") > -1 || pageName.indexOf("page.Flight-Search.MDest") > -1
        || pageName.indexOf("page.Flight-Search-All.byot") > -1 || pageName.indexOf("page.Flight-Search-Oneway.FLUX") > -1
        || pageName.indexOf("page.Flight-Search-Roundtrip") > -1|| pageName.indexOf("page.Flight-Search-Roundtrip.Out.Mobile,F,20") > -1) {
        b["isFlightSearchResults"] = true;
        b["pageType"] = "Search";
        return true;
    }
    return false;
}

window.utag.isFSRMDest = function() {
    if(pageName.indexOf("page.Flight-Search.MDest") > -1) {
        return true;
    }
    return false;
}

window.utag.isFSROneway = function() {
    if(pageName.indexOf("page.Flight-Search-Oneway") > -1 || pageName.indexOf("page.Flight-Search-Oneway.FLUX") > -1) {
        return true;
    }
    return false;
}

window.utag.isFRateDetails = function(){
    if(pageName.indexOf("page.Flight.Ratedetails") > -1 || pageName.indexOf("page.Flight.Ratedetails.Mobile,F,30") > -1){
        b["isFlightRateDetails"] = true;
        b["pageType"] = "UDP";
        return true ;
    }
    return false;
}

window.utag.isFTP = function(){
    if(pageName.indexOf("FLT_CKO_INFO") > -1 || pageName.indexOf("page.Flight.Checkout.Info") > -1){
        utag_data["isFlightTripPreference"] = true;
        utag_data["pageType"] = "TripPreference";
        return true ;
    }
    return false;
}

window.utag.isFPymt = function(){
    if(pageName.indexOf("FLT_CKO_PMT") > -1 || pageName.indexOf("page.Flight.Checkout.Info") > -1){
        b["isFlightPayment"] = true;
        b["pageType"] = "Payment";
        return true ;
    }
    return false;
}

window.utag.isFCO = function(){
    if(pageName.indexOf("page.Flight.Checkout.Confirmation") > -1  || pageName.indexOf("page.Flight.Checkout.Confirmation.Mobile,F,70") > -1 ){
        b["isFlightConfirmation"] = true;
        b["pageType"] = "Confirmation";
        return true ;
    }
    return false;
}

//Car Path
window.utag.isCarLanding = function(){
    if(pageName == "page.Cars") {
        b["isCarLanding"] = true;
        b["pageType"] = "Landing";
        return true ;
    }
    return false;
}

window.utag.isCarSR = function(){
    if(pageName.indexOf("page.car.search.list") > -1  || pageName.indexOf("page.Car-Search") > -1) {
        b["isCarSR"] = true;
        b["pageType"] = "Search";
        return true ;
    }
    return false;
}

window.utag.isCarPymt = function(){
    if(pageName.indexOf("page.Cars.Checkout.Payment") > -1) {
        b["isCarPymt"] = true;
        b["pageType"] = "Payment";
        return true ;
    }
    return false;
}

window.utag.isCarCO = function(){
    if(pageName.indexOf("page.Cars.Checkout.Confirmation") > -1) {
        b["isCarCO"] = true;
        b["pageType"] = "Confirmation";
        return true ;
    }
    return false;
}

window.utag.isCarItinPage = function(){
    if(pageName.indexOf("page.Itin.Details.Booked") > -1 && utag_data['entity.tripDetails.carInfo.carVendor'] != undefined){
        b["isCarItinPage"] = true;
        b["pageType"] = "";
        return true ;
    }
    return false;
}

//Cruise Path
window.utag.isCruiseLanding = function(){
    if(pageName == "page.Cruises"){
        b["isCruiseLanding"] = true;
        b["pageType"] = "Landing";
        return true;
    }
    return false;
}

window.utag.isCruiseSR = function(){
    if(pageName.indexOf("page.Cruise-Search") > -1){
        b["isCruiseSR"] = true;
        b["pageType"] = "Search";
        return true;
    }
    return false;
}

window.utag.isCruiseIS = function(){
    if(pageName.indexOf("page.Cruise.Cabin-Category") > -1){
        b["isCruiseIS"] = true;
        b["pageType"] = "Infosite";
        return true;
    }
    return false;
}

window.utag.isCruiseTP = function(){
    if(pageName.indexOf("page.Cruise.Travelers") > -1){
        b["isCruiseTP"] = true;
        b["pageType"] = "TripPreference";
        return true ;
    }
    return false;
}

window.utag.isCruiseCabinN = function(){
    if(pageName.indexOf("page.Cruise.Cabin-Number") > -1){
        b["isCruiseCabinN"] = true;
        b["pageType"] = "";
        return true ;
    }
    return false;
}

window.utag.isCruisePymt = function(){
    if(pageName.indexOf("page.Cruise.Checkout.Payment") > -1){
        b["isCruisePymt"] = true;
        b["pageType"] = "Payment";
        return true ;
    }
    return false;
}

window.utag.isCruiseCO = function(){
    if(pageName.indexOf("page.Cruise.Checkout.Confirmation") > -1 || pageName.indexOf("page.Cruises.Checkout.Confirmation") > -1
        || pageName.indexOf("page.Cruise.Checkout.Confirmation.Slim") > -1){
        b["isCruiseCO"] = true;
        b["pageType"] = "Confirmation";
        return true ;
    }
    return false;
}

//MultiItem
window.utag.isMCO = function(){
    if(pageName.indexOf("page.Checkout.Confirmation") > -1 || pageName.indexOf("page.MultiItem.Checkout.Confirmation") > -1 ){
        b["isMultiItemConfirmation"] = true;
        b["isPackageConfirmation"] = true;
        b["pageType"] = "Confirmation";
        return true ;
    }
    return false;
}

//Package Path
window.utag.isPackageLanding = function(){
    if(pageName == "page.Packages"){
        b["isPackageLanding"] = true;
        b["pageType"] = "Landing";
        return true ;
    }
    return false;
}

window.utag.isPSR_Mobile = function(){
    if(pageName.indexOf('page.Package-Search.Mobile') > -1){
        b["isPSR_Mobile"] = true;
        return true ;
    }
    return false;
}

window.utag.isPSR = function(){
    if(pageName.indexOf("page.Package-Search") > -1 || pageName.indexOf("page.FHC.Package-Search") > -1
        || pageName.indexOf("page.Package.HC.Hotel-Search") > -1
        || pageName.indexOf("page.Package.FH.Hotel-Search") > -1
        || pageName.indexOf("page.Package.FC.Flight-Search") > -1
        || pageName.indexOf("page.Package.FHC.Hotel-Search") > -1
        || utag.isPSR_Mobile()){
        b["isPackageHotelSeachResult"] = true;
        b["isPackageSearchResults"] = true;
        b["pageType"] = "Search";
        return true ;
    }
    return false;
}

window.utag.isPSR_HC = function(){
    if(pageName.indexOf("page.Package.HC.Hotel-Search") > -1 ){
        return true ;
    }
    return false;
}

window.utag.isPSR_FH_Responsive = function(){
    if(pageName.indexOf("page.Package.FH.Hotel-Search.Error") > -1 || pageName.indexOf("page.Package.FH.Hotel-Search") > -1 ){
        return true ;
    }
    return false;
}

window.utag.isPSR_F_Responsive = function(){
    if(pageName.indexOf("page.Package.FH.Flight-Search-Roundtrip") > -1 ){
        return true ;
    }
    return false;
}

window.utag.isPSR_FC = function(){
    if(pageName.indexOf("page.Package.FC.Flight-Search-Roundtrip.Out") > -1  || pageName.indexOf("page.Package.FC.Flight-Search-Roundtrip.In") > -1 ){
        return true ;
    }
    return false;
}

window.utag.isPSR_FHC = function(){
    if(pageName.indexOf("page.FHC.Package-Search") > -1 || pageName.indexOf("page.Package.FHC.Hotel-Search") > -1){
        b["isPackageFlightHotelCarSearchResult"] = true;
        return true ;
    }
    return false;
}

window.utag.isPCarSearch = function(){
    if(pageName.indexOf("page.Package.FC.Car-Search") > -1 || pageName.indexOf("page.Package.FHC.Car-Search") > -1
        || pageName.indexOf("page.Package.HC.Car-Search") > -1 || pageName.indexOf("page.Package.fhc.car.search.list.aws") > -1
        || pageName.indexOf("page.Package.hc.car.search.list.aws") > -1 || pageName.indexOf("page.Package.fc.car.search.list.aws") > -1){
        b["isPackageCarSearchResult"] = true;
        b["isPackageSearchResults"] = true;
        b["pageType"] = "Search";
        return true ;
    }
    return false;
}

window.utag.isPIS = function(){
    if(pageName.indexOf("page.Packages.Infosite.Information") > -1 || pageName.indexOf("page.HC.Packages.Infosite.Information") > -1
        || pageName.indexOf("Packages.Infosite.Information") > -1 || pageName.indexOf("Package.Infosite.Information") > -1){
        b["isPackageHotelInfoSite"] = true;
        b["isPackageSearchResults"] = true;
        b["pageType"] = "Infosite";
        return true ;
    }
    return false;
}

window.utag.isPIS_FH = function(){
    if(pageName.indexOf("page.FH.Package.Infosite.Information") > -1){
        return true ;
    }
    return false;
}

window.utag.isPIS_HC = function() {
    if(pageName.indexOf("page.HC.Packages.Infosite.Information") > -1){
        return true ;
    }
    return false;
}

window.utag.isPCF = function(){
    if(pageName.indexOf("page.Package-Change-Flight.Outbound") > -1
        || pageName.indexOf("page.Package-Change-Flight.Inbound") > -1
        || pageName.indexOf("page.Package.FH.Flight-Search") > -1
        || pageName.indexOf("page.Package.FC.Flight-Search") > -1
        || pageName.indexOf("page.Package.FHC.Flight-Search") > -1){
        b["isPackageFlightSearchResult"] = true;
        b["isPackageSearchResults"] = true;
        b["pageType"] = "ChangeFlight";
        return true ;
    }
    return false;
}

window.utag.isPRateDetails = function(){
    if(pageName.indexOf("page.Package.Ratedetails") > -1 ){
        b["isPackageRateDetails"] = true;
        b["pageType"] = "UDP";
        return true ;
    }
    return false;
}

window.utag.isPTP = function(){
    if(pageName.indexOf("PKG_CKO_INFO") > -1 || pageName.indexOf("page.Package.Checkout.Info") > -1 ){
        b["isPackageTripPreference"] = true;
        b["pageType"] = "TripPreference";
        return true ;
    }
    return false;
}

window.utag.isPPymt = function(){
    if(pageName.indexOf("PKG_CKO_PMT") > -1 || pageName.indexOf("page.Package.Checkout.Info") > -1 || pageName.indexOf("page.Checkout.Payment") > -1 ){
        b["isPackagePayment"] = true;
        b["pageType"] = "Payment";
        return true ;
    }
    return false;
}

window.utag.isPCO = function(){
    if(pageName.indexOf("page.Package.Checkout.Confirmation") > -1 ){
        b["isPackageConfirmation"] = true;
        b["pageType"] = "Confirmation";
        return true ;
    }
    return false;
}

window.utag.isPCO_Mobile = function(){
    if(pageName.indexOf("page.Packages.Confirmation.Mobile") > -1 ){
        b["isPCO"] = true;
        b["pageType"] = "Confirmation";
        return true ;
    }
    return false;
}

window.utag.isLXCO = function(){
    if(pageName.indexOf("page.LX.Checkout.Confirmation") > -1){
        b["isLXCO"] = true;
        b["pageType"] = "Confirmation";
        return true ;
    }
    return false;
}

window.utag.isCO = function()
{
    if(pageName.toLowerCase().indexOf('confirmation') != -1){
        b["isCO"] = true;
        b["pageType"] = "Confirmation";
        return true;
    }
    return false;
}

window.utag.isItinPage = function(){
    if(pageName.indexOf("page.Itin.Details.Booked") > -1 ){
        b["isItinPage"] = true;
        b["pageType"] = "Itinerary";
        return true;
    }
    return false;
}
//LX Path  
window.utag.isLXS = function(){
    if(pageName.indexOf("page.LX-Search") > -1 ){
        b["isLXS"] = true;
        b["pageType"] = "Search";
        return true ;
    }
    return false;
}

window.utag.isLXI = function(){
    if(pageName.indexOf("page.LX.Infosite.Information") > -1  || pageName.indexOf('page.LX-Infosite') > -1){
        b["isLXI"] = true;
        b["pageType"] = "Infosite";
        return true ;
    }
    return false;
}

window.utag.isLXPymt = function(){
    if(pageName.indexOf("page.LX.Checkout.Payment") > -1 ){
        b["isLXPymt"] = true;
        b["pageType"] = "Payment";
        return true ;
    }
    return false;
}

window.utag.isHomePage = function(){
    if(pageName.indexOf("Homepage") > -1 ){
        b["isHomePage"] = true;
        b["pageType"] = "Home";
        return true ;
    }
    return false;
}

window.utag.isMerch= function(){
    if(pageName.toLowerCase().indexOf("global-merch") > -1 ){
        b["isMerch"] = true;
        b["pageType"] = "Merchandising";
        return true ;
    }
    return false;
}

for (var property in utag) {
    if(utag.hasOwnProperty(property) && property.toString().indexOf("is")> -1 && property.toString() != "isPrototypeOf" && typeof utag[property] == "function")
    {
        utag[property].call();
    }
}

// Hotel and Car Package Info Site
window.utag.isPIS_HotelCar = function() {
    if(pageName.indexOf("page.HC.Package.Infosite.Information") > -1){
        return true ;
    }
    return false;
}

// Flight and Hotel Package Infosite Page  
window.utag.isPIS_FlightHotel = function(){
    if(pageName.indexOf("page.Packages.Infosite.Information") > -1){
        return true ;
    }
    return false;
}