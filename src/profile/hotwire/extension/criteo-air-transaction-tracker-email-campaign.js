if(typeof utag_data['entity.checkout.flightOffer.flight.legs.0'] != "undefined") {
    utag_data['entity.checkout.flightOffer.flight.departureDate'] = utag_data['entity.checkout.flightOffer.flight.legs.0.isoFormatDepartureTimestamp'];
    var count = 1;
    while(true) {
        var arrivalDate = 'entity.checkout.flightOffer.flight.legs.'+count+'.isoFormatArrivalTimestamp';
        if(typeof utag_data[arrivalDate] == "undefined") {
            break;
        }
        count++;
    }
    var count = count - 1;
    var arrivalDate = 'entity.checkout.flightOffer.flight.legs.'+count+'.isoFormatArrivalTimestamp';
    utag_data['entity.checkout.flightOffer.flight.arrivalDate'] = utag_data[arrivalDate]
}
if (typeof utag_data['entity.checkout.flightOffer.flight.legs.0.isoFormatDepartureTimestamp'] !== 'undefined' && typeof utag_data['entity.checkout.flightOffer.flight.arrivalDate'] !== 'undefined')
{
    var splitDeparture = utag_data['entity.checkout.flightOffer.flight.legs.0.isoFormatDepartureTimestamp'].slice(0, 10).split('-');
    utag_data['entity.checkout.flightOffer.flight.departureDate_MMDDYYYY'] = splitDeparture[1] +'/'+ splitDeparture[2] +'/'+ splitDeparture[0];
    var splitArrival = utag_data['entity.checkout.flightOffer.flight.arrivalDate'].slice(0, 10).split('-');
    utag_data['entity.checkout.flightOffer.flight.arrivalDate_MMDDYYYY'] = splitArrival[1] +'/'+ splitArrival[2] +'/'+ splitArrival[0];
}
fileref=document.createElement('script');
fileref.setAttribute("type","text/javascript");
fileref.setAttribute("src", "//static.criteo.net/js/ld/ld.js");
document.getElementsByTagName("head")[0].appendChild(fileref);
window.criteo_q = window.criteo_q || [];window.criteo_q.push
( { event: "manualFlushing"},
    { event: "setAccount", account: [19574,19575] },{ event: "manualDising"},
    { event: "setHashedEmail", email: "" },
    { event: "setSiteType", type: b["device_type_abbreviated"] },
    { event: "viewSearch", checkin_date: b["entity.checkout.flightOffer.flight.departureDate_MMDDYYYY"], checkout_date: b["entity.checkout.flightOffer.flight.arrivalDate_MMDDYYYY"]},
    { event: "setData", ui_comingFrom: "flightconfirm", ui_destcity: b["flight_confirmationPage_destinationAirportCity"], ui_deststate: b["flight_confirmationPage_destinationAirportState"]},
    { event: "setData", splitGroup: b["cp.vt_PIX16"]},
    { event: "flushEvents"},
    { event: "setAccount", account: 19576 },
    { event: "setHashedEmail", email: "" },
    { event: "setSiteType", type: b["device_type_abbreviated"] },
    { event: "setData", splitGroup: b["cp.vt_PIX16"]},
    { event: "trackTransaction" , id: b.entity.checkout.itineraryNumber,
        new_customer: "",
        item: [ { id: b.entity.checkout.flightOffer.originAirportCode+ "/" + b.entity.checkout.flightOffer.destinationAirportCode, price: b["pricePerPerson"], quantity: b["totalAirTicketQuantity"]}]},
    { event: "flushEvents"}
);