b["NonUsFlag"] = "false";
if((utag.isCarCO() || utag.isCarPymt() || utag.isHCO() || utag.isPRateDetails()) && b["countryCode"])
{
    if(b["countryCode"].indexOf("US") == -1){
        b["NonUsFlag"] = "true";
    }
}
else if((utag.isPSR() || utag.isPSR_FH_Responsive() || utag.isPIS_FH()) && b.entity.packageSearch != undefined
    && b.entity.packageSearch.packageSearchParameters.flightSearchParameters != undefined
    && b.entity.packageSearch.packageSearchParameters.flightSearchParameters.arrivalAirportCityState != undefined
    && b["entity.packageSearch.packageSearchParameters.flightSearchParameters.departureCountry"] != undefined)
{
    var arrivalInfo = b["entity.packageSearch.packageSearchParameters.flightSearchParameters.arrivalCountry"];
    if(!arrivalInfo.equals(b["entity.packageSearch.packageSearchParameters.flightSearchParameters.departureCountry"])){
        b["NonUsFlag"] = "true";
    }
}
else if(utag.isFSR() && b['entity.flightSearch.searchParameters.arrivalCountry'] != undefined)
{
    if(b['entity.flightSearch.searchParameters.arrivalCountry'].indexOf("US") == -1)
    {
        b["NonUsFlag"] = "true";
    }
}
else if(utag.isFRateDetails() && b['entity.tripDetails.flightOffer.arrivalCountryName'] != undefined)
{
    if(b['entity.tripDetails.flightOffer.arrivalCountryName'].indexOf("US") == -1)
    {
        b["NonUsFlag"] = "true";
    }
}
else if(utag.isFCO() && b['entity.checkout.flightOffer.arrivalCountryName'] != undefined)
{
    if(b['entity.checkout.flightOffer.arrivalCountryName'].indexOf("US") == -1)
    {
        b["NonUsFlag"] = "true";
    }
}