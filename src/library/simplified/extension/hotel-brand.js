b['hotelBrand'] = '';
if (utag.isHIS() && b['entity.hotels.listOfHotels.0.hotelBrand'] != undefined)
{
    b['hotelBrand'] = b['entity.hotels.listOfHotels.0.hotelBrand'];
}
else if (utag.isHCO() && b['entity.checkout.hotel.hotelBrand'] != undefined)
{
    b['hotelBrand'] = b['entity.checkout.hotel.hotelBrand'];
}
else if (utag.isPCO() && b['entity.tripDetails.hotelOffer.hotelDescription.hotelBrand'] != undefined)
{
    b['hotelBrand'] = b['entity.tripDetails.hotelOffer.hotelDescription.hotelBrand'];
}
else if(utag.isPCO() && b["entity.checkout.hotel.hotelBrand"]){
    b['hotelBrand'] = b["entity.checkout.hotel.hotelBrand"];
}


/** old
 utag_data['hotelBrand'] = '';
 if (utag.isHIS() && utag_data['entity.hotels.listOfHotels.0.hotelBrand'] != undefined)
 {
     utag_data['hotelBrand'] = utag_data['entity.hotels.listOfHotels.0.hotelBrand'];
 }
 else if (utag.isHCO() && utag_data['entity.checkout.hotel.hotelBrand'] != undefined)
 {
     utag_data['hotelBrand'] = utag_data['entity.checkout.hotel.hotelBrand'];
 }
 else if (utag.isPCO() && utag_data['entity.tripDetails.hotelOffer.hotelDescription.hotelBrand'] != undefined)
 {
     utag_data['hotelBrand'] = utag_data['entity.tripDetails.hotelOffer.hotelDescription.hotelBrand'];
 }
 **/