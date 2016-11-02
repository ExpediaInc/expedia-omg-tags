if (typeof utag_data['entity.flightSearch.searchParameters.isoFormatDepartureDate'] !== 'undefined' && typeof utag_data['entity.flightSearch.searchParameters.isoFormatReturnDate'] !== 'undefined')
{
    var splitDeparture = utag_data['entity.flightSearch.searchParameters.isoFormatDepartureDate'].slice(0, 10).split('-');
    utag_data['entity.flightSearch.searchParameters.isoFormatDepartureDate_MMDDYYYY'] = splitDeparture[1] +'/'+ splitDeparture[2] +'/'+ splitDeparture[0];
    var splitArrival = utag_data['entity.flightSearch.searchParameters.isoFormatReturnDate'].slice(0, 10).split('-');
    utag_data['entity.flightSearch.searchParameters.isoFormatReturnDate_MMDDYYYY'] = splitArrival[1] +'/'+ splitArrival[2] +'/'+ splitArrival[0];
}
window.criteo_q= window.criteo_q|| [];window.criteo_q.push(
    { event: "manualFlush"},
    { event: "setAccount", account: [19574,19575]},
    { event: "manualDising"},
    { event: "setHashedEmail", email: "" },
    { event: "setSiteType", type: b["device_type_abbreviated"]},
    { event: "setData", ui_comingFrom: "flightsearch", ui_destcity: b.flight_searchPage_destinationAirportCity, ui_deststate: b["stateProvinceCode"]},
    { event: "setData", splitGroup: b.cp.vt_PIX16},
    { event: "viewSearch", checkin_date: b["entity.flightSearch.searchParameters.isoFormatDepartureDate_MMDDYYYY"], checkout_date: b["entity.flightSearch.searchParameters.isoFormatReturnDate_MMDDYYYY"] },
    { event: "flushEvents"},
    { event: "setAccount", account: 19576},
    { event: "setHashedEmail", email: "" },
    { event: "setSiteType", type: b["device_type_abbreviated"] },
    { event: "setData", ui_ci: "0"},
    { event: "setData", splitGroup: b.cp.vt_PIX16},
    { event: "viewSearch", checkin_date: b["entity.flightSearch.searchParameters.isoFormatDepartureDate_MMDDYYYY"], checkout_date: b["entity.flightSearch.searchParameters.isoFormatReturnDate_MMDDYYYY"] },
    { event: "viewItem", item: b.entity.flightSearch.searchParameters.departureAirport + "/" + b.entity.flightSearch.searchParameters.arrivalAirport},
    { event: "flushEvents"}
);