(function ()
{

    b['numberOfGuests'] = '';
    if (utag.isHSR() && b['entity.hotels.search.hotelParameters.numberOfGuests'])
    {
        b['numberOfGuests'] = b['entity.hotels.search.hotelParameters.numberOfGuests'];
    }
    else if (utag.isHIS() && b['entity.hotels.listOfHotels.0.numberOfGuests'])
    {
        b['numberOfGuests'] = b['entity.hotels.listOfHotels.0.numberOfGuests'];
    }
    else if ((utag.isHCO() || utag.isPCO()) && b['entity.checkout.hotel.numberOfGuests'])
    {
        b['numberOfGuests'] = b['entity.checkout.hotel.numberOfGuests'];
    }
    else if (utag.isPSR() || utag.isPSR_FH_Responsive() || utag.isPIS_FH())
    {
        if (b['entity.packageFHSearch.packageFHSearchParameters.packageTravelersPerRooms.0.adultsCount']
            || b['entity.packageFHSearch.packageFHSearchParameters.packageTravelersPerRooms.0.seniorsCount']
            || b['entity.packageFHSearch.packageFHSearchParameters.packageTravelersPerRooms.0.childrenCount'])
        {
            b['numberOfGuests'] = getTotal(
                'entity.packageFHSearch.packageFHSearchParameters.packageTravelersPerRooms.0.adultsCount',
                'entity.packageFHSearch.packageFHSearchParameters.packageTravelersPerRooms.0.seniorsCount',
                'entity.packageFHSearch.packageFHSearchParameters.packageTravelersPerRooms.0.childrenCount');
        }
        else if (b.entity.packageSearch && b.entity.packageSearch.packageSearchParameters
            && Array.isArray(b.entity.packageSearch.packageSearchParameters.travelers)
            && b.entity.packageSearch.packageSearchParameters.travelers.length > 0)
        {
            var hotelCount = b.entity.packageSearch.packageSearchParameters.travelers.length;
            var totalGuest = 0;
            for (var i = 0; i < hotelCount; i++)
            {

                totalGuest = totalGuest + getTotal(
                        'entity.packageSearch.packageSearchParameters.travelers.' + i + '.numberOfAdults',
                        'entity.packageSearch.packageSearchParameters.travelers.' + i + '.numberOfSeniors',
                        'entity.packageSearch.packageSearchParameters.travelers.' + i + '.numberOfChildren');
            }
            b['numberOfGuests'] = totalGuest;
        }
    }
    else if (utag.isPIS())
    {
        // FH / FHC
        if (b['entity.hotels.listOfHotels.0.numberOfGuests'])
        {
            b['numberOfGuests'] = b['entity.hotels.listOfHotels.0.numberOfGuests'];
        }
        else if (b['entity.packageSearch.packageSearchParameters.travelers.0.numberOfAdults']
            && b['entity.packageSearch.packageSearchParameters.travelers.0.numberOfSeniors']
            && b['entity.packageSearch.packageSearchParameters.travelers.0.numberOfChildren'])
        {
            // FHC (Experiment?)
            b['numberOfGuests'] = getTotal(
                'entity.packageSearch.packageSearchParameters.travelers.0.numberOfAdults',
                'entity.packageSearch.packageSearchParameters.travelers.0.numberOfSeniors',
                'entity.packageSearch.packageSearchParameters.travelers.0.numberOfChildren');
        }
    }
    else if (utag.isFSR() || utag.isPSR_F_Responsive())
    {
        if (b['entity.flightSearch.travelers.numberOfAdults']
            || b['entity.flightSearch.travelers.numberOfChildren']
            || b['entity.flightSearch.travelers.numberOfInfantsInLap']
            || b['entity.flightSearch.travelers.numberOfSeniors']
            || b['entity.flightSearch.travelers.numberOfInfantsInSeat'])
        {
            b['numberOfGuests'] = getTotal(
                'entity.flightSearch.travelers.numberOfAdults',
                'entity.flightSearch.travelers.numberOfChildren',
                'entity.flightSearch.travelers.numberOfInfantsInLap',
                'entity.flightSearch.travelers.numberOfSeniors',
                'entity.flightSearch.travelers.numberOfInfantsInSeat');
        }
    }
    else if (utag.isFRateDetails())
    {
        if (b['entity.flight.travelerInfo.numberOfAdults']
            || b['entity.flight.travelerInfo.numberOfSeniors']
            || b['entity.flight.travelerInfo.numberOfChildren'])
        {
            b['numberOfGuests'] = getTotal(
                'entity.flight.travelerInfo.numberOfAdults',
                'entity.flight.travelerInfo.numberOfSeniors',
                'entity.flight.travelerInfo.numberOfChildren');
        }
    } else if (utag.isPRateDetails() && b['entity.tripDetails.travelersInfo.totalNumberOfTravelers'])
    {
        b['numberOfGuests'] = b['entity.tripDetails.travelersInfo.totalNumberOfTravelers'];
    }
    else if (utag.isFCO())
    {
        if (b['entity.checkout.flightOffer.travelersInfo.numberOfAdults']
            || b['entity.checkout.flightOffer.travelersInfo.numberOfChildren']
            || b['entity.checkout.flightOffer.travelersInfo.numberOfInfantsInLap']
            || b['entity.checkout.flightOffer.travelersInfo.numberOfInfantsInSeat']
            || b['entity.checkout.flightOffer.travelersInfo.numberOfSeniors'])
        {
            b['numberOfGuests'] = getTotal(
                'entity.checkout.flightOffer.travelersInfo.numberOfAdults',
                'entity.checkout.flightOffer.travelersInfo.numberOfChildren',
                'entity.checkout.flightOffer.travelersInfo.numberOfInfantsInLap',
                'entity.checkout.flightOffer.travelersInfo.numberOfInfantsInSeat',
                'entity.checkout.flightOffer.travelersInfo.numberOfSeniors');
        }
    }
    else if (utag.isLXCO() || utag.isLXPymt())
    {
        if (b.entity.checkout.activity.travelerInfo.numberOfAdults
            || b.entity.checkout.activity.travelerInfo.numberOfSeniors
            || b.entity.checkout.activity.travelerInfo.numberOfChildren)
        {
            b['numberOfGuests'] = getTotal(
                'entity.checkout.activity.travelerInfo.numberOfAdults',
                'entity.checkout.activity.travelerInfo.numberOfSeniors',
                'entity.checkout.activity.travelerInfo.numberOfChildren');
        }

        if(b['numberOfGuests'].length === undefined && b.entity.checkout.activity.travelerInfo) {
            b['numberOfGuests'] = b.entity.checkout.activity.travelerInfo.numberOfTickets;
        }
        else if( (b['numberOfGuests'].length == 0 || b['numberOfGuests'] == '' || b['numberOfGuests'] == 0) && b['entity.checkout.activity.travelerInfo.numberOfTickets'] != undefined)
        {
            b['numberOfGuests'] = b['entity.checkout.activity.travelerInfo.numberOfTickets'];
        }
    }
    else if (utag.isCruiseCO())
    {
        if (b['entity.checkout.cruise.traveler.numberOfAdults']
            || b['entity.checkout.cruise.traveler.numberOfSeniors']
            || b['entity.checkout.cruise.traveler.numberOfChildren'])
        {
            b['numberOfGuests'] = getTotal(
                'entity.checkout.cruise.traveler.numberOfAdults',
                'entity.checkout.cruise.traveler.numberOfSeniors',
                'entity.checkout.cruise.traveler.numberOfChildren');
            b['numberOfGuestsForCruise'] = b['numberOfGuests'];
        }
    }
    else if (utag.isMCO()) {
        if (b['entity.checkout.hotels.0.numberOfGuests'] != undefined) {
            b['numberOfGuests'] = b['entity.checkout.hotels.0.numberOfGuests'];
        } else if (b['entity.checkout.flightOffers.0.travelersInfo.numberOfAdults']
            || b['entity.checkout.flightOffers.0.travelersInfo.numberOfChildren']
            || b['entity.checkout.flightOffers.0.travelersInfo.numberOfInfantsInLap']
            || b['entity.checkout.flightOffers.0.travelersInfo.numberOfInfantsInSeat']
            || b['entity.checkout.flightOffers.0.travelersInfo.numberOfSeniors'])
        {
            b['numberOfGuests'] = getTotal(
                'entity.checkout.flightOffers.0.travelersInfo.numberOfAdults',
                'entity.checkout.flightOffers.0.travelersInfo.numberOfChildren',
                'entity.checkout.flightOffers.0.travelersInfo.numberOfInfantsInLap',
                'entity.checkout.flightOffers.0.travelersInfo.numberOfInfantsInSeat',
                'entity.checkout.flightOffers.0.travelersInfo.numberOfSeniors');
        }
    }

    function getTotal()
    {
        var total = 0;
        for (var i = 0; i < arguments.length; i++)
        {
            var key = arguments[i];
            if (key && !isNaN(b[key]))
            {
                total += parseInt(b[key]);
                // console.debug('[number_of_guests|getTotal()]: Added to total key: %s value: %s', key, b[key]);
            }
        }
        return total;
    }

})();


/** old
 (function ()
 {

     utag_data['numberOfGuests'] = '';
     if (utag.isHSR() && utag_data['entity.hotels.search.hotelParameters.numberOfGuests'])
     {
         utag_data['numberOfGuests'] = utag_data['entity.hotels.search.hotelParameters.numberOfGuests'];
     }
     else if (utag.isHIS() && utag_data['entity.hotels.listOfHotels.0.numberOfGuests'])
     {
         utag_data['numberOfGuests'] = utag_data['entity.hotels.listOfHotels.0.numberOfGuests'];
     }
     else if ((utag.isHCO() || utag.isPCO()) && utag_data['entity.checkout.hotel.numberOfGuests'])
     {
         utag_data['numberOfGuests'] = utag_data['entity.checkout.hotel.numberOfGuests'];
     }
     else if (utag.isPSR() || utag.isPSR_FH_Responsive() || utag.isPIS_FH())
     {
         if (utag_data['entity.packageFHSearch.packageFHSearchParameters.packageTravelersPerRooms.0.adultsCount']
             || utag_data['entity.packageFHSearch.packageFHSearchParameters.packageTravelersPerRooms.0.seniorsCount']
             || utag_data['entity.packageFHSearch.packageFHSearchParameters.packageTravelersPerRooms.0.childrenCount'])
         {
             utag_data['numberOfGuests'] = getTotal(
                 'entity.packageFHSearch.packageFHSearchParameters.packageTravelersPerRooms.0.adultsCount',
                 'entity.packageFHSearch.packageFHSearchParameters.packageTravelersPerRooms.0.seniorsCount',
                 'entity.packageFHSearch.packageFHSearchParameters.packageTravelersPerRooms.0.childrenCount');
         }
         else if (b.entity.packageSearch && b.entity.packageSearch.packageSearchParameters
             && Array.isArray(b.entity.packageSearch.packageSearchParameters.travelers)
             && b.entity.packageSearch.packageSearchParameters.travelers.length > 0)
         {
             var hotelCount = b.entity.packageSearch.packageSearchParameters.travelers.length;
             var totalGuest = 0;
             for (var i = 0; i < hotelCount; i++)
             {

                 totalGuest = totalGuest + getTotal(
                         'entity.packageSearch.packageSearchParameters.travelers.' + i + '.numberOfAdults',
                         'entity.packageSearch.packageSearchParameters.travelers.' + i + '.numberOfSeniors',
                         'entity.packageSearch.packageSearchParameters.travelers.' + i + '.numberOfChildren');
             }
             utag_data['numberOfGuests'] = totalGuest;
         }
     }
     else if (utag.isPIS())
     {
         // FH / FHC
         if (utag_data['entity.hotels.listOfHotels.0.numberOfGuests'])
         {
             utag_data['numberOfGuests'] = utag_data['entity.hotels.listOfHotels.0.numberOfGuests'];
         }
         else if (utag_data['entity.packageSearch.packageSearchParameters.travelers.0.numberOfAdults']
             && utag_data['entity.packageSearch.packageSearchParameters.travelers.0.numberOfSeniors']
             && utag_data['entity.packageSearch.packageSearchParameters.travelers.0.numberOfChildren'])
         {
             // FHC (Experiment?)
             utag_data['numberOfGuests'] = getTotal(
                 'entity.packageSearch.packageSearchParameters.travelers.0.numberOfAdults',
                 'entity.packageSearch.packageSearchParameters.travelers.0.numberOfSeniors',
                 'entity.packageSearch.packageSearchParameters.travelers.0.numberOfChildren');
         }
     }
     else if (utag.isFSR() || utag.isPSR_F_Responsive())
     {
         if (utag_data['entity.flightSearch.travelers.numberOfAdults']
             || utag_data['entity.flightSearch.travelers.numberOfChildren']
             || utag_data['entity.flightSearch.travelers.numberOfInfantsInLap']
             || utag_data['entity.flightSearch.travelers.numberOfSeniors']
             || utag_data['entity.flightSearch.travelers.numberOfInfantsInSeat'])
         {
             utag_data['numberOfGuests'] = getTotal(
                 'entity.flightSearch.travelers.numberOfAdults',
                 'entity.flightSearch.travelers.numberOfChildren',
                 'entity.flightSearch.travelers.numberOfInfantsInLap',
                 'entity.flightSearch.travelers.numberOfSeniors',
                 'entity.flightSearch.travelers.numberOfInfantsInSeat');
         }
     }
     else if (utag.isFRateDetails())
     {
         if (utag_data['entity.flight.travelerInfo.numberOfAdults']
             || utag_data['entity.flight.travelerInfo.numberOfSeniors']
             || utag_data['entity.flight.travelerInfo.numberOfChildren'])
         {
             utag_data['numberOfGuests'] = getTotal(
                 'entity.flight.travelerInfo.numberOfAdults',
                 'entity.flight.travelerInfo.numberOfSeniors',
                 'entity.flight.travelerInfo.numberOfChildren');
         }
     } else if (utag.isPRateDetails() && utag_data['entity.tripDetails.travelersInfo.totalNumberOfTravelers'])
     {
         utag_data['numberOfGuests'] = utag_data['entity.tripDetails.travelersInfo.totalNumberOfTravelers'];
     }
     else if (utag.isFCO())
     {
         if (utag_data['entity.checkout.flightOffer.travelersInfo.numberOfAdults']
             || utag_data['entity.checkout.flightOffer.travelersInfo.numberOfChildren']
             || utag_data['entity.checkout.flightOffer.travelersInfo.numberOfInfantsInLap']
             || utag_data['entity.checkout.flightOffer.travelersInfo.numberOfInfantsInSeat']
             || utag_data['entity.checkout.flightOffer.travelersInfo.numberOfSeniors'])
         {
             utag_data['numberOfGuests'] = getTotal(
                 'entity.checkout.flightOffer.travelersInfo.numberOfAdults',
                 'entity.checkout.flightOffer.travelersInfo.numberOfChildren',
                 'entity.checkout.flightOffer.travelersInfo.numberOfInfantsInLap',
                 'entity.checkout.flightOffer.travelersInfo.numberOfInfantsInSeat',
                 'entity.checkout.flightOffer.travelersInfo.numberOfSeniors');
         }
     }
     else if (utag.isLXCO())
     {
         if (utag_data.entity.checkout.activity.travelerInfo.numberOfAdults
             || utag_data.entity.checkout.activity.travelerInfo.numberOfSeniors
             || utag_data.entity.checkout.activity.travelerInfo.numberOfChildren)
         {
             utag_data['numberOfGuests'] = getTotal(
                 'entity.checkout.activity.travelerInfo.numberOfAdults',
                 'entity.checkout.activity.travelerInfo.numberOfSeniors',
                 'entity.checkout.activity.travelerInfo.numberOfChildren');
         }

         if(utag_data['numberOfGuests'].length === undefined && utag_data.entity.checkout.activity.travelerInfo) {
             utag_data['numberOfGuests'] = utag_data.entity.checkout.activity.travelerInfo.numberOfTickets;
         }
         else if( (utag_data['numberOfGuests'].length == 0 || utag_data['numberOfGuests'] == '' || utag_data['numberOfGuests'] == 0) && utag_data['entity.checkout.activity.travelerInfo.numberOfTickets'] != undefined)
         {
             utag_data['numberOfGuests'] = utag_data['entity.checkout.activity.travelerInfo.numberOfTickets'];
         }
     }
     else if (utag.isCruiseCO())
     {
         if (utag_data['entity.checkout.cruise.traveler.numberOfAdults']
             || utag_data['entity.checkout.cruise.traveler.numberOfSeniors']
             || utag_data['entity.checkout.cruise.traveler.numberOfChildren'])
         {
             utag_data['numberOfGuests'] = getTotal(
                 'entity.checkout.cruise.traveler.numberOfAdults',
                 'entity.checkout.cruise.traveler.numberOfSeniors',
                 'entity.checkout.cruise.traveler.numberOfChildren');
             utag_data['numberOfGuestsForCruise'] = utag_data['numberOfGuests'];
         }
     }
     else if (utag.isMCO()) {
         if (utag_data['entity.checkout.hotels.0.numberOfGuests'] != undefined) {
             utag_data['numberOfGuests'] = utag_data['entity.checkout.hotels.0.numberOfGuests'];
         } else if (utag_data['entity.checkout.flightOffers.0.travelersInfo.numberOfAdults']
             || utag_data['entity.checkout.flightOffers.0.travelersInfo.numberOfChildren']
             || utag_data['entity.checkout.flightOffers.0.travelersInfo.numberOfInfantsInLap']
             || utag_data['entity.checkout.flightOffers.0.travelersInfo.numberOfInfantsInSeat']
             || utag_data['entity.checkout.flightOffers.0.travelersInfo.numberOfSeniors'])
         {
             utag_data['numberOfGuests'] = getTotal(
                 'entity.checkout.flightOffers.0.travelersInfo.numberOfAdults',
                 'entity.checkout.flightOffers.0.travelersInfo.numberOfChildren',
                 'entity.checkout.flightOffers.0.travelersInfo.numberOfInfantsInLap',
                 'entity.checkout.flightOffers.0.travelersInfo.numberOfInfantsInSeat',
                 'entity.checkout.flightOffers.0.travelersInfo.numberOfSeniors');
         }
     }

     function getTotal()
     {
         var total = 0;
         for (var i = 0; i < arguments.length; i++)
         {
             var key = arguments[i];
             if (key && !isNaN(utag_data[key]))
             {
                 total += parseInt(utag_data[key]);
                 // console.debug('[number_of_guests|getTotal()]: Added to total key: %s value: %s', key, utag_data[key]);
             }
         }
         return total;
     }

 })();
 **/