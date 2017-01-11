//~~tv:20010.20140827
//~~tc: Tealium Custom Container - Krux

/* Start Tag Library Code */
function getDate() {
    var date = new Date();
    var ret = date.getFullYear();
    // format months with leading zeros
    var m = (date.getMonth() + 1).toString();
    m = (m.length == 1) ? '0' + m : m;
    var d = (date.getDate()).toString();
    d = (d.length == 1) ? '0' + d : d;
    // all together now
    ret = ret + '-' + m + '-' + d;
    return ret;
}
/* End Tag Library Code */

try {
    (function (id, loader) {
        var u = {};
        utag.o[loader].sender[id] = u;

        // Start Tealium loader 4.32
        // Please do not modify
        if (utag === undefined) { utag = {}; } if (utag.ut === undefined) { utag.ut = {}; } if (utag.ut.loader === undefined) { u.loader = function (o) { var a, b, c, l; a = document; if (o.type === "iframe") { b = a.createElement("iframe"); b.setAttribute("height", "1"); b.setAttribute("width", "1"); b.setAttribute("style", "display:none"); b.setAttribute("src", o.src); } else if (o.type === "img") { utag.DB("Attach img: " + o.src); b = new Image(); b.src = o.src; return; } else { b = a.createElement("script"); b.language = "javascript"; b.type = "text/javascript"; b.async = 1; b.charset = "utf-8"; b.src = o.src; } if (o.id) { b.id = o.id; } if (typeof o.cb === "function") { if (b.addEventListener) { b.addEventListener("load", function () { o.cb(); }, false); } else { b.onreadystatechange = function () { if (this.readyState === "complete" || this.readyState === "loaded") { this.onreadystatechange = null; o.cb(); } }; } } l = o.loc || "head"; c = a.getElementsByTagName(l)[0]; if (c) { utag.DB("Attach to " + l + ": " + o.src); if (l === "script") { c.parentNode.insertBefore(b, c); } else { c.appendChild(b); } } }; } else { u.loader = utag.ut.loader; }
        // End Tealium loader

        u.ev = {'view' : 1};

        u.initialized = false;

    ##UTGEN##

    u.send = function(a, b) {
        if (u.ev[a] || u.ev.all !== undefined) {
            //##UTENABLEDEBUG##utag.DB("send:##UTID##");

            var c, d, e, f, i, j;
            u.data = {
                "_kpid" : "",
                "base_url" : "//beacon.krxd.net/transaction.gif?",
                // "checkout.trl": "",
                // "checkout.customerFacingItineraryNumber": "",
                "transInfo": "",
                "currencyCode": "",
                "checkout.cartTotal.amount": "",
                "bookingDateInUTC": "",
                "quantity": "",
                "krux_quantity": "",
                "carVendor": "",
                "carType": "",
                "carPickUpLocationCode": "",
                "carDropOffLocationCode": "",
                "cruiseLine": "",
                "cruiseTitle": "",
                "departureMonth": "",
                "cabinClass": "",
                "adults": "",
                "childrenCount": "",
                "numberOfGuests": "",
                "destination": "",
                "regionId": "",
                "destinationAirportCode": "",
                "origin": "",
                "originAirportCode": "",
                "bookingWindow": "",
                "lengthOfStay": "",
                "checkInDate": "",
                "checkOutDate": "",
                "city": "",
                "state": "",
                "stateProvinceCode": "",
                "countryCode": "",
                "roomNights": "",
                "tripType": "",
                "carrierCodes": "",
                "lengthOfFlight": "",
                "starRating": "",
                "guestRating": "",
                "hotelBrand": "",
                "hotelName": "",
                "hotelID": "",
                "numberOfRooms": "",
                "roomType": "",
                "packageType": "",
                "SiteBrand": "",
                "pointofsales": "",
                "lob.domain": "",
                "siteName": "",
                "siteId": "",
                "rewardsStatus.membershipTier": "",
                "loggedUser": "",
                "device.device.type": "",
                "activityName": "",
                "isInternationalBooking":"",
                "context.marketingAttribution.restrictedLastTouch":"",
                "pageInfo.language":"",
                "mergedDestinationCode": "",
                "mergedOriginCode": "",
            };
            // error when scoping a lookup table to tag (uses c array) - updated array to j
            j = [];

            /* Start Tag-Scoped Extensions Code */
            /* Please Do Not Edit This Section */
        ##UTEXTEND##
            /* End Tag-Scoped Extensions Code */


            /* Start Mapping Code */
            for (d in utag.loader.GV(u.map)) {
                if (b[d] !== undefined && b[d] !== "") {
                    e = u.map[d].split(",");
                    for (f = 0; f < e.length; f++) {
                        u.data[e[f]] = b[d];
                    }
                }
            }
            /* End Mapping Code */


            /* Start Tag Sending Code */

         u.data._kpid = u.data._kpid || '3d8e4b51-b537-4841-9086-4f59862457c6';
         u.data['checkout.activity.activityDetail.title']  = u.data['checkout.activity.activityDetail.title'] || b['checkout.activity.activityDetail.title'] || ""; 
         u.data['checkout.trl'] = u.data['checkout.trl'] || b['checkout.trl'] || "";
         u.data['checkout.customerFacingItineraryNumber'] = u.data['checkout.customerFacingItineraryNumber'] || b['checkout.customerFacingItineraryNumber'] || "";
         u.data.currencyCode = u.data.currencyCode || b.currencyCode || "";
         u.data['checkout.cartTotal.amount'] = u.data['checkout.cartTotal.amount'] || b['checkout.cartTotal.amount'] || "";
         u.data.bookingDateInUTC = u.data.bookingDateInUTC || getDate();
         u.data.krux_quantity = u.data.krux_quantity || b.krux_quantity || "1";
         u.data.carVendor = u.data.carVendor || b.carVendor || "";
         u.data.carType = u.data.carType || b.carType || "";
         u.data.carPickUpLocationCode = u.data.carPickUpLocationCode || b.carPickUpLocationCode || "";
         u.data.carDropOffLocationCode = u.data.carDropOffLocationCode || b.carDropOffLocationCode || "";
         u.data.cruiseLine = u.data.cruiseLine || b.cruiseLine || "";
         u.data.cruiseTitle = u.data.cruiseTitle || b.cruiseTitle || "" ;
         u.data.departureMonth = u.data.departureMonth || b.departureMonth || "";
         u.data.cabinClass = u.data.cabinClass || b.cabinClass || "";
         u.data.adults = u.data.adults || b.adults || "";
         u.data.childrenCount = u.data.childrenCount || b.childrenCount || "";
         u.data.numberOfGuests = u.data.numberOfGuests || b.numberOfGuests || "";
         u.data.destination = u.data.destination || b.destination || "";
         u.data.regionId = u.data.regionId || b.regionId || "";
         u.data.destinationAirportCode = u.data.destinationAirportCode || b.destinationAirportCode || "";
         u.data.origin = u.data.origin || b.origin || "";
         u.data.originAirportCode = u.data.originAirportCode || b.originAirportCode || "";
         u.data.bookingWindow = u.data.bookingWindow || b.bookingWindow || "";
         u.data.lengthOfStay = u.data.lengthOfStay || b.lengthOfStay || "";
         u.data.checkInDate = u.data.checkInDate || b.checkInDate || "";
         u.data.checkOutDate = u.data.checkOutDate || b.checkOutDate || "";
         u.data.city = u.data.city || b.city || "";
         u.data.state = u.data.state || b.state || "";
         u.data.stateProvinceCode = u.data.stateProvinceCode || b.stateProvinceCode || "";
         u.data.countryCode = u.data.countryCode || b.countryCode || "";
         u.data.roomNights = u.data.roomNights || b.roomNights || "";
         u.data.tripType = u.data.tripType || b.tripType || "";
         u.data.carrierCodes = u.data.carrierCodes || b.carrierCodes || "";
         u.data.lengthOfFlight = u.data.lengthOfFlight || b.lengthOfFlight || "";
         u.data.starRating = u.data.starRating || b.starRating || "";
         u.data.guestRating = u.data.guestRating || b.guestRating || "";
         u.data.hotelBrand = u.data.hotelBrand || b.hotelBrand || "";
         u.data.hotelName = u.data.hotelName || b.hotelName || "";
         u.data.hotelID = u.data.hotelID || b.hotelId || "";
         u.data.numberOfRooms = u.data.numberOfRooms || b.numberOfRooms || "";
         u.data.roomType = u.data.roomType || b.roomType || "";
         u.data.packageType = u.data.packageType || b.packageType || "";
         u.data.SiteBrand = u.data.SiteBrand || b.SiteBrand || "";
         u.data.pointofsales = u.data.pointofsales || b.pointofsales || "";
         u.data['lob.domain'] = u.data['lob.domain'] || b['lob.domain'] || "";
         u.data.siteName = u.data.siteName || b.siteName || "";
         u.data.siteId = u.data.siteId || b.siteId || "";
         u.data['rewardsStatus.membershipTier'] = u.data['rewardsStatus.membershipTier'] || b['rewardsStatus.membershipTier'] || "";
         u.data.loggedUser = u.data.loggedUser || b.loggedUser || "";
         u.data['device.device.type'] = u.data['device.device.type'] || b['device.device.type'] || "";
         // u.data.language = u.data.language || "";
         u.data['activityName'] = u.data['activityName'] || b['activityName'] || "";
         u.data['isInternationalBooking'] = u.data['isInternationalBooking'] || b['isInternationalBooking'] || "";
         u.data['context.marketingAttribution.restrictedLastTouch'] = u.data['context.marketingAttribution.restrictedLastTouch'] || b['context.marketingAttribution.restrictedLastTouch'] || "";
         u.data['pageInfo.language'] = u.data['pageInfo.language'] || b['pageInfo.language'] || "";
         u.data.roomType = u.data.roomType || b.roomType|| "";

            for (key in u.data) {
                if(u.data.hasOwnProperty(key)) {
                    if (u.data[key] != "")
                        j.push(key+"="+u.data[key])
                }
            }

            /* End Tag Sending Code */

            u.loader({"type" : "img", "src" : u.data.base_url + j.join("&") });

            utag.DB("send:##UTID##:COMPLETE");
        }
    };
        utag.o[loader].loader.LOAD(id);
    })("##UTID##", "##UTLOADERID##");
} catch (error) {
    utag.DB(error);
}
//end tealium universal tag