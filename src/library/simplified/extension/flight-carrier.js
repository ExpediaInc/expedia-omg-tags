if (utag.isFSR() && (b['entity.flightSearch.searchResults.cheapest.airlineCode']))  {
    b['carrierCodes'] = b['entity.flightSearch.searchResults.cheapest.airlineCode'];
}
else if (utag.isFRateDetails() || utag.isPRateDetails())
{
    if (b.entity.tripDetails.flightOffer.flight.legs != undefined)
    {
        var numLegs = '0';
        var numSegments = '0';
        var carrierCodes = "";
        numLegs = b.entity.tripDetails.flightOffer.flight.legs.length;

        for (var i = 0; i < numLegs; i++)
        {
            numSegments = b.entity.tripDetails.flightOffer.flight.legs[i].segments.length;
            for (var j = 0; j < numSegments; j++)
            {
                carrierCodes = carrierCodes + b.entity.tripDetails.flightOffer.flight.legs[i].segments[j].carrierCode + "|";
            }
        }

        b["carrierCodes"] = carrierCodes.slice(0, -1);
    }
}
else if (utag.isFPymt() || utag.isFCO() || utag.isPPymt() || utag.isPCO() || utag.isMCO())
{
    var flightObject;

    if (b['entity.checkout.flightOffer.flight.legs.0.segments.0.carrierCode']) {
        flightObject = b.entity.checkout.flightOffer.flight;
    }
    else if (b['entity.checkout.flightOffers.0.flight.legs.0.segments.0.carrierCode']) {
        flightObject = b.entity.checkout.flightOffers[0].flight;
    }

    if (flightObject)
    {
        var numLegs = '0';
        var numSegments = '0';
        var carrierCodes = "";
        numLegs = flightObject.legs.length;

        for (var i = 0; i < numLegs; i++)
        {
            numSegments = flightObject.legs[i].segments.length;
            for (var j = 0; j < numSegments; j++)
            {
                carrierCodes = carrierCodes + flightObject.legs[i].segments[j].carrierCode + "|";
            }
        }

        b["carrierCodes"] = carrierCodes.slice(0, -1);
    }
}


/** old
 if (utag.isFRateDetails() || utag.isPRateDetails())
 {
     if (utag_data.entity.tripDetails.flightOffer.flight.legs != undefined)
     {
         var numLegs = '0';
         var numSegments = '0';
         var carrierCodes = "";
         numLegs = utag_data.entity.tripDetails.flightOffer.flight.legs.length;

         for (var i = 0; i < numLegs; i++)
         {
             numSegments = utag_data.entity.tripDetails.flightOffer.flight.legs[i].segments.length;
             for (var j = 0; j < numSegments; j++)
             {
                 carrierCodes = carrierCodes + utag_data.entity.tripDetails.flightOffer.flight.legs[i].segments[j].carrierCode + "|";
             }
         }

         utag_data["carrierCodes"] = carrierCodes.slice(0, -1);
     }
 }
 else if (utag.isFPymt() || utag.isFCO() || utag.isPPymt() || utag.isPCO())
 {
     if (utag_data.entity.checkout.flightOffer.flight.legs != undefined)
     {
         var numLegs = '0';
         var numSegments = '0';
         var carrierCodes = "";
         numLegs = utag_data.entity.checkout.flightOffer.flight.legs.length;

         for (var i = 0; i < numLegs; i++)
         {
             numSegments = utag_data.entity.checkout.flightOffer.flight.legs[i].segments.length;
             for (var j = 0; j < numSegments; j++)
             {
                 carrierCodes = carrierCodes + utag_data.entity.checkout.flightOffer.flight.legs[i].segments[j].carrierCode + "|";
             }
         }

         utag_data["carrierCodes"] = carrierCodes.slice(0, -1);
     }
 }
 **/