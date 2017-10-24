//~~tv:20010.20140827
//~~tc: Tealium Custom Container

/*
  Tealium Custom Container Notes:
  - Add sending code between "Start Tag Sending Code" and "End Tag Sending Code".
  - Add JavaScript tag library code between "Start Tag Library Code" and "End Tag Library Code".
  - Add JavaScript code only, do not add HTML code in this file.
  - Remove any <script> and </script> tags from the code you place in this file.

  Loading external JavaScript files (Loader):
  - If you need to load an additional external JavaScript file, un-comment the singe-line JavaScript comments ("//") within the following Loader sections near the bottom of this file:
      - "Start Loader Function Call"
      - "End Loader Function Call"
      - "Start Loader Callback Function"
      - "End Loader Callback Function"
  - After un-commenting, insert the path to the external JavaScript file you want to load.
  - Finally, within the Loader callback function, insert the JavaScript code that should run after the external JavaScript file has loaded.
*/

/* Start Tag Library Code */
/* End Tag Library Code */

//tealium universal tag - utag.sender.custom_container ut4.0.##UTVERSION##, Copyright ##UTYEAR## Tealium.com Inc. All Rights Reserved.
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

                var c, d, e, f, i;
                //START Customised VSCA tag call
                var vscabaseurl = "";
                if (utag.cfg.path == "//tags.tiqcdn.com/utag/expedia/voyages/prod/") {
                    vscabaseurl = "https://secure.analytics.voyages-sncf.com/prod/2.1/agency-funnel/vsca.js";
                } else {
                    vscabaseurl = "https://secure.analytics.voyages-sncf.com/test/2.1/agency-funnel/vsca.js";
                }
                u.data = {
                    /* Initialize default tag parameter values here */
                    /* Examples: */
                    /* "account_id" : "1234567" */
                    "base_url": vscabaseurl
                    /* A value mapped to "account_id" or "base_url" in TiQ will replace these default values. */
                };

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


        //START Customised VSCA tag call
window.vsca_pageTag = window.vsca_pageTag || {};

function widgetCall() {
    vsca_pageTag.config = {};
    vsca_pageTag.config.siteId = "agency-funnel";
    vsca_pageTag.config.vsca_version = "2.1";
    vsca_pageTag.config.country = "FR";
    vsca_pageTag.config.language = "fr";
    vsca_pageTag.contextData = {};
    if (utag_data.utagPageName == "page.Flight-Search-Roundtrip.Out" || utag_data.utagPageName == "page.Flight-Search-Oneway" || utag_data.utagPageName == "page.Flight-Search.MDest") {
        vsca_pageTag.config.pageId = "FlightSearch";
        vsca_pageTag.contextData = {
            "pageContext": "searchResults"
        }
        vsca_pageTag.contextData.products =[];
        var product0 = {
            "productType": "Flight",
            "outwardDepartureDate": utag_data.checkInDate,
            "inwardDepartureDate": utag_data.checkOutDate,
            "travelType": utag_data.flightTripType,
            "travelClass":utag_data.cabinClass || utag_data.entity.flightSearch.searchParameters.travelClass,
            "destination": {
                "stationCode": utag_data.entity.flightSearch.searchParameters.arrivalAirport,
                "stationName":utag_data.entity.flightSearch.searchParameters.arrivalAirportCityState || "" ,
                "cityCode": utag_data.entity.flightSearch.searchParameters.arrivalAirport,
                "cityName": utag_data.entity.flightSearch.searchParameters.arrivalAirportCityState || "" 
            },
            "origin": {
                "stationCode": utag_data.entity.flightSearch.searchParameters.departureAirport,
                "stationName": utag_data.entity.flightSearch.searchParameters.departureAirportCityState,
                "cityCode": utag_data.entity.flightSearch.searchParameters.departureAirport,
                "cityName": utag_data.entity.flightSearch.searchParameters.departureAirportCityState
            },
        }
        product0.passengers = [];
        for (var i = 0; i < utag_data.entity.flightSearch.travelers.numberOfAdults; i++)
        {
        	product0.passengers.push({"type":"HUMAN", "age-bracket":"18-999"});
        }
    	for (var i = 0; i < utag_data.entity.flightSearch.travelers.numberOfChildren; i++)
        {
        	product0.passengers.push({"type":"HUMAN", "age-bracket":"0-17"});
        }
        vsca_pageTag.contextData.userWishes = {
            "productType": "Flight",
            "outwardDepartureDate": utag_data.checkInDate,
            "inwardDepartureDate": utag_data.checkOutDate,
            "travelType": utag_data.entity.flightSearch.searchParameters.flightType,
            "travelClass":utag_data.cabinClass || utag_data.entity.flightSearch.searchParameters.travelClass,
            "destination": {
                "stationCode": utag_data.entity.flightSearch.searchParameters.arrivalAirport,
                "stationName":utag_data.entity.flightSearch.searchParameters.arrivalAirportCityState || "" ,
                "cityCode": utag_data.entity.flightSearch.searchParameters.arrivalAirport,
                "cityName": utag_data.entity.flightSearch.searchParameters.arrivalAirportCityState || "" 
            },
            "origin": {
                "stationCode": utag_data.entity.flightSearch.searchParameters.departureAirport,
                "stationName": utag_data.entity.flightSearch.searchParameters.departureAirportCityState,
                "cityCode": utag_data.entity.flightSearch.searchParameters.departureAirport,
                "cityName": utag_data.entity.flightSearch.searchParameters.departureAirportCityState
            }

        }
        vsca_pageTag.contextData.products.push(product0);
    }
   if (utag_data.utagPageName == "page.Flight.Ratedetails") {
        vsca_pageTag.config.pageId = "FlightDetail";
        vsca_pageTag.contextData = {
            "pageContext": "basket"
        };
        vsca_pageTag.contextData.products =[];
        var product0 = {
            "productType": "Flight",
            "outwardDepartureDate": utag_data.checkInDate,
            "inwardDepartureDate": utag_data.checkOutDate,
            "travelType": utag_data.flightTripType,
            "price": utag_data.entity.flight.flight.totalPrice.amount,
            "travelClass":utag_data.cabinClass,
            "airlineCode": utag_data.entity.tripDetails.flightOffer.flight.legs[0].segments[0].carrierCode,
            "destination": {
                "stationCode": utag_data.entity.flight.flight.flight.legs[0].arrivalAirportCode,
                "stationName": utag_data.entity.tripDetails.flightOffer.destinationAirportCityState,
                "cityCode": utag_data.entity.flight.flight.flight.legs[0].arrivalAirportCode,
                "cityName": utag_data.entity.tripDetails.flightOffer.destinationAirportCityState
            },
            "origin": {
                "stationCode": utag_data.entity.flight.flight.flight.legs[0].departureAirportCode,
                "stationName": utag_data.entity.tripDetails.flightOffer.originAirportCityState,
                "cityCode": utag_data.entity.flight.flight.flight.legs[0].departureAirportCode,
                "cityName": utag_data.entity.tripDetails.flightOffer.originAirportCityState
            }
        }

        product0.passengers = [];
        for (var i = 0; i < utag_data.entity.flight.travelerInfo.numberOfAdults; i++)
        {
        	product0.passengers.push({"type":"HUMAN", "age-bracket":"18-999"});
        }
    	for (var i = 0; i < utag_data.entity.flight.travelerInfo.numberOfChildren; i++)
        {
        	product0.passengers.push({"type":"HUMAN", "age-bracket":"0-17"});
        }
        vsca_pageTag.contextData.products.push(product0);
    }
    if (utag_data.utagPageName == "page.Flight.Checkout.Info")
    {   
        vsca_pageTag.config.pageId = "FlightPayment";
        vsca_pageTag.contextData = {
            "pageContext": "payment"
        };
        vsca_pageTag.contextData.products = [];

        var product0 = {
            "productType": "Flight",
            "price":utag_data.entity.checkout.cartTotal.amount,
            "travelType": utag_data.entity.checkout.flightOffer.tripType,
            "airlineCode": utag_data.entity.checkout.flightOffer.flight.legs[0].segments[0].carrierCode,
            "destination": {
                "stationCode": utag_data.entity.checkout.flightOffer.flight.legs[0].arrivalAirportCode,
                "stationName": utag_data.entity.checkout.flightOffer.destinationAirportCityState  || "",
                "cityCode": utag_data.entity.checkout.flightOffer.flight.legs[0].arrivalAirportCode,
                "cityName": utag_data.entity.checkout.flightOffer.destinationAirportCityState  || ""  // doesn't exist in this utag
            },
            "origin": {
                "stationCode": utag_data.entity.checkout.flightOffer.flight.legs[0].departureAirportCode,
                "stationName":  utag_data.entity.checkout.flightOffer.originAirportCityState|| "", // doesn't exist in this utag
                "cityCode": utag_data.entity.checkout.flightOffer.flight.legs[0].departureAirportCode,
                "cityName": utag_data.entity.checkout.flightOffer.originAirportCityState || ""// doesn't exist in this utag
            }
        }
        product0.passengers = [];
        for (var i = 0; i < utag_data.entity.checkout.flightOffer.travelersInfo.numberOfAdults; i++)
        {
        	product0.passengers.push({"type":"HUMAN", "age-bracket":"18-999"});
        }
    	for (var i = 0; i < utag_data.entity.checkout.flightOffer.travelersInfo.numberOfChildren; i++)
        {
        	product0.passengers.push({"type":"HUMAN", "age-bracket":"0-17"});
        }
        vsca_pageTag.contextData.products.push(product0);
    }

    if (utag_data.utagPageName == "page.Flight.Checkout.Confirmation" )
    {
        vsca_pageTag.config.pageId = "FlightConfirmation";
        vsca_pageTag.contextData = {
            "purchase":{
                "orderPrice" : utag_data.entity.checkout.flightOffer.totalPrice.amount,
                "purchaseId" : utag_data.entity.checkout.customerFacingItineraryNumber
            },
            "pageContext": "confirmation"
        };
        vsca_pageTag.contextData.products = [];
        var product0 = {
            "productType": "Flight",
            "travelType": utag_data.flightTripType,
            "travelClass":utag_data.cabinClass,
            "airlineCode": utag_data.carrierCodes,
            "outwardDepartureDate": utag_data.checkInDate,
            "inwardDepartureDate": utag_data.checkOutDate,
            "price": utag_data.entity.checkout.flightOffer.totalPrice.amount,
            "destination": {
                "stationCode": utag_data.entity.checkout.flightOffer.flight.legs[0].arrivalAirportCode,
                "stationName":utag_data.entity.checkout.flightOffer.destinationAirportCityState ,
                "cityCode": utag_data.entity.checkout.flightOffer.flight.legs[0].arrivalAirportCode,
                "cityName":utag_data.entity.checkout.flightOffer.destinationAirportCityState  // doesn't exist in this utag
            },
            "origin": {
                "stationCode": utag_data.entity.checkout.flightOffer.flight.legs[0].departureAirportCode,
                "stationName":  utag_data.entity.checkout.flightOffer.originAirportCityState, // doesn't exist in this utag
                "cityCode": utag_data.entity.checkout.flightOffer.flight.legs[0].departureAirportCode,
                "cityName": utag_data.entity.checkout.flightOffer.originAirportCityState // doesn't exist in this utag
            }
        }
        product0.passengers = [];
        for (var i = 0; i < utag_data.entity.checkout.flightOffer.travelersInfo.numberOfAdults; i++)
        {
        	product0.passengers.push({"type":"HUMAN", "age-bracket":"18-999"});
        }
    	for (var i = 0; i < utag_data.entity.checkout.flightOffer.travelersInfo.numberOfChildren; i++)
        {
        	product0.passengers.push({"type":"HUMAN", "age-bracket":"0-17"});
        }
        vsca_pageTag.contextData.products.push(product0);
    }
}
widgetCall();
       //u.loader_cb = function () {
          //u.initialized = true;
          /* Start Loader Callback Tag Sending Code */

            // Insert your post-Loader tag sending code here.

          /* End Loader Callback Tag Sending Code */
        //};

        /* End Loader Callback Function */


        /* Start Loader Function Call */
        /* Un-comment the single-line JavaScript comments ("//") to use Loader. */
  u.loader_cb = function() {
    u.initialized = true;
  };
          if (!u.initialized) {
            //u.loader({"type" : "iframe", "src" : u.data.base_url + c.join(u.data.qsp_delim), "cb" : u.loader_cb, "loc" : "body", "id" : 'utag_##UTID##' });
            u.loader({
        "type" : "script", 
        "src" : u.data.base_url, 
        "cb" : u.loader_cb,
        "loc" : "script", 
        "id" : 'utag_##UTID##' 
      });
    }
          //if (!u.initialized) {
            //u.loader({"type" : "iframe", "src" : u.data.base_url + c.join(u.data.qsp_delim), "cb" : u.loader_cb, "loc" : "body", "id" : 'utag_##UTID##' });
            //u.loader({"type" : "script", "src" : u.data.base_url, "cb" : u.loader_cb, "loc" : "script", "id" : 'utag_##UTID##' });
          //} else {
            //u.loader_cb();
          //}

          //u.loader({"type" : "img", "src" : u.data.base_url + c.join(u.data.qsp_delim) });

        /* End Loader Function Call */


        //##UTENABLEDEBUG##utag.DB("send:##UTID##:COMPLETE");
      }
    };
    utag.o[loader].loader.LOAD(id);
  })("##UTID##", "##UTLOADERID##");
} catch (error) {
  utag.DB(error);
}
//end tealium universal tag


