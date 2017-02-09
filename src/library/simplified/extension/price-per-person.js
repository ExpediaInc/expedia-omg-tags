b['pricePerPerson'] = '';
if (utag.isCruiseCO() && b['entity.checkout.cruise.perPassengerPrice.amount'])
{
    b['pricePerPerson'] = b['entity.checkout.cruise.perPassengerPrice.amount'];
}
else if (utag.isCruiseSR() && b['entity.cruiseSearch.lowestOfferPerPassengerPrice.amount'])
{
    b['pricePerPerson'] = b['entity.cruiseSearch.lowestOfferPerPassengerPrice.amount'];
}
else if((utag.isHCO()|| utag.isFCO() || utag.isPCO()|| utag.isLXCO() || utag.isMCO()) && b['checkout.cartTotal.amount'] && b['numberOfGuests'])
{
    if(b['numberOfGuests'] > 0)
    {
        b['pricePerPerson'] = (b['checkout.cartTotal.amount'] / b['numberOfGuests']).toFixed(2);
    }
}
else if (utag.isFRateDetails() && (b['entity.flight.flight.avgPriceOfAdultAndSenior.amount'] || b['entity.flight.flight.avgPriceOfChildrenAndInfants.amount']))
{
    b['pricePerPerson'] = b['entity.flight.flight.avgPriceOfAdultAndSenior.amount'] + "|" + b['entity.flight.flight.avgPriceOfChildrenAndInfants.amount'];
}

/** old
 utag_data['pricePerPerson'] = '';
 if (utag.isCruiseCO() && utag_data['entity.checkout.cruise.perPassengerPrice.amount'])
 {
     utag_data['pricePerPerson'] = utag_data['entity.checkout.cruise.perPassengerPrice.amount'];
 }
 else if (utag.isCruiseSR() && utag_data['entity.cruiseSearch.lowestOfferPerPassengerPrice.amount'])
 {
     utag_data['pricePerPerson'] = utag_data['entity.cruiseSearch.lowestOfferPerPassengerPrice.amount'];
 }
 else if((utag.isHCO()|| utag.isFCO() || utag.isPCO()|| utag.isLXCO()) && utag_data['checkout.cartTotal.amount'] && utag_data['numberOfGuests'])
 {
   if(utag_data['numberOfGuests'] > 0)
   {
     utag_data['pricePerPerson'] = (utag_data['checkout.cartTotal.amount'] / utag_data['numberOfGuests']).toFixed(2);
   }
 }
 **/