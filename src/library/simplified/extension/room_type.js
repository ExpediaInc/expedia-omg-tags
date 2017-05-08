if ((utag.isHCO() || utag.isPCO()) && b['entity.checkout.hotel.rooms.0.roomRatePlanDescription'])
{
  b['roomType'] = b['entity.checkout.hotel.rooms.0.roomRatePlanDescription'];
}
else if (utag.isMCO() && b['entity.checkout.hotels.0.rooms.0.roomRatePlanDescription'])
{
  b['roomType'] = b['entity.checkout.hotels.0.rooms.0.roomRatePlanDescription'];
}
else if(utag.isPTP() && b["entity.checkout.hotel.rooms.0.roomRatePlanDescription"]){
  b['roomType'] = b["entity.checkout.hotel.rooms.0.roomRatePlanDescription"];
}
