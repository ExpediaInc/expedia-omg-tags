b['bookingWindow'] = '';

function bw_daydiff(first, second) {
    //This condition is to handle the same day booking
    if (Math.round((second-first)/(1000*60*60*24)) == -1)
    {
        return 0;
    }
    return Math.round((second-first)/(1000*60*60*24));
};

if (utag.isCruiseCO() && b['entity.checkout.cruise.advancePurchaseWindow'])
{
    b['bookingWindow'] = b['entity.checkout.cruise.advancePurchaseWindow'];
}
else if ( (utag.isHCO() || utag.isLXCO() || utag.isPCO() || utag.isFCO() || utag.isCarCO()) && b.checkInDate)
{
    b['bookingWindow'] = bw_daydiff( new Date(), new Date(b.checkInDate) );
}
else if (utag.isCarItinPage() && b['entity.tripDetails.utcTripStartDate'])
{
    b['bookingWindow'] = bw_daydiff( new Date(), new Date(b['entity.tripDetails.utcTripStartDate']) );
}
else if(b.checkInDate != undefined && b.checkInDate != ""){
    b['bookingWindow'] = bw_daydiff( new Date(), new Date(b.checkInDate) );
}
else if (utag.isRailUDP() && b.checkInDate) {
    b['bookingWindow'] = bw_daydiff(new Date() , new Date(b.checkInDate));
}

/** old
 utag_data['bookingWindow'] = '';

 function bw_daydiff(first, second) {
    return Math.round((second-first)/(1000*60*60*24));
};

 if (utag.isCruiseCO() && utag_data['entity.checkout.cruise.advancePurchaseWindow'])
 {
     utag_data['bookingWindow'] = utag_data['entity.checkout.cruise.advancePurchaseWindow'];
 }
 else if ( (utag.isHCO() || utag.isLXCO() || utag.isPCO() || utag.isFCO() || utag.isCarCO()) && utag_data.checkInDate)
 {
 utag_data['bookingWindow'] = bw_daydiff( new Date(), new Date(utag_data.checkInDate) );
 }
 else if (utag.isCarItinPage() && utag_data['entity.tripDetails.utcTripStartDate'])
 {
 utag_data['bookingWindow'] = bw_daydiff( new Date(), new Date(utag_data['entity.tripDetails.utcTripStartDate']) );
 }
 else if(utag_data.checkInDate != undefined && utag_data.checkInDate != ""){
  utag_data['bookingWindow'] = bw_daydiff( new Date(), new Date(utag_data.checkInDate) );
}
 **/