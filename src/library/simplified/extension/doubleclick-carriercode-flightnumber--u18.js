/**
b['carrierCodes'] = "SQ|SQ"
b['flightNumbers'] = "31|402"
b['carrierCodeandFlightNumber'] = "SQ31|SQ402"
**/
    b['carrierCodeandFlightNumber'] = '';
    if (b['carrierCodes'] != undefined && b['flightNumbers'] != undefined) {
        var carrierCodeArray = b['carrierCodes'].split('|');
        var flightNumArray = b['flightNumbers'].split('|');
        var carrierFlightNum = '';
        if(flightNumArray.length > 0 && carrierCodeArray.length > 0){
            for (var i = 0; i < carrierCodeArray.length; i++){
                for (var j = i; j <= i; j++){
                    carrierFlightNum = carrierFlightNum + carrierCodeArray[i] + flightNumArray[j] + '|';
                }
            }
        }
        b['carrierCodeandFlightNumber'] = carrierFlightNum.slice(0, - 1);
}
